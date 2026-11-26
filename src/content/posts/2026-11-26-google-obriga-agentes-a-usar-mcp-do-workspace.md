---
titulo: "Google vai obrigar agentes de IA a acessar o Workspace só pelos seus servidores MCP, e o do Gmail não envia e-mail"
data: 2026-11-26T17:05:00-03:00
resumo: "A partir de 1º de fevereiro de 2027, agentes não poderão usar as APIs REST do Workspace. Pelos servidores MCP públicos do Gmail não é possível enviar, responder nem encaminhar mensagens."
tags:
  - google
  - agentes
  - infraestrutura
  - preços
fontes:
  - nome: Google Cloud Blog
    url: https://cloud.google.com/blog/products/identity-security/deploying-agents-safely-in-your-enterprise
  - nome: Google Workspace AI Tools Addendum
    url: https://workspace.google.com/terms/ai-tools
  - nome: Hacker News (IA, 100+ pontos)
    url: https://techstackups.com/articles/google-workspace-ai-agents-mcp/
rascunho: false
editado_manualmente: false
origem: rotina
---

Em 24 de novembro, o Google tornou disponíveis para todos os servidores MCP remotos do Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat e Tasks. No mesmo dia, publicou um adendo aos termos de suas APIs que determina que "agentes de IA devem usar os servidores MCP do Workspace ou a Workspace CLI", e não as APIs REST. Segundo o blog do Google Cloud, a aplicação técnica da regra começa em 1º de fevereiro de 2027, e a cobrança por cota de uso começa em 1º de abril. O texto proíbe disfarçar um agente para escapar da classificação. Os agentes precisam usar client IDs de OAuth dedicados.

O adendo também proíbe usar dados do Workspace para treinar modelos, fazer fine-tuning ou distillation, montar datasets de avaliação ou construir um produto parecido com um serviço do Workspace. Embeddings, índices de memória e outros dados derivados não podem ser guardados por mais de 30 dias. O Google diz que o gateway permite checagens de política, DLP, aprovação humana e trilha de auditoria.

Segundo um levantamento do site Tech Stackups, que chegou ao Hacker News, os servidores públicos têm lacunas. O MCP do Gmail lê, busca e cria rascunhos, mas não envia, não responde, não encaminha e não edita um rascunho já criado. Essas ferramentas estão marcadas como restritas a parceiros. O MCP do Drive não move, renomeia nem compartilha arquivos. O conector da Anthropic para o Claude anuncia envio de e-mail, o que sugere acesso de parceiro, e o Google não diz quem pode obter esse acesso. Na camada gratuita, o limite é de 5.000 requisições MCP por dia, por projeto e por produto, e uma busca no Gmail conta como 10.

## Por que importa

Quem tem agente ou automação com LLM usando as APIs REST do Gmail ou do Drive tem até fevereiro para migrar. Depois disso, corre o risco de perder funcionalidades e de ter o acesso cortado. O argumento de segurança é legítimo, mas o modelo também dá ao Google o controle sobre quais agentes podem agir no Workspace e quanto isso custa. É o mesmo caminho que o Slack tomou em 2025 ao fechar suas APIs. Espere outras plataformas de produtividade adotarem gateways parecidos.
