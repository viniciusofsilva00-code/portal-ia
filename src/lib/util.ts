import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const SITE_TITULO = 'Portal IA';
export const SITE_DESCRICAO =
  'Curadoria diária das principais notícias de inteligência artificial, com análise em português.';

export function url(caminho = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${caminho.replace(/^\//, '')}`;
}

export function slugTag(tag: string): string {
  return tag
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function postsPublicados(): Promise<Post[]> {
  const todos = await getCollection('posts', ({ data }) => !data.rascunho);
  return todos.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

const fmt = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'America/Sao_Paulo',
});

export function dataBR(d: Date): string {
  return fmt.format(d);
}

export function todasTags(posts: Post[]): Map<string, { nome: string; posts: Post[] }> {
  const mapa = new Map<string, { nome: string; posts: Post[] }>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      const s = slugTag(t);
      if (!s) continue;
      if (!mapa.has(s)) mapa.set(s, { nome: t, posts: [] });
      mapa.get(s)!.posts.push(p);
    }
  }
  return mapa;
}
