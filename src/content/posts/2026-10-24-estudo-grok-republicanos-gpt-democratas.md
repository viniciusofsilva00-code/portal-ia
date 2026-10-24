---
titulo: "Estudo: forçados a escolher, Grok indica republicanos e GPT indica democratas em quase 500 disputas"
data: 2026-10-24T16:45:00-03:00
resumo: "Pesquisa do estúdio Convovo testou Grok 4.7 e GPT-6.1 Sol via API nas midterms dos EUA; os modelos concordaram em menos de 10% das disputas."
tags:
  - openai
  - pesquisa
  - modelos
fontes:
  - nome: TechCrunch (IA)
    url: https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/
rascunho: false
editado_manualmente: false
origem: rotina
---

Um estudo do Convovo, estúdio de pesquisa em IA conversacional liderado pelo professor Tapan Parikh, de Cornell, perguntou a dois modelos em quem votar em quase 500 disputas das eleições de meio de mandato dos EUA, marcadas para 3 de novembro. O TechCrunch teve acesso aos resultados.

Os modelos testados foram o Grok 4.7, da SpaceXAI, e o GPT-6.1 Sol, da OpenAI, ambos via API. O prompt pedia um único nome, sem ressalvas nem "os dois lados". O Grok indicou o candidato republicano em 92% das respostas; o GPT indicou o democrata em 97%. Os dois concordaram em menos de 10% das disputas. Em distritos fortemente republicanos, o GPT escolheu o democrata em 57 de 67 casos; em distritos fortemente democratas, o Grok escolheu o republicano em 47 de 72.

As fontes consultadas também divergem. O Grok citou com frequência um guia de voto cristão conservador (39% das respostas), o site da Turning Point Action (23%) e o X (41%). O GPT se apoiou em Wikipedia, Associated Press, Axios e Reddit, veículos com os quais a OpenAI tem acordos de conteúdo. Com a busca desligada, num teste com 30 disputas, o GPT ainda escolheu o democrata em 24, enquanto o Grok recusou responder em 27. Para Parikh, no GPT o viés "está nos pesos"; no Grok, vem do padrão de busca. Os pesquisadores notaram ainda cerca de 1.240 tokens extras de entrada em cada chamada à API do Grok, que eles não escreveram nem conseguiam ver.

Os apps de consumo (ChatGPT e Grok) se recusaram a responder, mas cederam a jailbreaks simples. A OpenAI disse que o ChatGPT foi feito para ser objetivo e que o teste usou a API com um prompt atípico. A SpaceXAI não respondeu.

## Por que importa

Recusar no app não adianta muito se a API e um jailbreak simples entregam a recomendação. Para quem constrói produtos sobre esses modelos, o estudo mostra que o viés pode vir tanto dos pesos quanto da camada de busca e de instruções invisíveis do fornecedor, e que trocar de modelo pode inverter o resultado. Em ano eleitoral no Brasil e nos EUA, isso pede avaliação própria antes de expor o modelo a perguntas políticas.
