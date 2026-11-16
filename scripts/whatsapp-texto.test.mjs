import { test } from 'node:test';
import assert from 'node:assert/strict';
import { montarTextoWhatsapp } from './whatsapp-texto.mjs';

const site = 'https://exemplo.github.io/portal-ia';
const runUrl = 'https://github.com/x/portal-ia/actions/runs/1';

test('lista títulos e links quando há notícias publicadas', () => {
  const texto = montarTextoWhatsapp({
    hoje: '2026-11-16',
    site,
    runUrl,
    falhou: false,
    etapasComFalha: [],
    posts: [
      { slug: 'a', titulo: 'Notícia A' },
      { slug: 'b', titulo: 'Notícia B' },
    ],
  });
  assert.match(texto, /^\*Portal IA — 2026-11-16\*/);
  assert.match(texto, /2 notícias publicadas/);
  assert.match(texto, /\*Notícia A\*\nhttps:\/\/exemplo\.github\.io\/portal-ia\/posts\/a\//);
  assert.match(texto, /\*Notícia B\*\nhttps:\/\/exemplo\.github\.io\/portal-ia\/posts\/b\//);
});

test('usa singular com uma notícia', () => {
  const texto = montarTextoWhatsapp({
    hoje: '2026-11-16', site, runUrl, falhou: false, etapasComFalha: [],
    posts: [{ slug: 'a', titulo: 'Só uma' }],
  });
  assert.match(texto, /1 notícia publicada\b/);
});

test('avisa quando não há novidades', () => {
  const texto = montarTextoWhatsapp({
    hoje: '2026-11-16', site, runUrl, falhou: false, etapasComFalha: [], posts: [],
  });
  assert.match(texto, /sem novidades/i);
  assert.doesNotMatch(texto, /posts\//);
});

test('em falha, lista etapas e link do log', () => {
  const texto = montarTextoWhatsapp({
    hoje: '2026-11-16', site, runUrl, falhou: true,
    etapasComFalha: [['Build do site', 'failure']], posts: [],
  });
  assert.match(texto, /FALHA/);
  assert.match(texto, /Build do site: failure/);
  assert.ok(texto.includes(runUrl));
});

test('remove asteriscos do título para não quebrar o negrito', () => {
  const texto = montarTextoWhatsapp({
    hoje: '2026-11-16', site, runUrl, falhou: false, etapasComFalha: [],
    posts: [{ slug: 'a', titulo: 'Modelo *novo* lançado' }],
  });
  assert.match(texto, /\*Modelo novo lançado\*/);
});
