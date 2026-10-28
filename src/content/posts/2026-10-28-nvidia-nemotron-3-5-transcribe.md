---
titulo: "Nvidia lança Nemotron 3.5 Transcribe, modelo aberto de transcrição em 40 idiomas, e o dataset Granary v2"
data: 2026-10-28T13:55:00-03:00
resumo: "Modelo MoE open-weight com ~4B parâmetros ativos transcreve, traduz e separa falantes em gravações de até 1 hora. Não serve para áudio ao vivo."
tags:
  - nvidia
  - modelos
  - open source
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/nvidia/nemotron-transcribe-granary
  - nome: TechCrunch
    url: https://techcrunch.com/2026/10/28/voice-ai-in-vogue-nvidia-releases-new-open-transcription-model/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Nvidia publicou o Nemotron 3.5 Transcribe, modelo open-weight de reconhecimento de fala disponível no Hugging Face como `NVIDIA-Nemotron-3.5-Transcribe-30B-A4B`. A arquitetura junta um encoder de áudio a um modelo de linguagem híbrido Mamba-Transformer com mistura de especialistas: cerca de 30 bilhões de parâmetros no total e uns 4 bilhões ativos por token. Segundo o TechCrunch, roda em um único chip, do Jetson AGX Thor e do DGX Spark até GPUs Blackwell de datacenter.

Num único checkpoint, o modelo transcreve 40 idiomas, traduz 31 deles de e para o inglês, faz diarização em 13 idiomas (até oito falantes) e responde perguntas sobre o áudio, estas só em inglês. Aceita gravações de até uma hora, timestamps por palavra e listas de termos no prompt para jargão de domínio. A lista de idiomas está no model card; o post não diz se o português está incluído.

Os números são da própria Nvidia: WER médio de 5,33% no Open ASR Leaderboard em inglês, o melhor entre modelos abertos, e 2,8% no AA-WER da Artificial Analysis. Num caso com a Eka Care, com falantes indianos em contexto médico, o WER caiu de 30,8% para 11,8% após fine-tuning com NeMo.

Junto veio o Granary v2, dataset aberto com 463.062 horas em 48 idiomas, contra 25 da primeira versão.

A limitação principal está explícita no texto da Nvidia: o modelo é "built for recorded audio, not live streaming". Para uso em tempo real, ainda é preciso recorrer a outras opções, como o Realtime da ElevenLabs.

## Por que importa

Para transcrição de reuniões, consultas e entrevistas, isso é uma alternativa aberta e auto-hospedável às APIs pagas, com diarização e tradução no mesmo modelo, o que simplifica pipelines. O tamanho ativo pequeno torna viável rodar localmente com dados sensíveis. Antes de adotar, confira a licença e o suporte por idioma no model card, e teste com o seu áudio: benchmark de inglês limpo não diz muito sobre português com sotaque e ruído.
