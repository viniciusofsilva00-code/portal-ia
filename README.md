# Portal IA

Curadoria diária de notícias de inteligência artificial em português, publicada no GitHub Pages.

- **Site:** https://viniciusofsilva00-code.github.io/portal-ia/
- **Painel:** https://app.pagescms.org (abra o repositório `viniciusofsilva00-code/portal-ia`)
- **RSS:** https://viniciusofsilva00-code.github.io/portal-ia/rss.xml

## Como funciona

| Peça | Onde | O que faz |
|---|---|---|
| Site | `src/` (Astro) | Home, post, tags, arquivo, busca (Pagefind, roda no navegador) e RSS |
| Posts | `src/content/posts/*.md` | Um arquivo Markdown por post; rotina e painel gravam no mesmo lugar |
| Rotina diária | `.github/workflows/diario.yml` | Coleta → curadoria (Claude) → validação → build → commit → deploy → e-mail |
| Deploy de edições | `.github/workflows/deploy.yml` | Publica o site quando você salva algo no painel ou faz push |
| Painel | `.pages.yml` | Configuração do Pages CMS |
| Fontes | `config/fontes.yml` | Lista de feeds lidos pela rotina |
| Regras editoriais | `prompts/curadoria.md` | Instruções que o Claude segue para escolher e escrever |
| Memória de assuntos | `data/publicados.json` | URLs e temas já publicados (90 dias), para não repetir |

### Proteção dos posts que você editou

Um post com `editado_manualmente: true` no frontmatter nunca é alterado pela rotina:

1. Posts criados no painel já nascem com o campo marcado.
2. Todo post salvo pelo painel (ou alterado por qualquer push que não seja da rotina) é marcado
   automaticamente pelo `deploy.yml`.
3. Na rotina, `scripts/proteger.mjs` tira uma "foto" dos posts protegidos antes da curadoria e
   restaura qualquer um que tenha sido mexido. Isso aparece como aviso no e-mail.

## Usar o painel

1. Entre em https://app.pagescms.org com sua conta do GitHub e abra `portal-ia`.
2. **Criar:** *Posts → Add an entry*. Preencha título, data, resumo, tags, fontes e texto. Salve.
3. **Editar:** abra o post, altere e salve.
4. **Despublicar:** marque *Despublicado (rascunho)* e salve. O post sai do site, mas o arquivo continua no repositório.
5. **Apagar:** no menu do post, use *Delete*.

Cada salvamento vira um commit e dispara o workflow **Deploy (painel e pushes)**. O site atualiza
em 1 a 2 minutos.

## Editar as fontes

Edite `config/fontes.yml` (pelo GitHub ou localmente). Cada fonte tem:

```yaml
- nome: Nome que aparece nos posts
  url: https://exemplo.com/feed.xml   # RSS ou Atom
  peso: 4                             # 1 (baixo) a 5 (alto)
  filtro: *ia                         # opcional: só itens que citam termos de IA
  ativo: false                        # opcional: desliga sem apagar
  max: 10                             # opcional: máximo de itens por dia (padrão 15)
```

Para testar uma lista nova antes do dia seguinte, rode `npm run coletar` localmente (Node 22+) ou
dispare a rotina manualmente. O log da etapa **1. Coleta dos feeds** lista cada fonte com ✓ ou ✗.

### Situação das fontes no teste de 2026-10-24

| Fonte | Situação | O que foi usado |
|---|---|---|
| Fabio Akita, OpenAI, Google DeepMind, Google AI, Google Research, Hugging Face, The Verge, TechCrunch, Ars Technica, MIT Tech Review, Tecnoblog, Olhar Digital, arXiv | OK | Feed oficial |
| Anthropic | Sem RSS oficial (404) | Feed espelhado pela comunidade (github.com/Olshansk/rss-feeds) |
| Meta AI | Sem RSS oficial (404) | Feed espelhado pela comunidade (mesmo projeto) |
| Canaltech (seção de IA) | Feed da seção sem datas | Feed geral filtrado por termos de IA |
| VentureBeat | 429 (limite de requisições) no teste local | Mantido; se continuar falhando, desative com `ativo: false` |
| Hacker News | hnrss oscila (502 ocasional) | `hnrss.org/newest?q=AI&points=100` + filtro de IA |

Fonte que falha não interrompe a rotina; ela aparece em "Fontes que falharam" no e-mail.

## Rodar a rotina manualmente

GitHub → **Actions** → **Rotina diária** → **Run workflow**. O campo *Simular falha* serve para
testar o e-mail:

- `nenhuma`: execução normal;
- `feed`: acrescenta uma fonte inválida (a rotina segue, e o e-mail lista a falha);
- `build`: grava um post quebrado antes do build (nada é publicado, e o e-mail chega com `— FALHA`).

Pela linha de comando:

```bash
gh workflow run diario.yml -R viniciusofsilva00-code/portal-ia
```

Rodar duas vezes no mesmo dia é seguro: a coleta descarta URLs já publicadas, e a curadoria
consulta `data/publicados.json` e os posts existentes para não repetir assunto.

## Pausar e retomar o agendamento

GitHub → **Actions** → **Rotina diária** → menu **⋯** → **Disable workflow** (e **Enable workflow** para voltar). Ou:

```bash
gh workflow disable diario.yml -R viniciusofsilva00-code/portal-ia
```

O GitHub desativa sozinho agendamentos de repositórios públicos sem atividade por 60 dias. Os
commits diários da rotina contam como atividade; se o site ficar muitos dias sem novidades,
reative pelo mesmo menu.

## Ler os logs

GitHub → **Actions** → clique na execução. Cada etapa tem nome numerado (1. Coleta, 2. Curadoria,
3. Build…). Os horários ficam em:

- **Registrar início**: `Início do workflow: AAAA-MM-DD HH:MM:SS -03`;
- **6. Montar e-mail**: horário de início e de envio;
- **Registrar envio**: horário de término após o envio.

O próprio e-mail traz o link direto para o log da execução.

## Ajustar o horário

Em `.github/workflows/diario.yml`:

```yaml
schedule:
  - cron: '37 7 * * *'          # minuto hora * * *
    timezone: 'America/Sao_Paulo'
```

O GitHub pode atrasar execuções agendadas sob carga, principalmente no início de cada hora. Por
isso o minuto 37. Somando atraso e duração (10 a 25 minutos), o e-mail chega por volta das 8h.
Evite `:00`.

## Credenciais (secrets)

Configure em GitHub → repositório → **Settings → Secrets and variables → Actions → New repository secret**.

| Secret | O que é |
|---|---|
| `CLAUDE_CODE_OAUTH_TOKEN` | Token da sua assinatura Claude (plano Team), gerado com `claude setup-token` |
| `MAIL_USERNAME` | Endereço Gmail pessoal remetente (ex.: `voce@gmail.com`) |
| `MAIL_PASSWORD` | Senha de app de 16 caracteres dessa conta Gmail |

**Token do Claude:** com o Claude Code instalado, rode `claude setup-token`, faça login com a
conta do seu assento Team e copie o token exibido. Ele tem validade longa. Quando expirar, a
etapa de curadoria falha e o e-mail avisa; gere outro e atualize o secret.

**Senha de app do Gmail:** na conta Gmail pessoal (com verificação em duas etapas ativa), abra
https://myaccount.google.com/apppasswords, crie uma senha chamada "Portal IA" e copie os 16
caracteres sem espaços. Contas de trabalho/escola e contas com Proteção Avançada não oferecem
senha de app.

## Modelo e custo

A curadoria usa `claude-opus-5-5` (definido em `claude_args` no `diario.yml`) e consome a cota da
assinatura, sem cobrança por token. Para gastar menos cota, troque por `claude-sonnet-5-5`.
GitHub Pages e Actions são gratuitos em repositório público.

## Desenvolvimento local

```bash
npm ci
npm run dev        # http://localhost:4321/portal-ia/
npm run build      # gera dist/ e o índice de busca
npm run coletar    # testa os feeds e grava tmp/candidatos.json
```
