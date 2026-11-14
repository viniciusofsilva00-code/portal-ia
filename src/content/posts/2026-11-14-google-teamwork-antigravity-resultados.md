---
titulo: "Google detalha o /teamwork do Antigravity e lista resultados em matemática, verificação formal e migração de código"
data: 2026-11-14T13:50:00-03:00
resumo: "Sistema multiagente com Gemini 4 Argon teria provado a conjectura de Courtade–Kumar, formalizado as conjecturas de Weil em Lean e portado 800 mil linhas do Zircon para Rust."
tags:
  - google
  - agentes
  - pesquisa
fontes:
  - nome: Google Research
    url: https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google Research publicou um longo balanço do /teamwork, recurso multiagente do Antigravity usado em pesquisa e engenharia junto com especialistas humanos. A maior parte das campanhas rodou sobre o Gemini 4 Argon. Todos os resultados abaixo são relatados pelo próprio Google.

A arquitetura combina três ideias: exploração em paralelo com "falsificadores" automáticos (o verificador de provas Lean 4, suítes de teste não modificadas, simuladores, contadores de hardware); particionamento de contexto, em que cada agente recebe só os arquivos e ferramentas de que precisa e críticos verificam o resultado sem ver o raciocínio de quem o produziu; e padrões de workflow escritos em linguagem natural, como /boost, Long Proof e Deep Review.

Na matemática, a empresa diz que pesquisadores do Google, CUHK, USC e CMU provaram a conjectura de Courtade–Kumar (2013) em generalidade total, com formalização em Lean 4. Com o framework LEAP, o sistema teria formalizado de ponta a ponta as conjecturas de Weil (cerca de 1,8 milhão de linhas de Lean, 28.800 invocações de subagentes). No Deep Review, autores de 578 submissões ao STOC 2027 usaram a ferramenta; numa pesquisa com 70 deles, mais de 30% disseram que ela pegou bugs relevantes em provas.

Em código, uma campanha de duas semanas teria adicionado cerca de 800 mil linhas de Rust seguro ao microkernel Zircon, passando nos testes unitários e bootando em arm64. O decodificador AV1 libgav1 foi reescrito em cerca de 170 mil linhas de Rust, com paridade bit a bit e, após otimização, 20% a 30% mais rápido que a versão C++ com assembly.

O /teamwork, o /boost e o Deep Review já estão disponíveis no Antigravity, e um programa vai dar seis meses de acesso gratuito a 10.000 pesquisadores acadêmicos.

## Por que importa

O ponto técnico mais útil do post é o padrão: agentes só produzem valor confiável quando há um verificador automático e independente no circuito, seja o Lean, seja uma suíte de testes intocada. Isso vale para quem monta pipelines de agentes em qualquer stack. Os números, porém, vêm do próprio Google e ainda precisam ser validados pela comunidade, principalmente os resultados matemáticos.
