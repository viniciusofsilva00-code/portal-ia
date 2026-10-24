// Etapa 1 da rotina diária: lê os feeds de config/fontes.yml, mantém só itens das
// últimas N horas e grava tmp/candidatos.json. Fonte que falha vai para tmp/falhas.json
// e não interrompe a coleta. Não usa IA.
//
// Variáveis de ambiente:
//   JANELA_HORAS        janela de coleta (padrão 24)
//   SIMULAR_FEED_INVALIDO=1  acrescenta uma fonte inválida (teste do e-mail de falha)
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import Parser from 'rss-parser';
import YAML from 'yaml';

const JANELA_HORAS = Number(process.env.JANELA_HORAS || 24);
const TIMEOUT_MS = 25_000;
const MAX_PADRAO = 15;
const UA = 'Mozilla/5.0 (compatible; PortalIA/1.0; +https://github.com/viniciusofsilva00-code/portal-ia)';

const parser = new Parser({ timeout: TIMEOUT_MS });
const agora = Date.now();
const limite = agora - JANELA_HORAS * 3600 * 1000;

function limparHtml(s = '') {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#8217;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function cortar(s, n) {
  return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s;
}

function normalizarUrl(u = '') {
  try {
    const url = new URL(u.trim());
    for (const p of [...url.searchParams.keys()]) {
      if (/^(utm_|ref$|fbclid|gclid|mc_)/i.test(p)) url.searchParams.delete(p);
    }
    url.hash = '';
    return url.toString();
  } catch {
    return u.trim();
  }
}

async function baixar(url) {
  let ultimoErro;
  for (let tentativa = 1; tentativa <= 2; tentativa++) {
    try {
      const resp = await fetch(url, {
        headers: { 'User-Agent': UA, Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*' },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        redirect: 'follow',
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      return await resp.text();
    } catch (e) {
      ultimoErro = e;
      if (tentativa === 1) await new Promise((r) => setTimeout(r, 3000));
    }
  }
  throw ultimoErro;
}

async function lerJson(caminho, padrao) {
  try {
    return JSON.parse(await readFile(caminho, 'utf8'));
  } catch {
    return padrao;
  }
}

async function main() {
  const config = YAML.parse(await readFile('config/fontes.yml', 'utf8'));
  const fontes = (config.fontes || []).filter((f) => f && f.ativo !== false);
  if (process.env.SIMULAR_FEED_INVALIDO === '1') {
    fontes.push({ nome: 'Fonte inválida (simulação)', url: 'https://example.invalid/feed.xml', peso: 1 });
  }

  const publicados = await lerJson('data/publicados.json', { itens: [] });
  const jaPublicadas = new Set((publicados.itens || []).flatMap((i) => [i.url, ...(i.urls || [])]).map(normalizarUrl));

  const candidatos = [];
  const falhas = [];
  const resumoFontes = [];

  await Promise.all(
    fontes.map(async (fonte) => {
      try {
        const xml = await baixar(fonte.url);
        const feed = await parser.parseString(xml);
        const filtro = fonte.filtro ? new RegExp(fonte.filtro, 'i') : null;
        let semData = 0;
        const itens = [];
        for (const item of feed.items || []) {
          const quando = Date.parse(item.isoDate || item.pubDate || '');
          if (Number.isNaN(quando)) {
            semData++;
            continue;
          }
          if (quando < limite || quando > agora + 3600_000) continue;
          const titulo = limparHtml(item.title || '');
          const resumo = cortar(limparHtml(item.contentSnippet || item.summary || item.content || ''), 700);
          if (filtro && !filtro.test(`${titulo} ${resumo}`)) continue;
          const url = normalizarUrl(item.link || item.guid || '');
          if (!url.startsWith('http')) continue;
          itens.push({
            titulo,
            url,
            fonte: fonte.nome,
            peso: fonte.peso ?? 3,
            data: new Date(quando).toISOString(),
            resumo_feed: resumo,
            ja_publicado: jaPublicadas.has(url),
          });
        }
        itens.sort((a, b) => b.data.localeCompare(a.data));
        const usados = itens.slice(0, fonte.max ?? MAX_PADRAO);
        candidatos.push(...usados);
        resumoFontes.push({ fonte: fonte.nome, itens_feed: (feed.items || []).length, na_janela: usados.length });
        if ((feed.items || []).length > 0 && semData === (feed.items || []).length) {
          falhas.push({ fonte: fonte.nome, url: fonte.url, erro: 'feed sem datas nos itens' });
        }
      } catch (e) {
        falhas.push({ fonte: fonte.nome, url: fonte.url, erro: String(e?.cause?.code || e?.message || e) });
        resumoFontes.push({ fonte: fonte.nome, erro: true });
      }
    }),
  );

  // Mesma URL vinda de duas fontes: mantém a de maior peso.
  const porUrl = new Map();
  for (const c of candidatos.sort((a, b) => b.peso - a.peso)) {
    if (!porUrl.has(c.url)) porUrl.set(c.url, c);
  }
  const finais = [...porUrl.values()]
    .filter((c) => !c.ja_publicado)
    .sort((a, b) => b.peso - a.peso || b.data.localeCompare(a.data));

  await mkdir('tmp', { recursive: true });
  await writeFile(
    'tmp/candidatos.json',
    JSON.stringify({ gerado_em: new Date().toISOString(), janela_horas: JANELA_HORAS, total: finais.length, candidatos: finais }, null, 2),
  );
  await writeFile('tmp/falhas.json', JSON.stringify(falhas, null, 2));

  console.log(`Janela: últimas ${JANELA_HORAS}h`);
  for (const r of resumoFontes.sort((a, b) => a.fonte.localeCompare(b.fonte))) {
    console.log(r.erro ? `  ✗ ${r.fonte}` : `  ✓ ${r.fonte}: ${r.na_janela} na janela (${r.itens_feed} no feed)`);
  }
  console.log(`Candidatos: ${finais.length} (descartados por já publicados: ${porUrl.size - finais.length})`);
  console.log(`Falhas: ${falhas.length}`);
  for (const f of falhas) console.log(`  - ${f.fonte}: ${f.erro}`);

  if (process.env.GITHUB_OUTPUT) {
    await writeFile(process.env.GITHUB_OUTPUT, `candidatos=${finais.length}\nfalhas=${falhas.length}\n`, { flag: 'a' });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
