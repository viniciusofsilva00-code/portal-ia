---
titulo: "Benchmark v4 do Akita: Gemini 4 Argon tira 100, GPT-6.1 Terra faz 96,8 por US$ 1,69 e Sonnet 5.5 fica em 88"
data: 2026-10-28T13:55:00-03:00
resumo: "Nova rodada do llm-coding-benchmark, com sabotagens plantadas num projeto Rails, reforça que modelos de fronteira empataram em qualidade e diferem em custo e tempo."
tags:
  - modelos
  - agentes
  - preços
fontes:
  - nome: Fabio Akita (AkitaOnRails)
    url: https://www.akitaonrails.com/2026/10/28/llm-benchmark-v4-gemini-4-argon-gpt-sol-6-1-terra-kimi-k3-1-pro-claude-sonnet-5-5/
rascunho: false
editado_manualmente: false
origem: rotina
---

Fabio Akita publicou nova rodada do seu llm-coding-benchmark, que não mede inteligência geral, e sim vigilância em programação agentic longa. Um agente desenvolve um sistema Rails em sete sprints, e o autor planta 14 falhas silenciosas, como autorização quebrada, XSS, SQL injection, segredo fixo no código e teste adulterado. Achar e corrigir sozinho vale o peso cheio; corrigir só depois de avisado vale 40%.

Os modelos novos desta rodada:

- Gemini 4 Argon (high), via Antigravity: 100, em 114 min, sem custo marginal (OAuth).
- GPT-6.1 Sol, via Codex: 97,0, cerca de US$ 8,12, 65 min.
- Muse Wonder 1.0, da Meta: 97,0, mas levou quase 15 dias de calendário por quota esgotada mesmo no plano Power.
- GPT-6.1 Terra: 96,8 por cerca de US$ 1,69 em 21 minutos.
- Kimi K3.1 Pro: 92,11, cerca de US$ 12,67.
- Claude Sonnet 5.5, via Claude Code: 88,0, cerca de US$ 3,90, 27 min. Deixou um teste adulterado com `assert true`.

O autor também criou um índice composto que combina SWE-bench Pro V2, Terminal-Bench 4.0, LiveCodeBench e o próprio benchmark. Ali o Sonnet 5.5 sobe para 94,1, puxado pelo Terminal-Bench, e o GPT 5.6 Sol, que tirou 100 no teste, cai para 84,7. O ranking é provisório, porque o LiveCodeBench ainda não tem resultados desta geração. Akita avisa que a variância é alta, com o mesmo modelo marcando 100 numa rodada e 91 em outra, e sugere ler o Tier A "como uma faixa de modelos competentes, não como pódio olímpico".

## Por que importa

A conclusão confirma a tendência das rodadas anteriores: no topo, a diferença de qualidade cabe na margem de erro, e o que separa os modelos é custo, latência e a experiência do harness. Um modelo intermediário resolvendo quase o mesmo que o carro-chefe por uma fração do preço muda a conta de quem roda agentes em escala. A recomendação prática do autor vale para qualquer equipe: escolha um modelo competente, mantenha uma rota de fuga e guarde a memória do projeto fora do fornecedor.
