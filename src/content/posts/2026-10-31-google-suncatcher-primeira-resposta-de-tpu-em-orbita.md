---
titulo: "Satélite do Project Suncatcher liga TPUs em órbita e roda o Gemma 4; Google planeja dois satélites interligados em 2027"
data: 2026-10-31T13:00:00-03:00
resumo: "Protótipo lançado em 1º de outubro gerou a primeira resposta de IA de uma TPU de data center no espaço. Próximo passo é testar radiação e calor."
tags:
  - google
  - infraestrutura
  - pesquisa
fontes:
  - nome: Google Blog
    url: https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/
  - nome: TechCrunch
    url: https://techcrunch.com/2026/10/30/googles-first-data-center-satellite-is-online-and-writing-poetry/
  - nome: Olhar Digital
    url: https://olhardigital.com.br/2026/10/30/pro/google-testa-ia-em-satelite-e-avanca-em-projeto-de-data-centers-espaciais/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google informou que o protótipo do Project Suncatcher, projeto que estuda data centers de IA em órbita, ligou suas TPUs e gerou a primeira resposta de IA de um acelerador "de classe data center" no espaço. O satélite foi lançado em 1º de outubro e, segundo o TechCrunch, passou cerca de três semanas em comissionamento antes de receber o primeiro prompt.

O teste foi simbólico: um modelo aberto Gemma 4 pré-carregado escreveu um haicai sobre estar no espaço. O prompt foi enviado durante uma passagem sobre a estação de solo, e a resposta chegou depois que o satélite passou por Svalbard, na Noruega. A equipe também testou limericks e prompts de telemetria sobre o estado dos sistemas de bordo. O post oficial não informa a geração das TPUs nem o tamanho do modelo.

O TechCrunch acrescenta detalhes de hardware: o satélite, construído pela Planet, leva quatro TPUs, mas só consegue alimentar uma de cada vez. Com até 1 kW de geração de energia, cada TPU fica ligada por cerca de 20 minutos seguidos. A próxima fase mede o desempenho sob estresse térmico e radiação, com atenção a bit flips que corrompem dados sem disparar alarmes. Testes em acelerador de partículas no solo sugeriram impacto pequeno em inferência e risco maior em treino, e a ideia é confirmar isso em órbita.

O próximo marco, segundo o Google, é um par de satélites interconectados em 2027, com TPUs mais novas e links ópticos entre eles.

## Por que importa

Um haicai não prova viabilidade econômica, e o próprio Google trata o projeto como uma aposta de longo prazo, com infraestrutura viável só na década de 2030, segundo o TechCrunch. O dado útil é técnico: energia e dissipação limitam o uso a uma TPU por vez durante 20 minutos, o que mostra a distância até um "data center". A tolerância a radiação em inferência e em treino é a pergunta que vai decidir se a ideia sai do papel.
