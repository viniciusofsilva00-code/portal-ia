---
titulo: "Mistral Large 4 chega com pesos abertos: MoE de 1 trilhão de parâmetros, 1M de contexto e licença com restrição a serviço"
data: 2026-10-29T14:30:00-03:00
resumo: "Mistral publica no Hugging Face o Large 4, MoE multimodal de cerca de 1T parâmetros com suporte no dia zero em transformers, vLLM e llama.cpp."
tags:
  - modelos
  - open source
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/mistral-large4
rascunho: false
editado_manualmente: false
origem: rotina
---

A Mistral publicou nesta quinta-feira (29) o Mistral Large 4 no Hugging Face, apelidado de "Le Chonk". É um modelo multimodal (texto e imagem na entrada, texto na saída) com cerca de 1 trilhão de parâmetros no total. O post de lançamento fala em 49 bilhões ativos por token, mas o nome dos checkpoints indica A52B. A janela de contexto anunciada é de 1 milhão de tokens. O raciocínio tem três níveis de esforço (low, medium, high, com high como padrão) e não dá para desligar.

A arquitetura é um mixture-of-experts com 72 camadas: a primeira é densa e as outras 71 têm 128 especialistas cada. Um router escolhe 4 especialistas por token, mais 1 compartilhado. A atenção usa Multi-head Latent Attention com um indexador de sparse attention no estilo DeepSeek, que seleciona até 2.048 posições por query. A visão fica com um encoder Pixtral de 1,6B.

Nos números divulgados, o modelo marca 61,7% no DeepSWE v1.1 e 28,3% no Terminal-Bench 4. Segundo o blog, é o quinto melhor modelo de pesos abertos no índice da Artificial Analysis. A licença é a Mistral Ecosystem Open-Weight License, descrita como derivada da MIT, mas com limites para quem quer oferecer o modelo como serviço.

Há checkpoints em FP8 e NVFP4 (este exige GPUs Blackwell no vLLM), além de quantizações GGUF da ggml-org e da Unsloth. O suporte no dia zero cobre transformers, vLLM, llama.cpp e fine-tuning com TRL. O hardware é pesado: as receitas usam 8 H200 ou 8 B300, e a quantização de 2 bits roda num Mac Ultra com 512 GB a cerca de 15 tokens/s.

## Por que importa

A Europa volta a ter um modelo aberto na faixa de 1 trilhão de parâmetros, que hoje é dominada por laboratórios chineses. Mas "aberto" aqui tem asterisco: a licença limita a revenda como serviço, o que pesa para quem pensava em hospedar e cobrar. Para uso interno, o suporte imediato nas principais stacks de inferência elimina a espera de sempre. O custo de hardware, porém, deixa o modelo fora do alcance de quem não tem um nó inteiro de GPUs de ponta.
