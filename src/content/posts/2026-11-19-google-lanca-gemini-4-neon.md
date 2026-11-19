---
titulo: "Google lança Gemini 4 Neon, intermediário entre Carbon e Hydrogen, a US$ 3/US$ 15 por milhão de tokens"
data: 2026-11-19T16:10:00-03:00
resumo: "Neon assume o lugar do Argon no app do Gemini para assinantes Pro e Ultra e chega à API com contexto de 1 milhão de tokens; Google diz que custa 32% menos por tarefa que o Carbon."
tags:
  - google
  - modelos
  - preços
  - agentes
fontes:
  - nome: Google DeepMind
    url: https://deepmind.google/blog/introducing-gemini-4-neon/
  - nome: Tecnoblog (IA)
    url: https://tecnoblog.net/noticias/google-lanca-gemini-4-neon-nova-ia-para-tarefas-complexas/
  - nome: Canaltech (IA)
    url: https://canaltech.com.br/inteligencia-artificial/google-lanca-gemini-4-neon-para-substituir-argon-veja-o-que-muda/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google anunciou na quarta-feira (18) o Gemini 4 Neon, que ocupa o meio da família Gemini 4: fica abaixo do Carbon, voltado a tarefas longas e difíceis, e acima do Hydrogen, o modelo rápido do dia a dia. Segundo o Tecnoblog e o Canaltech, ele substitui o Gemini 4 Argon, lançado pouco mais de um mês atrás, no app do Gemini.

O modelo está na Gemini API (AI Studio), no Gemini for business, no Android Studio e no Antigravity, e aparece no seletor do app para assinantes AI Pro e Ultra. O preço é US$ 3 por milhão de tokens de entrada, US$ 0,15 para entrada em cache e US$ 15 para saída, com janela de 1 milhão de tokens. São quatro níveis de thinking, com `high` como padrão e `xhigh` no topo.

Os números de benchmark vêm do próprio Google: 61 no Artificial Analysis Intelligence Index (em `xhigh`), 70,9% no Vals Index, 65,2% no Terminal-Bench 4.1 e 39,0% no SWE-sweep rodando dentro do Antigravity, contra 12,8% no harness mini-SWE. A empresa afirma que, no nível `high`, o custo por tarefa é 32% menor que o do Carbon e de 50% a 80% menor que o de concorrentes na fronteira de Pareto.

O Google destaca o uso em agentes de longa duração, inclusive como orquestrador de subagentes Hydrogen em paralelo no Antigravity, e em cibersegurança: membros elegíveis do programa Fairwind devem receber acesso nos próximos dias. Na parte de segurança, a empresa diz que as proteções contra prompt injection e uso indevido são equivalentes às do Carbon.

## Por que importa

O preço coloca o Neon na faixa dos modelos intermediários da concorrência, e a diferença de 12,8% para 39,0% no SWE-sweep mostra mais uma vez que o harness pesa tanto quanto o modelo. Quem usa o Argon na API deve acompanhar o calendário de aposentadoria, que nenhuma das fontes informou. Como todos os benchmarks foram divulgados pelo Google, vale esperar avaliações independentes antes de trocar de modelo em produção.
