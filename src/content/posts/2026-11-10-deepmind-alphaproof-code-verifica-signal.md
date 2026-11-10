---
titulo: "DeepMind usa agentes com Gemini Carbon para verificar formalmente a implementação do protocolo do Signal em Lean"
data: 2026-11-10T15:40:00-03:00
resumo: "AlphaProof Code gerou mais de seis milhões de linhas de prova em Lean em quatro semanas; artefatos foram publicados como open source."
tags:
  - google
  - pesquisa
  - segurança
  - agentes
fontes:
  - nome: Google DeepMind
    url: https://deepmind.google/blog/introducing-alphaproof-code/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google DeepMind apresentou o AlphaProof Code, um framework agêntico de verificação formal em que humanos decidem o que provar e agentes de IA escrevem as provas. O primeiro alvo foi a implementação do protocolo criptográfico do Signal, o mesmo que protege conversas no Signal e no Google Messages.

A diferença em relação a trabalhos anteriores, segundo a empresa, é que a verificação foi feita sobre o código compilado, e não só sobre o desenho do protocolo. Os agentes provaram propriedades como a proteção das mensagens antes e depois de um comprometimento temporário do aparelho. As metas de segurança foram traduzidas em especificações formais por vários modelos, e especialistas humanos revisaram cada uma delas.

Os números divulgados: mais de seis milhões de linhas de Lean geradas por agentes rodando o Gemini Carbon, cerca de 1% do código sinalizado para revisão humana e quatro semanas de trabalho, algo que, segundo o post, costuma levar anos para equipes especializadas. Para testar o sistema, a equipe reintroduziu dois bugs reais, já corrigidos, numa cópia isolada do código; nos dois casos o sistema produziu uma prova verificada por máquina de que a versão com bug era insegura. O post não relata bugs novos no código em produção.

A DeepMind afirma que é a primeira verificação formal da implementação de um protocolo tão difundido, com ou sem IA. Os artefatos foram publicados como open source, junto com um artigo técnico, e o CTO do Signal, Ehren Kret, comentou o trabalho no anúncio. Não há, por enquanto, avaliação independente das alegações.

## Por que importa

Verificação formal sempre esbarrou no custo: provar código real exigia anos de especialistas. Se agentes conseguem fazer o grosso do trabalho e deixar só 1% para humanos, provas formais passam a ser viáveis em bibliotecas críticas, não só em projetos acadêmicos. O resultado vem duas semanas depois de a Anthropic mostrar provas de ausência de crash no OSS-Fuzz, sinal de que os laboratórios estão mirando segurança verificável como vitrine.
