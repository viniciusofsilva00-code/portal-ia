---
titulo: "Golpe usa anúncios no Google e páginas hospedadas no próprio claude.ai para instalar infostealers"
data: 2026-10-28T13:55:00-03:00
resumo: "Pesquisadores da Gen Digital relatam campanha que abusa de Artefatos e chats compartilhados do Claude para induzir vítimas a rodar comandos maliciosos no macOS e Windows."
tags:
  - segurança
  - anthropic
fontes:
  - nome: Canaltech
    url: https://canaltech.com.br/inteligencia-artificial/golpe-do-falso-claude-usa-site-oficial-da-anthropic-para-roubar-senhas-e-criptomoedas/
rascunho: false
editado_manualmente: false
origem: rotina
---

Pesquisadores da Gen Digital, dona da Norton e da Avast, descreveram uma campanha que usa anúncios pagos no Google para levar quem procura o Claude a páginas falsas de instalação. O detalhe que torna o golpe eficaz é o endereço: as páginas ficam no próprio domínio claude.ai, criadas com recursos legítimos do produto, os Artefatos e os chats compartilhados, que publicam conteúdo acessível a qualquer pessoa. O único indício é um aviso discreto de que o conteúdo foi criado por um usuário.

No macOS, a página pede para colar um comando no Terminal, que instala o Atomic Stealer (AMOS). O malware exibe uma janela falsa de senha, coleta dados de navegadores, cookies e itens do Keychain e pode trocar apps de carteira como Ledger Live e Trezor Suite por versões adulteradas para capturar frases de recuperação. No Windows, a técnica é o ClickFix: a vítima aperta Win + R e cola um comando PowerShell que baixa um trojan de acesso remoto hospedado no GitHub.

O relatório não traz número de vítimas. Segundo o Canaltech, a Anthropic já havia desconectado em agosto sessões de contas comprometidas por infostealers como o AMOS, mas não comentou a remoção das páginas apontadas. A informação vem da pesquisa da Gen Digital e ainda não foi confirmada por outras fontes.

O instalador do Claude para desktop não pede comandos no terminal; o endereço oficial de download é claude.com/download. A exceção é o Claude Code, que tem documentação própria.

## Por que importa

O ataque não explora falha técnica do Claude: usa a confiança no domínio e a vítima executando o comando por conta própria, o que passa por cima de antivírus. Qualquer plataforma que hospede conteúdo de usuário no domínio principal vira vetor, e o mesmo padrão já apareceu em chatgpt.com. Para equipes, vale reforçar a regra simples de nunca colar comandos vindos de página de download e bloquear anúncios de busca como canal de instalação de software.
