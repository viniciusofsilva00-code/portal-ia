// Aplica os níveis de permissão de config/permissoes.yml a um push feito fora da rotina diária.
// Uso: node scripts/permissoes.mjs <sha-antes> <sha-depois> <usuario-github-do-push>
//
// Quem fez cada commit é identificado assim:
//   - push feito por um admin do GitHub (ex.: o dono do repositório) → admin;
//   - commits do painel por colaboradores trazem "[por: email]" na mensagem
//     (template definido em .pages.yml, que colaboradores não conseguem alterar).
// Num push com vários commits vale o nível mais restrito entre eles.
// O que estiver fora da permissão é desfeito no próprio workflow (sem commit novo aqui;
// quem comita é o deploy.yml).
import { execFileSync } from 'node:child_process';
import { readFile, writeFile, unlink, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import YAML from 'yaml';

const [antes, depois, ator] = process.argv.slice(2);
const DIR_POSTS = 'src/content/posts/';
const DIR_MIDIA = 'public/imagens/';
const ORDEM = { revisor: 0, autor: 1, editor: 2, admin: 3 };

const git = (...a) => execFileSync('git', a, { encoding: 'utf8' });

function conteudoEm(sha, arquivo) {
  try {
    return execFileSync('git', ['show', `${sha}:${arquivo}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return null;
  }
}

function frontmatter(texto) {
  const m = texto?.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  try {
    return YAML.parse(m[1]) || {};
  } catch {
    return null;
  }
}

function forcarRascunho(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return texto;
  const fm = m[1];
  const novo = /^rascunho:/m.test(fm) ? fm.replace(/^rascunho:.*$/m, 'rascunho: true') : `${fm}\nrascunho: true`;
  return texto.replace(fm, novo);
}

// A configuração vigente é a de ANTES do push: ninguém se promove no mesmo commit.
const config = YAML.parse(conteudoEm(antes, 'config/permissoes.yml') || '') || {};
// O dono do repositório é sempre admin, mesmo sem o arquivo de permissões.
const admins = new Set(
  [...(config.admins || []), process.env.GITHUB_REPOSITORY_OWNER].filter(Boolean).map((s) => String(s).toLowerCase()),
);
const niveis = new Map(
  (config.colaboradores || [])
    .filter((c) => c?.email)
    .map((c) => [String(c.email).toLowerCase(), ORDEM[c.nivel] !== undefined ? c.nivel : 'revisor']),
);

function nivelDoCommit(sha) {
  if (admins.has(String(ator).toLowerCase())) return { quem: ator, nivel: 'admin' };
  const msg = git('log', '-1', '--format=%B', sha);
  const email = (msg.match(/\[por: ([^\]\s]+)\]/)?.[1] || git('log', '-1', '--format=%ce', sha).trim()).toLowerCase();
  return { quem: email, nivel: niveis.get(email) || 'revisor' };
}

const commits = git('rev-list', `${antes}..${depois}`).split('\n').filter(Boolean);
const identidades = commits.map(nivelDoCommit);
const efetivo = identidades.reduce((a, b) => (ORDEM[b.nivel] < ORDEM[a.nivel] ? b : a), { quem: ator, nivel: 'admin' });

const mudancas = git('diff', '--name-status', '--no-renames', antes, depois)
  .split('\n')
  .filter(Boolean)
  .map((l) => {
    const [st, arquivo] = l.split('\t');
    return { st, arquivo };
  });

const desfeitos = [];
async function restaurar(arquivo, motivo) {
  const original = conteudoEm(antes, arquivo);
  if (original === null) await unlink(arquivo).catch(() => {});
  else {
    await mkdir(dirname(arquivo), { recursive: true });
    execFileSync('git', ['checkout', antes, '--', arquivo]);
  }
  desfeitos.push(`${arquivo}: ${motivo}`);
}

if (efetivo.nivel !== 'admin') {
  for (const { st, arquivo } of mudancas) {
    const ehPost = arquivo.startsWith(DIR_POSTS) && arquivo.endsWith('.md');
    const ehMidia = arquivo.startsWith(DIR_MIDIA);
    const { nivel } = efetivo;

    if (!ehPost && !ehMidia) {
      await restaurar(arquivo, `${nivel} não pode alterar arquivos fora de posts e imagens`);
    } else if (nivel === 'revisor') {
      await restaurar(arquivo, 'revisor só visualiza');
    } else if (nivel === 'autor') {
      if (st === 'D') await restaurar(arquivo, 'autor não pode apagar');
      else if (ehPost) {
        const anterior = frontmatter(conteudoEm(antes, arquivo));
        if (st === 'M' && anterior && anterior.rascunho !== true) {
          await restaurar(arquivo, 'autor não pode alterar post publicado');
        } else {
          const atual = await readFile(arquivo, 'utf8');
          if (frontmatter(atual)?.rascunho !== true) {
            await writeFile(arquivo, forcarRascunho(atual));
            desfeitos.push(`${arquivo}: autor não publica; salvo como rascunho`);
          }
        }
      }
    }
    // editor: tudo permitido dentro de posts e imagens
  }
}

console.log(`Push de: ${identidades.map((i) => `${i.quem} (${i.nivel})`).join(', ') || ator}`);
console.log(`Nível aplicado: ${efetivo.nivel}`);
console.log(desfeitos.length ? `Alterações ajustadas:\n  - ${desfeitos.join('\n  - ')}` : 'Nenhuma alteração fora da permissão.');
if (process.env.GITHUB_STEP_SUMMARY) {
  await writeFile(
    process.env.GITHUB_STEP_SUMMARY,
    `### Permissões\n\nNível aplicado: **${efetivo.nivel}** (${efetivo.quem})\n\n${desfeitos.map((d) => `- ${d}`).join('\n') || 'Nenhuma alteração fora da permissão.'}\n`,
    { flag: 'a' },
  );
}
if (process.env.GITHUB_OUTPUT) {
  await writeFile(process.env.GITHUB_OUTPUT, `ajustes=${desfeitos.length}\nquem=${efetivo.quem}\nnivel=${efetivo.nivel}\n`, { flag: 'a' });
}
