---
titulo: "Anthropic lança Claude Ship, com agentes que corrigem PRs e aprovam mudanças de código por política"
data: 2026-11-24T17:52:00-03:00
resumo: "Claude Ship junta Code Review, PR Steward e Claude Approvals; a novidade é deixar um agente aprovar merges seguindo uma política escrita no repositório."
tags:
  - anthropic
  - agentes
  - produtos
fontes:
  - nome: TechCrunch (IA)
    url: https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/
  - nome: Olhar Digital (IA)
    url: https://olhardigital.com.br/2026/11/23/inteligencia-artificial/anthropic-lanca-ia-que-revisa-corrige-e-aprova-alteracoes-em-codigos/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Anthropic anunciou na segunda-feira (23) o Claude Ship, um conjunto de agentes que cobre o que acontece depois que o pull request é aberto: revisão, correção e aprovação. São três peças:

- **Code Review**, que já estava disponível de forma geral e aponta problemas nas mudanças propostas;
- **PR Steward** (beta), que resolve checks de CI quebrados, conflitos de merge e os apontamentos do Code Review. A cada push, comenta o que mudou e como reverter;
- **Claude Approvals** (beta), que aplica uma política de aprovação escrita em linguagem natural num arquivo dentro do próprio repositório. A política pode usar os achados do Code Review ou classificadores da empresa.

Revisão de código por IA já existia em várias ferramentas. A diferença aqui é a aprovação: o agente passa a decidir o que está pronto para merge. A equipe define onde o Claude Ship roda, a profundidade da revisão (Quick, Standard ou Deep) e quais mudanças sobem para um humano. A própria Anthropic recomenda começar com as aprovações em modo só de observação, num único repositório e com limite de gasto mensal.

O lançamento vale para os planos Team e Enterprise do Claude, com repositórios no GitHub. O TechCrunch não informa preços. A justificativa da empresa é o volume: segundo a Anthropic, no time do Claude Code "o Claude escreve a maior parte do nosso código", e a revisão humana de cada linha virou gargalo. A reportagem não traz testes independentes nem dados sobre a precisão das aprovações.

## Por que importa

Isso conversa com o estudo de Harvard que mostrou PRs demorando mais para entrar quando a IA aumenta o volume de código. Automatizar a aprovação ataca esse gargalo, mas desloca o risco para a política e para os classificadores: quem escreve o arquivo de regras passa a decidir, na prática, o que vai para produção sem olho humano. O modo observação é o caminho sensato para medir os falsos positivos e negativos antes de confiar no agente.
