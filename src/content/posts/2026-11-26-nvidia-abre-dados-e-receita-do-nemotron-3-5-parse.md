---
titulo: "Nvidia publica quase 19 milhões de exemplos sintéticos e receita de fine-tuning com GRPO para o Nemotron 3.5 Parse"
data: 2026-11-26T17:10:00-03:00
resumo: "Saem três datasets de gráficos, tabelas e páginas OCR, a receita SFT+GRPO com NeMo e um speculator que multiplica por até 7,62 a vazão do modelo de 0,6B de parsing de documentos."
tags:
  - nvidia
  - open source
  - modelos
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin
rascunho: false
editado_manualmente: false
origem: rotina
---

A Nvidia publicou no blog do Hugging Face o material para quem quer adaptar o Nemotron 3.5 Parse, seu modelo de 0,6B de parâmetros que converte imagens de páginas em dados estruturados. Saíram três datasets sintéticos: Synthetic Charts V1, com 9,98 milhões de gráficos anotados; Synthetic Tables V1, com 1 milhão de tabelas HTML renderizadas; e OCR Synthetic Multilingual v2, com 7,9 milhões de páginas. Cada um traz imagens, anotações, documentação da geração e o formato de treino. O post não informa a licença.

A receita de fine-tuning está no repositório NVIDIA-NeMo/Nemotron. Ela combina SFT no NeMo Automodel e GRPO no NeMo RL, com recompensas separadas para fidelidade do texto, bounding boxes, tabelas, fatos de gráficos e completude. Nos checkpoints de desenvolvimento, segundo a Nvidia, o GRPO reduziu de 126 para 29 as páginas com loop, de 185 para 35 as que batiam no limite de 9.000 tokens, e subiu a nota geral de 66,24 para 71,38. Num exemplo com formulários odontológicos, o pass@1 foi de 0% no modelo base para 95,85% depois do SFT e 96,58% depois do RL.

Na inferência, o DFlash2 é um modelo de rascunho para speculative decoding. Ele propõe até 32 tokens por vez e tem em média 14 aceitos. Numa H200 em BF16, com 2.078 páginas, a vazão foi 7,62 vezes maior com concorrência 1 e 1,52 vez maior com concorrência 512, chegando a 20,44 páginas por segundo. Os números são da própria Nvidia. A comunidade já publicou variantes para tailandês, persa e árabe.

## Por que importa

Parsing de documentos é o primeiro passo de quase todo pipeline de RAG, e um modelo de 0,6B com receita de RL pronta pode ser ajustado a formulários específicos com pouca infraestrutura. O exemplo odontológico mostra o caso de uso típico: um layout de nicho em que modelos genéricos falham. Os datasets abertos servem também para treinar ou avaliar outros modelos de OCR. Antes de usar em produção, vale verificar a licença no card de cada dataset.
