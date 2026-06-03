# GENE · Daylight — Como aplicar o filtro

**TL;DR:** você tem 2 arquivos prontos pra uso. Escolha pelo app:

| App | Arquivo | O que fazer |
|---|---|---|
| Lightroom Desktop / Mobile | `gene-daylight.xmp` | Importar como preset |
| Photoshop / Camera Raw | `gene-daylight.xmp` | Importar como preset |
| CapCut | `gene-daylight.cube` | Adicionar como LUT |
| Premiere / After Effects | `gene-daylight.cube` | Aplicar com Lumetri |
| DaVinci Resolve | `gene-daylight.cube` | Adicionar na LUT library |
| Final Cut Pro | `gene-daylight.cube` | Efeito Custom LUT |
| VSCO / Snapseed | valores manuais | ver `gene-preset-daylight.md` |

---

## 1. LIGHTROOM MOBILE (o mais rápido)

**Passo 1.** Abra o Lightroom no celular.
**Passo 2.** Toque no **+** (Adicionar) → **Arquivos** → selecione `gene-daylight.xmp`.
**Passo 3.** Vá em qualquer foto → role até **Predefinições** (no menu inferior) → categoria **"Gene Sneakers"** → toque em **GENE · Daylight v1.0**.
**Passo 4.** Pronto. Ajuste fino (temperatura ±3, exposição ±0.1) se a cena pedir.

**Problema comum:** se não aparecer em "Predefinições", feche e reabra o app. Às vezes demora alguns segundos pra sincronizar.

---

## 2. LIGHTROOM DESKTOP

**Passo 1.** Abra o Lightroom Classic.
**Passo 2.** No módulo **Develop**, clique com botão direito em qualquer preset na sidebar esquerda → **Import Presets**.
**Passo 3.** Selecione `gene-daylight.xmp`.
**Passo 4.** Encontre em **User Presets** → **GENE · Daylight v1.0**.

**Bonus:** pra aplicar em batch, selecione várias fotos no módulo Library, clique no preset, e todas recebem o filtro de uma vez.

---

## 3. CAPCUT (mobile ou desktop)

**Passo 1.** Abra o CapCut.
**Passo 2.** Comece um projeto novo → importe seu vídeo.
**Passo 3.** Toque no vídeo na timeline → **Filtros** → role até o final → **Importar LUT**.
**Passo 4.** Selecione `gene-daylight.cube`.
**Passo 5.** Intensidade padrão 100%. Reduza pra 80% se ficar muito warm.

---

## 4. PREMIERE PRO

**Passo 1.** Selecione o clip na timeline.
**Passo 2.** Painel **Lumetri Color** → aba **Basic Correction** → **Input LUT** → **Browse...**
**Passo 3.** Selecione `gene-daylight.cube`.
**Passo 4.** Se ficar forte demais, use a aba **Creative** → LUT Intensity: 80%.

---

## 5. DAVINCI RESOLVE

**Passo 1.** Menu **DaVinci Resolve** → **Preferences** → **User** → **Color** → ao lado de "Project LUTs", clique **Open LUT Folder**.
**Passo 2.** Copie `gene-daylight.cube` pra dentro dessa pasta.
**Passo 3.** Volte ao Resolve → **Color page** → clique com direito no nó → **LUT** → **Gene** → **gene-daylight**.

---

## 6. PHOTOSHOP (Camera Raw)

**Passo 1.** Abra sua foto → **Filter** → **Camera Raw Filter**.
**Passo 2.** Clique no ícone de **presets** (... no canto superior direito) → **Load Settings**.
**Passo 3.** Selecione `gene-daylight.xmp`.
**Passo 4.** OK.

---

## 7. VSCO / SNAPSEED / APPS MOBILE (valores manuais)

Esses apps não importam preset. Use os valores manualmente:

**VSCO:**
- Filtro base: A6 força +6 (ou KK2 +4)
- Exposição: +1
- Contraste: −1
- Temperatura: +2
- Saturação: −2
- Highlights Save: +4
- Shadows Save: +3
- Grão: +4

**Snapseed:**
- Tune Image → Brightness +5, Contrast −8, Saturation −10, Warmth +10, Highlights −15, Shadows +15
- Grainy Film → filtro L01, intensidade 30

---

## QUANDO NÃO APLICAR

O preset Daylight é pro **Ambiente 1 (Produto com Vida)**. Não aplicar em:

- Posts do Ambiente Carbon (série ORIGEM, hero noturno) → usar preset Carbon (próximo a vir)
- Posts do Ambiente Bloom (emoção, intimidade) → usar preset Bloom
- Posts do Ambiente Chrome (tecnológico) → usar preset Chrome
- Posts do Ambiente Acid (statement gritado) → sem preset, Acid puro

---

## CHECKLIST — a foto ficou Gene?

Depois de aplicar, valide:

- [ ] Brancos têm textura, não estão queimados
- [ ] Sombras têm detalhe, não são pretos mortos
- [ ] Verde e azul dessaturados (nada "verde Instagram")
- [ ] Tom geral warm, mas não alaranjado artificial
- [ ] Grão visível em zoom 100%, invisível em thumbnail
- [ ] Em thumbnail 200×200px, ainda parece da Gene

Se 4 de 6 itens passaram: pode publicar.
Se menos: ajuste temperatura ou exposição, ou a foto não era pra esse ambiente.

---

## ARQUIVOS NESTA PASTA

- `gene-daylight.xmp` — **PRESET LIGHTROOM** (foto)
- `gene-daylight.cube` — **LUT 3D** (vídeo, universal)
- `gene-preset-daylight.md` — valores técnicos de referência
- `gene-preset-preview.html` — preview visual antes/depois
- `gene-overlay-hud-4x5.svg` — overlay HUD feed
- `gene-overlay-hud-9x16.svg` — overlay HUD story
- `gene-ar-filter-spec.md` — spec do filtro de Instagram
- `gene-sistema-filtros.html` — doc master do sistema
- `COMO-APLICAR.md` — este arquivo

---

*v1.0 · 21.04.2026*
