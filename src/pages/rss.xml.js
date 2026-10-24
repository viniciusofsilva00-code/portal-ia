import rss from '@astrojs/rss';
import { postsPublicados, SITE_TITULO, SITE_DESCRICAO } from '../lib/util';

export async function GET(context) {
  const posts = await postsPublicados();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: SITE_TITULO,
    description: SITE_DESCRICAO,
    site: context.site + base.replace(/^\//, ''),
    customData: '<language>pt-br</language>',
    items: posts.slice(0, 50).map((p) => ({
      title: p.data.titulo,
      pubDate: p.data.data,
      description: p.data.resumo,
      categories: p.data.tags,
      link: `${base}/posts/${p.id}/`,
    })),
  });
}
