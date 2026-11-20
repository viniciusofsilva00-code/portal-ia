---
titulo: "Architect Labs apresenta Frostbite, CPU com ISA nova projetada e verificada por agentes, ainda sem silício"
data: 2026-11-20T15:50:00-03:00
resumo: "Empresa diz que a arquitetura baseada em interaction nets rende em média 4,59x mais desempenho por watt que um núcleo in-order não identificado, em números pré-silício."
tags:
  - pesquisa
  - agentes
  - infraestrutura
fontes:
  - nome: Architect Labs
    url: https://architectlabs.com/blog/frostbite
  - nome: Hacker News (IA, 100+ pontos)
    url: https://news.ycombinator.com/item?id=50572503
rascunho: false
editado_manualmente: false
origem: rotina
---

A Architect Labs publicou o Frostbite, uma CPU de propósito geral com conjunto de instruções próprio que, segundo a empresa, foi descoberta, projetada e verificada de ponta a ponta por sistemas de IA, "sem priors arquiteturais". O post teve quase 500 pontos no Hacker News.

A arquitetura se baseia em interaction nets, em que cada passo é local e cada valor tem um único dono. Programas são escritos em Vine, linguagem com sintaxe parecida com Rust, e compilados para a representação intermediária Ivy. O chip é uma malha de tiles idênticos, cada um com memória local pequena em vez de hierarquia de cache coerente. Não há escalonador central: tiles ociosos pegam trabalho dos vizinhos, comportamento que a empresa diz ter surgido sem especificação humana.

Para a verificação, a empresa criou a linguagem de especificação ASL, que gera mais de 800 mil linhas de Lean, e um modelo do sistema calibrado contra o RTL até ficar a menos de 5% de erro. Enxames de agentes testaram 58 ideias e mantiveram 37. Os modelos de IA usados não são nomeados.

Os números, todos pré-silício, em 7 nm e com layout final a 500 MHz: média de 4,59x em desempenho por watt em 25 workloads (3,83x no conjunto não usado na busca) e 8,77x em desempenho por área. A comparação é contra um núcleo in-order dual-issue que a empresa não identifica "por razões legais", com kernels reduzidos e sem SPEC ou PARSEC.

## Por que importa

Se os números se sustentarem, é um exemplo concreto de agentes explorando um espaço de projeto que humanos evitam por custo, com verificação formal no meio do processo. Mas tudo vem da própria empresa: a base de comparação é secreta, não há chip fabricado e os benchmarks são reduzidos. Vale acompanhar quando RTL e ISA forem liberados, como prometido.
