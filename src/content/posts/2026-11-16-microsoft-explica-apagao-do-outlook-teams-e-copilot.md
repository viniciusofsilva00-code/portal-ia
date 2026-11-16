---
titulo: "Microsoft atribui apagão de Outlook, Teams e Copilot a três falhas combinadas, sem ataque hacker"
data: 2026-11-16T14:00:00-03:00
resumo: "Bug antigo nos servidores, migração de tráfego do Teams para o gateway do Exchange Online e 14% da capacidade já fora do ar explicam a pane de 12 e 13 de novembro, segundo a empresa."
tags:
  - microsoft
  - infraestrutura
fontes:
  - nome: Canaltech (IA)
    url: https://canaltech.com.br/software/apagao-da-microsoft-empresa-explica-os-3-erros-que-derrubaram-80-dos-servidores/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Microsoft explicou a pane global que derrubou Outlook, Teams e Copilot entre quinta (12) e sexta-feira (13). Segundo o Canaltech, a falha atingiu cerca de 80% dos servidores da empresa no mundo e deixou milhares de organizações sem e-mail. A explicação veio de Charles Lamanna, vice-presidente de Copilot, Agentes e Plataformas, num post longo no X. A versão é da própria Microsoft, que descartou ataque hacker e atribuiu o problema a sobrecarga.

Lamanna aponta três fatores que se somaram:

- **Bug latente**: uma correção aplicada em julho fazia o software dos servidores travar em certas condições. Os testes rodaram em máquinas menos potentes, e o efeito nos servidores mais novos passou despercebido.
- **Pico de tráfego**: cerca de 15 horas antes da pane, o Teams passou a usar o mesmo gateway de rede do Exchange Online. A carga extra fez o bug disparar com mais frequência.
- **Capacidade reduzida**: uma falha anterior já tinha tirado do ar perto de 14% da capacidade de gateway.

A recuperação demorou porque o sistema tentava redirecionar requisições, acumulava fila e parava de responder. Cada servidor que voltava era soterrado pelo tráfego represado, e a automação de recuperação não estava preparada para uma queda tão ampla. No Brasil, o TSE adiou o prazo da prestação de contas do segundo turno por causa da falha.

## Por que importa

É o roteiro clássico de incidente grande: nenhuma causa isolada derruba tudo, a combinação sim, e o retry em massa transforma degradação em apagão. Para quem integra Copilot e agentes em fluxos críticos, fica o lembrete de que o assistente depende da mesma infraestrutura do e-mail e cai junto com ela. Vale ter plano de contingência e não presumir que a camada de IA é mais resiliente que o resto da nuvem.
