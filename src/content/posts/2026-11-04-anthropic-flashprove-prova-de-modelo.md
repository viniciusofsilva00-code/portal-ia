---
titulo: "Anthropic publica FlashProve, protótipo aberto que prova criptograficamente qual modelo gerou uma resposta"
data: 2026-11-04T15:30:00-03:00
resumo: "Pesquisa da Anthropic propõe \"provable inference\": o provedor se compromete com um conjunto de pesos e gera, por resposta, uma prova verificável em CPU sem expor os pesos."
tags:
  - anthropic
  - pesquisa
  - segurança
  - open source
fontes:
  - nome: TechCrunch
    url: https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/
  - nome: GitHub (anthropics/FlashProve)
    url: https://github.com/anthropics/FlashProve
  - nome: Olhar Digital
    url: https://olhardigital.com.br/2026/11/03/inteligencia-artificial/anthropic-quer-impedir-que-empresas-escondam-qual-ia-estao-usando/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Anthropic divulgou nesta terça-feira (3) o FlashProve, um sistema de pesquisa para o que seus autores chamam de "provable inference": uma prova criptográfica de que determinada saída saiu de um modelo específico. O problema atacado é simples de enunciar. Hoje quem usa uma API não tem como verificar se a resposta veio mesmo do modelo contratado, e nada impede um provedor de trocar em silêncio por um modelo mais barato para economizar, ou por um mais caro para inflar benchmark.

Pelo repositório no GitHub, o esquema tem três etapas. O provedor publica um identificador de compromisso (commitment) amarrado a um conjunto de pesos, sem revelá-los. Para cada resposta, a GPU do provedor gera uma prova de que aquela saída é do modelo comprometido. Qualquer pessoa verifica a prova numa CPU comum, em segundos, sem acesso aos pesos. A solidez do esquema foi demonstrada formalmente em Lean 4.

O protótipo roda o Llama 4 Maverick em tamanho completo, com contexto de 1.024 tokens, numa única H100, a cerca de 110 tokens/s de prefill em lotes de 24 requisições. Os requisitos ainda são pesados: cerca de 330 GB de RAM para os pesos reais do Maverick.

O código está sob licença Apache 2.0, mas o repositório se declara um artefato de pesquisa sem manutenção. Segundo o TechCrunch, os autores descrevem o trabalho como "progresso intermediário" e não há plano de adoção pela Anthropic nem por outro laboratório.

## Por que importa

Verificar a origem de uma resposta é um pedaço que falta na cadeia de confiança de APIs de IA, sobretudo quando revendedores, wrappers e provedores de inferência servem modelos de terceiros. O fato de a verificação rodar em CPU e não exigir os pesos torna a ideia viável até para modelos fechados. Por outro lado, sem laboratórios dispostos a publicar compromissos e a pagar o custo de gerar provas, isso continua sendo pesquisa, não garantia.
