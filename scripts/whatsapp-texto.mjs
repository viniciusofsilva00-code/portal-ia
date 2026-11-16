// Monta o texto curto do aviso diário enviado pelo WhatsApp (formatação do WhatsApp:
// *negrito*). Função pura, usada por email.mjs; testada em whatsapp-texto.test.mjs.
const limpar = (s = '') => String(s).replace(/[*_~`]/g, '').trim();

export function montarTextoWhatsapp({ hoje, site, runUrl, falhou, etapasComFalha, posts }) {
  const linhas = [];
  if (falhou) {
    linhas.push(`*Portal IA — ${hoje} — FALHA*`, '', 'A rotina falhou. Nada foi publicado.');
    for (const [nome, resultado] of etapasComFalha) linhas.push(`• ${nome}: ${resultado}`);
    linhas.push('', `Log: ${runUrl}`);
    return linhas.join('\n');
  }

  linhas.push(`*Portal IA — ${hoje}*`, '');
  if (posts.length === 0) {
    linhas.push('Hoje sem novidades: nada foi publicado.');
    return linhas.join('\n');
  }

  const n = posts.length;
  linhas.push(`${n} ${n === 1 ? 'notícia publicada' : 'notícias publicadas'}:`, '');
  for (const p of posts) linhas.push(`*${limpar(p.titulo)}*`, `${site}/posts/${p.slug}/`, '');
  linhas.push(`${site}/`);
  return linhas.join('\n');
}
