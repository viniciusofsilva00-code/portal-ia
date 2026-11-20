---
titulo: "Signal bloqueia capturas de tela no Android e no iOS 27 para impedir que Gemini e Siri leiam conversas"
data: 2026-11-20T15:50:00-03:00
resumo: "Bloqueio vem ativado e pode ser desligado pelo usuário; Meredith Whittaker admite que a proteção é incompleta e cobra de Apple, Google e Microsoft controles para agentes de IA."
tags:
  - privacidade
  - agentes
  - segurança
  - google
  - apple
fontes:
  - nome: Olhar Digital (IA)
    url: https://olhardigital.com.br/2026/11/20/internet-e-redes-sociais/signal-bloqueia-capturas-de-tela-para-proteger-mensagens-contra-ia/
  - nome: The Verge (IA)
    url: https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app
rascunho: false
editado_manualmente: false
origem: rotina
---

O Signal passou a bloquear capturas de tela no app para Android e iOS 27. O objetivo declarado é impedir que agentes de IA integrados ao sistema, como o Gemini, do Google, e a Siri, da Apple, leiam mensagens exibidas na tela. Pelo que descrevem as reportagens, a proteção vem ligada, e o usuário pode reativar as capturas nas configurações de segurança do app.

A empresa já tinha usado estratégia parecida no ano passado contra o Recall, da Microsoft. O argumento da presidente do Signal, Meredith Whittaker, em publicação no blog do aplicativo, é que a criptografia de ponta a ponta protege a mensagem em trânsito, mas não impede que o conteúdo já descriptografado na tela seja lido por um agente que roda no próprio sistema operacional. Ela trata isso como uma ameaça à privacidade na camada de aplicativos.

O próprio Signal admite que a medida é parcial. Ela não impede outras formas de acesso, como ler dados direto do sistema de arquivos, e agentes de terceiros, como o Muse, da Meta, podem usar recursos de acessibilidade. Falta documentação de como os agentes obtêm os dados, e a falta de controles adequados impede uma proteção equivalente no macOS. O Signal pede a Apple, Google e Microsoft ferramentas simples para que desenvolvedores restrinjam o que os agentes podem ver, sem quebrar funções do app.

Quem desligar o bloqueio, alerta Whittaker, expõe também as mensagens dos seus contatos.

## Por que importa

Agentes que "veem" a tela quebram o modelo de ameaça de qualquer app que lida com dados sensíveis, e hoje não existe API decente para o app dizer "isto aqui não". Bloquear screenshot é um remendo. Bancos, apps de saúde e ferramentas corporativas devem enfrentar o mesmo problema, e a pressão sobre os donos dos sistemas operacionais para criar permissões específicas para agentes tende a aumentar.
