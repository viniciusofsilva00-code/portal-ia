---
titulo: "OpenAI lança classificador de imagens de abuso infantil e passa a suspender por 24 horas quem tentar sexualizar crianças no ChatGPT"
data: 2026-11-16T17:40:00-03:00
resumo: "Classificador feito com o NCMEC detecta material gerado por IA e é gratuito via API para organizações selecionadas; ChatGPT ganha avisos, suspensão de 24 h e banimento na reincidência."
tags:
  - openai
  - segurança
  - produtos
fontes:
  - nome: OpenAI News
    url: https://openai.com/index/strengthening-online-child-safety
  - nome: TechCrunch (IA)
    url: https://techcrunch.com/2026/11/16/openai-releases-a-new-image-classifier-and-chatgpt-warnings-to-combat-csam/
  - nome: Olhar Digital (IA)
    url: https://olhardigital.com.br/2026/11/16/inteligencia-artificial/openai-anuncia-punicao-para-quem-tentar-sexualizar-criancas-no-chatgpt/
rascunho: false
editado_manualmente: false
origem: rotina
---

A OpenAI anunciou um pacote de medidas contra material de abuso sexual infantil (CSAM). A peça principal é um classificador de imagens desenvolvido com o National Center for Missing and Exploited Children (NCMEC), que identifica sinais visuais de abuso em imagens inéditas, inclusive geradas por IA, e atribui uma pontuação para orientar revisores humanos. O acesso é pela API, sem custo, para um grupo restrito de organizações, e será compartilhado com a Tech Coalition e a ROOST.

Nos testes iniciais, segundo a empresa, o classificador sinalizou 48% menos imagens para revisão e encontrou a mesma quantidade de material abusivo; as imagens sinalizadas tinham o dobro de chance de serem de fato abusivas. Os números vêm da própria OpenAI e não têm verificação independente.

No ChatGPT, que já bloqueava esses pedidos, a mudança é na punição: quem tentar sexualizar crianças recebe um aviso explicando o dano, é direcionado a suporte especializado e tem a conta suspensa por 24 horas. Reincidência pode levar a banimento permanente e, conforme o caso, a comunicação às autoridades. As mensagens foram elaboradas com a Protect Children, a Lucy Faithfull Foundation e o pesquisador Joel Scanlan, da Universidade da Tasmânia.

A empresa também publicou diretrizes para desenvolvedores que usam sua API prevenirem, detectarem e denunciarem CSAM, e passou a oferecer a equipes policiais especializadas ferramentas de análise de grandes volumes de conversas e documentos, além de treinamento.

## Por que importa

O gargalo dessas operações é a fila de revisão humana, e um classificador que corta quase metade dos falsos positivos sem perder detecção ataca exatamente isso, se os números se confirmarem fora do teste. Para quem constrói produtos sobre a API, as novas diretrizes sinalizam o que a OpenAI passa a esperar dos integradores. O anúncio chega enquanto a empresa responde a processos sobre danos a menores.
