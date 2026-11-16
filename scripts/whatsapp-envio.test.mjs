import { test } from 'node:test';
import assert from 'node:assert/strict';
import { enviarComTentativas } from './whatsapp-envio.mjs';

const sucesso = { status: 200, corpo: { ok: true, result: { success: true, data: { id: 'ID1', sent: true } } } };
const erro502 = { status: 502, corpo: {} };
const erro401 = { status: 401, corpo: { ok: false, error: { code: 'unauthorized' } } };

// Fila de respostas: cada item é uma resposta ou um Error (simula falha de rede).
function fila(...respostas) {
  const chamadas = [];
  const enviar = async () => {
    const r = respostas[chamadas.length];
    chamadas.push(r);
    if (r instanceof Error) throw r;
    return r;
  };
  return { enviar, chamadas };
}
const esperas = [];
const esperar = async (ms) => esperas.push(ms);

test('envia na primeira tentativa', async () => {
  const { enviar, chamadas } = fila(sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.deepEqual(r, { ok: true, id: 'ID1', tentativas: 1 });
  assert.equal(chamadas.length, 1);
});

test('tenta de novo após 502 e envia', async () => {
  const { enviar, chamadas } = fila(erro502, sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, true);
  assert.equal(r.tentativas, 2);
  assert.equal(chamadas.length, 2);
});

test('tenta de novo após falha de rede', async () => {
  const { enviar } = fila(new Error('fetch failed'), sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, true);
  assert.equal(r.tentativas, 2);
});

test('desiste após 3 tentativas com 5xx', async () => {
  const { enviar, chamadas } = fila(erro502, erro502, erro502, sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, false);
  assert.equal(r.tentativas, 3);
  assert.equal(chamadas.length, 3);
  assert.match(r.erro, /HTTP 502/);
});

test('não tenta de novo em erro 4xx', async () => {
  const { enviar, chamadas } = fila(erro401, sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, false);
  assert.equal(chamadas.length, 1);
  assert.match(r.erro, /HTTP 401/);
});

test('não tenta de novo quando a API responde 200 sem envio', async () => {
  const { enviar, chamadas } = fila({ status: 200, corpo: { ok: false, error: { code: 'not_connected' } } }, sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, false);
  assert.equal(chamadas.length, 1);
  assert.match(r.erro, /not_connected/);
});

test('aceita resposta com sent direto em result', async () => {
  const { enviar } = fila({ status: 200, corpo: { ok: true, result: { id: 'ID2', sent: true } } });
  const r = await enviarComTentativas({ enviar, esperar });
  assert.deepEqual(r, { ok: true, id: 'ID2', tentativas: 1 });
});

test('não tenta de novo em 500 (o servidor pode ter enviado)', async () => {
  const { enviar, chamadas } = fila({ status: 500, corpo: {} }, sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, false);
  assert.equal(chamadas.length, 1);
});

test('não tenta de novo após timeout (o servidor pode ter enviado)', async () => {
  const timeout = Object.assign(new Error('The operation was aborted due to timeout'), { name: 'TimeoutError' });
  const { enviar, chamadas } = fila(timeout, sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, false);
  assert.equal(chamadas.length, 1);
  assert.match(r.erro, /timeout/i);
});

test('tenta de novo em 503 e 504', async () => {
  const { enviar, chamadas } = fila({ status: 503, corpo: {} }, { status: 504, corpo: {} }, sucesso);
  const r = await enviarComTentativas({ enviar, esperar });
  assert.equal(r.ok, true);
  assert.equal(chamadas.length, 3);
});

test('espera cresce entre tentativas', async () => {
  esperas.length = 0;
  const { enviar } = fila(erro502, erro502, sucesso);
  await enviarComTentativas({ enviar, esperar, esperaBaseMs: 1000 });
  assert.deepEqual(esperas, [1000, 2000]);
});
