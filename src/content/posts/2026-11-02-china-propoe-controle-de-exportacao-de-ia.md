---
titulo: "China propõe seu primeiro controle de exportação de IA de fronteira, com limiar de 10^26 FLOPs e regras para agentes"
data: 2026-11-02T17:45:00-03:00
resumo: "Anúncio nº 48 do MOFCOM e do MOST inclui 23 tecnologias de IA no catálogo de exportação restrita; registro provisório já vale e consulta pública vai até 15 de novembro."
tags:
  - regulação
  - modelos
  - open source
  - agentes
fontes:
  - nome: Cloud Security Alliance Labs
    url: https://labs.cloudsecurityalliance.org/research/csa-research-note-china-ai-export-controls-announcement-48-2/
  - nome: Hacker News
    url: https://news.ycombinator.com/item?id=50334038
rascunho: false
editado_manualmente: false
origem: rotina
---

Em 16 de outubro, o Ministério do Comércio (MOFCOM) e o Ministério de Ciência e Tecnologia (MOST) da China publicaram o Anúncio nº 48, que abre consulta pública sobre a revisão do Catálogo de Tecnologias Proibidas ou Restritas à Exportação. A proposta acrescenta 40 itens, 23 deles de IA, e ganhou destaque esta semana com uma nota de pesquisa da Cloud Security Alliance que circulou no Hacker News.

Pelo rascunho, um modelo fica restrito (exportação só com licença) se atingir qualquer um destes critérios: 10^26 FLOPs ou mais de treino, 2 trilhões de parâmetros ou mais, ou estar entre os 10 primeiros em rankings públicos ou em volume global de chamadas. Há limiares também para agentes, como planejamento com cadeias de 20 ou mais subtarefas e uso de 200 ou mais ferramentas com 90% de acerto. Geração de código malicioso fica proibida, e descoberta de vulnerabilidades com IA, restrita. Em hardware, entram chips de IA de 14 nm ou menos e clusters com mais de 10.000 aceleradores.

O que já é público por código aberto ou publicação acadêmica fica de fora. Oferecer modelo via API, app ou SaaS a clientes estrangeiros não é controlado; instalar um modelo restrito em infraestrutura fora da China exige licença. Abrir os pesos de um novo modelo restrito pede registro e licenciamento automático, mas o texto não define "código aberto".

A consulta vai até 15 de novembro, mas um registro provisório já vale desde 16 de outubro, inclusive para exportações em andamento.

## Por que importa

Quem usa modelos chineses de pesos abertos, como Qwen, Kimi e GLM, ganha um novo fator de risco: a cadência de lançamentos passa a depender de um registro estatal, e um modelo que bata os limiares pode demorar a sair ou nem sair aberto. Para empresas com operação na China, o simples compartilhamento interno de código com afiliadas no exterior pode exigir registro. Também é a primeira vez que um governo tenta pôr números de capacidade de agentes num controle de exportação.
