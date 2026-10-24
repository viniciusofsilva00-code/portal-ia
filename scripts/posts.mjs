// Utilitários compartilhados pelos scripts da rotina: leitura de frontmatter dos posts.
import { readdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import YAML from 'yaml';

export const DIR_POSTS = 'src/content/posts';

export function separarFrontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { dados: null, corpo: texto, bruto: '' };
  let dados = null;
  try {
    dados = YAML.parse(m[1]) || {};
  } catch {
    dados = null;
  }
  return { dados, corpo: m[2], bruto: m[1] };
}

export async function listarPosts() {
  let nomes = [];
  try {
    nomes = (await readdir(DIR_POSTS)).filter((n) => n.endsWith('.md'));
  } catch {
    return [];
  }
  const posts = [];
  for (const nome of nomes.sort()) {
    const caminho = `${DIR_POSTS}/${nome}`;
    const texto = await readFile(caminho, 'utf8');
    const { dados, corpo } = separarFrontmatter(texto);
    posts.push({
      arquivo: caminho,
      slug: nome.replace(/\.md$/, ''),
      dados,
      corpo,
      hash: createHash('sha256').update(texto).digest('hex'),
      texto,
    });
  }
  return posts;
}

export function protegido(post) {
  return post.dados?.editado_manualmente === true;
}
