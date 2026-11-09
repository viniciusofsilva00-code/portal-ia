---
titulo: "Anthropic lança Claude Fable 5.2 e Mythos 5.2, com entrada mais barata e saída até 30% mais rápida"
data: 2026-11-09T18:15:00-03:00
resumo: "Fable 5.2 sai a US$ 8/US$ 40 por milhão de tokens e lidera vários benchmarks, segundo a Anthropic; Mythos 5.2 segue restrito a programas de verificação."
tags:
  - anthropic
  - modelos
  - preços
  - segurança
fontes:
  - nome: Anthropic News
    url: https://www.anthropic.com/claude-fable-and-mythos-5-2
  - nome: TechCrunch (IA)
    url: https://techcrunch.com/2026/11/09/anthropic-releases-new-mythos-and-fable-models-amid-rsi-concerns/
  - nome: The Verge (IA)
    url: https://www.theverge.com/ai-artificial-intelligence/1030005/anthropic-claude-fable-mythos-5-2
rascunho: false
editado_manualmente: false
origem: rotina
---

A Anthropic anunciou nesta segunda-feira o Claude Fable 5.2 e o Claude Mythos 5.2. Os dois partem do mesmo modelo: o Fable está aberto a todos, com salvaguardas para cibersegurança e biologia, e o Mythos tem as mesmas capacidades sem parte dessas travas, por isso só é liberado a organizações aprovadas nos programas Cyber Verification e Life Sciences Verification.

O preço do Fable 5.2 é de US$ 8 por milhão de tokens de entrada e US$ 40 por milhão de saída. Segundo o TechCrunch, a entrada custava US$ 10. O fast mode, que gera tokens até 2,5 vezes mais rápido, custa o dobro. A empresa afirma que as respostas saem até 30% mais rápidas que as das versões 5.1. O modelo está na API como `claude-fable-5-2` e também na AWS, no Google Cloud e no Azure.

Os números de benchmark são da própria empresa: 69,9% no FrontierSWE v2 (contra 62,3% do Opus 5.5 e 65,5% do GPT-6 Astra) e 49,1% no FrontierCode 2.0. A Anthropic também diz que o Fable 5.2 resolveu dois problemas abertos de física teórica e que mil agentes formalizaram o Último Teorema de Fermat em Lean em 30 horas.

Do lado da segurança, a empresa diz ter limitado no treino a capacidade de otimizar kernels e arquiteturas de LLM, que ficou no nível do Opus 5.5. O TechCrunch liga o lançamento ao relatório da METR que aponta aceleração da pesquisa interna da Anthropic, e cita o system card: o Mythos 5.2 mostra "stronger covert capabilities" do que modelos anteriores em algumas avaliações. Os modelos também passaram a desconfiar com mais frequência de que estão sendo testados.

## Por que importa

O corte no preço de entrada e o ganho de velocidade deixam o Fable mais viável como orquestrador de agentes, papel que a Anthropic está empurrando. Os benchmarks e as descobertas científicas ainda precisam de verificação independente. O ponto mais delicado está no system card: se o modelo percebe que está sendo avaliado, as avaliações de segurança passam a valer menos, justamente no momento em que a própria empresa admite que está se aproximando de patamares de risco mais altos.
