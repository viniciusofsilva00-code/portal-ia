// Usado pelo workflow deploy.yml: todo post criado ou alterado fora da rotina diária
// (painel, edição direta no GitHub, push local) recebe `editado_manualmente: true`,
// para que a rotina nunca o sobrescreva. Recebe os caminhos dos arquivos como argumentos.
import { readFile, writeFile } from 'node:fs/promises';

const marcados = [];
for (const arquivo of process.argv.slice(2)) {
  if (!/^src\/content\/posts\/.+\.md$/.test(arquivo)) continue;
  let texto;
  try {
    texto = await readFile(arquivo, 'utf8');
  } catch {
    continue; // arquivo apagado no push
  }
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  const fm = m[1];
  if (/^editado_manualmente:\s*true\s*$/m.test(fm)) continue;
  const novoFm = /^editado_manualmente:/m.test(fm)
    ? fm.replace(/^editado_manualmente:.*$/m, 'editado_manualmente: true')
    : `${fm}\neditado_manualmente: true`;
  await writeFile(arquivo, texto.replace(fm, novoFm));
  marcados.push(arquivo);
}
console.log(marcados.length ? `Marcados como editados manualmente: ${marcados.join(', ')}` : 'Nenhum post para marcar.');
