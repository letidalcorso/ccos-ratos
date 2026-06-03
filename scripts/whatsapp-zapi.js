/**
 * whatsapp-zapi.js
 * Envia mensagens de WhatsApp via Z-API (z-api.io)
 *
 * Uso:
 *   node --env-file=.env scripts/whatsapp-zapi.js \
 *     --phone 5551999999999 \
 *     --message "Texto da mensagem"
 *
 *   # Enviar para múltiplos números (separados por vírgula):
 *   node --env-file=.env scripts/whatsapp-zapi.js \
 *     --phone 5551999999999,5511888888888 \
 *     --message "Mensagem em lote"
 *
 * Variáveis necessárias no .env:
 *   ZAPI_INSTANCE_ID=sua_instancia
 *   ZAPI_TOKEN=seu_token
 */

import { parseArgs } from 'util'

const INSTANCE_ID = process.env.ZAPI_INSTANCE_ID
const TOKEN = process.env.ZAPI_TOKEN

if (!INSTANCE_ID || !TOKEN) {
  console.error('Erro: ZAPI_INSTANCE_ID e ZAPI_TOKEN precisam estar no .env')
  process.exit(1)
}

const BASE_URL = `https://api.z-api.io/instances/${INSTANCE_ID}/token/${TOKEN}`

const { values: args } = parseArgs({
  options: {
    phone: { type: 'string' },
    message: { type: 'string' },
    status: { type: 'boolean', default: false },
  },
})

async function checkStatus() {
  const res = await fetch(`${BASE_URL}/status`)
  const data = await res.json()
  console.log('Status da instância Z-API:')
  console.log('  Conectado:', data.connected)
  console.log('  Sessão:', data.session)
  return data
}

async function sendMessage(phone, message) {
  const res = await fetch(`${BASE_URL}/send-text`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone: phone.trim(), message }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(JSON.stringify(data))
  return data
}

async function run() {
  if (args.status) {
    await checkStatus()
    return
  }

  if (!args.phone) throw new Error('--phone obrigatório (ex: 5551999999999)')
  if (!args.message) throw new Error('--message obrigatório')

  const phones = args.phone.split(',')
  const results = []

  for (const phone of phones) {
    try {
      console.log(`Enviando para ${phone}...`)
      const result = await sendMessage(phone, args.message)
      console.log(`  OK - messageId: ${result.messageId ?? result.id ?? 'enviado'}`)
      results.push({ phone, success: true, result })
    } catch (err) {
      console.error(`  Erro ao enviar para ${phone}:`, err.message)
      results.push({ phone, success: false, error: err.message })
    }
  }

  const ok = results.filter(r => r.success).length
  const fail = results.filter(r => !r.success).length
  if (phones.length > 1) {
    console.log(`\nResumo: ${ok} enviados, ${fail} com erro`)
  }
}

try {
  await run()
} catch (err) {
  console.error('Erro:', err.message)
  process.exit(1)
}
