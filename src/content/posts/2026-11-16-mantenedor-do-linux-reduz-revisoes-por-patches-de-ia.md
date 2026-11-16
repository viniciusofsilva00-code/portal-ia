---
titulo: "Mantenedor de memória do Linux deixa de revisar código fora de suas áreas por excesso de patches gerados por IA"
data: 2026-11-16T12:20:00-03:00
resumo: "Lorenzo Stoakes, da Arm, segue mantendo quatro áreas de gerenciamento de memória do kernel, mas parou de revisar outros subsistemas por causa do volume de séries de patches feitas com IA."
tags:
  - open source
  - agentes
  - trabalho
fontes:
  - nome: Tecnoblog (IA)
    url: https://tecnoblog.net/noticias/veterano-do-linux-reduz-atividades-no-projeto-por-causa-da-ia/
rascunho: false
editado_manualmente: false
origem: rotina
---

Lorenzo Stoakes, engenheiro britânico da Arm e um dos nomes de referência em gerenciamento de memória no kernel Linux, avisou que vai reduzir sua participação no projeto. Em mensagem na lista oficial do kernel (LKML) em 10 de novembro, ele disse que não tem mais tempo para revisar código fora das áreas que mantém, por causa do volume de séries de patches geradas por IA. Pediu desculpas e explicou que quer deixar a caixa de entrada administrável, "dadas as tendências atuais".

Stoakes não está saindo do Linux, segundo o Tecnoblog. Ele continua mantenedor de quatro áreas de gerenciamento de memória e é autor do livro *The Linux Memory Manager*. O que muda é que deixa de revisar e contribuir em subsistemas fora da sua responsabilidade. Em entrevista ao The Register, citada pelo Tecnoblog, ele disse que a IA é parte do motivo e que o ritmo de notificações saiu de algo semanal para diário.

O problema, segundo a reportagem, não é a IA em si, e sim as ferramentas que caçam bugs e geram relatórios e correções em massa. Muitos tratam de falhas de baixa prioridade, já enfileiradas ou já corrigidas. Algumas apontam problemas legítimos, mas num ritmo que os desenvolvedores não estão acostumados a absorver. Linus Torvalds já tinha alertado que a IA estava sobrecarregando os mantenedores, embora tenha dito que algumas partes do kernel já estariam "em equilíbrio" com essas ferramentas.

## Por que importa

Revisão é o gargalo de qualquer projeto open source, e gerar patch ficou quase de graça, mas revisar não. Quando um revisor experiente se recolhe à própria área, o custo aparece em outros subsistemas, que perdem olhos qualificados. Quem usa agentes para mandar correções a projetos públicos deveria filtrar antes o que já foi corrigido ou não tem impacto, ou vai continuar transferindo trabalho para quem menos tem tempo.
