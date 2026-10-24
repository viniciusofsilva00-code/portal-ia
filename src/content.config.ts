import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
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
