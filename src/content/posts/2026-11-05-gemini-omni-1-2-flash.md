---
titulo: "Google lança Gemini Omni 1.2 Flash: vídeos de até 15 segundos e preço 30% menor na API"
data: 2026-11-05T15:30:00-03:00
resumo: "Novo modelo de vídeo da Google DeepMind gera e edita clipes de 3 a 15 segundos, sai por US$ 0,07 por segundo em 720p e já está disponível na Gemini API e no Vertex AI."
tags:
  - google
  - modelos
  - preços
fontes:
  - nome: Google AI (The Keyword)
    url: https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
  - nome: Google DeepMind
    url: https://deepmind.google/blog/gemini-omni-12-flash-fast-and-cost-effective-with-longer-clips/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Google DeepMind anunciou nesta quinta-feira (5) o Gemini Omni 1.2 Flash, sucessor do Omni 1.1 na linha de modelos de geração e edição de vídeo. A principal mudança é a duração: o modelo gera e edita nativamente clipes de até 15 segundos, contra 10 na versão anterior, com controle de duração em incrementos de um segundo, de 3 a 15.

O preço também caiu. Na API, o vídeo em 720p custa US$ 0,07 por segundo, segundo a própria Google uma redução de 30% em relação ao Omni 1.1. O fluxo sugerido é gerar rascunhos em 360p ou 720p e só depois fazer upscale para 1080p ou 4K dos que valerem a pena.

A empresa afirma que o modelo mantém melhor a consistência de personagens, objetos e cenários do primeiro ao último quadro, respeita mais as imagens de referência (rostos, roupas, tipografia de embalagens, cores de marca) e aceita também clipes curtos de movimento, de até três segundos, e pistas de áudio como referência. A edição é multi-turn: dá para trocar produto, fundo, iluminação ou proporção da tela em conversa, sem regerar o clipe do zero. Diálogo com lip-sync e vários falantes e movimentos de câmera como orbit e FPV também teriam melhorado.

O anúncio não traz benchmarks quantitativos, só comparações qualitativas com exemplos, e a própria Google admite limitações em ação esportiva rápida e física complexa. O modelo está disponível de forma geral na Gemini API, no Google AI Studio e no Vertex AI, com Provisioned Throughput para empresas, e aparece no Flow, no Google Vids e no app Gemini (para assinantes do AI Ultra). As saídas levam marca d'água SynthID.

## Por que importa

Vídeo gerado continua caro por segundo, e um corte de 30% somado a um fluxo de rascunho em baixa resolução muda a conta de quem gera variações em escala, como em campanhas de anúncio. Os 15 segundos com edição incremental atacam o principal atrito prático, que é regerar tudo a cada ajuste. Como não há números de avaliação, a comparação com concorrentes vai depender de testes independentes.
