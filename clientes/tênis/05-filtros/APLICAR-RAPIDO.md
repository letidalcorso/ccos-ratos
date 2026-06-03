# GENE · Aplicar filtro em 30 segundos

---

## 📱 NO CELULAR (Lightroom Mobile) — o mais rápido

1. Abre o **Lightroom Mobile** no celular
2. Toca no **+** (canto inferior) → **Arquivos** → escolhe o preset `.xmp` (ex: `gene-daylight.xmp`)
3. Abre a foto que quer editar
4. Role o menu inferior → **Predefinições** → **Gene Sneakers** → toca no preset
5. Pronto. Exporta em alta e usa.

> **Primeira vez?** Manda os 5 `.xmp` pro seu celular (AirDrop, Drive, email) e importa todos de uma vez.

---

## 🎬 NO VÍDEO (CapCut) — mobile ou desktop

1. Abre o **CapCut** → novo projeto → importa o vídeo
2. Toca no clip na timeline → **Filtros** → desliza até o fim → **Importar LUT**
3. Seleciona o `.cube` (ex: `gene-carbon.cube`)
4. Intensidade **100%** (reduz pra 80% se ficar forte)
5. Exporta.

---

## 🖥️ NO FIGMA — 3 cliques (método nativo)

1. Seleciona a imagem no Figma
2. Painel direito → **Fill** → clica na miniatura → aba **Adjustments**
3. Aplica os valores da tabela (procura no `gene-sistema-ambientes.md` qual ambiente)

> **Alternativa com overlay** (resultado mais fiel): importa o `gene-{ambiente}-overlay-kit.svg`, joga por cima da foto, aplica blend modes. Passo detalhado em `gene-daylight-figma.md`.

---

## 💻 NO DESKTOP (Lightroom Classic)

1. **Develop module** → botão direito na sidebar esquerda → **Import Presets**
2. Seleciona o `.xmp`
3. Acha em **User Presets** → **GENE · {Ambiente} v1.0**
4. Clica. Pronto.

> **Pra tratar 30 fotos iguais:** seleciona todas no Library, clica no preset, tudo aplicado de uma vez.

---

## 🎯 QUAL AMBIENTE USAR? (decisão em 5 segundos)

| Sua foto é... | Usa |
|---|---|
| Pessoa usando tênis em situação casual | **Daylight** |
| Arquivo histórico, ORIGEM, hero noturno | **Carbon** |
| Close emocional, detalhe, textura humana | **Bloom** |
| Produto isolado em estúdio, spec técnico | **Chrome** |
| Drop reveal, statement puro | **Acid** |

Na dúvida: **Daylight**. É o default da marca.

---

## ⚡ FLUXO PADRÃO — 90% DOS CASOS

**Foto estática (feed/story):**
`Lightroom Mobile` → aplica preset `.xmp` → exporta → posta

**Vídeo (reels):**
`CapCut` → aplica LUT `.cube` → exporta → posta

**Mockup no Figma:**
`Figma` → Image Adjustments nativo (5 sliders) → pronto

---

## 🔥 TROUBLESHOOTING — 3 problemas comuns

**"Não vejo o preset no Lightroom"**
→ Feche e abra o app. Leva uns segundos pra sincronizar.

**"Ficou muito warm / muito cool"**
→ Depois de aplicar, ajusta **Temp ±3** na mão.

**"No Figma não ficou igual ao Lightroom"**
→ Figma tem só 7 sliders, não tem HSL. Pra 100% fiel, usa o overlay kit SVG.

---

## 📦 TEM OS 5 PRESETS — FICHA TÉCNICA

| Ambiente | Preset (.xmp) | LUT (.cube) | Figma (.svg) |
|---|---|---|---|
| Daylight | ✅ | ✅ | ✅ |
| Carbon | ✅ | ✅ | ✅ |
| Bloom | ✅ | ✅ | ✅ |
| Chrome | ✅ | ✅ | ✅ |
| Acid | ✅ | ✅ | ✅ |

Todos em `/05-filtros/`.

---

*v1.0 · 21.04.2026*
