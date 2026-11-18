---
titulo: "Estudo de Harvard com 725 mil devs: IA aumenta commits e PRs, mas não entrega mais trabalho em produção"
data: 2026-11-18T16:05:00-03:00
resumo: "Paper com dados de 718 empresas mostra 30% mais linhas de código e 23% mais PRs, mas tempo de merge 49% maior e nenhum ganho detectável em entregas."
tags:
  - pesquisa
  - agentes
  - trabalho
fontes:
  - nome: ComplexDiscovery (via Hacker News)
    url: https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/
  - nome: Fiona Chen e James Stratton (paper)
    url: https://fion.ac/jellyfish.pdf
rascunho: false
editado_manualmente: false
origem: rotina
---

Fiona Chen e James Stratton, doutorandos em Harvard, publicaram o working paper "Artificial Intelligence in the Firm: Bottlenecks in Software Production", que repercutiu no Hacker News nesta semana. O trabalho ainda não passou por revisão por pares.

A base é grande: 725.938 profissionais em 718 empresas, de janeiro de 2021 a março de 2026, com dados da plataforma Jellyfish cruzados com registros do LinkedIn coletados pela Revelio Labs. São 68,3 milhões de issues no Jira, 200,9 milhões de commits e 49,1 milhões de pull requests. O método compara empresas que adotaram ferramentas de IA com as que ainda não tinham adotado (diferenças em diferenças escalonadas).

Por pessoa e por mês, a adoção trouxe cerca de 30% mais linhas de código, 20% mais commits e 23% mais PRs. Mas o trabalho efetivamente entregue, medido por issues do Jira que chegaram à produção, não mudou de forma estatisticamente detectável; o intervalo de confiança descarta alta acima de cerca de 12%. O tamanho das tarefas também não mudou.

O custo apareceu na revisão: o tempo entre abrir e fazer merge de um PR subiu 3,45 dias sobre uma base de 7,03 (49%), a fração de PRs com pedido formal de mudança subiu cerca de 12 pontos percentuais e os comentários de revisão por PR cresceram 35%. A parcela de pessoas que fazem revisão aumentou 14%. Os autores não encontraram queda de emprego maior que 2,9% no geral.

## Por que importa

O estudo dá número a algo que times já sentem: gerar código ficou barato, mas revisar continua caro e virou o gargalo. Medir produtividade por commits ou linhas é enganoso, porque essas métricas sobem sem que mais coisa chegue ao usuário. Quem adota agentes de código deveria investir em revisão, testes e PRs menores antes de cobrar ganho de velocidade.
