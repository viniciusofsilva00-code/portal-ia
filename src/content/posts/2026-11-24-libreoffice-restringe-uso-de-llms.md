---
titulo: "LibreOffice passa a exigir autorização prévia e declaração em commit para código feito com LLMs"
data: 2026-11-24T18:20:00-03:00
resumo: "Nova política da The Document Foundation proíbe LLMs em mensagens de commit, comentários e bug reports e veta seu uso em certas áreas do código."
tags:
  - open source
  - agentes
  - trabalho
fontes:
  - nome: The Document Foundation Blog
    url: https://blog.documentfoundation.org/blog/2026/11/24/updated-and-more-restrictive-policy-for-llm-usage-in-libreoffice-development/
  - nome: Tecnoblog (IA)
    url: https://tecnoblog.net/noticias/libreoffice-endurece-regras-para-codigo-gerado-por-ia-no-projeto/
rascunho: false
editado_manualmente: false
origem: rotina
---

A The Document Foundation (TDF), que mantém o LibreOffice, publicou nesta terça-feira (24) uma política mais restritiva para o uso de LLMs no desenvolvimento do projeto. Contribuições feitas com ajuda de IA continuam permitidas, mas com condições.

As regras principais, segundo o post da TDF assinado por Mike Saunders:

- é preciso pedir permissão antes de usar um LLM no trabalho;
- o uso deve ser declarado nos commits;
- quem envia o patch precisa conseguir explicar, "com suas próprias palavras", cada linha alterada;
- LLMs não podem escrever mensagens de commit, comentários no código, relatórios de bugs ou mensagens para outros membros;
- LLMs não são permitidos em "certas áreas" do código, listadas na wiki do projeto.

O post não diz quem concede a autorização nem a partir de quando a regra vale. A TDF justifica o meio-termo dizendo que não dá para evitar totalmente código assistido por IA, já que ele aparece em dependências e até em compiladores. Diz também que relatórios de segurança usam cada vez mais LLMs e que descartá-los não ajudaria os usuários. Ainda assim, a fundação afirma que o foco segue sendo código escrito por humanos. Ela cita projetos de software livre que fecharam as contribuições ao público e diz esperar nunca chegar a esse ponto. Como lembra o Tecnoblog, o LibreOffice 26.8 foi lançado sem recursos de IA, e isso foi apresentado como diferencial.

## Por que importa

Mantenedores de projetos grandes estão se protegendo do volume de patches gerados por agentes, como já aconteceu no kernel Linux. A regra de explicar cada linha joga o custo de volta para quem contribui, e o veto a LLMs em bug reports e comentários mira o ruído, não o código. Para quem usa agentes de programação em open source, declarar o uso e entender o diff vira pré-requisito, e outros projetos devem copiar o modelo.
