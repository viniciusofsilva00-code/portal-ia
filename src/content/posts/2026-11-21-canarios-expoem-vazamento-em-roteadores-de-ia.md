---
titulo: "HD Moore espalha 2 milhões de segredos em prompts e encontra provedores de inferência invadidos e revendedores roubando dados"
data: 2026-11-21T14:52:00-03:00
resumo: "Experimento com canários em AI routers mostrou três provedores invadidos, revendedores reaproveitando credenciais e um laboratório chinês acessando URLs secretas, até em pedidos marcados como ZDR."
tags:
  - segurança
  - privacidade
  - infraestrutura
  - pesquisa
fontes:
  - nome: Ars Technica (IA)
    url: https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/
rascunho: false
editado_manualmente: false
origem: rotina
---

HD Moore, chief research officer da Dragos, enviou quase dois milhões de prompts com segredos rastreáveis a serviços de IA e acompanhou onde eles reapareciam. A isca incluía chaves de acesso da AWS ligadas a contas vazias, senhas de SSH, URLs e nomes DNS únicos e referências a repositórios git privados. Cada segredo entrou em um único prompt, enviado a um único provedor, o que permitiu identificar qual elo da cadeia vazou.

O alvo foram os "AI routers" ou gateways, como OpenRouter e Vercel, que recebem os prompts e escolhem um provedor de inferência por preço ou adequação. Em cada salto o prompt é descriptografado e pode ser registrado em log.

Segundo a Ars Technica, o achado mais grave foi a invasão de três provedores de hospedagem. Num deles, os atacantes reaproveitaram "algumas centenas" de chaves da AWS, inclusive de pedidos rejeitados antes de chegar ao modelo, sinal de que copiavam o tráfego na entrada. Nos outros dois, parte dos pedidos roubados estava marcada como ZDR (Zero Data Retention). As chaves foram testadas, às vezes poucas horas depois, e usadas "dezenas de milhares" de vezes em chamadas à API da AWS, com varredura de S3, secrets managers e tentativas de criar usuários IAM e ativar o Bedrock.

Moore também diz ter flagrado revendedores que ofereciam preço baixo, ligavam o log de requisições e reaproveitavam as credenciais. Um laboratório chinês, não identificado, acessou URLs secretas de mais da metade dos prompts enviados aos seus modelos entre julho e outubro, inclusive de cerca de dois terços dos pedidos marcados como "sem coleta" ou ZDR, e isso valia também para prompts enviados a provedores americanos que revendem esses modelos.

## Por que importa

Quem manda código, logs ou configuração para um LLM por um router está entregando esse conteúdo em texto puro a uma cadeia de empresas que não conhece, e uma flag de privacidade não protege contra quem já está dentro. A recomendação de Moore é usar hospedagem própria ou contratar direto um provedor de primeira linha, escolher os upstreams em vez de aceitar o pool padrão e, sobretudo, não colocar segredos em prompts.
