---
titulo: "Cerebras detalha como roda o Kimi K3, de 3 trilhões de parâmetros, em 59 wafers"
data: 2026-10-25T11:20:00-03:00
resumo: "Post técnico da Cerebras mostra a conta de memória para servir um modelo de fronteira aberto: uma ou duas camadas por wafer, pipeline entre chips e KV cache como gargalo."
tags:
  - infraestrutura
  - modelos
  - open source
fontes:
  - nome: Cerebras
    url: https://www.cerebras.ai/blog/how-we-deploy-trillion-parameter-frontier-models-on-cerebras
rascunho: false
editado_manualmente: false
origem: rotina
---

A Cerebras publicou um texto técnico explicando como serve modelos de trilhões de parâmetros no seu hardware, usando como exemplo o Kimi K3, modelo aberto de cerca de 3 trilhões de parâmetros da Moonshot. O post é de 22 de outubro e passou das 230 pontos no Hacker News.

A conta parte de premissas explícitas: pesos quantizados em 4 bits (como no release do Hugging Face), KV cache em 8 bits e requisição média de 256 mil tokens. Cada wafer WSE-3T tem 44 GB de SRAM no chip. O K3 tem 93 camadas, sendo 69 de atenção linear e 24 densas, com cerca de 16 GB de pesos por camada. As camadas densas ficam uma por wafer, sobrando uns 28 GB para KV cache. As lineares, que mantêm estado de tamanho fixo por requisição e não precisam de KV cache por token, ficam duas por wafer. Resultado: 35 + 24 = 59 wafers.

Os pesos ficam parados; só as ativações trafegam entre wafers, via RDMA sobre Ethernet, com cerca de 2 µs por salto. Os wafers formam um pipeline, com requisições diferentes ocupando estágios diferentes ao mesmo tempo. O número de requisições simultâneas é aproximadamente estágios × tamanho do micro-batch, e o teto real de concorrência é o espaço de KV cache nas wafers das camadas densas.

A empresa afirma atingir "1000-2000+ tokens por segundo" em modelos de vários trilhões de parâmetros e defende tokens por segundo por megawatt como métrica de eficiência, mas o texto não traz a configuração de teste nem dados que sustentem esses números.

## Por que importa

É raro um fornecedor de inferência abrir a aritmética de memória por trás do deploy, e ela mostra por que arquiteturas híbridas com atenção linear importam na prática: elas cortam o KV cache, que é o que limita concorrência em contexto longo. Também deixa claro o custo de servir um modelo aberto de fronteira, que exige dezenas de wafers. Os números de desempenho, porém, são da própria Cerebras e ainda pedem verificação independente.
