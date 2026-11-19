---
titulo: "Gemini API ganha Tool Retrieval em preview: modelo busca esquemas de ferramentas sob demanda em vez de carregar todos"
data: 2026-11-19T16:10:00-03:00
resumo: "Com defer_loading, o modelo vê só nome e descrição das ferramentas e carrega o esquema quando precisa; funciona com servidores MCP e não tem cobrança extra."
tags:
  - google
  - agentes
  - infraestrutura
fontes:
  - nome: Google AI (The Keyword)
    url: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google colocou em preview na Interactions API da Gemini um recurso chamado Tool Retrieval, voltado a agentes com dezenas ou centenas de ferramentas. Funciona com o Gemini 3.6 e versões posteriores, incluindo toda a família Gemini 4.

Para usar, basta adicionar uma ferramenta `{"type": "tool_search"}` à requisição e marcar com `defer_loading: true` as ferramentas que não precisam estar sempre no contexto. Dessas, o modelo vê apenas nome e descrição. Quando precisa de uma, pede pelo nome, e a API injeta o esquema completo e o modelo emite a `function_call`, tudo na mesma requisição. Os passos aparecem em `interaction.steps` como `tool_search_call`, `tool_search_result` e `function_call`. Não há índice para construir ou hospedar, porque a busca roda no servidor do Google.

Há também um modo no cliente (`"execution": "client"`), em que a busca fica com a aplicação. Ele serve para usar um registro próprio, um índice de embeddings ou filtros de permissão por usuário, e permite expor ferramentas novas no meio da conversa, ao custo de uma ida e volta a mais. Em servidores MCP remotos, `defer_loading: true` faz com que todas as ferramentas do servidor sejam carregadas sob demanda.

Não há cobrança separada além de um bloco fixo de tokens ao ativar o `tool_search`. O Google não divulga números de economia: os esquemas carregados passam a contar como entrada pelo resto da conversa, e a recomendação é medir com o próprio tráfego. Segundo a empresa, os esquemas adiados ficam fora do prefixo, o que preserva o cache entre turnos.

## Por que importa

Despejar dezenas de esquemas de MCP no prompt é um dos maiores desperdícios de tokens em agentes hoje, e ainda piora a escolha da ferramenta certa. Com o recurso, a seleção passa a ser feita sob demanda pela própria API. Para quem tem conectores MCP grandes, o ganho deve ser imediato. Como o recurso está em preview, convém medir custo e acerto de ferramenta antes de adotar em produção.
