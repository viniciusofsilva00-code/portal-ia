---
titulo: "DeepMind lança AlphaGenome 2, que prevê o efeito de variantes de DNA em tipos específicos de célula"
data: 2026-11-11T15:05:00-03:00
resumo: "Sucessor do AlphaGenome troca médias de tecido por previsões condicionadas a cada tipo celular e chega à API para pesquisa não comercial, junto com o AlphaGenome Atlas."
tags:
  - google
  - pesquisa
  - modelos
fontes:
  - nome: Google DeepMind
    url: https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/
  - nome: The Verge (IA)
    url: https://www.theverge.com/ai-artificial-intelligence/1031524/google-deepmind-alphagenome-2-genetic-ai-model
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google DeepMind apresentou o AlphaGenome 2, sucessor do modelo de sequência de DNA lançado no ano passado. Como o anterior, ele recebe uma sequência de até 1 milhão de letras e prevê como ela, e suas variantes, afetam a regulação gênica. A diferença está no desenho: o primeiro AlphaGenome produzia saídas fixas para tecidos e linhagens celulares em bloco; o novo recebe também uma condição-alvo (tecido, tipo ou estado celular) e prevê para uma condição de cada vez.

Na prática, isso desce da média de um tecido para tipos de célula individuais, incluindo células parecidas entre si. O modelo também passa a imputar medições ausentes (a partir da expressão gênica de célula única, estimar acessibilidade da cromatina, por exemplo), ganha metilação de DNA como saída e tem um encoder que permite condicioná-lo aos dados de célula única do próprio pesquisador sem retreino. O treino usou mais de 100 milhões de perfis celulares de 68 tecidos, humanos e de camundongo.

Segundo a própria DeepMind, no benchmark TenK10K, com 28 tipos de células imunes, a fração de variantes causais identificadas subiu de 16% para 30% e a de efeitos direcionais, de 23% para 43%, na comparação com o AlphaGenome 1 ajustado para dados de célula única. Junto veio o AlphaGenome Atlas, com previsões para todas as 9 bilhões de trocas possíveis de uma letra no genoma humano.

O acesso para pesquisa não comercial já está aberto pela AlphaGenome API, com tutoriais no Colab; o uso comercial está em preview privado. A empresa ressalta que os modelos não foram validados nem aprovados para uso clínico ou diagnóstico.

## Por que importa

A maioria das variantes ligadas a doenças em estudos de associação fica fora de genes e age só em certos tipos celulares, e é exatamente aí que um modelo condicionado por célula pode ajudar a priorizar o que testar em laboratório. Os números ainda são da DeepMind, e o acesso não comercial via API, sem pesos abertos, limita quem consegue auditar o modelo a fundo.
</content>
</invoke>
