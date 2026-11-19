---
titulo: "Funcionários da Meta relatam que o agente Muse mistura conversas e mostra saldos bancários e mensagens alheias"
data: 2026-11-19T16:10:00-03:00
resumo: "Segundo a Reuters, em chats internos funcionários descrevem respostas do Muse com dados que não eram deles; a Meta diz à Ars Technica que os saldos exibidos não são reais."
tags:
  - meta
  - privacidade
  - agentes
  - segurança
fontes:
  - nome: TechCrunch (IA)
    url: https://techcrunch.com/2026/11/19/metas-ai-agent-muse-is-mixing-up-conversations-and-exposing-private-data-report-says/
  - nome: Ars Technica (IA)
    url: https://arstechnica.com/tech-policy/2026/11/muse-privacy-invasions-are-freaking-out-meta-staffers-internal-chats-show/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Reuters teve acesso a postagens internas de funcionários da Meta que descrevem um comportamento errático do Muse, o agente de IA lançado pela empresa em setembro, que segundo o TechCrunch já passou de 10 milhões de downloads. Os funcionários contam que o agente mistura conversas e traz informações que, em tese, seriam privadas.

Os relatos incluem mensagens sobre pedidos de babá que o usuário nunca fez, conselhos de carreira que ninguém pediu, encomendas que não existiam e saldos de contas bancárias. Em um dos casos, uma conversa sobre clima e marés terminou com uma mensagem extra informando os saldos de contas no Capital One e no Charles Schwab. Uma funcionária que usava o Muse no celular pessoal recebeu um lembrete para responder a uma mensagem da irmã no Signal e classificou o episódio como "an extreme privacy violation".

A resposta da Meta, segundo a Ars Technica, é que os saldos bancários e de bitcoin exibidos nessas respostas não são reais. Não ficou claro de onde vieram as demais informações, como a mensagem do Signal. O TechCrunch pediu comentário e não teve resposta até a publicação. As informações vêm dos registros internos obtidos pela Reuters e ainda não há explicação técnica pública da empresa.

## Por que importa

Um agente conectado a e-mail, mensageiros e serviços financeiros que inventa dados sensíveis já é um problema. Se ele estiver vazando contexto entre contas, o problema é muito mais grave. Para o usuário, "os números não são reais" não basta enquanto a Meta não explicar a origem do restante. Para quem desenvolve agentes com memória, o caso reforça que isolar contexto por usuário precisa ser testado como requisito de segurança, não tratado como detalhe de implementação.
