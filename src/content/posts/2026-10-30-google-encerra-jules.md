---
titulo: "Google encerra o Jules: agente de programação para de aceitar tarefas em 11 de novembro e sai do ar no fim do ano"
data: 2026-10-30T13:50:00-03:00
resumo: "O Jules, agente assíncrono de código do Google, fica só leitura a partir de 11 de novembro e encerra em 31 de dezembro. Aprendizados vão para o Antigravity."
tags:
  - google
  - agentes
  - produtos
fontes:
  - nome: Jules (changelog oficial)
    url: https://jules.google/docs/changelog/2026-10-29
  - nome: Tecnoblog
    url: https://tecnoblog.net/noticias/google-vai-encerrar-agente-de-ia-que-programa-sozinho/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google anunciou no changelog oficial do Jules, publicado em 29 de outubro, que vai desligar o agente de programação. O cronograma tem duas datas: até 11 de novembro de 2026 ainda dá para concluir sessões; depois disso o serviço fica em modo somente leitura até 31 de dezembro de 2026, quando sai do ar.

O Jules foi apresentado no fim de 2024 como experimento baseado no Gemini 2.0. A proposta era trabalhar em segundo plano: recebia uma tarefa, montava um plano, editava arquivos, rodava testes numa máquina virtual e devolvia as mudanças para revisão. Em agosto de 2025 saiu do beta e ganhou planos pagos. O anúncio não menciona reembolso nem o que acontece com as assinaturas.

Para quem usou, o Google publicou um roteiro de exportação. Ele passa pelo Jules Tools (a CLI, instalada via npm) e por um prompt para ser executado num agente de linha de comando, que gera uma pasta `~/jules-export` com configurações, variáveis de ambiente, tarefas agendadas, repositórios conectados, memórias, scripts de setup e o histórico das sessões (prompt, plano, log e patches). Código, branches e pull requests já estão no GitHub e não são afetados. A própria página avisa que o arquivo de variáveis de ambiente contém os valores em texto e não deve ir para repositório.

Segundo o Google, o que foi aprendido com o Jules alimenta outros produtos, incluindo o Antigravity, sua plataforma de desenvolvimento centrada em agentes. Como lembra o Tecnoblog, a empresa não disse se o Antigravity é o substituto direto nem anunciou migração automática. Em maio, o Project Mariner teve o mesmo destino.

## Por que importa

Quem integrou o Jules em fluxo de trabalho, especialmente tarefas agendadas, tem menos de duas semanas para migrar. É mais um sinal de que o Google está consolidando agentes num produto só em vez de manter experimentos paralelos. E serve de lembrete prático: ferramenta de agente hospedada por terceiro pode sumir em semanas, então vale manter configuração e histórico exportáveis desde o início.
