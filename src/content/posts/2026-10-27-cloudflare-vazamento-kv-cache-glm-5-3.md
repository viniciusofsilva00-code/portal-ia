---
titulo: "Bug no KV cache do GLM-5.3 na Cloudflare entregou dados de outros clientes em 155 respostas"
data: 2026-10-27T13:05:00-03:00
resumo: "Pool de KV menor que o contexto anunciado e um bug no SGLang fizeram o Workers AI misturar prompts de clientes diferentes entre 27/8 e 9/9."
tags:
  - segurança
  - infraestrutura
  - open source
fontes:
  - nome: Cloudflare Blog
    url: https://blog.cloudflare.com/kv-cache-exposure-remediation/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Cloudflare publicou na segunda-feira (26) o post-mortem de uma falha de isolamento entre clientes no `@cf/zai-org/glm-5.3`, modelo da Z.ai servido pelo Workers AI. Entre 27 de agosto e 9 de setembro de 2026, 155 respostas continham dados de requisições de outros clientes, como prompts e trechos de geração. Todas eram respostas a prompts com mais de 681.280 tokens. A empresa fala em "um pequeno número de clientes", sem dar o total, e diz que nenhum outro modelo do Workers AI foi afetado.

A causa juntou dois problemas. O modelo foi publicado com janela de 1.048.576 tokens, mas o pool de KV cache do prefill comportava só 681.280. A Cloudflare sabia da diferença e esperava que o SGLang devolvesse erro para pedidos grandes demais. Só que, no modo de prefill e decode desagregados, o SGLang marcava a requisição como rejeitada sem abortá-la. Ela seguia para o nó de decode, que fazia atenção sobre páginas de KV antigas, com dados de outros usuários, e o cliente recebia HTTP 200 em vez de 400. O bug já tinha sido reportado upstream em julho.

O pesquisador Gadi Evron, da Knostic, reportou o problema pelo HackerOne em 8 de setembro, com script de reprodução. No dia seguinte, a Cloudflare declarou o incidente, tirou o modelo do ar em 40 minutos e o devolveu à noite com a configuração corrigida e o SGLang com patch. O pool foi ampliado para cerca de 2,04 milhões de tokens, e as correções entraram nas versões 0.5.21 e 0.5.22 do SGLang. O post não diz se os clientes afetados foram avisados diretamente.

## Por que importa

É um tipo de vazamento novo e bem concreto: estado compartilhado do servidor de inferência cruzando a fronteira entre clientes. Quem hospeda modelos com SGLang em modo desagregado deve atualizar e conferir se o pool de KV cobre a janela de contexto anunciada. Para quem consome inferência de terceiros, fica a pergunta sobre como o provedor isola o cache entre clientes.
