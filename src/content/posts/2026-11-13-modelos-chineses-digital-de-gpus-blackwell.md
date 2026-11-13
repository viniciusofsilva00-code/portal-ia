---
titulo: "Análise de pesos sugere que DeepSeek-V4, Kimi K3 e MiniMax-M3 foram inicializados em GPUs Blackwell, sob controle de exportação"
data: 2026-11-13T15:00:00-03:00
resumo: "Will DePue usa o padrão do gerador aleatório do PyTorch, que muda com o número de SMs da GPU, para identificar o hardware em que seis modelos chineses abertos foram inicializados."
tags:
  - pesquisa
  - china
  - nvidia
  - regulação
  - open source
fontes:
  - nome: Unemployment Labs
    url: https://unemploymentlabs.com/checkpoint-forensics
rascunho: false
editado_manualmente: false
origem: rotina
---

Will DePue publicou pela Unemployment Labs, na quinta-feira (12), uma análise forense de pesos abertos que aponta seis modelos chineses como inicializados em GPUs Nvidia Blackwell, cuja venda à China é proibida pelos EUA. O texto foi bastante discutido no Hacker News.

O método parte de um detalhe de implementação. O PyTorch inicializa pesos com o gerador Philox, e nas GPUs Nvidia o trabalho é dividido entre threads conforme o número de streaming multiprocessors: 132 no Hopper, 148 no B200/B300 e 152 no GB200/GB300. Assim, a mesma seed coloca os mesmos números aleatórios em posições diferentes em cada família de chip. Alguns pesos, como os de tokens raros, mudam pouco no treino, e o autor procura a combinação de seed e layout que melhor reproduz esses valores, validando em pesos separados e em hardware alugado.

Os seis modelos com leitura Blackwell são DeepSeek-V4-Flash e V4-Pro, Kimi K3 e K3.1-Pro, MiniMax-M3 e Ling-3.1-flash, da Ant Group. As versões anteriores dessas famílias aparecem como Hopper, assim como modelos recentes de Alibaba, Zhipu, Tencent, Xiaomi e StepFun. O teste mais fraco entre os seis chega a 20 sigma, contra um patamar de acaso de cerca de 8, e o método acertou o hardware nos 24 modelos com configuração pública usados como controle. A estimativa de escala, que o autor diz não ser confiável, é de cerca de 12 mil GPUs Blackwell nas cinco rodadas de treino.

O próprio autor delimita o que o resultado não prova: a digital mostra onde os pesos foram inicializados, não todo o hardware de treino, e não diz onde os chips estavam, de quem eram ou se houve contrabando ou violação de regra de exportação. O código é público, mas o trabalho não foi revisado por terceiros.

## Por que importa

O controle de exportação de chips é a principal ferramenta dos EUA contra os laboratórios chineses, e até aqui a discussão sobre sua eficácia dependia de apreensões e relatos anônimos. Uma técnica reprodutível que lê o hardware a partir de pesos publicados dá a reguladores, e a quem audita modelos, um instrumento novo, que chega justo na semana em que o contrabando de GPUs domina a crise na Nvidia. Também é um lembrete de que pesos abertos vazam metadados que ninguém pretendia publicar.
