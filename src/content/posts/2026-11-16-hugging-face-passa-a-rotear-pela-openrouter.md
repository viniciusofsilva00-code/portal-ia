---
titulo: "Hugging Face troca o roteador do Inference Providers pelo da OpenRouter e acaba com chave própria de provedor para LLMs"
data: 2026-11-16T17:40:00-03:00
resumo: "Com o token da Hugging Face, chamadas a modelos abertos passam a ser roteadas pela OpenRouter entre mais de 80 provedores, sem markup; uso de chave própria deixa de valer para LLMs."
tags:
  - open source
  - infraestrutura
  - preços
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/openrouter
rascunho: false
editado_manualmente: false
origem: rotina
---

A Hugging Face anunciou que o Inference Providers deixou de usar roteador próprio e passou a encaminhar as requisições de modelos de linguagem pela OpenRouter, que escolhe entre mais de 80 provedores com base em preço, velocidade e confiabilidade em tempo real e repete a chamada em outro provedor se o primeiro falhar. Para quem já usa o serviço, o código não muda.

O roteador aceita as APIs Chat Completions e Responses da OpenAI e a Messages API da Anthropic, e há guias para Claude Code, Codex, OpenCode, Pi e Hermes Agent. Sufixos no nome do modelo controlam o roteamento: `:fastest`, `:cheapest` ou o nome de um provedor específico. Para aproveitar o cache de prompt, dá para fixar a conversa num provedor com o cabeçalho `X-HF-Session-Id`.

A cobrança é o preço do provedor, na fatura da Hugging Face, sem markup, segundo a empresa; contas PRO recebem US$ 2 mensais de crédito. A mudança que quebra compatibilidade: para LLMs, não é mais possível usar a própria chave de API do provedor. Imagem, vídeo e áudio seguem fora da OpenRouter e mantêm esse suporte.

O post traz números da OpenRouter: modelos open-weight saíram de 26,8% dos tokens da plataforma em outubro de 2025 para 71,7% no fim de setembro de 2026, e o roteamento novo reduziu em 46% os erros de capacidade. Os dados são das próprias empresas.

## Por que importa

Para quem usa modelos abertos via API, o Hub vira uma porta única com failover entre provedores, o que resolve boa parte da instabilidade de servir modelos open-weight. O custo é a dependência de um intermediário: quem tinha contrato direto com um provedor e usava a própria chave pela Hugging Face vai precisar mudar a integração.
