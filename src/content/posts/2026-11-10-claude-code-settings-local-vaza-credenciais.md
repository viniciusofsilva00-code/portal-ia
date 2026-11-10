---
titulo: "Apiiro acha 2.539 credenciais reais vazadas no GitHub via settings.local.json do Claude Code"
data: 2026-11-10T15:40:00-03:00
resumo: "Comandos aprovados com \"não perguntar de novo\" ficam em texto puro num arquivo do projeto que pode ir parar em repositórios públicos."
tags:
  - anthropic
  - segurança
  - agentes
fontes:
  - nome: Canaltech
    url: https://canaltech.com.br/seguranca/alerta-para-devs-claude-code-vaza-senhas-e-chaves-de-api-em-massa-no-github/
rascunho: false
editado_manualmente: false
origem: rotina
---

Pesquisadores da Apiiro encontraram 2.539 credenciais reais em 1.994 repositórios públicos do GitHub, afetando 63 organizações, por causa de um comportamento do Claude Code, segundo reportagem do Canaltech.

O mecanismo é simples. Quando o desenvolvedor aprova um comando com a opção "Yes, and don't ask again", o Claude Code grava o comando em texto puro em `.claude/settings.local.json`, dentro da pasta do projeto. A ferramenta adiciona esse arquivo ao `.gitignore` global do usuário, mas não ao `.gitignore` do projeto. Se o repositório for clonado, compartilhado ou configurado em outra máquina, o arquivo pode entrar no commit. E como o agente sugere comandos com senhas embutidas em tarefas como migração de banco ou diagnóstico, os segredos vão junto.

A Apiiro achou 104.185 cópias públicas do arquivo, 1.122 delas com credenciais reais. Em 539 repositórios os commits com dados sensíveis eram coautorados pelo próprio Claude Code. Do total, 501 credenciais davam acesso a bancos de produção, incluindo sistemas de prontuários médicos e plataformas de pagamento. Os tipos mais comuns foram tokens de API de serviços (398), senhas de banco (379) e chaves de API de modelos de IA (149).

Segundo o Canaltech, usuários relatavam o problema em issues desde agosto de 2025, fechadas automaticamente após 60 dias sem correção. Depois da publicação, o responsável pelo Claude Code na Anthropic disse no Hacker News que a equipe estuda melhorias no auto mode e um scanner básico de segredos na ferramenta. A informação vem de uma única reportagem e da pesquisa da Apiiro.

## Por que importa

Quem usa Claude Code deve conferir agora se `.claude/settings.local.json` está no `.gitignore` de cada projeto, procurar o arquivo no histórico do Git e rotacionar qualquer segredo que tenha passado por ele. O caso mostra um padrão que vale para qualquer agente: a conveniência de "aprovar e não perguntar de novo" cria estado local com dados sensíveis, e esse estado precisa ser tratado como segredo.
