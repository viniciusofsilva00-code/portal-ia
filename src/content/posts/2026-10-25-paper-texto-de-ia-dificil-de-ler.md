---
titulo: "Paper mede por que texto gerado por IA ficou mais difícil de ler e aponta o treino para código e raciocínio"
data: 2026-10-25T11:20:00-03:00
resumo: "Estudo compara nove modelos com texto humano e encontra mais dependências longas, substantivos empilhados e n-gramas raros; penalidade de tamanho no fine-tuning piora o quadro."
tags:
  - pesquisa
  - modelos
fontes:
  - nome: arXiv
    url: https://arxiv.org/abs/2610.29162
  - nome: Hacker News
    url: https://news.ycombinator.com/item?id=50223647
rascunho: false
editado_manualmente: false
origem: rotina
---

Muita gente tem a impressão de que texto de IA ficou mais truncado e cansativo de ler nos últimos meses. Um paper de Thomas Hikaru Clark, Matias B. Martin e Kyle Mahowald, publicado no arXiv em 21 de outubro, tenta medir isso. O trabalho repercutiu no Hacker News, com mais de 210 pontos e 170 comentários.

Os autores montaram um corpus novo de texto gerado por IA em vários domínios e mediram traços que a psicolinguística associa a dificuldade de processamento: orações relativas de objeto, dependências sintáticas longas e n-gramas de baixa frequência. Como comparação, usaram texto humano e paráfrases geradas por tradução de ida e volta.

Os modelos usam esses traços mais do que as paráfrases. Comparados com escrita humana, todos os nove modelos de fronteira ou quase fronteira avaliados usam mais sujeitos inanimados com verbos de agente (do tipo "o relatório argumenta") e mais n-gramas raros. Em texto conversacional, a maioria também usa dependências mais longas, mais substantivos empilhados e mais relativas de objeto reduzidas. As famílias de modelos diferem bastante entre si.

A hipótese dos autores é que a linguagem humana foi moldada para comunicação bem-sucedida, enquanto o texto de IA está cada vez mais moldado por objetivos como matemática, código e raciocínio, que premiam densidade de informação. Como prova de conceito, eles fizeram fine-tuning de um modelo com penalidade de tamanho de saída, e o texto se afastou do comportamento linguístico humano. O resumo do paper não traz tamanhos de efeito nem o tamanho do corpus.

## Por que importa

Otimizar para respostas curtas e para benchmarks de raciocínio tem um custo de legibilidade que não aparece em nenhuma leaderboard. Para quem treina ou ajusta modelos, é um argumento para medir também a facilidade de leitura. Para quem usa, explica por que pedir "seja conciso" nem sempre deixa o texto mais claro.
