---
titulo: "Inkling 2 Mini, da Thinking Machines, roda inteiro numa RTX 5090 e passa o Qwen3.8-27B em código nos testes do Akita"
data: 2026-11-27T16:40:00-03:00
resumo: "Modelo aberto de 26,4B parâmetros com camadas em loop lidera benchmarks de código, mas perde em tarefas de escritório e sofre em hardware com pouca banda de memória."
tags:
  - open source
  - modelos
  - pesquisa
fontes:
  - nome: Thinking Machines Lab
    url: https://thinkingmachines.ai/news/inkling-2-mini/
  - nome: Fabio Akita (AkitaOnRails)
    url: https://www.akitaonrails.com/2026/11/27/novo-competidor-do-qwen-3-8-27bi-inkling-2-mini/
  - nome: Hugging Face
    url: https://huggingface.co/thinkingmachines/Inkling-2-Mini
rascunho: false
editado_manualmente: false
origem: rotina
---

A Thinking Machines Lab, empresa de Mira Murati, lançou em 20 de novembro o Inkling 2 Mini, um modelo de pesos abertos voltado para rodar localmente. É um MoE com 26,4B de parâmetros armazenados e um truque de arquitetura: das 24 camadas, os blocos do meio rodam três vezes por token, o que dá 48 aplicações de camada reaproveitando os mesmos pesos. A página oficial fala em 3,4B parâmetros ativos no texto e 5,4B na tabela, sem explicar a diferença. O Akita trata a primeira como parâmetros únicos e a segunda como contagem efetiva com as repetições.

Segundo a própria empresa, o modelo marca 79,2% no SWE-bench Verified (bash only), 77,9% no SWE-bench Pro v2 Hard e 48,2% no DeepSWE v1.1, à frente do Qwen3.8-27B. Ele perde para o Qwen no Terminal Bench v2.1 (71,6% contra 73,0%), no MultiChallenge e no ComplexConstraints.

Fabio Akita testou o modelo depois que o DHH relatou que ele superou o Qwen no teste noturno do Omarchy. Numa RTX 5090, com o engine Basalt, o Inkling (cerca de 20 GB em NVFP4/MXFP8) coube inteiro na VRAM e gerou de 250 a 346 tok/s. Nos 36 testes escondidos do benchmark do autor, acertou tudo nas três rodadas, mas levou em média 9,8 minutos, contra 5,5 do Qwen quantizado em 2 bits, porque gera bem mais tokens de raciocínio. No AMD Strix Halo, o loop de camadas pesa na banda de memória e a geração caiu para 13,8 a 24,8 tok/s.

## Por que importa

Para quem roda modelos em casa com GPU de 32 GB, o Inkling vira a opção padrão para código, segundo o Akita, sem depender de quantização agressiva nem de offload para a RAM. O teste também mostra que o engine de inferência pesa tanto quanto o modelo: o mesmo Inkling foi 2,3 vezes mais rápido no Basalt do que no Strata. E arquiteturas em loop trocam memória por banda, o que muda a conta de qual hardware compensa.
