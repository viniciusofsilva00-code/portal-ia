---
titulo: "Hugging Face treina LoRAs por harness de agente e leva Qwen3.8-27B de 40% a 64% em tarefas difíceis do SWE-bench Pro"
data: 2026-11-20T15:50:00-03:00
resumo: "Harness adapters são LoRAs treinados com RL dentro de Pi, OpenCode e Hermes Agent; além de acertar mais, reduzem chamadas de ferramenta e tokens. Pesos e receita foram publicados."
tags:
  - open source
  - agentes
  - modelos
  - pesquisa
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/harness-adapters-at-scale
rascunho: false
editado_manualmente: false
origem: rotina
---

A Hugging Face apresentou os harness adapters: adaptadores LoRA treinados com reinforcement learning dentro de um harness de agente específico, com os pesos do modelo base congelados. A tese é que modelos são ajustados para desempenho geral, e casar um modelo com um harness em particular deixa desempenho e eficiência na mesa.

O experimento usou o Qwen3.8-27B e treinou um adaptador para cada um de três harnesses: Pi, OpenCode e Hermes Agent. O treino foi feito com GRPO via `AsyncGRPOTrainer` do TRL, em duas GPUs B200 por adaptador, com recompensa por correção mais um bônus pequeno por eficiência no uso de ferramentas. As tarefas vêm de SWE-smith, SWE-Gym e Tasksmith.

Segundo o post, no subconjunto das 51 tarefas mais difíceis do SWE-bench Pro, o pass@1 do Pi foi de 40% para 64%. No Terminal-Bench 2.1, os ganhos foram de 16,3 pontos (Pi), 14,1 (Hermes) e 6 (OpenCode). Nas tarefas resolvidas pelos dois, os especialistas usaram de 56% a 72% menos chamadas de ferramenta no SWE-bench Pro. Há transferência parcial: o adaptador do Pi também melhora o modelo rodando no OpenCode e no Hermes.

Os três LoRAs também foram combinados num "super-adapter", que funciona nos três harnesses e eleva a média de pass@1 de 39,5% para 49% sem thinking. Fora da distribuição, no AutomationBench, as diferenças ficaram em geral dentro do ruído. Adaptadores, datasets, trajetórias e a receita completa foram publicados no Hub.

## Por que importa

Para quem roda modelo aberto em agente de código, é uma receita reprodutível para ganhar acerto e cortar tokens sem trocar de modelo, a um custo de treino acessível. Os números são da própria Hugging Face, com uma tentativa por tarefa e algumas inconsistências de baseline no texto, então convém validar no próprio fluxo. A ideia de tratar o harness como alvo de fine-tuning deve se espalhar.
