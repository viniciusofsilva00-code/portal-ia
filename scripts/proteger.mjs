// Garante que a rotina nunca altere posts com `editado_manualmente: true`.
//   node scripts/proteger.mjs antes   -> grava tmp/protegidos.json e tmp/existentes.json
//   node scripts/proteger.mjs depois  -> restaura (git checkout) qualquer post protegido
//                                        que tenha sido alterado ou apagado
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { listarPosts, protegido } from './posts.mjs';

const modo = process.argv[2];

if (modo === 'antes') {
  const posts = await listarPosts();
  const protegidos = posts.filter(protegido).map((p) => ({ arquivo: p.arquivo, hash: p.hash }));
  // Índice dos posts existentes para a curadoria consultar sem precisar listar diretórios.
  const existentes = posts
    .filter((p) => p.dados)
    .map((p) => ({
      arquivo: p.arquivo,
      titulo: p.dados.titulo,
      data: p.dados.data,
      tags: p.dados.tags || [],
      fontes: (p.dados.fontes || []).map((f) => f.url),
      editado_manualmente: protegido(p),
    }))
    .sort((a, b) => String(b.data).localeCompare(String(a.data)));
  await mkdir('tmp', { recursive: true });
  await writeFile('tmp/protegidos.json', JSON.stringify(protegidos, null, 2));
  await writeFile('tmp/existentes.json', JSON.stringify(existentes.slice(0, 200), null, 2));
  console.log(`Posts existentes: ${posts.length}; protegidos (editado_manualmente: true): ${protegidos.length}`);
} else if (modo === 'depois') {
  const protegidos = JSON.parse(await readFile('tmp/protegidos.json', 'utf8'));
  const atuais = new Map((await listarPosts()).map((p) => [p.arquivo, p.hash]));
  const restaurados = [];
  for (const p of protegidos) {
    if (atuais.get(p.arquivo) !== p.hash) {
      execFileSync('git', ['checkout', 'HEAD', '--', p.arquivo]);
      restaurados.push(p.arquivo);
    }
  }
  await writeFile('tmp/restaurados.json', JSON.stringify(restaurados, null, 2));
  console.log(restaurados.length ? `Restaurados (alterados indevidamente): ${restaurados.join(', ')}` : 'Nenhum post protegido foi alterado.');
} else {
  console.error('uso: node scripts/proteger.mjs antes|depois');
  process.exit(2);
}
