# HANDOFF DE DESIGN · Post "O seu próximo."
**Gene Sneakers · Instagram Feed · Pilar 1 (Produto com Vida) · Ambiente Daylight**
**Versão:** 1.1 (handoff final, sem foto) · **Data:** 19 abril 2026 · **Publicação-alvo:** 21/04/2026 (estreia)

---

## TL;DR pro designer
Frame 4:5 com **uma imagem editorial de tênis em luz natural** ocupando ~70% do frame (imagem será inserida depois). Overlay tipográfico mínimo em Big Shoulders Bold — "O SEU PRÓXIMO." no canto inferior esquerdo, assinatura @gene.sneakers em IBM Plex Mono no canto inferior direito. Badge ORDER em Acid no canto superior direito. Sem pattern, sem wave, sem bloom. Silêncio é a peça.

---

## 1. ESTRUTURA DO FRAME

**Proporção:** 1080 × 1350 px (4:5) · **Ambiente:** Daylight

### Placeholder de imagem
Deixar uma **área de imagem ocupando ~70% do frame**, alinhada ao topo, sangrando até as bordas laterais e superior. A base da imagem termina aproximadamente na altura de 72% do frame (deixando os 28% inferiores para respiração + tipografia).

**A imagem será editorial** — foto de tênis em luz natural sobre superfície crua (concreto, asfalto ou madeira), campo claro, sem fundo branco de estúdio. Mood: silencioso, editorial, com respiração. Paleta da foto harmoniza com Daylight (tons terrosos, claros, sem cores gritantes).

Para composição, o designer pode assumir que a imagem terá **luz natural vinda da esquerda ou de cima, com o produto no centro ou levemente deslocado para a direita**, deixando espaço negativo à esquerda onde o hero tipográfico vai respirar.

**Fallback para mockup:** usar retângulo `#F2EFE9` (BONE) com marcação "IMAGE" em IBM Plex Mono 10pt centralizada em SLATE — o cliente entende que o placeholder será substituído.

### Abaixo da imagem (zona de tipografia)
- Campo: **BONE `#F2EFE9`**
- Altura aproximada: 28% do frame inferior (≈378px em 1350px)
- Nessa zona vão os 3 elementos: hero, badge (se não for usado no topo), assinatura

---

## 2. TEXTO DA ARTE

### Hero tipográfico (obrigatório)
```
O SEU
PRÓXIMO.
```
- Fonte: **Big Shoulders Display Bold**
- Caixa: UPPERCASE
- Cor: **CARBON `#0D0D0D`**
- Quebra em 2 linhas, "PRÓXIMO." com ponto final na segunda linha
- Tamanho: ~72pt em frame 1080×1350 (nunca menor que 60pt)
- Tracking: -20 a -40
- Leading: 0.88–0.92 (linhas coladas, desenho de bloco)
- Alinhamento: esquerda
- Placement: canto inferior esquerdo da zona inferior, margem de 64px do limite

### Badge (obrigatório, discreto)
```
✓ ORDER OPEN
```
- Fonte: **IBM Plex Mono** regular
- Caixa: UPPERCASE
- Cor texto: **CARBON `#0D0D0D`**
- Fundo: **ACID `#CBF23D`**
- Tamanho: ~11pt
- Padding: 6px vertical, 10px horizontal
- **Placement:** canto superior direito DA IMAGEM (sobreposto a ela), margem 40px do topo e da direita

### Assinatura (obrigatório)
```
@gene.sneakers
```
- Fonte: **IBM Plex Mono** regular
- Cor: **CARBON `#0D0D0D`**
- Tamanho: ~10pt
- Placement: canto inferior direito do frame, margem 40px, baseline alinhada com a baseline de "PRÓXIMO."

### Proibido no frame
- Logo cheio da Gene
- Tagline "Estilo nos pés."
- Qualquer CTA tipo "compre agora"
- Hashtag visual
- Preço
- Nome do modelo em destaque
- Pattern, wave, bloom, chrome

---

## 3. PALETA APLICADA

| Elemento | Token | Hex |
|---|---|---|
| Campo da zona inferior | BONE | `#F2EFE9` |
| Hero + assinatura (texto) | CARBON | `#0D0D0D` |
| Fundo da badge | ACID | `#CBF23D` |
| Texto da badge | CARBON | `#0D0D0D` |

---

## 4. VERSÃO REEL (opcional — entregar se produzida)

**Formato:** 9:16, 1080×1920, 30fps · **Duração:** 4s

| Frame | Tempo | O que acontece |
|---|---|---|
| 1 | 0.0–3.0s | Imagem do tênis, câmera aproxima 10–15% (zoom lento). Sem corte. Badge ORDER já visível no canto superior direito. |
| 2 | 3.0–4.0s | "O SEU PRÓXIMO." entra com **Typographic Push** (desliza da borda esquerda para dentro, sem fade). @gene.sneakers aparece simultâneo com **Signal Pulse** (1 frame de flash no Acid do badge). |

**Áudio:** instrumental grave, sem letra. Nota contínua ou foley ambiente. Sem trilha comercial.

**Proibido:** bounce, fade longo, blur cinematográfico, legenda dinâmica, emoji, sticker.

---

## 5. LEGENDA (texto pronto)

```
Encomendas abertas.
Link na bio.
```

Versão alternativa:
```
Encomendas abertas.
Diga o modelo — a gente traz.
Link na bio.
```

Hashtags em comentário separado (opcional): `#sneakers #sneakerhead #tenis #gene`

---

## 6. VARIAÇÕES DE HERO (mesmo layout, copy diferente)

| # | Hero | Quando usar |
|---|---|---|
| **A** | "O SEU PRÓXIMO." | Default, estreia |
| B | "ESCOLHIDO ANTES DE CHEGAR." | 2ª Daylight — reforça sob encomenda |
| C | "NÃO TEM NO VAREJO. TEM NA GENE." | Bico mais direto — reforça posicionamento |
| D | `[NOME DO MODELO]` + `@gene.sneakers` | Post de drop específico em Daylight |
| E | Sem hero. Só imagem + badge + handle. | Mês 2+, quando identidade estiver reconhecível |

---

## 7. EXPORT

- **Feed (estático):** PNG 1080×1350 + JPG 85% qualidade
- **Story / Reel cover:** PNG 1080×1920 (mesmo layout, hero sobe, badge permanece topo direita)
- **Reel:** MP4 H.264, 9:16, 30fps, 4s, áudio -14 LUFS

---

## 8. CHECKLIST DO DESIGNER

- [ ] Proporção 4:5 (1080×1350) pra feed
- [ ] Placeholder de imagem ocupando ~70% do frame, sangrando nas bordas superior e laterais
- [ ] Zona inferior em BONE #F2EFE9 ocupando ~28% do frame
- [ ] Hero "O SEU PRÓXIMO." em Big Shoulders Display Bold, uppercase, Carbon, canto inferior esquerdo
- [ ] Badge "✓ ORDER OPEN" em IBM Plex Mono micro, fundo Acid, sobreposto à imagem no canto superior direito
- [ ] Assinatura @gene.sneakers em IBM Plex Mono micro, canto inferior direito
- [ ] ZERO pattern, wave, bloom, chrome, logo completo ou tagline no frame
- [ ] Versão story/reel 9:16 entregue com mesmo layout adaptado

---

## 9. Referências técnicas

- Design philosophy: `/tênis/gene-sneakers-design-philosophy.md` v2
- Color environments: `/tênis/gene-color-environments.html` v1.1
- Design system expandido: `/tênis/gene-design-system-expanded.html`
- Brand voice: `/tênis/.claude/brand-voice-guidelines.md` v3
