---
titulo: "Edge0-145B: MoE aberto com cerca de 10B ativos promete rodar em notebook de 48 GB com 29 GB de pico"
data: 2026-11-13T15:00:00-03:00
resumo: "Edge0 publica pesos do Edge0-145B e do Edge0-120B em NVFP4, com app desktop offline; os benchmarks, acima do Qwen3.8-Flash-Next em média, são avaliações internas da empresa."
tags:
  - modelos
  - open source
  - infraestrutura
fontes:
  - nome: Edge0 (blog oficial)
    url: https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer
rascunho: false
editado_manualmente: false
origem: rotina
---

A Edge0 lançou na quinta-feira (12) o Edge0-145B, um modelo mixture-of-experts com 145 bilhões de parâmetros no total e cerca de 10 bilhões ativos por passo de inferência, junto com um irmão menor, o Edge0-120B, um framework de inferência e um app desktop. O anúncio ganhou tração no Hacker News.

A proposta é rodar localmente algo próximo de modelo de fronteira. Segundo a empresa, o modelo foi treinado desde o início na arquitetura pensada para o dispositivo, e não comprimido depois. Cada grupo de 64 experts compartilha duas matrizes grandes, e cada expert mantém um conjunto pequeno de parâmetros próprios. O carregador divide o armazenamento entre memória da GPU (experts mais usados), RAM (uma biblioteca de experts de cerca de 40 GB) e SSD (cerca de 48 GB de dados de vocabulário, lidos sob demanda). O pico de memória medido é de 29 GB, e a empresa fala em uso num notebook de 48 GB, com mais de 1.100 tokens/s de prefill e mais de 80 tokens/s de decode. Contexto vai de 128K a 256K.

Nos números divulgados, o 145B faz 64,6 no DeepSWE 1.1 e 86,52 no Terminal-Bench 2.1, com média de 72,8 em seis benchmarks, contra 71,7 do Qwen3.8-Flash-Next, que a Edge0 estima precisar de cerca de 70 GB. Perde para o Qwen no GPQA-Diamond (90,4 contra 91,7) e para o Claude Opus 4.6 no HLE (35,4 contra 40,0). A própria empresa diz que são avaliações internas e promete um relatório técnico com instruções de reprodução.

Os pesos estão no Hugging Face em NVFP4 e o código no GitHub, com suporte a macOS, Windows e Linux. O anúncio chama o modelo de open source, mas não informa a licença.

## Por que importa

Se os números se sustentarem em avaliação independente, o truque de jogar experts e vocabulário para RAM e SSD muda a conta de quem quer rodar agente de código sem mandar dados para a nuvem: 29 GB cabe em hardware que muita gente já tem. Até sair o relatório técnico, trate os benchmarks como alegação de fornecedor, e confira a licença no model card antes de usar comercialmente.
