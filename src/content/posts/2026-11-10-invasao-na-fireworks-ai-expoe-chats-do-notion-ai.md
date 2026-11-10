---
titulo: "Invasão na Fireworks AI expõe conversas do Notion AI e dados de clientes da plataforma de inferência"
data: 2026-11-10T15:40:00-03:00
resumo: "Notion diz que menos de 1% dos workspaces pode ter sido afetado; Fireworks liga o ataque a grupo de \"LLMJacking\" e admite acesso a segredos, datasets e pesos."
tags:
  - segurança
  - infraestrutura
  - privacidade
fontes:
  - nome: Notion
    url: https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor
  - nome: Fireworks AI
    url: https://fireworks.ai/security/bulletins/october-2026-security-incident-update
rascunho: false
editado_manualmente: false
origem: rotina
---

O Notion publicou um aviso sobre um incidente de segurança na Fireworks AI, fornecedora de infraestrutura de IA que ele usava. Segundo o Notion, a Fireworks informou em 6 de novembro que invasores podem ter acessado dados de clientes e confirmou o conjunto de dados afetado em 8 de novembro.

O que vazou, de acordo com o Notion, foram transcrições de conversas com o Notion AI usadas no recurso Insights, que classifica o uso de IA dos próprios clientes. As transcrições não tinham autor nem workspace associados e não incluíam resultados de chamadas de ferramentas. Menos de 1% dos workspaces pode ter sido afetado. O Notion já tinha se desconectado da Fireworks em 3 de novembro, apagado os dados lá, parado a inferência de modelos abertos servida pela empresa e interrompido treinos do programa LEAP. Donos de workspaces afetados foram contatados e podem baixar as conversas expostas. A recomendação é tratar os dados como comprometidos e rotacionar senhas ou chaves coladas no Notion AI.

O boletim da Fireworks, atualizado em 9 de novembro, amplia o quadro: além de segredos usados em jobs de avaliação, foram afetados metadados de recursos, dados de cobrança e, para um grupo limitado de contas, datasets e pesos de modelos incompletos. Em 24 de outubro, o invasor usou um incidente num provedor de nuvem terceirizado para chegar a máquinas de desenvolvimento da Fireworks. A empresa atribui o ataque a um grupo que revende acesso não autorizado a LLMs ("LLMJacking"). Inferência, Training SDK e Nexus, com retenção zero por padrão, não foram afetados, segundo a Fireworks.

## Por que importa

O caso mostra o risco da cadeia de fornecedores de IA: o cliente do Notion nunca escolheu a Fireworks, mas suas conversas passaram por ela. Quem contrata plataformas de inferência ou fine-tuning deve exigir retenção zero, saber onde ficam datasets e pesos e manter segredos fora de jobs hospedados. E vale o conselho de sempre: não cole credenciais em chat de IA.
