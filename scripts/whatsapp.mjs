// Envia pelo WhatsApp (API REST da mcp.ai) o aviso gravado por email.mjs em tmp/whatsapp.txt.
//
// Variáveis de ambiente (secrets do repositório):
//   MCPAI_KEY     chave sk_live_... da mcp.ai
//   WHATSAPP_TO   destino: telefone com DDI (5519999999999) ou JID de grupo (...@g.us)
//
// Sem os secrets, só avisa no log e sai sem erro (o envio é opcional).
import { readFile } from 'node:fs/promises';

const ENDPOINT = 'https://api.mcp.ai/api/whatsapp/send/text';
const { MCPAI_KEY, WHATSAPP_TO } = process.env;

if (!MCPAI_KEY || !WHATSAPP_TO) {
  console.log('WhatsApp: secrets MCPAI_KEY/WHATSAPP_TO não configurados; envio ignorado.');
  process.exit(0);
}

const text = await readFile('tmp/whatsapp.txt', 'utf8');

const resp = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { Authorization: `Bearer ${MCPAI_KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ to: WHATSAPP_TO, text }),
  signal: AbortSignal.timeout(30_000),
});

const corpo = await resp.json().catch(() => ({}));
// A resposta real vem como { ok, result: { success, data: { id, sent } } }; aceita também result.sent direto.
const envio = corpo.result?.data ?? corpo.result;
if (!resp.ok || corpo.ok === false || envio?.sent !== true) {
  console.error(`WhatsApp: falha no envio (HTTP ${resp.status}): ${JSON.stringify(corpo.error ?? corpo).slice(0, 300)}`);
  process.exit(1);
}
console.log(`WhatsApp: aviso enviado (id ${envio.id}).`);
