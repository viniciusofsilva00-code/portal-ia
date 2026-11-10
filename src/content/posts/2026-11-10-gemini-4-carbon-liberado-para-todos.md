---
titulo: "Gemini 4 Carbon sai da fase restrita: chega à API paga e ao plano Ultra, com /swarm de agentes e preço que dobra em dezembro"
data: 2026-11-10T15:40:00-03:00
resumo: "Google libera o Carbon a desenvolvedores pagantes por US$ 2/US$ 10 por milhão de tokens até 30/11; depois, US$ 4/US$ 20. Antigravity ganha /swarm em preview."
tags:
  - google
  - modelos
  - preços
  - agentes
fontes:
  - nome: Google (The Keyword)
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/
  - nome: Google DeepMind
    url: https://deepmind.google/blog/gemini-4-carbon-is-now-available/
  - nome: The Verge
    url: https://www.theverge.com/ai-artificial-intelligence/1030787/google-gemini-4-carbon-public-rollout
rascunho: false
editado_manualmente: false
origem: rotina
---

Duas semanas depois de anunciar o Gemini 4 Carbon só para defensores de cibersegurança do Fairwind Program, o Google abriu o modelo ao público. Ele está na API para todos os desenvolvedores e empresas pagantes (Google AI Studio, Android Studio e Gemini for business) e começa a aparecer para assinantes do Google AI Ultra no app Gemini, no AI Mode da Busca e no Antigravity.

O preço introdutório, até 30 de novembro, é o mesmo do Argon: US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída. Depois disso sobe para US$ 4 e US$ 20. O próprio Google diz que o Argon continua sendo a escolha certa para a maior parte do trabalho de engenharia de software, e que o Carbon é para tarefas mais difíceis, como depuração longa e pesquisa aberta, gastando mais tokens para explorar e verificar.

A novidade de produto é o /swarm, em preview no Antigravity: um prompt vira uma equipe de agentes, com o Carbon nos papéis de arquitetura, coordenação e auditoria, modelos mais leves trabalhando em paralelo em workspaces isolados e verificadores adversariais testando cada mudança.

Os números são todos da empresa: primeiro lugar no CursorBench 4.0, no WANDR da Perplexity e no AutomationBench da Zapier, com custo por tarefa mais de duas vezes menor que o do segundo colocado; 92% num benchmark interno de honestidade agêntica (contra 70% do Argon); taxa de invasão por tentativa de 0,8% em testes de ataque simulado, contra 3,1% do Argon.

## Por que importa

O preço introdutório igual ao do Argon é um convite para testar o Carbon em produção, mas quem montar pipeline em cima dele precisa contar com o dobro do custo a partir de dezembro, mais o consumo maior de tokens. O /swarm é a aposta do Google em orquestração multiagente pronta, algo que hoje muita gente monta na mão. Os benchmarks ainda precisam de verificação independente.
