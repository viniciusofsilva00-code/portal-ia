// Roda depois da curadoria e antes do build. Não confia cegamente no que a IA gravou:
//  - restaura posts antigos que tenham sido apagados;
//  - valida o frontmatter dos posts novos e descarta os inválidos;
//  - confere os links das fontes (404/410 ou domínio inexistente saem do post);
//  - garante que data/publicados.json tenha as URLs dos posts novos;
//  - reconcilia tmp/relatorio.json com os arquivos realmente gravados.
import { execFileSync } from 'node:child_process';
import { readFile, unlink, writeFile } from 'node:fs/promises';
import YAML from 'yaml';
import { DIR_POSTS, listarPosts, protegido } from './posts.mjs';

const UA = 'Mozilla/5.0 (compatible; PortalIA/1.0; link check)';

async function lerJson(caminho, padrao) {
  try {
    return JSON.parse(await readFile(caminho, 'utf8'));
  } catch {
    return padrao;
  }
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8' });
}

async function linkResponde(url) {
  try {
    const r = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': UA },
      redirect: 'follow',
      signal: AbortSignal.timeout(20_000),
    });
    // 403/429 etc. costumam ser bloqueio de robôs, não link quebrado.
    return r.status !== 404 && r.status !== 410;
  } catch (e) {
    const code = e?.cause?.code || '';
    return !/ENOTFOUND|EAI_AGAIN|ERR_INVALID_URL/.test(code);
  }
}

const avisos = [];
const status = git('status', '--porcelain', '--untracked-files=all', '--', DIR_POSTS)
  .split('\n')
  .filter(Boolean)
  .map((l) => ({ codigo: l.slice(0, 2), arquivo: l.slice(3).trim() }));

// Posts antigos apagados pela curadoria voltam.
for (const s of status.filter((s) => s.codigo.includes('D'))) {
  git('checkout', 'HEAD', '--', s.arquivo);
  avisos.push(`Post apagado indevidamente foi restaurado: ${s.arquivo}`);
}

const novosArquivos = new Set(status.filter((s) => s.codigo === '??').map((s) => s.arquivo));
const posts = (await listarPosts()).filter((p) => novosArquivos.has(p.arquivo));
const validos = [];

for (const p of posts) {
  const d = p.dados;
  const erros = [];
  if (!d) erros.push('frontmatter ilegível');
  else {
    if (!d.titulo || typeof d.titulo !== 'string') erros.push('sem titulo');
    if (!d.data || Number.isNaN(Date.parse(d.data))) erros.push('data inválida');
    if (!Array.isArray(d.fontes) || d.fontes.length === 0) erros.push('sem fontes');
    if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md$/.test(p.arquivo.split('/').pop())) erros.push('nome de arquivo fora do padrão');
    if (protegido(p)) erros.push('post novo não pode nascer com editado_manualmente: true');
  }
  if (!erros.length) {
    const fontesOk = [];
    for (const f of d.fontes) {
      if (f?.url && (await linkResponde(f.url))) fontesOk.push(f);
      else avisos.push(`Link removido de ${p.slug} (não respondeu): ${f?.url}`);
    }
    if (!fontesOk.length) erros.push('nenhum link de fonte válido');
    else if (fontesOk.length !== d.fontes.length) {
      d.fontes = fontesOk;
      await writeFile(p.arquivo, `---\n${YAML.stringify(d)}---\n${p.corpo}`);
    }
  }
  if (erros.length) {
    await unlink(p.arquivo);
    avisos.push(`Post descartado (${erros.join('; ')}): ${p.arquivo}`);
    continue;
  }
  const palavras = p.corpo.split(/\s+/).filter(Boolean).length;
  if (palavras < 150 || palavras > 450) avisos.push(`Tamanho fora do esperado em ${p.slug}: ${palavras} palavras`);
  validos.push(p);
}

// data/publicados.json precisa conter as URLs dos posts novos (evita repetir assunto amanhã).
const publicados = await lerJson('data/publicados.json', { itens: [] });
publicados.itens ||= [];
const conhecidas = new Set(publicados.itens.flatMap((i) => [i.url, ...(i.urls || [])]));
for (const p of validos) {
  const urls = p.dados.fontes.map((f) => f.url);
  if (urls.some((u) => !conhecidas.has(u))) {
    publicados.itens = publicados.itens.filter((i) => i.post !== p.slug);
    publicados.itens.push({
      url: urls[0],
      urls,
      tema: p.dados.titulo,
      data: new Date(p.dados.data).toISOString().slice(0, 10),
      post: p.slug,
    });
    urls.forEach((u) => conhecidas.add(u));
  }
}
// Mantém o arquivo enxuto: 90 dias bastam para evitar repetição.
const corte = new Date(Date.now() - 90 * 864e5).toISOString().slice(0, 10);
publicados.itens = publicados.itens.filter((i) => !i.data || i.data >= corte);
await writeFile('data/publicados.json', JSON.stringify(publicados, null, 2) + '\n');

// Relatório final: parte do que a curadoria escreveu, mas os posts são os que de fato existem.
const relatorioIA = await lerJson('tmp/relatorio.json', null);
const falhasColeta = await lerJson('tmp/falhas.json', []);
const restaurados = await lerJson('tmp/restaurados.json', []);
const porArquivo = new Map((relatorioIA?.posts || []).map((x) => [String(x.arquivo || '').split('/').pop(), x]));
const relatorio = {
  data: new Date().toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' }),
  posts: validos.map((p) => {
    const ia = porArquivo.get(p.arquivo.split('/').pop()) || {};
    return {
      arquivo: p.arquivo,
      slug: p.slug,
      titulo: p.dados.titulo,
      resumo_linha: ia.resumo_linha || p.dados.resumo || '',
      fontes: p.dados.fontes,
    };
  }),
  fontes_usadas: relatorioIA?.fontes_usadas || [...new Set(validos.flatMap((p) => p.dados.fontes.map((f) => f.nome)))],
  falhas: [
    ...falhasColeta.map((f) => `${f.fonte}: ${f.erro}`),
    ...(relatorioIA?.falhas || []).map((f) => (typeof f === 'string' ? f : JSON.stringify(f))),
  ],
  avisos: [...avisos, ...restaurados.map((r) => `Post protegido alterado pela curadoria e restaurado: ${r}`)],
  observacoes: relatorioIA?.observacoes || (relatorioIA ? '' : 'A curadoria não gravou tmp/relatorio.json.'),
  curadoria_gravou_relatorio: Boolean(relatorioIA),
};
await writeFile('tmp/relatorio.json', JSON.stringify(relatorio, null, 2));

console.log(`Posts novos válidos: ${validos.length}`);
for (const a of relatorio.avisos) console.log(`  aviso: ${a}`);
if (process.env.GITHUB_OUTPUT) {
  await writeFile(process.env.GITHUB_OUTPUT, `posts=${validos.length}\n`, { flag: 'a' });
}
