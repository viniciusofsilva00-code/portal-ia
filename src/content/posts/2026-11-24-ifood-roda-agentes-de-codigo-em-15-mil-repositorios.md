---
titulo: "iFood roda agentes de código com GPT-5.6 Luna em mais de 15 mil repositórios a US$ 0,04 por execução, segundo a OpenAI"
data: 2026-11-24T17:52:00-03:00
resumo: "Plataforma interna do iFood executa agentes em sandboxes isoladas e entrega merge requests; caso publicado pela OpenAI cita 25 mil execuções e 27 bilhões de tokens."
tags:
  - brasil
  - agentes
  - openai
fontes:
  - nome: OpenAI News
    url: https://openai.com/business/customer-stories/ifood
rascunho: false
editado_manualmente: false
origem: rotina
---

A OpenAI publicou um estudo de caso sobre o iFood, que montou uma plataforma interna, a Remote Agents Platform, para rodar agentes de código em escala nos seus mais de 15 mil repositórios. O problema era conhecido: cada time tinha sua solução para tarefas repetitivas, como checar padrões internos, corrigir dependências vulneráveis ou rodar análises, e nenhuma tinha um runtime de execução compartilhado. "Resolver isso para um repositório é fácil. O desafio é resolver em escala", diz Victor Coelho, engenheiro de software sênior do iFood.

A arquitetura mistura passos determinísticos e agênticos. Uma API REST recebe o prompt e os requisitos de ambiente. Cada execução vai para um runner isolado com Ubuntu, várias linguagens e acesso a Nexus, GitLab, Docker, Snyk, Kubernetes e AWS. Clonar o repositório, importar skills e criar a branch são passos fixos, assim como abrir o merge request no final. Entre eles, o modelo trabalha dentro da sandbox. Structured Outputs valida se o resultado segue um contrato, o que permite classificar sucesso ou falha automaticamente.

O modelo escolhido foi o GPT-5.6 Luna, pelo equilíbrio entre capacidade, eficiência e velocidade. O principal uso é segurança: um produto interno varre todos os repositórios atrás de dependências vulneráveis e tenta corrigi-las. Segundo Coelho, a precisão das correções mais que dobrou depois da migração. Os números divulgados são mais de 25 mil execuções, mais de 27 bilhões de tokens e custo médio de US$ 0,04 por execução. São dados de um material comercial da própria OpenAI, sem verificação independente.

## Por que importa

O caso é útil menos pelo marketing e mais pelo desenho. O gargalo era o runtime, não o caso de uso. Encapsular o agente entre etapas determinísticas e exigir saída estruturada é o que torna possível medir resultado em milhares de execuções. E tratar custo por execução como decisão de arquitetura, usando um modelo menor, é o que viabiliza rodar isso em todo o parque de repositórios.
