---
titulo: "llama.cpp e ggml chegam à versão 1.0 e passam a seguir versionamento semântico na API C"
data: 2026-11-13T15:00:00-03:00
resumo: "Depois de cerca de 3,5 anos, libllama e libggml ganham a primeira versão major; quebras na API e ABI públicas agora só virão com mudança de versão major."
tags:
  - open source
  - infraestrutura
  - modelos
fontes:
  - nome: Hugging Face Blog
    url: https://huggingface.co/blog/ggml-org/llama-cpp-v1
rascunho: false
editado_manualmente: false
origem: rotina
---

O llama.cpp, motor de inferência local que está por trás de boa parte do ecossistema de modelos abertos rodando em máquina própria, chegou à versão 1.0.0. O anúncio, publicado pela equipe da ggml-org no blog da Hugging Face (com Georgi Gerganov entre os autores), vale para as duas bibliotecas do projeto: `libllama` (llama.cpp) e `libggml` (ggml), ambas agora em v1.0.0.

A mudança de fundo não é uma lista de recursos novos, e o post nem traz uma: é uma política de versionamento. A partir de agora todos os projetos da ggml-org seguem versionamento semântico. Mudança incompatível na API C pública, os headers em `include/`, só entra com versão major; recursos compatíveis, atualizações de backend e suporte a novos modelos entram como minor; correções sem mudança de API, como patch. A equipe diz que vai deixar essas fronteiras de API e ABI mais visíveis para quem depende das bibliotecas.

O post também resume o estado do projeto, que tem cerca de 3,5 anos desde o primeiro commit: mais de 150 variantes de arquitetura suportadas, os principais métodos de speculative decoding, backends que podem ser compilados como bibliotecas dinâmicas e carregados em tempo de execução, e distribuição por Docker, Debian, Homebrew, conda-forge, MacPorts, Winget e XCFramework para iOS e macOS. A CI roda com HF Buckets e HF Jobs e runners próprios cedidos por NVIDIA, AMD, Qualcomm, Arm, IBM e Intel. A equipe diz ainda que usa LLMs no desenvolvimento, sem abrir mão do controle sobre arquitetura e qualidade do código.

## Por que importa

Quem embute o llama.cpp em produto, de apps desktop a mobile, sempre conviveu com uma API que mudava sem aviso, o que obrigava a fixar commits e corrigir bindings a cada atualização. Com garantia de compatibilidade dentro da série 1.x, dá para atualizar backends e ganhar suporte a novos modelos com menos risco, e linkar dinamicamente contra a biblioteca do sistema passa a ser uma opção realista.
