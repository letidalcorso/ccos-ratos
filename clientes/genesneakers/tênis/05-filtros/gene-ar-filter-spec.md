# GENE · AR Filter · Spec para Spark AR / Meta Spark

**Produto:** Filtro de Instagram Story que aplica o sistema Gene em tempo real sobre o pé do usuário (ou sobre qualquer superfície). Mecânica de UGC: usuário vê o tênis dele virando "Gene" — cria content sobre content.

**Objetivo estratégico:** transformar cada post de usuário em mídia da marca. Filtro = logo em movimento. Cada story = aquisição.

**Formato de entrega:** este doc é a especificação técnica que o designer 3D/AR passa pra Spark AR Studio implementar. Não é o arquivo `.arexport` — é o que guia o desenvolvedor a construí-lo.

---

## 1. Conceito

Nome do filtro: **GENE · DNA**
Emoji representativo: `▣` (slot do asset)
Duração ideal do story: 5–15s

**O que o filtro faz:**
1. Detecta o chão (ou qualquer plano horizontal) via plane tracker
2. Sobrepõe um HUD tipográfico Gene ao redor do pé/objeto
3. Aplica o color grade Daylight no feed da câmera
4. Mostra um badge "ORDER OPEN" pulsante no canto superior direito
5. Ao tocar a tela, alterna entre 3 "modos": CARBON / DAYLIGHT / ACID
6. Ao girar 360°, dispara animação do divider Acid atravessando a tela

---

## 2. Camadas (layers)

### Layer 01 · Color Grade (base)
- **Tipo:** LUT + adjustments
- **LUT:** `gene_daylight.cube` (exportar do Lightroom preset)
- **Adjustments inline:**
  - Brightness: +0.05
  - Contrast: −0.10
  - Saturation: −0.12
  - Temperature: +8 (warm)
- **Grain:** noise texture 0.08 opacity, scale 2.5, blend overlay

### Layer 02 · HUD Tipográfico (world-space)
- **Posição:** anchor no plane tracker, distance 0.5m
- **Elementos:**
  - 4 crosshairs nos cantos da tela (Acid #C4FF3C, stroke 2px)
  - Badge top-left: `SKU · GN-AJ1-26` (IBM Plex Mono 500, 18pt, Carbon bg, Acid text)
  - Coordenadas top-right: `◆ 23°S · 46°W` (Plex Mono Regular 14pt, Bone)
  - Divider Acid inferior (horizontal line, stroke 3px)
  - Footer: `21.04 / DROP-26 · REC · LIVE CAPTURE` (Plex Mono 500, 16pt)
  - Target crosshair central (circle 14px radius, Acid)

### Layer 03 · Interação TAP (modo switcher)
- **Script (Patch Editor):**
  - On screen tap → incrementa counter (0, 1, 2, reset)
  - Counter 0 = modo CARBON (color grade padrão)
  - Counter 1 = modo DAYLIGHT (color grade warm, atual)
  - Counter 2 = modo ACID (background Acid overlay 40% screen blend)
- **UX:** ao tap, mini-badge no topo indica modo ativo (ex: `MODE · 02 / DAYLIGHT`)

### Layer 04 · Rotation trigger (divider animation)
- **Trigger:** device rotation velocity > 1.5 rad/s em qualquer eixo
- **Efeito:** linha Acid horizontal de 1080px atravessa a tela de esquerda para direita em 0.4s com ease-out, opacity 0.9, blend normal
- **Cooldown:** 2s antes de poder disparar novamente

### Layer 05 · Badge "ORDER OPEN" (pulse)
- **Posição:** canto superior direito, screen space, margin 40px
- **Asset:** rect Acid 270×54px, check mark desenhado + texto "ORDER OPEN" Plex Mono 22pt
- **Animação:** opacity loop 0.7 → 1.0 → 0.7 em 2s, ease-in-out
- **Link:** tap no badge abre link (Instagram sticker padrão → bio link ou destino do drop)

---

## 3. Assets necessários (para o designer AR)

| Asset | Formato | Onde vem |
|---|---|---|
| `gene_daylight.cube` | LUT 33×33×33 | exportar do Lightroom preset Daylight |
| `grain_texture.png` | 1024×1024 seamless | stock Kodak grain ou gerado |
| `sku_badge.png` | 540×80 @2x | renderizar do overlay HUD existente |
| `crosshair_tl.png` | 100×100 @2x | SVG → PNG com transparência |
| `crosshair_tr.png` | 100×100 @2x | SVG → PNG |
| `crosshair_bl.png` | 100×100 @2x | SVG → PNG |
| `crosshair_br.png` | 100×100 @2x | SVG → PNG |
| `divider_acid.png` | 2160×20 @2x | rect Acid |
| `target_center.png` | 80×80 @2x | circle + cross central |
| `order_open_badge.png` | 540×108 @2x | renderizar do post 01 |
| `font_plex_mono.ttf` | Regular + Medium | Google Fonts |
| `font_big_shoulders.ttf` | Display 700 | Google Fonts |

---

## 4. Patches / Logic (Spark AR Patch Editor)

```
[Plane Tracker] → [3D Object: HUD anchor] → [Render]
[Camera Texture] → [LUT Filter: gene_daylight] → [Add grain] → [Screen output]
[Screen Tap] → [Counter 0..2] → [Switch: Carbon/Daylight/Acid] → [Blend mode]
[Device Motion] → [Rotation velocity] → [> 1.5] → [Trigger animation: divider sweep]
[Time loop 2s] → [Sine curve 0.7..1.0] → [Badge opacity]
```

---

## 5. Publicação

- **Conta:** @gene.sneakers (owner do filtro)
- **Categoria:** Estilo e moda
- **Ícone do filtro:** monograma "G" Acid sobre Carbon (usar `gene-avatar-02-monograma.svg`)
- **Nome:** `GENE · DNA`
- **Descrição:** "o filtro que transforma o seu pé em Gene"
- **Idioma:** PT-BR + EN
- **Restrições:** nenhuma (público geral)
- **Thumbnail:** render do filtro aplicado sobre um AJ1 branco

---

## 6. Copy para o lançamento do filtro

**Story de anúncio:**
> "o filtro de sneaker que todo feed precisava.
> GENE · DNA no Instagram.
> pé + tap + share.
> o drop começa aqui."

**CTA no story:** swipe up para abrir o filtro direto da câmera.

**Hashtag operacional:** `#gene.dna` — todo user que usa o filtro é repostado no Close Friends.

**Reward loop:** top 10 stories com o filtro na semana de lançamento ganham voucher Gene do primeiro drop.

---

## 7. Métricas de sucesso (KPI)

- **Impressions:** >100k nas primeiras 72h
- **Captures:** >2.000 stories publicados com o filtro em 7 dias
- **Share rate:** >35% (captures que viraram story, não só preview)
- **Tap rate no badge ORDER OPEN:** >8% (conversão pra drop)

Todas as métricas vêm do Spark AR Analytics nativo.

---

## 8. Checklist pré-publicação

- [ ] LUT testado em 3 tons de pele diferentes (claro/médio/escuro)
- [ ] HUD legível em iPhone 12 / Android médio (teste em device real, não só simulator)
- [ ] Tap interaction funciona sem confundir com o tap de trocar câmera
- [ ] Rotation trigger não dispara falso-positivo com shake leve
- [ ] Badge ORDER OPEN link configurado corretamente no Instagram
- [ ] Thumbnail aprovado pela Meta (sem copy violando guidelines)
- [ ] Filtro testado em WiFi fraco (se performance cai, reduzir grain texture)

---

## 9. Timeline sugerido

| Semana | Entrega |
|---|---|
| Semana 01 | Briefing + moodboard AR + mock em vídeo |
| Semana 02 | Build Spark AR + primeiro preview interno |
| Semana 03 | Teste em devices reais + ajustes |
| Semana 04 | Submissão Meta Spark + prep de comunicação |
| Semana 05 | Lançamento público + monitoramento |

**Observação:** Meta Spark pode levar 5–10 dias úteis pra aprovar. Submeter com antecedência.

---

*Spec v1.0 · 21.04.2026 · Gene Sneakers · Lançamento Drop-26*
