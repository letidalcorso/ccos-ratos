# GENE · Preset Daylight v1.0

**Propósito:** transformar qualquer foto de tênis (studio, rua, still) no "look Gene" — luz editorial natural, paleta quente-dessaturada, grão discreto. É o filtro-raiz que ancora o Pilar 1 (Produto com Vida).

**Quando aplicar:** em 100% das fotos que vão para o Ambiente Daylight (feed principal, hero shots, carousel de produto). Bloom, Chrome e Acid têm presets próprios — este não se aplica a eles.

**Proibido:** saturação Instagram-default, HDR, blacks esmagados, highlights queimados, tom esverdeado, filtro frio.

---

## Valores técnicos — Lightroom / Camera Raw

### Light
| Parâmetro | Valor | Racional |
|---|---|---|
| Exposure | +0.15 | leve respiro, sem estourar |
| Contrast | -10 | matiza a imagem, editorial |
| Highlights | -25 | recupera céu/reflexo branco |
| Shadows | +15 | abre sombra sem achatar |
| Whites | +8 | brilho limpo |
| Blacks | -12 | peso no ponto âncora |

### Color
| Parâmetro | Valor |
|---|---|
| Temperature | +8 (warm) |
| Tint | +3 (magenta leve) |
| Vibrance | -5 |
| Saturation | -12 |

### Tone Curve
- Point Curve: **Medium Contrast** base
- RGB curve: ponto de sombra levantado em +5 (black lift analógico)
- Blue channel highlight: -4 (warm highlights)
- Red channel shadow: +3 (warm shadows)

### HSL (ajustes chave)
| Cor | Hue | Saturation | Luminance |
|---|---|---|---|
| Red | 0 | -8 | +4 |
| Orange | -5 | -15 | +8 |
| Yellow | -8 | -20 | +5 |
| Green | +10 | -30 | 0 |
| Aqua | +15 | -25 | -5 |
| Blue | -8 | -10 | -10 |
| Purple | 0 | -15 | 0 |
| Magenta | 0 | -10 | 0 |

**Lógica:** esverdeados e azuis puxados pra cinza (evita o "Instagram verde"); laranjas/vermelhos levemente mais quentes e luminosos (peles e couro brilham); amarelos dessaturados (evita tom sódio).

### Effects
- **Grain amount:** 20
- **Grain size:** 25
- **Grain roughness:** 50
- **Vignette:** -8 (midpoint 60, feather 70)

### Calibration
- Shadow tint: +3 (magenta)
- Red primary saturation: -4
- Blue primary hue: -5

---

## Valores técnicos — VSCO (alternativa mobile)

- **Base:** A6 (+6) ou KK2 (+4)
- **Exposure:** +1
- **Contrast:** -1
- **Temperature:** +2
- **Saturation:** -2
- **Highlights Save:** +4
- **Shadows Save:** +3
- **Grain:** +4

---

## Valores técnicos — CapCut / Inshot (vídeo)

- **Brightness:** +5
- **Contrast:** -8
- **Saturation:** -10
- **Warmth:** +10
- **Highlight:** -15
- **Shadow:** +10
- **Grain:** 15%

---

## Equivalente CSS (web/preview)

```css
.gene-daylight {
  filter:
    brightness(1.05)
    contrast(0.92)
    saturate(0.88)
    sepia(0.08)
    hue-rotate(-3deg);
}

/* Overlay de grão — aplicar por cima com mix-blend-mode */
.gene-daylight::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml;utf8,<svg...>'); /* noise PNG */
  opacity: 0.08;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

---

## Aplicação prática — fluxo do fotógrafo/editor

1. **Captura:** RAW, 50mm equivalente, luz natural lateral (janela/sombra aberta). Evitar luz direta de meio-dia.
2. **Import:** Lightroom → aplicar preset `GENE · Daylight v1.0` no momento do import (batch).
3. **Ajuste fino por foto:**
   - Temperatura: ajustar ±3 pontos se cena estiver muito fria ou quente
   - Exposição: ajustar ±0.1 se subexposta
   - Nunca mexer em HSL individual sem justificativa forte
4. **Export:**
   - JPEG 2048px borda longa, qualidade 85, sRGB, sem metadata
   - Nome: `gene_[drop]_[modelo]_[n].jpg` (ex: `gene_drop26_aj1_03.jpg`)
5. **QA:** ver em preview no ambiente do feed (HTML mock) antes de subir

---

## Checklist — a foto passou no filtro?

- [ ] Brancos limpos, mas não queimados (máx 240 RGB)
- [ ] Pretos têm informação, não são 0/0/0
- [ ] Pele/couro com tom quente natural (sem alaranjado artificial)
- [ ] Grão perceptível em zoom 100%, invisível em thumbnail
- [ ] Nenhum verde saturado no frame
- [ ] Tênis é o protagonista, não o background

---

## Referências visuais (moodboard)

- Editorial: Kinfolk Magazine (cadência de cor)
- Product: Aimé Leon Dore lookbook
- Grain: Kodak Portra 400 digital emulation
- Sombra: Roman Paszke (fotografia arquitetural)

**Evitar:** filtros de moda Zara/H&M (saturado, HDR), feeds de revenda (cor chapada), stock photo (flat).

---

*Última revisão: 21.04.2026 · Lançamento Drop-26*
