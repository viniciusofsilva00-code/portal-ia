---
titulo: "Grupo CyberCartel usou agentes com Claude e Grok contra mais de 400 alvos financeiros na América Latina"
data: 2026-10-24T16:45:00-03:00
resumo: "Relatório da Straiker descreve o CARLIY0S, sistema que distribui tarefas de ataque entre agentes de IA; Anthropic bloqueou a credencial usada e a xAI diz que está analisando."
tags:
  - segurança
  - agentes
  - anthropic
fontes:
  - nome: Canaltech (IA)
    url: https://canaltech.com.br/inteligencia-artificial/com-comandos-no-claude-e-grok-hackers-atacam-mais-de-400-instituicoes-financeiras/
rascunho: false
editado_manualmente: false
origem: rotina
---

A empresa de cibersegurança Straiker publicou nesta semana uma investigação sobre o CyberCartel, grupo criminoso ativo desde pelo menos 2012 e conhecido por mirar o setor financeiro latino-americano. Segundo o relatório, repercutido pelo Canaltech, o grupo montou um sistema chamado CARLIY0S que divide o trabalho de ataque entre vários agentes de IA e precisa de pouca intervenção humana.

A divisão de tarefas é bem definida. O Claude, da Anthropic, acessado via Cursor, fazia o papel de coordenador: quatro agentes baseados nele procuravam falhas, escreviam exploits e avaliavam estratégias. O Grok, da xAI, cuidava do reconhecimento, com cinco agentes alimentando um banco de dados. O Kimi, da Moonshot AI, também aparece. Para contornar as recusas dos modelos, os operadores alegavam teste de segurança autorizado ou pesquisa acadêmica; quando um modelo recusava, o sistema passava a tarefa para outro ou usava código malicioso pronto.

A Straiker afirma que mais de 400 alvos (bancos, empresas de pagamento e fintechs) foram atacados em poucos meses, mas não diz quantos foram de fato invadidos nem identifica as instituições. Em 24 de setembro, os pesquisadores acessaram uma cópia do banco "FinancialSoft", com 4.493 registros, entre eles 903 números de conta, 391 chaves de API e 67 senhas em texto puro. Também foram listadas mais de 200 vulnerabilidades, incluindo zero-days. Parte dos dados envolve o SPEI, sistema de transferências do México. Não há confirmação pública de bancos brasileiros entre as vítimas.

A Anthropic investigou e bloqueou a credencial usada para acessar o Claude. A xAI foi notificada e diz estar analisando o caso. Os números vêm da Straiker e ainda não foram confirmados de forma independente.

## Por que importa

Esse é o padrão que os laboratórios vinham prevendo: não um modelo "malicioso", mas um orquestrador que troca de fornecedor quando um deles recusa. Bloquear uma conta resolve pouco se o atacante tem fallback para outro modelo. Para bancos e fintechs da região, incluindo as brasileiras, o recado prático é que o volume de varredura e de exploração automatizada vai subir, e chaves de API e senhas expostas viram alvo em escala.
