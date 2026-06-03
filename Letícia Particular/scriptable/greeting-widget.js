// ============================
// GREETING WIDGET — Scriptable
// "Boa tarde, Letícia." — estilo da ref
// Tamanho recomendado: Pequeno (2×2)
// ============================

const CONFIG = {
  nome: "Letícia",
  bgFile: "bg.jpg",
  cores: {
    saudacao: "#5C5248",   // texto cinza-quente
    nome: "#1C1C1E",       // nome em grafite bold
    hora: "#C4714F",       // hora em terracota
  },
  fonte: "Helvetica Neue",
}

function saudacao() {
  const h = new Date().getHours()
  if (h >= 5 && h < 12) return "Bom dia,"
  if (h >= 12 && h < 18) return "Boa tarde,"
  return "Boa noite,"
}

function formatarHora() {
  return new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
}

async function carregarBg() {
  try {
    const fm = FileManager.local()
    const path = fm.joinPath(fm.documentsDirectory(), CONFIG.bgFile)
    if (fm.fileExists(path)) return fm.readImage(path)
  } catch (e) {}
  return null
}

async function criarWidget() {
  const widget = new ListWidget()
  widget.setPadding(18, 20, 18, 20)

  const bg = await carregarBg()
  if (bg) {
    widget.backgroundImage = bg
  } else {
    widget.backgroundColor = new Color("#F5F0E8", 0.75)
  }

  // Hora pequena no topo
  const hora = widget.addText(formatarHora())
  hora.font = new Font(CONFIG.fonte, 11)
  hora.textColor = new Color(CONFIG.cores.hora)
  hora.textOpacity = 0.85

  widget.addSpacer(6)

  // "Boa tarde,"
  const greet = widget.addText(saudacao())
  greet.font = new Font(CONFIG.fonte, 20)
  greet.textColor = new Color(CONFIG.cores.saudacao)
  greet.textOpacity = 0.65

  widget.addSpacer(2)

  // "Letícia."
  const nome = widget.addText(CONFIG.nome + ".")
  nome.font = Font.boldSystemFont(28)
  nome.textColor = new Color(CONFIG.cores.nome)
  nome.minimumScaleFactor = 0.7

  widget.addSpacer()

  return widget
}

const widget = await criarWidget()

if (config.runsInWidget) {
  Script.setWidget(widget)
} else {
  widget.presentMedium()
}

Script.complete()
