---
titulo: "Código do ChatGPT para Android indica ligações, SMS, controle de mídia e leitura da tela"
data: 2026-11-27T16:45:00-03:00
resumo: "Teardown da versão 1.2026.328 do app mostra a OpenAI preparando o ChatGPT para substituir o Gemini como assistente do Android. Nada foi anunciado oficialmente."
tags:
  - openai
  - agentes
  - produtos
  - privacidade
fontes:
  - nome: Android Authority
    url: https://www.androidauthority.com/chatgpt-android-call-text-view-screen-3740765/
  - nome: Tecnoblog (IA)
    url: https://tecnoblog.net/noticias/chatgpt-quer-assumir-ligacoes-e-outras-funcoes-basicas-no-android/
  - nome: Canaltech (IA)
    url: https://canaltech.com.br/inteligencia-artificial/chatgpt-quer-tomar-vaga-do-gemini-no-android-fazendo-ligacoes-e-lendo-a-tela/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Android Authority analisou o código da versão 1.2026.328 do app do ChatGPT para Android e achou strings de recursos em desenvolvimento que ampliam bastante o que o assistente pode fazer no celular. Hoje, mesmo quando definido como assistente padrão, o ChatGPT se limita ao modo de voz e a respostas em texto.

Pelo que aparece no código, o app pediria permissão para acessar contatos e o histórico de chamadas, fazer ligações e ler e enviar SMS. Com acesso às notificações, poderia pausar, retomar e pular faixas e identificar artista e música, mas não abrir um app de música nem escolher uma faixa nova. Uma opção chamada "Use screen and app data" permitiria usar o conteúdo da tela como contexto, com uma nova captura a cada pergunta.

Há também referências ao Dots, o agente sempre ativo da OpenAI, com flags que sugerem uso com o celular bloqueado (`allowedWhileLocked`) e como assistente padrão (`useDotAsAssistant`).

Tudo isso vem de código ainda não lançado. A OpenAI não anunciou os recursos, não há previsão de lançamento e eles podem mudar ou nunca sair. O Google, por sua vez, anunciou em setembro que o Gemini pode fazer ligações para estabelecimentos.

## Por que importa

O posto de assistente padrão do Android é hoje do Gemini, e o código sugere que a OpenAI quer disputá-lo diretamente, com acesso a funções básicas do sistema. Para o usuário, o preço é conceder a um app de terceiros acesso a chamadas, SMS e capturas de tela contínuas. Depois da reação do Signal, que passou a bloquear capturas para impedir que agentes leiam conversas, a leitura de tela deve continuar sendo o ponto mais sensível.
