---
titulo: "Anthropic mostra modelo pequeno se replicando sozinho por rede de dispositivos Android e vê \"sinais de vida\" de worms de IA"
data: 2026-11-02T17:45:00-03:00
resumo: "Em teste controlado do Frontier Red Team, o GLM-5.2 se espalhou por 8 de 8 nós em 4 de 5 execuções; empresa estima que modelos pequenos alcancem esse nível até o fim de 2026."
tags:
  - anthropic
  - segurança
  - pesquisa
  - modelos
fontes:
  - nome: Anthropic Research
    url: https://www.anthropic.com/research/self-replicating-ai
  - nome: Olhar Digital
    url: https://olhardigital.com.br/2026/11/02/seguranca/ia-pode-criar-virus-que-infecta-eletrodomesticos-com-internet/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Frontier Red Team da Anthropic publicou em 12 de outubro um estudo sobre a possibilidade de modelos de IA se replicarem sem depender de data center, rodando em aparelhos de IoT comuns. O trabalho voltou à pauta nesta segunda com reportagem do Olhar Digital.

O teste central usou uma rede isolada de 8 nós no GCP com emuladores Android 15 e ADB sem autenticação. Um agente com o GLM-5.2 precisava achar alvos, conseguir execução, montar inferência local e se propagar. Segundo a empresa, ele chegou aos 8 nós em 4 de 5 execuções e a 7 na restante. Em outra demonstração, o Gemma4-26B-A4B rodou distribuído em 15 TV boxes Android de cerca de US$ 55 e 4 GB de RAM cada, a cerca de 0,39 token por segundo. Um modelo de 9B conseguiu subir um servidor de inferência em 8 de 9 tipos de hardware.

A própria Anthropic ressalva que a etapa de exploração foi simplificada e que ainda não existe um replicador completo funcionando. A conclusão é que um worm desses seria difícil de derrubar, por não ter ponto central, mas lento, com tempo de duplicação de dias. Extrapolando a tendência de capacidade, os autores estimam que modelos pequenos cheguem ao nível necessário até o fim de 2026.

As recomendações miram provedores e fabricantes: monitorar tráfego anômalo, usar honeypots, colocar aparelhos infectados em quarentena avisando o cliente (como no caso Mirai) e acabar com senhas padrão genéricas.

## Por que importa

O estudo é da própria Anthropic e não teve validação independente, mas desloca a discussão de risco de "modelos grandes em data center" para modelos pequenos de pesos abertos rodando em hardware barato e mal protegido, onde não há API para cortar. Para quem opera rede de provedor ou fabrica dispositivo conectado, a defesa continua sendo a básica (ADB fechado, sem senha padrão, detecção de tráfego estranho), só que com prazo mais curto.
