---
titulo: "PHP2Shell: bug de memória ignorado desde 2024 virou execução remota de código com ajuda de IA"
data: 2026-11-04T15:30:00-03:00
resumo: "Pesquisador da Calif, em auditoria do PHP patrocinada pela OpenAI, transformou um erro de memória antigo em exploit; IEEE Spectrum usa o caso para discutir a dívida técnica exposta pela IA."
tags:
  - segurança
  - open source
  - agentes
fontes:
  - nome: IEEE Spectrum
    url: https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability
  - nome: Hacker News
    url: https://news.ycombinator.com/item?id=50364336
rascunho: false
editado_manualmente: false
origem: rotina
---

O IEEE Spectrum detalhou o caso PHP2Shell, vulnerabilidade no PHP que permitia ler dados sensíveis e executar código no servidor. Segundo a reportagem, sites como os da NASA, da Wikipédia e da Casa Branca, além de instalações de WordPress e Drupal, estavam expostos. O patch saiu antes de qualquer exploração conhecida.

A origem é um erro de memória (alocação menor que o dado), do tipo que normalmente só derruba o programa. O bug havia sido reportado à PHP Foundation em 2024 e ficou sem correção. Neste ano, a empresa de segurança Calif ofereceu uma auditoria independente do PHP, patrocinada pela OpenAI. Em menos de duas semanas, um pesquisador da Calif, "com ajuda de ferramentas de IA", transformou o crash em execução arbitrária de código. A Wiz confirmou e ampliou os achados. Uma equipe de quatro engenheiros da PHP Foundation levou dois meses para fechar o patch. A reportagem não informa CVE, versões afetadas nem qual ferramenta de IA foi usada.

Matt Suiche, da Tolmo, resume a tese do texto: o software escrito por humanos nos últimos 40 anos está sendo exposto, e é "hora de pagar a dívida técnica". Suman Jana, professor da Columbia, aponta uma assimetria: achar o bug ficou mais fácil, mas corrigir exige fechar todos os caminhos sem quebrar nada. Ele sugere que laboratórios doem orçamento de tokens para caça a bugs. Matthew Green, da Johns Hopkins, é mais pessimista e acha que nada muda até um incidente grave, que ele arrisca para o início de 2027.

No Hacker News, o texto chegou a 704 pontos e 443 comentários.

## Por que importa

O caso mostra o padrão que deve se repetir: bugs antigos, classificados como "só um crash", viram exploits quando o custo de investigar cai. Quem mantém projetos open source vai receber mais relatórios sérios com a mesma equipe de sempre. Para quem roda PHP ou qualquer stack legada, a recomendação prática é a mais chata: aplicar atualizações de segurança rápido.
