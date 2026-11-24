---
titulo: "Amazon relata agentes de IA rodando no Cairn que acharam e exploraram um zero-day com uma ordem de uma linha"
data: 2026-11-24T18:20:00-03:00
resumo: "Ator ligado à China deixou uma instância do Cairn aberta na internet; agentes acharam path traversal em app de imagem médica e viraram root em cerca de 11 minutos."
tags:
  - segurança
  - agentes
  - amazon
  - open source
fontes:
  - nome: AWS Security Blog
    url: https://aws.amazon.com/blogs/security/chinese-nexus-actors-cairn-ai-agents-found-a-zero-day-on-their-own/
  - nome: Ars Technica (IA)
    url: https://arstechnica.com/security/2026/11/amazon-says-hackers-ai-agents-found-and-exploited-0-day-with-little-human-input/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Amazon Threat Intelligence publicou, em post assinado pelo CISO CJ Moses, a análise de uma campanha em que agentes de IA acharam e exploraram uma vulnerabilidade inédita praticamente sem intervenção humana. Em 10 de setembro, a equipe achou uma instância do Cairn, framework open source de pentest autônomo, exposta na internet sem autenticação. Com isso, prompts, configurações e saídas dos agentes ficaram visíveis. Os prompts estavam em chinês simplificado e os scripts usavam o fuso da China. A Amazon atribui a ação a um ator ligado à China com confiança "moderada".

O operador passou aos agentes uma lista de IPs de universidades do Leste Asiático, fora da China continental, e o objetivo de "obter acesso a shell". Contra um Redis sem autenticação, os agentes fizeram 148 ações em cerca de 16 horas, incluindo abuso de replicação, fuga do sandbox de scripts e Log4Shell, sem sucesso. Em outro servidor, testaram mais de 30 mil combinações de credenciais montadas a partir de uns 80 nomes reais de usuários. Também falharam.

O resultado foi outro contra uma aplicação open source de IA para imagens médicas. Os agentes mapearam a API e acharam um path traversal num endpoint de upload. Em cerca de 11 minutos, já conseguiam gravar arquivos arbitrários. Depois gravaram um reverse shell em `sitecustomize.py` e dispararam um endpoint de treino, o que deu shell como root. Segundo a Amazon, a falha não tinha correção nem advisory. Os mantenedores foram avisados e publicaram um fix. Depois, o operador usou o zero-day para pivotar para a rede de uma segunda universidade.

## Por que importa

O dado relevante é o tempo: de mapear a API a ter escrita no disco em minutos, e persistência de 16 horas sem pausa. Isso já é mais rápido do que muitos SOCs conseguem triar um alerta. A recomendação da própria Amazon é priorizar detecções de alta confiança com resposta automatizada. Para quem expõe apps de ML na internet, endpoints de upload e de treino viraram alvo óbvio. Ferramentas feitas para defesa, como o Cairn, já estão em uso ofensivo.
