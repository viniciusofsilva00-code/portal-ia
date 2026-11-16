// Lógica de envio com novas tentativas, separada da rede para ser testável
// (whatsapp-envio.test.mjs).
//
// `enviar()` faz uma chamada à API e devolve { status, corpo }; pode lançar erro de rede.
// Tenta de novo só quando a mensagem com certeza NÃO saiu: 502/503/504 (gateway/servidor
// indisponível) ou falha de conexão. Não repete em 500 nem em timeout, porque nesses casos
// o servidor pode ter enviado e só a resposta falhou (repetir duplicaria a mensagem).
// Erros 4xx e respostas 200 sem envio também são definitivos.
const TEMPORARIOS = new Set([502, 503, 504]);

function analisar({ status, corpo }) {
  // A resposta real vem como { ok, result: { success, data: { id, sent } } }; aceita também result.sent.
  const envio = corpo?.result?.data ?? corpo?.result;
  if (status >= 200 && status < 300 && corpo?.ok !== false && envio?.sent === true) {
    return { ok: true, id: envio.id };
  }
  const detalhe = JSON.stringify(corpo?.error ?? corpo ?? {}).slice(0, 300);
  return { ok: false, temporario: TEMPORARIOS.has(status), erro: `HTTP ${status}: ${detalhe}` };
}

export async function enviarComTentativas({ enviar, esperar, tentativas = 3, esperaBaseMs = 5000 }) {
  let ultimoErro = '';
  for (let i = 1; i <= tentativas; i++) {
    let r;
    try {
      r = analisar(await enviar());
    } catch (e) {
      r = e?.name === 'TimeoutError'
        ? { ok: false, temporario: false, erro: `timeout sem resposta (pode ter sido enviada): ${e.message}` }
        : { ok: false, temporario: true, erro: `falha de conexão: ${e?.message ?? e}` };
    }
    if (r.ok) return { ok: true, id: r.id, tentativas: i };
    ultimoErro = r.erro;
    if (!r.temporario) return { ok: false, erro: r.erro, tentativas: i };
    if (i < tentativas) await esperar(esperaBaseMs * i);
  }
  return { ok: false, erro: ultimoErro, tentativas };
}
