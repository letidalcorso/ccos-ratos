/**
 * publish-postforme.js
 * Publica imagens no Instagram e TikTok via Post for Me API (postforme.dev)
 *
 * Uso:
 *   node --env-file=.env scripts/publish-postforme.js \
 *     --platform instagram \
 *     --image /caminho/para/imagem.png \
 *     --caption "Texto do post" \
 *     [--account ID_DA_CONTA]
 *
 * Variáveis necessárias no .env:
 *   POSTFORME_API_KEY=sua_chave_aqui
 */

import fs from 'fs'
import path from 'path'
import { parseArgs } from 'util'

const API_BASE = 'https://api.postforme.dev/v1'
const API_KEY = process.env.POSTFORME_API_KEY

if (!API_KEY) {
  console.error('Erro: POSTFORME_API_KEY não definida no .env')
  process.exit(1)
}

const { values: args } = parseArgs({
  options: {
    platform: { type: 'string', default: 'instagram' },
    image: { type: 'string' },
    caption: { type: 'string' },
    account: { type: 'string' },
    'list-accounts': { type: 'boolean', default: false },
  },
})

async function listAccounts() {
  const res = await fetch(`${API_BASE}/accounts`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(JSON.stringify(data))
  console.log('Contas conectadas:')
  data.accounts?.forEach(a => {
    console.log(`  [${a.id}] ${a.username} (${a.platform})`)
  })
}

async function publishPost({ platform, imagePath, caption, accountId }) {
  if (!imagePath) throw new Error('--image obrigatório')
  if (!caption) throw new Error('--caption obrigatório')

  const absolutePath = path.resolve(imagePath)
  if (!fs.existsSync(absolutePath)) throw new Error(`Arquivo não encontrado: ${absolutePath}`)

  const imageBuffer = fs.readFileSync(absolutePath)
  const base64Image = imageBuffer.toString('base64')
  const mimeType = absolutePath.endsWith('.png') ? 'image/png' : 'image/jpeg'

  const body = {
    platform,
    caption,
    media: [{ type: 'image', data: `data:${mimeType};base64,${base64Image}` }],
    ...(accountId && { account_id: accountId }),
  }

  console.log(`Publicando no ${platform}...`)
  const res = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(JSON.stringify(data))

  console.log('Publicado com sucesso!')
  console.log('  Post ID:', data.id)
  if (data.url) console.log('  URL:', data.url)
  return data
}

try {
  if (args['list-accounts']) {
    await listAccounts()
  } else {
    await publishPost({
      platform: args.platform,
      imagePath: args.image,
      caption: args.caption,
      accountId: args.account,
    })
  }
} catch (err) {
  console.error('Erro:', err.message)
  process.exit(1)
}
