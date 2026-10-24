---
titulo: "Block apresenta Dessa, modelo de voz full-duplex que roda num MacBook"
data: 2026-10-24T16:45:00-03:00
resumo: "O modelo de voz da empresa de Jack Dorsey fala e ouve ao mesmo tempo, dispensa etapa de texto e, segundo a Block, roda localmente num MacBook M4 Max; ainda não há acesso público."
tags:
  - modelos
  - agentes
fontes:
  - nome: TechCrunch (IA)
    url: https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Block, empresa de pagamentos comandada por Jack Dorsey, mostrou o Dessa, um modelo de voz saído do seu laboratório de pesquisa. É um modelo full-duplex, ou seja, fala e escuta ao mesmo tempo, na linha do GPT-Live da OpenAI.

A diferença que a Block destaca está na arquitetura. Segundo a empresa, os sistemas de voz atuais passam por uma etapa de texto antes de gerar a fala, o que deixa o resultado artificial. O Dessa não teria essa etapa: o conhecimento dele vem dos próprios dados de conversa usados no treinamento, sem um LLM separado acoplado. A empresa diz que ele foi treinado "inteiramente em fala humana" num único rack de GPUs da Nvidia e que a emoção está embutida no modelo, com risadas, pausas e até choro. Não está claro se dá para controlar essa emoção por tags, como no ElevenLabs v4 ou no Fish Audio Drama 3.

O ponto mais prático é o hardware: a Block afirma que o modelo roda localmente em máquinas de consumo, como um MacBook M4 Max ou superior. Não foram divulgados número de parâmetros, licença, latência nem preço. O modelo ainda não está disponível ao público; a Block pediu a pesquisadores de segurança que o testem, principalmente em cenários em que um agente de voz poderia enganar a pessoa do outro lado da linha.

A motivação comercial é clara. A Block vende serviços financeiros para pequenos negócios, e o Square já usa IA de voz para receber pedidos. Um modelo que roda no dispositivo, segundo a empresa, baixaria o custo dessas experiências. Todas as alegações técnicas, por enquanto, são da própria Block.

## Por que importa

Se um modelo de voz full-duplex realmente roda num notebook, o custo por minuto de um atendente de voz cai para perto de zero e a dependência de API em nuvem some. O outro lado é que voz convincente rodando localmente, sem controle do fornecedor, facilita golpes de imitação. Faz sentido a Block chamar pesquisadores de segurança antes de abrir o acesso; resta ver o que eles vão publicar.
