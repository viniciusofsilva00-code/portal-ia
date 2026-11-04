---
titulo: "Falha via biblioteca MathLive permitia ler conversas e arquivos do ChatGPT com um clique; OpenAI já corrigiu"
data: 2026-11-04T15:30:00-03:00
resumo: "Pesquisadores da Parameter rodaram script no domínio chatgpt.com a partir de um link de conversa pública; a OpenAI corrigiu entre 22 e 26 de outubro e pagou US$ 5 mil."
tags:
  - openai
  - segurança
  - open source
fontes:
  - nome: Canaltech
    url: https://canaltech.com.br/inteligencia-artificial/golpe-de-um-clique-falha-no-chatgpt-expunha-conversas-privadas-em-4-segundos/
rascunho: false
editado_manualmente: false
origem: rotina
---

A empresa de segurança Parameter descobriu uma falha na versão web do ChatGPT que permitia a um atacante acessar conversas privadas, arquivos enviados e dados da conta de um usuário logado com um único clique num link. Segundo o Canaltech, a exploração levava cerca de 4,5 segundos e não exigia download, comando nem autorização de aplicativo.

O vetor era um link para uma conversa pública do ChatGPT, enviado por e-mail, rede social ou mensagem. Ao ser aberto, ele executava código sob o domínio chatgpt.com, com as mesmas permissões da página: o script lia o histórico, abria anexos e alterava configurações da conta em segundo plano.

A raiz do problema estava na MathLive, biblioteca de código aberto usada para fórmulas matemáticas interativas e teclados virtuais. O recurso de prévia de HTML aceitava mensagens sem verificar a origem nem filtrar blocos de código. A OpenAI bloqueava scripts de terceiros, mas abria exceção para parceiros como o YouTube, e os pesquisadores usaram uma resposta da plataforma de vídeos como intermediária para rodar o código e enviar trechos das conversas a um servidor externo.

A OpenAI recebeu o relato em 18 de outubro, reproduziu o ataque, elevou a gravidade de P2 para P1 e aplicou as correções nos servidores entre 22 e 26 de outubro. Os pesquisadores receberam US$ 5 mil. A MathLive lançou versão que verifica a origem das mensagens por padrão. Segundo os pesquisadores, não há indício de exploração contra usuários reais, e ninguém precisa trocar senha. O Canaltech não traz declaração da OpenAI nem link para o relatório original.

## Por que importa

É um XSS clássico num lugar onde o estrago é grande: o histórico do ChatGPT concentra código, documentos e dados que muita gente nem deveria ter colado ali. O caminho do ataque, uma dependência open source que aceita mensagens sem checar a origem e uma exceção de confiança para um domínio parceiro, é comum em qualquer app web. Para quem usa MathLive ou componentes parecidos, vale atualizar e revisar as listas de origens confiáveis.
