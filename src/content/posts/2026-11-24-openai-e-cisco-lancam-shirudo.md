---
titulo: "OpenAI e Cisco abrem o código do Shirudo, que usa eBPF para bloquear exploits em Linux sem reiniciar"
data: 2026-11-24T17:52:00-03:00
resumo: "Shirudo aplica \"shields\" eBPF assinados que barram o caminho vulnerável enquanto o patch definitivo não chega; agentes podem gerar e validar as proteções."
tags:
  - openai
  - segurança
  - open source
  - agentes
fontes:
  - nome: OpenAI News
    url: https://openai.com/index/introducing-shirudo
rascunho: false
editado_manualmente: false
origem: rotina
---

A OpenAI e a Cisco anunciaram em 23 de novembro o Shirudo, um runtime de código aberto para proteger sistemas Linux em produção durante a janela entre a divulgação de uma vulnerabilidade e a aplicação do patch definitivo, sem precisar reiniciar nada.

A ideia gira em torno de "shields": pequenos programas eBPF que se encaixam em pontos específicos do sistema operacional e bloqueiam o caminho de código vulnerável. Como bloquear uma operação inteira do kernel pode derrubar tráfego legítimo, o Shirudo permite rodar o shield primeiro em modo de monitoramento, ver o efeito nas aplicações e só depois passar a bloquear. Os shields são assinados e verificados antes de carregar, passam pelo verifier do eBPF, e um TPM mantém um registro verificável do que foi carregado ou removido.

A parte de IA está na geração: agentes recebem controles programáveis para investigar a falha, escrever o shield e testá-lo contra o exploit e contra a carga real. A decisão de colocar em produção fica com a equipe de segurança. No exemplo que a OpenAI apresenta, um shield gerado com o Codex adicionou uma checagem de entrada ao decodificador Base64 do Java e foi acoplado a um processo do Elasticsearch em execução, barrando o exploit Java4Shell num teste controlado sem parar o serviço.

O código usa licença BSD 2-Clause (os programas BPF têm licença dupla BSD e GPL) e está no GitHub, com documentação, um quickstart em VM e um laboratório da Isovalent. As empresas querem publicar shields testados junto com as divulgações de vulnerabilidades. Todas as informações vêm do anúncio da própria OpenAI. Não há números de desempenho nem de adoção.

## Por que importa

Com agentes achando e explorando falhas em minutos, a janela entre o aviso e o patch virou o ponto fraco. Mitigação temporária via eBPF não é novidade, mas empacotar isso com assinatura, verificação e geração assistida por modelo, e em código aberto, baixa o custo para quem opera frotas Linux. O risco é tratar o shield como substituto do patch. Ele serve para ganhar tempo.
