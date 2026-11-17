---
titulo: "Google libera grátis o Tasks, ex-Spark, modo agente do Gemini que liga para empresas e faz compras, em seis países"
data: 2026-11-17T16:23:00-03:00
resumo: "Antes restrito ao AI Ultra nos EUA, o Tasks roda no Gemini 4 Hydrogen e agora é gratuito nos EUA, Japão, Coreia, Canadá, Austrália e Índia. O Brasil fica de fora."
tags:
  - google
  - agentes
  - produtos
fontes:
  - nome: Google AI (The Keyword)
    url: https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/
  - nome: TechCrunch (IA)
    url: https://techcrunch.com/2026/11/17/google-expands-access-to-gemini-tasks-which-can-help-with-calls-purchases/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google ampliou o acesso ao Tasks, modo do app Gemini que executa tarefas de várias etapas em vez de só conversar. O recurso estreou em maio para testadores com o nome Gemini Spark e depois estava disponível só para assinantes do Google AI Ultra nos EUA, segundo o TechCrunch. Agora, diz o Google, fica gratuito para "centenas de milhões de pessoas" nos EUA, no Japão, na Coreia, no Canadá, na Austrália e na Índia. Por trás está o Gemini 4 Hydrogen. Brasil e português não aparecem no anúncio.

Para usar, basta trocar o seletor de Chat para Task na tela inicial. Nos EUA também dá para mandar mensagem de texto para o Gemini ou encaminhar e-mails para gemini@google.com. O agente se conecta a e-mail, agenda e meios de pagamento. Ele pode ligar para empresas para marcar horário, avisando que é uma IA (os estabelecimentos podem recusar), e fazer compras pelo Agent Payments Protocol (AP2), com cartões Visa e Mastercard tokenizados. A American Express vem depois. O usuário define um teto de gastos, e o Gemini para e pede confirmação antes de passos críticos, como clicar em "Comprar".

O Google diz que as tarefas rodam numa máquina virtual isolada por hardware, no Agent Compute Engine do Google Cloud, com filtros contra prompt injection. A própria empresa admite que nem toda tarefa termina: alguns sites só deixam o agente chegar perto do fim e devolvem o último clique ao usuário.

## Por que importa

Tirar um agente com acesso a cartão e e-mail do plano mais caro e liberar de graça em escala é uma aposta forte do Google, possível porque o Hydrogen é um modelo mais barato de servir. A superfície de ataque cresce na mesma proporção, e a máquina virtual isolada não resolve prompt injection vindo do conteúdo dos sites e e-mails. Para quem tem comércio, a pressão é aceitar ligações e compras feitas por agentes, coisa que a United Airlines, por exemplo, decidiu proibir.
