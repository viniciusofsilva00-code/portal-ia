---
titulo: "Pandex oferece legislação e jurisprudência europeias para agentes via API e servidor MCP"
data: 2026-11-22T15:32:00-03:00
resumo: "Serviço indexa 2,8 milhões de documentos jurídicos da UE e de sete países, com versões históricas; beta gratuito tem 1.000 requisições por dia. Empresa por trás não se identifica."
tags:
  - agentes
  - regulação
  - produtos
fontes:
  - nome: Pandex
    url: https://www.pandex.io/
  - nome: Hacker News
    url: https://news.ycombinator.com/item?id=50593481
rascunho: false
editado_manualmente: false
origem: rotina
---

O Pandex, que chegou ao topo do Hacker News com 132 pontos, é um serviço que entrega legislação e decisões de tribunais superiores europeus para buscas e agentes de IA, via API REST ou servidor MCP. Segundo o autor da postagem, o problema que ele quer resolver é que os modelos costumam errar o direito europeu, citando versões revogadas ou inventando texto.

Pela descrição do próprio site, a base cobre a União Europeia, França, Alemanha, Holanda, Reino Unido, Áustria, Suíça e Luxemburgo, além do Conselho da Europa, e soma 2,8 milhões de documentos. Espanha, Itália, Irlanda, Bélgica, Polônia, Tchéquia, Estônia e Finlândia aparecem como próximas. O serviço oferece busca por palavra-chave, semântica e híbrida em qualquer idioma, consulta da lei como ela estava numa data específica, grafo de citações e saída em Markdown ou JSON. O site cita compatibilidade com Claude, Cursor, GitHub Copilot, Windsurf, Zed e Gemini.

O plano gratuito, enquanto durar o beta, dá 1.000 requisições por dia. O uso pago custa €1 por mil requisições, e o corpus completo em arquivos sai a partir de €1.000 por mês.

Apesar do "Official" no título da postagem, o Pandex não é um serviço da UE. "Oficial" se refere às fontes, que o site diz coletar direto das instituições que publicam os textos. A página não diz qual empresa está por trás do serviço, e um comentarista no HN apontou a falta do imprint, a identificação de responsável exigida em vários países europeus. Outros lembraram que texto de lei sem jurisprudência e prática administrativa resolve só parte do problema.

## Por que importa

Para quem constrói agentes que lidam com compliance, como o AI Act, ter o texto vigente numa ferramenta MCP reduz a chance de o modelo citar artigo desatualizado ou inventado. O ponto fraco é a confiança: num domínio em que errar custa caro, um fornecedor que não se identifica e um corpus sem verificação independente são riscos que precisam entrar na conta antes de qualquer uso em produção.
