import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    titulo: z.string(),
    // Posts criados no painel têm só a data (o Pages CMS grava horas como UTC);
    // nesse caso o post vale como meio-dia no horário de Brasília (15:00 UTC).
    data: z.coerce
      .date()
      .transform((d) =>
        d.getUTCHours() === 0 && d.getUTCMinutes() === 0 && d.getUTCSeconds() === 0
          ? new Date(d.getTime() + 15 * 3600 * 1000)
          : d,
      ),
    resumo: z.string().default(''),
    tags: z.array(z.string()).default([]),
    fontes: z
      .array(z.object({ nome: z.string(), url: z.string().url() }))
      .default([]),
    rascunho: z.boolean().default(false),
    editado_manualmente: z.boolean().default(false),
    origem: z.enum(['rotina', 'painel']).default('painel'),
  }),
});

export const collections = { posts };
