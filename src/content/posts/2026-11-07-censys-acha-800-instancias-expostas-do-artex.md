---
titulo: "Censys acha mais de 800 instâncias do Artex, ferramenta chinesa de pentest com agentes de IA, abertas na internet sem senha"
data: 2026-11-07T13:50:00-03:00
resumo: "Algumas expunham implantes e dados de vítimas; a ferramenta foi ligada a ataques a bancos sul-coreanos e à ConnectWise, e seus criadores vão fechar o código."
tags:
  - segurança
  - agentes
  - open source
fontes:
  - nome: TechCrunch
    url: https://techcrunch.com/2026/11/06/hundreds-of-artex-ai-hacking-tools-found-publicly-exposed-to-the-web/
rascunho: false
editado_manualmente: false
origem: rotina
---

A Censys, empresa que varre a internet atrás de sistemas expostos, identificou mais de 800 instalações distintas do Artex acessíveis pela web sem senha. O Artex é uma ferramenta chinesa e open source de teste de intrusão autônomo, lançada publicamente em julho. A Microsoft a descreveu como um sistema de agentes de IA capaz de conduzir ataques do reconhecimento à exfiltração de dados com pouca interação humana.

Segundo o pesquisador Silas Cutler, da Censys, nem toda instância é maliciosa e muitas pertencem a testadores autorizados. Não está claro por que tantas estão expostas, já que o software não exige isso. Parte desses servidores também deixava à mostra ferramentas de ataque, incluindo implantes usados para manter acesso persistente às redes das vítimas.

O Artex já aparece em incidentes reais. Em setembro, a CrowdStrike atribuiu ataques ao setor financeiro da Coreia do Sul a um hacker de língua chinesa que usava uma instância da ferramenta, identificada em parte porque ele deixou um diretório aberto. A Censys diz que essa instância ficou exposta por meses e parecia guardar dados de empresas de pagamento e de jogos, além de bancos. No começo de outubro, hackers ligados à China usaram o Artex na invasão da ConnectWise para espionar milhares de organizações com dados na nuvem da Microsoft, que relatou ter tido "pouco tempo para detectar e responder".

Muitos desses ataques exploraram falhas básicas, como senhas fracas e ausência de autenticação multifator. Os desenvolvedores anunciaram que o Artex passará a ter código fechado, restrito a clientes pagantes, mas dezenas de cópias do código seguem em sites de compartilhamento.

## Por que importa

Enquanto Anthropic e OpenAI restringem seus modelos de cibersegurança a defensores selecionados, uma alternativa aberta e autônoma já circula e já foi usada em campanhas reais. Fechar o código agora tem efeito limitado, porque as cópias continuam disponíveis. A lição prática para defesa continua trivial e ignorada: as invasões automatizadas por IA entram por senha fraca e falta de MFA.
