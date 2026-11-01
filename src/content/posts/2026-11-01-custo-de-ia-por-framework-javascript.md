---
titulo: "Benchmark de Nolan Lawson mede quanto custa o mesmo app feito por agente em 12 frameworks JavaScript"
data: 2026-11-01T14:00:00-03:00
resumo: "Com Claude Opus 5.5, o mesmo app custou de US$ 2,67 (Hono+htmx) a US$ 4,97 (Angular); MPAs como Astro também lideraram no Lighthouse."
tags:
  - agentes
  - pesquisa
  - preços
  - anthropic
fontes:
  - nome: Nolan Lawson
    url: https://nolanlawson.com/2026/10/28/the-ai-cost-of-javascript-frameworks/
  - nome: Hacker News
    url: https://news.ycombinator.com/item?id=50323088
rascunho: false
editado_manualmente: false
origem: rotina
---

Nolan Lawson publicou um benchmark que tenta responder com dados a uma pergunta que hoje costuma ser resolvida no achismo: qual framework front-end é mais "amigável para agentes"? O texto passou de 190 pontos no Hacker News.

A metodologia é simples. Claude Opus 5.5, com effort alto, recebeu a mesma especificação de um app de Pokémon baseado na PokéAPI, com listagem, busca e filtros, e implementou o app em 12 stacks: Angular, Astro, Gracile+Lit, Hono+htmx, Next.js, Nuxt, Qwik, React Router, SolidStart, SvelteKit, TanStack Start e um controle em Vite puro. Cada stack teve 5 execuções em sandbox, validadas por uma suíte de testes baseada na árvore de acessibilidade. Para comparar, o autor usou a mediana.

Pela mediana, o custo equivalente em API foi de US$ 2,67 com Hono+htmx, US$ 2,76 com Astro e US$ 2,82 com Nuxt. Do outro lado ficaram SvelteKit (US$ 4,28), Gracile+Lit (US$ 4,65) e Angular (US$ 4,97). Angular também foi o mais lento (17,2 minutos contra 8,2 do Astro) e o que mais consumiu tokens (9,76 milhões). O autor suspeita que o custo do SvelteKit vem de o agente ler o guia de migração da v3 em toda execução.

No Lighthouse, as MPAs se saíram melhor: o Astro entregou 0 KiB de JavaScript e LCP de 810 ms, contra 142 KiB e 2.090 ms do Next.js. O uso de MCPs e skills oficiais foi irregular: o skill do Next.js só foi lido em 1 das 5 execuções.

O autor reconhece os limites: é um único app com muito conteúdo, o Lighthouse favorece MPAs, o custo é estimado e só um agente foi testado.

## Por que importa

Quando o agente escreve a maior parte do código, o custo em tokens e o tempo de execução passam a ser critérios de escolha de stack, e esse é um dos primeiros números públicos e reproduzíveis sobre isso (o código está no GitHub). A diferença de quase 2x entre o mais barato e o mais caro é pequena por app, mas pesa multiplicada por um time inteiro. O dado mais útil para quem mantém framework é que documentação de migração e MCPs mal aproveitados viram custo direto para o usuário.
