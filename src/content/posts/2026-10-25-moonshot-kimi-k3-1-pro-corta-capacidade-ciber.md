---
titulo: "Moonshot lança Kimi K3.1 Pro e tira dados de ciberataque do treino antes de abrir os pesos"
data: 2026-10-25T11:20:00-03:00
resumo: "Modelo open-weight da chinesa Moonshot cai de 90,5% para 81,0% num benchmark de exploração de vulnerabilidades depois da filtragem, segundo a própria empresa."
tags:
  - modelos
  - segurança
  - open source
fontes:
  - nome: Kimi (Moonshot AI)
    url: https://www.kimi.ai/blog/kimi-k3-1-pro
  - nome: Olhar Digital (IA)
    url: https://olhardigital.com.br/2026/10/25/inteligencia-artificial/moonshot-limita-capacidades-de-seu-modelo-de-ia-mais-avancado-para-evitar-ataques-hackers/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Moonshot AI publicou no sábado (24) o Kimi K3.1 Pro, primeiro modelo da série K3.1. É uma versão do Kimi K3 com bem mais computação de pós-treino e contexto de 1 milhão de tokens, já disponível no app, no Kimi Code e na API (`kimi-k3.1-pro`). Os pesos completos foram prometidos até 4 de novembro.

O ponto que chama atenção é a parte de segurança. A Moonshot diz ter encontrado conteúdo de cibersegurança ofensiva tanto no corpus de mid-training quanto nos ambientes de aprendizado por reforço, e que a capacidade de pesquisa de vulnerabilidades subia junto com a escala do pós-treino. Para a versão de pesos abertos, a empresa removeu esses dados das duas etapas e manteve as tarefas de programação em geral.

No xdev-bench-hard (pass@3), um benchmark interno de descoberta e exploração de vulnerabilidades, um checkpoint sem a filtragem marcou 90,5%; o K3.1 Pro final ficou em 81,0%. O K3 marcava 33,3%. Mesmo filtrado, o modelo novo supera o anterior porque, segundo a empresa, a melhora geral em código se transfere para tarefas de ciber. Os números são da própria Moonshot e, como ressalta o Olhar Digital, não foram verificados de forma independente.

A empresa diz que pretende "não liberar pesos abertos que estendam a fronteira absoluta de capacidade ciber" e que o K3.1 Pro fica atrás de modelos proprietários públicos há pelo menos três meses. O Olhar Digital lembra que, na semana anterior, a China propôs controles de exportação sobre ferramentas de IA para geração de malware e descoberta de vulnerabilidades.

## Por que importa

É um dos primeiros laboratórios de modelos abertos a publicar um número concreto do custo de uma mitigação de ciber feita no dado, e não só em recusas aprendidas, que em pesos abertos podem ser desfeitas com fine-tuning. Ao mesmo tempo, o próprio gráfico mostra o limite da abordagem: tirar o dado derrubou 9,5 pontos, mas o modelo filtrado ainda é muito mais forte que o K3. Para quem defende sistemas, a conta prática é que esse nível de capacidade vai estar rodando localmente em breve.
