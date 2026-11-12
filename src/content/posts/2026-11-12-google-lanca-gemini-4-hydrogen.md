---
titulo: "Google lança Gemini 4 Hydrogen, modelo rápido para agentes a US$ 1,50/US$ 7,50 por milhão de tokens, e o leva à Busca"
data: 2026-11-12T15:45:00-03:00
resumo: "Hydrogen é o modelo de execução da família Gemini 4, ao lado de Carbon e Argon: 1 milhão de tokens de contexto com preço fixo, nível xhigh de raciocínio e estreia global na Busca."
tags:
  - google
  - modelos
  - agentes
  - preços
fontes:
  - nome: Google DeepMind
    url: https://deepmind.google/blog/introducing-gemini-4-hydrogen/
  - nome: Google AI (The Keyword)
    url: https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google apresentou nesta quinta-feira (12) o Gemini 4 Hydrogen. A empresa o chama de "daily driver" para fluxos com agentes. Carbon e Argon, os modelos de fronteira da família, cuidam do raciocínio longo. O Hydrogen fica com a execução rápida: pode trabalhar sozinho ou como executor desses modelos maiores. No Google Antigravity, um Orchestrator alterna entre Carbon e Hydrogen na mesma sessão. Segundo o Google, essa combinação chegou perto da taxa de sucesso do Carbon no Terminal-Bench 4.0 gastando em média 24% menos cota e terminando as tarefas 19% mais rápido.

O preço é de US$ 1,50 por milhão de tokens de entrada e US$ 7,50 por milhão de saída. O valor não muda em toda a janela de 1 milhão de tokens, e a saída também pode chegar a 1 milhão de tokens. São quatro níveis de raciocínio: low, medium, high (o padrão) e o novo xhigh.

Os números de desempenho são todos da própria empresa. O modelo marca 51 no Artificial Analysis Intelligence Index no modo high, contra 50 do Argon, e 54 no xhigh. No Terminal-Bench 4.1 faz 57%, contra 18,2% do Gemini 3.8 Flash, e seria cerca de 2,5 vezes mais rápido que ele. O Google também diz que o Hydrogen inventa mais de 5 vezes menos afirmações falsas e é 2,3 vezes mais resistente a prompt injection indireto no benchmark Gray Swan IPI.

A distribuição começou no mesmo dia: Gemini API, AI Studio, Antigravity para assinantes Pro e Ultra, Gemini para empresas, app do Gemini e Google Sheets. Na Busca, o Hydrogen chega a todos os usuários do mundo. Segundo o Google, a Busca passa a entender perguntas compostas, dispara mais consultas paralelas por subtema e devolve mais tabelas, imagens e ferramentas interativas.

## Por que importa

Com US$ 1,50/US$ 7,50 e preço fixo até 1 milhão de tokens, o Hydrogen disputa a faixa dos modelos de trabalho do dia a dia, onde está o grosso do custo de quem roda agentes em produção. O padrão de um modelo caro planejando e um barato executando já era comum, e agora vem embutido no produto. Os benchmarks são do próprio Google e precisam de confirmação independente, principalmente os de segurança. Para quem paga API, vale testar o Hydrogen no lugar do Carbon nas tarefas de execução e comparar o custo por tarefa concluída.
