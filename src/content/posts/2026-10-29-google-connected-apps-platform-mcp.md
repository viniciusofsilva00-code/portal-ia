---
titulo: "Google abre Connected Apps Platform para apps de terceiros rodarem dentro do Gemini e da Busca via MCP"
data: 2026-10-29T14:30:00-03:00
resumo: "Plataforma usa servidores MCP na nuvem ou Android MCP local para integrar apps ao Gemini e à Busca; beta começa com desenvolvedores dos EUA."
tags:
  - google
  - agentes
  - produtos
  - brasil
fontes:
  - nome: Canaltech
    url: https://canaltech.com.br/apps/gemini-e-busca-do-google-agora-rodam-apps-de-terceiros-sem-voce-sair-da-tela/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google lançou a Connected Apps Platform, que integra aplicativos de terceiros ao Gemini e à Busca. A ideia é o usuário consultar dados pessoais e fazer tarefas, como uma reserva, sem sair da conversa com o assistente ou da página de resultados.

A integração usa o Model Context Protocol (MCP), o mesmo padrão aberto que já serve para ligar ferramentas a agentes em outros ecossistemas. Há dois caminhos. No primeiro, o desenvolvedor expõe o serviço por um servidor MCP na nuvem. No segundo, usa o Android MCP, que roda a integração localmente no celular por meio das APIs AppFunctions do Jetpack. A gestão fica no Google Connected Console. Ali se cadastra e testa o serviço, configura autenticação com OAuth 2.1, acompanha tráfego, latência e erros, e escolhe se o app aparece no Gemini, na Busca ou nos dois.

Segundo o Google, mais de 50 apps já estão disponíveis. No Gemini já aparecem Adobe, Experian, Peloton e a brasileira Localiza, que devem chegar à Busca nas próximas semanas. Na Busca já estão Instacart, Canva e YouTube Music, entre outros. O lançamento começa como teste só para desenvolvedores dos EUA. Os de outros países podem entrar numa lista de espera do beta público em developers.google.com/connected-apps. A empresa diz que vai liberar mais regiões nos próximos meses, sem data para o Brasil.

## Por que importa

Com Google, Apple e Anthropic convergindo no MCP, o protocolo vira de fato a interface padrão entre apps e assistentes. Para quem já escreveu um servidor MCP, o custo de aparecer no Gemini e na Busca tende a ser baixo. A variante local do Android é a novidade técnica que merece atenção, porque a integração roda no próprio aparelho, sem exigir um servidor do desenvolvedor. A presença da Localiza indica que empresas brasileiras já estão entre os primeiros parceiros, apesar de o beta ainda estar restrito aos EUA.
