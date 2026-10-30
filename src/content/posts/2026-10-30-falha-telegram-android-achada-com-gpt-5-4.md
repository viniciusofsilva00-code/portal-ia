---
titulo: "Falha em chamadas do Telegram para Android, achada com ajuda do GPT-5.4, permitia invadir o celular ao atender"
data: 2026-10-30T13:50:00-03:00
resumo: "NebuSec diz ter usado ferramenta baseada no GPT-5.4 para achar bug no tgcalls que, encadeado com outras falhas, daria controle do Android. Correção está na versão 12.10.4."
tags:
  - segurança
  - openai
  - agentes
fontes:
  - nome: The Hacker News
    url: https://thehackernews.com/2026/10/telegram-android-flaw-lets-attackers.html
  - nome: Canaltech
    url: https://canaltech.com.br/seguranca/falha-no-telegram-para-android-permitia-invadir-celular-ao-atender-ligacao/
rascunho: false
editado_manualmente: false
origem: rotina
---

A empresa de segurança NebuSec divulgou em 29 de outubro uma vulnerabilidade no Telegram para Android que, segundo ela, permitia comprometer o aparelho só com a vítima atendendo uma ligação no app.

O bug fica no `tgcalls`, biblioteca compartilhada de chamadas do Telegram, no código que interpreta mensagens `MediaState` (estado do microfone, câmera e rotação do vídeo). Quando a mensagem trazia um valor de rotação, o código lia o campo de estado de vídeo mesmo se ele não existisse, acessando memória indevida. De acordo com a NebuSec, encadeado com um vazamento de informação e um exploit de root no Android, isso levaria a controle total do aparelho. As versões afetadas vão da 8.6.2 à 12.10.3 (março de 2022 a setembro de 2026); a correção saiu na 12.10.4, no fim de setembro.

A NebuSec afirma que a falha foi encontrada pelo seu produto Code Security, que roda sobre o GPT-5.4 da OpenAI, sem detalhar o método. O relato ao Telegram foi feito em 26 de setembro. Segundo o The Hacker News, o Telegram reconheceu o problema, mas não acreditou que levasse a execução remota de código, por isso não houve CVE nem recompensa.

Vale a ressalva: até 29 de outubro não havia write-up técnico publicado. A cadeia completa se apoia num vídeo e nas declarações da própria NebuSec, e não há registro de exploração real. A recomendação é atualizar o app e, se não puder, restringir chamadas a "Ninguém" nas configurações de privacidade.

## Por que importa

É mais um caso de bug de memória antigo, em código de parsing exposto à rede, encontrado com ferramenta baseada em LLM, e agora com marketing de fornecedor colado ao anúncio. Para quem mantém código nativo em apps de mensagem, a superfície de sinalização de chamadas merece auditoria. E o desacordo entre fabricante e pesquisador sobre o impacto real mostra por que vale esperar o write-up antes de tratar o caso como RCE confirmado.
