---
titulo: "Filtros de cibersegurança do Claude Opus 5.5 passam a interromper engenharia reversa de TVs e jogos"
data: 2026-10-28T13:55:00-03:00
resumo: "Usuários relatam bloqueios ao modificar firmware de smart TVs e portar jogos; Anthropic confirma filtros de ciber no Opus 5.5, mas não uma proibição específica."
tags:
  - anthropic
  - segurança
  - modelos
fontes:
  - nome: Canaltech
    url: https://canaltech.com.br/inteligencia-artificial/claude-trava-tarefas-de-engenharia-reversa-e-revolta-quem-modifica-jogos-e-tvs/
rascunho: false
editado_manualmente: false
origem: rotina
---

Usuários do Claude reclamam que o assistente começou a interromper tarefas de engenharia reversa de software, jogos e firmware de smart TVs. O modelo começa a processar o pedido e para no meio quando um filtro de segurança é acionado. As queixas ganharam força com um post de u/targaryenNotJon no r/ClaudeAI: o bloqueio ocorreu ao mexer no firmware de uma TV, mas não numa tarefa equivalente com um videogame. Outros relatos citam restrições em análise de programas e em ports de jogos para o navegador.

Segundo o Canaltech, a Anthropic confirmou que o Claude Opus 5.5, lançado em setembro, tem filtros de cibersegurança, mas não anunciou proibição específica de engenharia reversa. Pelo que os usuários descrevem, o Claude continua analisando código com o Ghidra; o que trava é a geração ou o empacotamento de código modificado. Em alguns testes, dizer que o aparelho é do próprio usuário bastou para obter instruções de modificação do webOS.

Os usos citados são comuns entre quem mexe em hardware próprio: remover apps pré-instalados e anúncios de TVs com webOS e Tizen, portar jogos e testar compatibilidade. Parte da comunidade levanta a questão do direito de reparo, incluindo as regras da União Europeia. Os contornos relatados vão de reformular prompts a gerar a estrutura do código com Qwen, GLM ou DeepSeek e usar o Claude só para revisão, ou migrar de vez para modelos abertos rodando localmente.

## Por que importa

Engenharia reversa é dual use por natureza: a mesma técnica serve para tirar anúncio de TV e para desenvolver exploit. Classificadores que não distinguem bem os dois casos geram falsos positivos inconsistentes, como mostra o caso TV versus videogame, e isso empurra pesquisadores de segurança e modders para modelos abertos sem guardrail nenhum. Quem depende de LLM para esse tipo de trabalho deve ter um fallback. E vale acompanhar se a Anthropic publica critérios mais claros.
