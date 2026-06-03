// SPOTIFY NOW PLAYING - Scriptable
// Mostra capa do album + faixa atual
// Tamanho recomendado: Grande (2x2)
//
// COMO USAR:
// 1. Cole esse script no Scriptable
// 2. Rode UMA VEZ pelo app (nao como widget) - vai abrir o Safari pra autorizar
// 3. Apos autorizar, copie o codigo da URL e cole no alerta
// 4. Pronto - o token fica salvo e o widget funciona sozinho

const CONFIG = {
  clientId:     "4de1fe4b77b2450ebb92f59ed3af70a6",
  clientSecret: "68e0c48ae91c4a27aec94694fd083a9e",
  redirectUri:  "scriptable:///run/spotify-widget",

  bgFile: "bg.jpg",
  capaBg: true,

  cores: {
    fundo:           "#1C1C1E",
    texto:           "#F5F0E8",
    textoSecundario: "#E8DFD0",
    semMusica:       "#888888",
  },
  fonte: "Helvetica Neue",
}

const fm = FileManager.local()
const tokenPath = fm.joinPath(fm.documentsDirectory(), "spotify_token.json")

function salvarToken(data) {
  fm.writeString(tokenPath, JSON.stringify(data))
}

function carregarToken() {
  if (!fm.fileExists(tokenPath)) return null
  try { return JSON.parse(fm.readString(tokenPath)) }
  catch (e) { return null }
}

function base64(str) {
  return btoa(unescape(encodeURIComponent(str)))
}

async function refreshToken(refreshTkn) {
  const req = new Request("https://accounts.spotify.com/api/token")
  req.method = "POST"
  req.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic " + base64(CONFIG.clientId + ":" + CONFIG.clientSecret)
  }
  req.body = "grant_type=refresh_token&refresh_token=" + refreshTkn
  const res = await req.loadJSON()
  const data = {
    access_token:  res.access_token,
    refresh_token: res.refresh_token || refreshTkn,
    expires_at:    Date.now() + res.expires_in * 1000
  }
  salvarToken(data)
  return data
}

async function autorizarSpotify() {
  const scope = "user-read-currently-playing"
  const authUrl = "https://accounts.spotify.com/authorize"
    + "?client_id=" + CONFIG.clientId
    + "&response_type=code"
    + "&redirect_uri=" + encodeURIComponent(CONFIG.redirectUri)
    + "&scope=" + encodeURIComponent(scope)

  Safari.open(authUrl)

  const alerta = new Alert()
  alerta.title = "Cole o codigo aqui"
  alerta.message = "Apos autorizar, a URL vai ter ?code=XXXX. Cole so o codigo (so a parte depois de ?code=)."
  alerta.addTextField("codigo")
  alerta.addAction("OK")
  await alerta.present()

  const code = alerta.textFieldValue(0)

  const req = new Request("https://accounts.spotify.com/api/token")
  req.method = "POST"
  req.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic " + base64(CONFIG.clientId + ":" + CONFIG.clientSecret)
  }
  req.body = "grant_type=authorization_code"
    + "&code=" + code
    + "&redirect_uri=" + encodeURIComponent(CONFIG.redirectUri)

  const res = await req.loadJSON()
  const data = {
    access_token:  res.access_token,
    refresh_token: res.refresh_token,
    expires_at:    Date.now() + res.expires_in * 1000
  }
  salvarToken(data)
  return data
}

async function getToken() {
  let token = carregarToken()
  if (!token) {
    if (config.runsInWidget) return null
    token = await autorizarSpotify()
  }
  if (Date.now() > token.expires_at - 60000) {
    token = await refreshToken(token.refresh_token)
  }
  return token
}

async function buscarTocandoAgora(accessToken) {
  const req = new Request("https://api.spotify.com/v1/me/player/currently-playing")
  req.headers = { "Authorization": "Bearer " + accessToken }
  try { return await req.loadJSON() }
  catch (e) { return null }
}

async function carregarBackground() {
  const path = fm.joinPath(fm.documentsDirectory(), CONFIG.bgFile)
  if (fm.fileExists(path)) return fm.readImage(path)
  return null
}

async function criarWidget() {
  const widget = new ListWidget()
  widget.setPadding(0, 0, 0, 0)

  const token = await getToken()

  if (!token) {
    widget.backgroundColor = new Color(CONFIG.cores.fundo)
    const msg = widget.addText("Rode o script\nfora do widget\npara autorizar")
    msg.font = new Font(CONFIG.fonte, 13)
    msg.textColor = new Color(CONFIG.cores.texto)
    msg.centerAlignText()
    return widget
  }

  const dados = await buscarTocandoAgora(token.access_token)

  if (!dados || !dados.item) {
    const bg = await carregarBackground()
    if (bg) widget.backgroundImage = bg
    else widget.backgroundColor = new Color(CONFIG.cores.fundo, 0.85)
    widget.setPadding(20, 20, 20, 20)
    const label = widget.addText("Nada tocando agora")
    label.font = new Font(CONFIG.fonte, 14)
    label.textColor = new Color(CONFIG.cores.semMusica)
    label.centerAlignText()
    return widget
  }

  const faixa = dados.item
  const artistas = faixa.artists.map(function(a) { return a.name }).join(", ")
  const capaUrl = faixa.album.images[0] ? faixa.album.images[0].url : null

  if (capaUrl && CONFIG.capaBg) {
    const reqImg = new Request(capaUrl)
    const capa = await reqImg.loadImage()
    widget.backgroundImage = capa
  } else {
    widget.backgroundColor = new Color(CONFIG.cores.fundo)
  }

  widget.addSpacer()

  const rodape = widget.addStack()
  rodape.layoutVertically()
  rodape.setPadding(12, 14, 14, 14)
  rodape.backgroundColor = new Color("#000000", 0.55)

  const nomeTrack = rodape.addText(faixa.name)
  nomeTrack.font = Font.boldSystemFont(14)
  nomeTrack.textColor = new Color(CONFIG.cores.texto)
  nomeTrack.lineLimit = 1

  rodape.addSpacer(2)

  const nomeArtista = rodape.addText(artistas)
  nomeArtista.font = new Font(CONFIG.fonte, 11)
  nomeArtista.textColor = new Color(CONFIG.cores.textoSecundario)
  nomeArtista.textOpacity = 0.85
  nomeArtista.lineLimit = 1

  return widget
}

const widget = await criarWidget()
if (config.runsInWidget) Script.setWidget(widget)
else widget.presentLarge()
Script.complete()
