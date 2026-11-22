---
titulo: "OpenAI publica a perplexidade interna de seus modelos e propõe usá-la como base de limites comuns entre laboratórios"
data: 2026-11-22T15:02:00-03:00
resumo: "Jakub Pachocki, da OpenAI, sugere a perplexidade de pré-treino como métrica compartilhada para comparar laboratórios e fixar limites de desenvolvimento até haver monitoramento adequado."
tags:
  - openai
  - segurança
  - pesquisa
  - modelos
fontes:
  - nome: OpenAI News
    url: https://openai.com/index/perplexity-and-intelligence
rascunho: false
editado_manualmente: false
origem: rotina
---

A OpenAI publicou neste domingo (22) um texto assinado por Jakub Pachocki, cientista-chefe da empresa, que propõe usar a perplexidade (ou, de forma equivalente, a cross-entropy loss do pré-treino) como métrica comum para comparar o avanço dos laboratórios e embasar padrões de segurança da indústria. Como primeiro passo, a empresa divulgou as próprias medições internas.

Os números, divulgados pela própria empresa e sem verificação independente, são de log-perplexidade no principal conjunto de avaliação interno da OpenAI, que segundo uma nota de rodapé vem do código-fonte da própria empresa. O GPT-3.5, base do ChatGPT original, ficava em torno de 0,99. O GPT-4, que já lidava bem com chain-of-thought, em torno de 0,91. Abaixo de 0,8, diz o texto, surgiram capacidades "transformadoras" em cibersegurança e matemática. Uma atualização na casa de 0,76 começou a produzir resultados relevantes em problemas abertos de matemática. Pachocki espera novas capacidades desse tipo na faixa de 0,68 a 0,7.

A proposta concreta é que os laboratórios combinem "limites comuns", baseados na perplexidade e em outras medidas, que não seriam ultrapassados até se atingir algum marco de monitoramento, como um sucessor dos monitores de chain-of-thought. O texto alerta que a contribuição da própria IA para a pesquisa de pré-treino pode causar uma aceleração repentina, com uma possível "avalanche" de avanços já em 2027. O gráfico publicado mostra queda acentuada da loss em 2026, que a empresa atribui principalmente a investimento de longo prazo em pesquisa e computação, e só em parte à automação.

A própria OpenAI lista as limitações: a métrica é difícil de comparar entre laboratórios com dados de avaliação diferentes, tem ligação fraca com tarefas reais, não captura ganhos de raciocínio e esbarra num piso de entropia desconhecido.

## Por que importa

É raro um laboratório de fronteira divulgar números do pré-treino, e a ideia de um limite mensurável e verificável é mais concreta do que os compromissos vagos de "escalonamento responsável". Mas, por enquanto, é uma proposta unilateral da OpenAI, medida num dataset que só ela tem. Sem um conjunto de avaliação compartilhado e auditável, nenhum concorrente consegue comparar a própria loss com esses números. Vale acompanhar se Anthropic, Google e os demais aderem, e se a previsão de aceleração em 2027 vira argumento para regulação.
