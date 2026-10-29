---
titulo: "Deepgram compra a Daily, criadora do Pipecat, e promete manter o framework aberto e neutro"
data: 2026-10-29T14:30:00-03:00
resumo: "Aquisição de valor não divulgado põe o principal framework aberto de agentes de voz sob a Deepgram, que também lança o protocolo RCS."
tags:
  - agentes
  - open source
  - mercado
fontes:
  - nome: TechCrunch
    url: https://techcrunch.com/2026/10/29/deepgram-acquires-pipecat-maker-daily-to-bolster-its-voice-ai-infrastructure/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Deepgram, empresa de modelos de voz, anunciou nesta quinta-feira (29) a compra da Daily, que mantém o Pipecat. O valor não foi divulgado. O Pipecat é um framework open source para agentes de voz: ele cuida dos fluxos de áudio e vídeo e orquestra a cadeia de speech-to-text, LLM e text-to-speech tentando reduzir a latência. A Daily também oferece infraestrutura hospedada para chamadas de voz e vídeo e já captou mais de US$ 62 milhões, segundo o PitchBook.

O ponto sensível é a neutralidade. O Pipecat é usado com modelos de vários fornecedores, e agora pertence a um deles. Segundo Kwindla Kramer, cofundador da Daily, o CEO da Deepgram, Scott Stephenson, se comprometeu a manter o Pipecat "open source e neutro em relação a fornecedores para sempre". Stephenson disse ao TechCrunch que quer que desenvolvedores usem o melhor modelo para cada caso, inclusive modelos de concorrentes. A matéria não informa a licença do projeto.

Junto com a aquisição, a Deepgram lançou o Real-Time Context Standard (RCS), protocolo aberto para agentes de voz desenvolvido com o time do Pipecat. O RCS define metadados sobre o contexto do áudio (um sussurro, por exemplo), instruções de como o LLM deve usar esses sinais e orientações sobre como a resposta deve soar. As duas empresas saíram da mesma turma da Y Combinator, em 2016, e a Deepgram virou unicórnio neste ano, com uma Série C de US$ 130 milhões.

## Por que importa

Quem tem agente de voz em produção sobre Pipecat deve acompanhar a governança do projeto daqui para frente. Promessa de neutralidade vale enquanto for conveniente para o dono, e um fork é a saída se deixar de valer. O RCS é a parte técnica mais interessante, porque tenta padronizar sinais de prosódia e contexto que hoje cada stack resolve do seu jeito. A adoção vai depender de outros fornecedores toparem um padrão criado por um concorrente.
