// CALENDARIO - PROXIMOS EVENTOS
// Le direto do app Calendario do iPhone
// Tamanho recomendado: Medio (2x1)

const CONFIG = {
  maxEventos: 3,
  bgFile: "bg.jpg",

  cores: {
    label:  "#C4714F",
    hora:   "#C4714F",
    titulo: "#1C1C1E",
    vazio:  "#888",
    dot:    "#C4714F",
    hoje:   "#FF3B30",
    data:   "#5C5248",
  },
  fonte: "Helvetica Neue",
}

async function carregarBg() {
  try {
    const fm = FileManager.local()
    const path = fm.joinPath(fm.documentsDirectory(), CONFIG.bgFile)
    if (fm.fileExists(path)) return fm.readImage(path)
  } catch (e) {}
  return null
}

function formatarHora(data) {
  return data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
}

function formatarDia(data) {
  const hoje = new Date()
  const amanha = new Date()
  amanha.setDate(hoje.getDate() + 1)

  if (data.toDateString() === hoje.toDateString()) return "hoje"
  if (data.toDateString() === amanha.toDateString()) return "amanha"
  return data.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric" })
}

async function buscarEventos() {
  const agora = new Date()
  const limite = new Date()
  limite.setDate(agora.getDate() + 3)

  const calendarios = await Calendar.forEvents()
  const todos = await CalendarEvent.between(agora, limite, calendarios)

  return todos
    .filter(function(e) { return !e.isAllDay })
    .slice(0, CONFIG.maxEventos)
}

async function criarWidget() {
  const widget = new ListWidget()
  widget.setPadding(13, 15, 13, 15)

  const bg = await carregarBg()
  if (bg) widget.backgroundImage = bg
  else widget.backgroundColor = new Color("#F5F0E8", 0.72)

  const headerRow = widget.addStack()
  headerRow.layoutHorizontally()
  headerRow.centerAlignContent()
  headerRow.spacing = 6

  const labelCal = headerRow.addText("Agenda")
  labelCal.font = Font.boldSystemFont(8)
  labelCal.textColor = new Color(CONFIG.cores.label)

  const dataHoje = new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "short" })
  const labelData = headerRow.addText(dataHoje)
  labelData.font = new Font(CONFIG.fonte, 8)
  labelData.textColor = new Color(CONFIG.cores.titulo)
  labelData.textOpacity = 0.35

  widget.addSpacer(7)

  const eventos = await buscarEventos()

  if (eventos.length === 0) {
    const v = widget.addText("Nenhum evento por agora")
    v.font = new Font(CONFIG.fonte, 12)
    v.textColor = new Color(CONFIG.cores.vazio)
    v.textOpacity = 0.6
    return widget
  }

  for (const e of eventos) {
    const row = widget.addStack()
    row.layoutHorizontally()
    row.centerAlignContent()
    row.spacing = 6

    const dot = row.addText("o")
    dot.font = new Font(CONFIG.fonte, 7)
    dot.textColor = new Color(CONFIG.cores.dot)

    const col = row.addStack()
    col.layoutVertically()
    col.spacing = 1

    const titulo = col.addText(e.title)
    titulo.font = Font.boldSystemFont(11)
    titulo.textColor = new Color(CONFIG.cores.titulo)
    titulo.lineLimit = 1
    titulo.minimumScaleFactor = 0.8

    const metaRow = col.addStack()
    metaRow.layoutHorizontally()
    metaRow.spacing = 5

    const diaStr = formatarDia(e.startDate)
    const diaLabel = metaRow.addText(diaStr)
    diaLabel.font = new Font(CONFIG.fonte, 8)
    diaLabel.textColor = new Color(diaStr === "hoje" ? CONFIG.cores.hoje : CONFIG.cores.data)
    diaLabel.textOpacity = 0.85

    const horaLabel = metaRow.addText(formatarHora(e.startDate))
    horaLabel.font = new Font(CONFIG.fonte, 8)
    horaLabel.textColor = new Color(CONFIG.cores.hora)
    horaLabel.textOpacity = 0.7

    widget.addSpacer(5)
  }

  return widget
}

const widget = await criarWidget()
if (config.runsInWidget) Script.setWidget(widget)
else widget.presentMedium()
Script.complete()
