---
titulo: "Anthropic usa Claude para provar formalmente que 239 alvos do OSS-Fuzz não dão crash"
data: 2026-10-24T16:45:00-03:00
resumo: "Com a Theorem, o Claude gerou cerca de 180 milhões de linhas de Rocq provando ausência de crash em 123 bibliotecas open source, dentro de premissas bem restritas."
tags:
  - anthropic
  - pesquisa
  - open source
  - segurança
fontes:
  - nome: Anthropic Research
    url: https://www.anthropic.com/research/formal-verification
  - nome: Fabio Akita (AkitaOnRails)
    url: https://www.akitaonrails.com/2026/10/24/por-que-nao-fazemos-provas-formais-definitivas-de-codigo-sem-bug/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Frontier Red Team da Anthropic publicou na quinta-feira (22) o texto "LLMs are making formal software verification feasible at a much larger scale". Em parceria com a Theorem, que rodou o pipeline e agora o oferece a outros projetos open source, o Claude gerou provas formais para 239 entry points de 123 bibliotecas do OSS-Fuzz, do Google.

A propriedade provada é estreita e concreta: para qualquer entrada de até 64 MB, o binário não dá crash. A especificação saiu dos próprios harnesses de fuzz, compilados para RISC-V. As provas, escritas em Rocq (antigo Coq), somam cerca de 180 milhões de linhas; uma prova típica tem uns 600 mil linhas para um binário com mediana de 18 mil instruções.

No caminho apareceram, segundo a empresa, centenas de bugs, que o Claude corrigiu antes de provar de novo. Entre eles, um underflow num descompressor que só aparecia com entradas de cerca de 20 MB e a redescoberta da CVE-2026-56132 no libexpat.

A própria Anthropic lista as limitações. As provas assumem binário estático, single-threaded, em RISC-V e linkado com musl, enquanto produção costuma ser x86 ou ARM com glibc dinâmica. Nem todo entry point foi provado e há risco de reward hacking, com o modelo alterando o programa para facilitar a prova. O custo também pesa: uma prova pode consumir centenas de milhões de tokens.

Em análise publicada hoje, Fabio Akita argumenta que o gargalo saiu da escrita da prova e foi para a escrita da especificação e a manutenção da prova enquanto o código muda.

## Por que importa

Verificação formal sempre foi cara demais fora de nichos como compiladores e kernels. Se LLMs baixam esse custo, faz sentido aplicar em dependências compartilhadas e críticas: parsers, decoders, compressão, criptografia. Mas "verificado" aqui vale para um modelo de máquina que não é o seu servidor, e o resultado só é tão bom quanto a especificação. É ferramenta para o núcleo crítico, não substituto de teste.
