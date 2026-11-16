// Envia pelo WhatsApp (API REST da mcp.ai) o aviso gravado por email.mjs em tmp/whatsapp.txt.
// Roda ANTES do envio do e-mail: se não conseguir enviar, acrescenta um aviso em tmp/email.html
// para a falha aparecer no e-mail do dia.
//
// Variáveis de ambiente (secrets do repositório):
//   MCPAI_KEY     chave sk_live_... da mcp.ai
//   WHATSAPP_TO   destino: telefone com DDI (5519999999999) ou JID de grupo (...@g.us)
//
// Sem os secrets, só avisa no log e sai sem erro (o envio é opcional).
import { readFile, appendFile } from 'node:fs/promises';
import { enviarComTentativas } from './whatsapp-envio.mjs';

const ENDPOINT = 'https://api.mcp.ai/api/whatsapp/send/text';
const { MCPAI_KEY, WHATSAPP_TO } = process.env;

if (!MCPAI_KEY || !WHATSAPP_TO) {
  console.log('WhatsApp: secrets MCPAI_KEY/WHATSAPP_TO não configurados; envio ignorado.');
  process.exit(0);
}

const text = await readFile('tmp/whatsapp.txt', 'utf8').catch(() => null);

const enviar = async () => {
  if (text === null) return { status: 0, corpo: { error: 'tmp/whatsapp.txt não encontrado' } };
  const resp = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${MCPAI_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ to: WHATSAPP_TO, text }),
    signal: AbortSignal.timeout(30_000),
  });
  return { status: resp.status, corpo: await resp.json().catch(() => ({})) };
};
const esperar = (ms) => new Promise((ok) => setTimeout(ok, ms));

const r = await enviarComTentativas({ enviar, esperar });

if (r.ok) {
  console.log(`WhatsApp: aviso enviado (id ${r.id}, tentativa ${r.tentativas}).`);
} else {
  console.error(`WhatsApp: falha no envio após ${r.tentativas} tentativa(s): ${r.erro}`);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  await appendFile(
    'tmp/email.html',
    `\n<p style="color:#b00020"><strong>Aviso pelo WhatsApp não foi enviado</strong> ` +
      `(${r.tentativas} tentativa(s)): ${esc(r.erro)}</p>\n`,
  ).catch(() => {});
  process.exit(1);
}
