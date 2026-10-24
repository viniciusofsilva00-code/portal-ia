// Monta assunto e corpo (HTML simples) do e-mail diário a partir de tmp/relatorio.json
// e do resultado de cada etapa do workflow. Grava tmp/email.html e exporta `assunto`.
//
// Variáveis de ambiente (preenchidas pelo workflow):
//   INICIO        horário de início do workflow (ISO 8601)
//   RUN_URL       link para o log da execução
//   SITE_URL      URL pública do site (sem barra no fim)
//   ETAPAS        JSON {"coleta":"success","curadoria":"failure",...} com o outcome de cada etapa
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const TZ = 'America/Sao_Paulo';
const fmtHora = (d) =>
  new Intl.DateTimeFormat('pt-BR', { timeZone: TZ, dateStyle: 'short', timeStyle: 'medium' }).format(d);
const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

async function lerJson(caminho, padrao) {
  try {
    return JSON.parse(await readFile(caminho, 'utf8'));
  } catch {
    return padrao;
  }
}

const NOMES = {
  coleta: 'Coleta dos feeds',
  protecao: 'Proteção de posts editados',
  curadoria: 'Curadoria (Claude)',
  validacao: 'Validação dos posts',
  build: 'Build do site',
  commit: 'Commit e push',
  deploy: 'Deploy no GitHub Pages',
};

const etapas = JSON.parse(process.env.ETAPAS || '{}');
const relatorio = await lerJson('tmp/relatorio.json', null);
const falhasColeta = await lerJson('tmp/falhas.json', []);
const inicio = process.env.INICIO ? new Date(process.env.INICIO) : null;
const envio = new Date();
const site = (process.env.SITE_URL || '').replace(/\/$/, '');
const hoje = envio.toLocaleDateString('sv-SE', { timeZone: TZ });

const etapasComFalha = Object.entries(etapas).filter(([, r]) => r === 'failure' || r === 'cancelled');
const falhou = etapasComFalha.length > 0;
const posts = falhou && etapas.deploy !== 'success' ? [] : relatorio?.posts || [];
const n = posts.length;

let assunto;
if (falhou) assunto = `[Portal IA] ${hoje} — FALHA`;
else if (n === 0) assunto = `[Portal IA] ${hoje} — sem novidades`;
else assunto = `[Portal IA] ${hoje} — ${n} ${n === 1 ? 'notícia publicada' : 'notícias publicadas'}`;

const falhasFontes = relatorio?.falhas?.length
  ? relatorio.falhas
  : falhasColeta.map((f) => `${f.fonte}: ${f.erro}`);

const partes = [];
partes.push(`<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#1d1d1b;max-width:640px">`);

if (falhou) {
  partes.push(`<p style="color:#b00020"><strong>A rotina falhou. Nada foi publicado nesta execução.</strong></p>`);
  partes.push('<p>Etapas com problema:</p><ul>');
  for (const [k, r] of etapasComFalha) partes.push(`<li>${esc(NOMES[k] || k)}: ${esc(r)}</li>`);
  partes.push('</ul>');
} else if (n === 0) {
  partes.push(`<p>Nenhuma notícia relevante e inédita nas últimas 24 horas; nada foi publicado.</p>`);
  if (relatorio?.observacoes) partes.push(`<p>${esc(relatorio.observacoes)}</p>`);
} else {
  partes.push(`<p>Publicado hoje em <a href="${esc(site)}/">${esc(site.replace(/^https?:\/\//, ''))}</a>:</p><ul>`);
  for (const p of posts) {
    const link = `${site}/posts/${p.slug}/`;
    partes.push(
      `<li style="margin-bottom:10px"><a href="${esc(link)}"><strong>${esc(p.titulo)}</strong></a><br>${esc(p.resumo_linha)}</li>`,
    );
  }
  partes.push('</ul>');
}

partes.push('<p><strong>Fontes que falharam:</strong> ');
partes.push(falhasFontes.length ? `</p><ul>${falhasFontes.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` : 'nenhuma.</p>');

if (relatorio?.avisos?.length) {
  partes.push(`<p><strong>Avisos:</strong></p><ul>${relatorio.avisos.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>`);
}

partes.push('<p style="color:#66665f;font-size:13px">');
partes.push(`Início do workflow: ${inicio ? esc(fmtHora(inicio)) : 'desconhecido'}<br>`);
partes.push(`Envio deste e-mail: ${esc(fmtHora(envio))} (horário de Brasília)<br>`);
partes.push(`<a href="${esc(process.env.RUN_URL || '#')}">Log da execução no GitHub Actions</a>`);
partes.push('</p></div>');

await mkdir('tmp', { recursive: true });
await writeFile('tmp/email.html', partes.join('\n'));
console.log(`Assunto: ${assunto}`);
console.log(`Horário de início: ${inicio ? fmtHora(inicio) : '?'} | horário de envio: ${fmtHora(envio)}`);
if (process.env.GITHUB_OUTPUT) {
  await writeFile(process.env.GITHUB_OUTPUT, `assunto=${assunto}\n`, { flag: 'a' });
}
