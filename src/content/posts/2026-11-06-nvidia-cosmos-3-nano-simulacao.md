---
titulo: "Nvidia abre quatro variantes do Cosmos 3 Nano para simular direção autônoma e robôs de dois braços em tempo de interação"
data: 2026-11-06T14:45:00-03:00
resumo: "Modelos de mundo com pesos abertos geram vídeo multicâmera e LiDAR para carros e vídeo a partir de ações de robôs, com receitas de pós-treino publicadas."
tags:
  - nvidia
  - modelos
  - open source
  - pesquisa
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation
rascunho: false
editado_manualmente: false
origem: rotina
---

A Nvidia publicou no Hugging Face quatro variantes pós-treinadas do Cosmos 3 Nano, sua família de modelos de mundo, voltadas a simulação interativa. O post fala em 16 bilhões de parâmetros treináveis; os model cards listam 15 bilhões. A licença é a OpenMDW 1.1, que permite uso comercial e não comercial dentro dos seus termos.

As variantes cobrem dois domínios. Para direção autônoma, o Cosmos3-Nano-Transfer-Auto gera offline vídeo sincronizado de até 11 câmeras, incluindo fisheye, junto com LiDAR, variando clima, iluminação e hora do dia; o Cosmos3-Nano-Sim-Auto é a versão destilada para streaming, que produz pequenos blocos de câmera e LiDAR em poucos passos de denoising, pensada para simulação em malha fechada. Para robótica, o Cosmos3-Nano-Sim-Transfer transforma controles do simulador (profundidade, segmentação, bordas) e um prompt em vídeo RGB, deixando a física com o simulador, e o Cosmos3-Nano-Sim-Bimanual prevê vídeo a partir de ações de robôs de dois braços, com suporte aos modelos YAM e AgiBot.

Tecnicamente, o backbone é um Mixture-of-Transformers com atenção causal no tempo e cache de chave/valor. O pós-treino tem quatro etapas: adaptação bidirecional, teacher forcing, destilação por consistência (quatro passos de denoising por bloco) e self-forcing. A Nvidia publicou as receitas para as quatro variantes.

O post não traz benchmarks nem números de throughput. O setup com vLLM-Omni foi testado em uma GB200, e a empresa avisa que isso não é requisito mínimo de memória.

## Por que importa

Modelos de mundo são a aposta da Nvidia para reduzir a distância entre simulação e mundo real no treino de carros e robôs, e liberar pesos e receitas de pós-treino permite que equipes adaptem os modelos aos seus próprios sensores e robôs. A ausência de métricas de qualidade e velocidade, porém, deixa em aberto se a geração é rápida o bastante para malha fechada em hardware que não seja de data center.
