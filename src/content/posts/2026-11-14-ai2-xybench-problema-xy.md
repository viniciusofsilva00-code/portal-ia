---
titulo: "XYBench, da Ai2, mede se assistentes percebem quando a pergunta está errada, e os modelos ainda falham"
data: 2026-11-14T14:00:00-03:00
resumo: "Benchmark com 8.115 perguntas mostra modelos respondendo ao pedido literal em vez do objetivo real; foco no objetivo aparece em só 35% a 41% das respostas no Stack Overflow."
tags:
  - pesquisa
  - modelos
  - open source
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/allenai/xybench
rascunho: false
editado_manualmente: false
origem: rotina
---

A Ai2 (Allen Institute for AI) publicou o XYBench, benchmark que mede se assistentes de IA reconhecem o chamado "problema XY": quando o usuário pede ajuda com uma solução que ele imaginou (Y) em vez de descrever o problema que realmente quer resolver (X). O trabalho foi feito com pesquisadores da Carnegie Mellon, da Nvidia e da Johns Hopkins e ganhou o prêmio de melhor artigo de recurso no EMNLP 2026.

São 8.115 perguntas: 1.557 do Stack Overflow, 184 do Stack Exchange, 102 curadas manualmente e 6.272 geradas a partir de guias do WikiHow, cobrindo programação e tarefas cotidianas. O benchmark avalia três coisas: se a resposta traz a solução pragmática, se dá ênfase ao objetivo real e se identifica o equívoco. O juiz automático é o Claude Sonnet 4.5, validado por dois revisores humanos em 500 respostas.

Foram testados Claude Sonnet 4.6, GPT-5, Gemini 3.1 Pro, Qwen3.5-9B e DeepSeek-V4 Pro. No Stack Overflow, a solução para o pedido literal apareceu em 75% a 86% das respostas, contra 59% a 71% para o objetivo real. As respostas focaram principalmente no objetivo real em só 35% a 41% dos casos. Curiosamente, em formato de múltipla escolha, os mesmos modelos escolheram a resposta voltada ao objetivo em 71% a 84% das vezes. Todos ficaram abaixo das respostas humanas de referência na identificação do equívoco.

Dataset e código estão no Hugging Face e no GitHub (allenai/XYBench); o post não informa a licença. O benchmark cobre apenas inglês e problemas majoritariamente procedurais.

## Por que importa

A diferença entre múltipla escolha e resposta livre sugere que os modelos "sabem" qual é a melhor resposta, mas o treinamento os empurra a obedecer o pedido literal. Para quem usa assistentes de código, é um lembrete prático: descrever o objetivo, e não só a solução que você já decidiu, tende a render respostas melhores. Os modelos avaliados já não são os mais recentes, então vale acompanhar resultados de gerações novas.
