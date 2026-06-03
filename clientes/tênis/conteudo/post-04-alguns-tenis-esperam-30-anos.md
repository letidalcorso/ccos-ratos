# HANDOFF DE DESIGN · Post "ALGUNS TÊNIS ESPERAM TRINTA ANOS"
**Gene Sneakers · Instagram Feed · Pilar 3 (Cultura Sneaker) · Ambiente Carbon · Carrossel 4 slides**
**Versão:** 2.0 (enxuta — 4 slides com 2 imagens) · **Data:** 19 abril 2026 · **Publicação-alvo:** 22/04/2026

---

## 0. RESUMO OPERACIONAL

**Editoria:** Pilar 3 (Cultura Sneaker) · Ambiente Carbon · Narrativa com imagem
**Tipo de post:** Carrossel 4 slides (feed 4:5, 1080×1350) · 2 slides imagem + 2 slides texto · Reel 8s opcional

**Copy da arte (por slide):**
```
SLIDE 1 — IMAGEM
[foto NB 550 clássico — área de imagem ocupa 100% do frame]
1989                                ← overlay canto superior esquerdo

SLIDE 2 — TEXTO
Em 1989, a New Balance
criou um tênis de basquete.

Quase ninguém usou.
Ficou 30 anos fora de linha.

SLIDE 3 — IMAGEM
[foto NB 550 Aimé Leon Dore — área de imagem ocupa 100% do frame]
2020                                ← overlay canto superior esquerdo
Aimé Leon Dore × New Balance        ← legenda rodapé

SLIDE 4 — HERO + CTA
Alguns tênis
nascem clássicos.

Outros esperam
trinta anos.

—

Disponível sob encomenda.
Qual é o seu? ↓

@gene.sneakers
```

**Legenda:**
```
30 anos esquecido. 3 anos no topo.
Clássico não é quem fica.
É quem volta.

NB 550 disponível sob encomenda na Gene.
Link na bio.

#nb550 #newbalance #aimeleondore #sneakers #genesneakers
```

---

## TL;DR pro designer
4 slides 4:5 alternando **imagem datada → texto narrativo → imagem datada → texto hero + CTA**. As duas fotos (1989 e 2020) carregam a narrativa visual; o overlay de ano em IBM Plex Mono micro é o que datará e ancora a história. Os dois slides de texto são Carbon puro, Big Shoulders. O ritmo narrativo é "vê → lê → vê → lê+age".

---

## 1. ESTRUTURA GERAL DO CARROSSEL

**Proporção:** 1080 × 1350 px (4:5) por slide · **4 slides** · **Ambiente:** Carbon em todos

**Regra cromática:**
| Slide | Tipo | Campo | Overlay/Texto |
|---|---|---|---|
| 1 | Imagem | Foto NB 550 clássico | "1989" em SLATE micro |
| 2 | Texto | CARBON | BONE narrativo |
| 3 | Imagem | Foto NB 550 ALD | "2020" em SLATE micro + legenda rodapé SLATE |
| 4 | Texto | CARBON | BONE hero + ACID CTA + BONE handle |

**Margens universais:** 96px de safe zone nas 4 bordas dos slides de texto. Nos slides de imagem, overlays respeitam 48px de margem das bordas.

**Assinatura:** `@gene.sneakers` aparece **apenas no slide 4**. Nos slides 1–3, nenhum handle, logo, hashtag, badge.

---

## 2. SLIDE 1 — IMAGEM DATADA (1989)

**Campo:** imagem ocupando 100% do frame, sangrando em todas as bordas

### Área de imagem
- **Placeholder:** retângulo 1080×1350 com marcação `IMAGE — NB 550 clássico, estética arquivo, fundo escuro` em IBM Plex Mono 10pt SLATE centralizada
- **A foto será fornecida separadamente**. Fundo escuro dominante é obrigatório pra o overlay em SLATE funcionar.

### Overlay de ano
- Copy: `1989`
- Fonte: **IBM Plex Mono** regular
- Cor: **SLATE `#A6A4A1`** (discreto — é marca de arquivo, não manchete)
- Tamanho: ~18pt
- Placement: canto superior esquerdo, margem 48px do topo e da esquerda
- Sem caixa, sem fundo, sem ornamento — só o número

**Fallback para mockup:** retângulo `#1A1A1A` com marcação "IMAGE 1989" em IBM Plex Mono 10pt SLATE centralizada.

---

## 3. SLIDE 2 — TEXTO NARRATIVO

**Campo:** CARBON `#0D0D0D`

**Copy:**
```
Em 1989, a New Balance
criou um tênis de basquete.

Quase ninguém usou.
Ficou 30 anos fora de linha.
```

- Fonte: **Big Shoulders Display Regular**
- Caixa: Title Case
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~56pt
- Tracking: -10 a -15
- Leading: 1.05
- Alinhamento: esquerda, bloco no centro vertical do frame
- 2 blocos separados por 1 linha em branco (~56pt de espaço)
- Margem esquerda: 96px

**Por que Regular e não Bold:** tom de narração calma. A história se conta com voz natural — se virar Bold, vira manifesto.

---

## 4. SLIDE 3 — IMAGEM DATADA (2020)

**Campo:** imagem ocupando 100% do frame, sangrando em todas as bordas

### Área de imagem
- **Placeholder:** retângulo 1080×1350 com marcação `IMAGE — NB 550 Aimé Leon Dore White/Green, estética contemporânea` em IBM Plex Mono 10pt SLATE centralizada
- **A foto será fornecida separadamente**. Fundo escuro ou neutro dominante é obrigatório pra overlay SLATE funcionar.

### Overlay de ano
- Copy: `2020`
- Fonte: **IBM Plex Mono** regular
- Cor: **SLATE `#A6A4A1`**
- Tamanho: ~18pt
- Placement: canto superior esquerdo, margem 48px do topo e da esquerda

### Legenda rodapé
- Copy: `Aimé Leon Dore × New Balance`
- Fonte: **IBM Plex Mono** regular
- Caixa: conforme digitado
- Cor: **SLATE `#A6A4A1`**
- Tamanho: ~11pt
- Placement: canto inferior esquerdo, margem 48px da base e da esquerda
- Usar caractere `×` (multiplicação, U+00D7), não `x` minúsculo — é convenção de colab na cultura sneaker

**Fallback para mockup:** retângulo `#1A1A1A` com marcação "IMAGE 2020 ALD" em IBM Plex Mono 10pt SLATE centralizada.

---

## 5. SLIDE 4 — HERO + CTA

**Campo:** CARBON `#0D0D0D`

**Copy:**
```
Alguns tênis
nascem clássicos.

Outros esperam
trinta anos.

—

Disponível sob encomenda.
Qual é o seu? ↓

@gene.sneakers
```

### Bloco 1 — Moral da história (superior)
- Copy: `Alguns tênis / nascem clássicos.` + `Outros esperam / trinta anos.`
- Fonte: **Big Shoulders Display Bold**
- Caixa: Title Case
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~72pt
- Tracking: -20
- Leading: 0.95
- Alinhamento: esquerda, margem 96px, ocupando metade superior do frame
- 2 blocos separados por 1 linha em branco

### Divisor
- Caractere: `—` (travessão)
- Fonte: **IBM Plex Mono** regular
- Cor: **SLATE `#A6A4A1`**
- Tamanho: ~18pt
- Placement: esquerda, margem 96px, centralizado verticalmente entre moral e CTA

### Bloco 2 — CTA
- Copy linha 1: `Disponível sob encomenda.`
  - Fonte: Big Shoulders Display Regular
  - Cor: BONE
  - Tamanho: ~38pt
- Copy linha 2: `Qual é o seu? ↓`
  - Fonte: **Big Shoulders Display Bold**
  - Cor: **ACID `#CBF23D`**
  - Tamanho: ~52pt
  - Alinhamento: esquerda, margem 96px, abaixo do divisor

### Assinatura
- Copy: `@gene.sneakers`
- Fonte: **IBM Plex Mono** regular
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~14pt
- Placement: inferior esquerdo, margem 96px

**Por que esse slide 4 concentra moral + CTA:** como enxugamos de 6 pra 4 slides, a moral e o CTA precisam coexistir no último slide. A hierarquia visual (moral monumental em cima, CTA ACID embaixo) mantém o ritmo do sistema — e o divisor `—` em SLATE separa os dois momentos sem virar linha gráfica.

---

## 6. PALETA APLICADA

| Token | Hex | Onde |
|---|---|---|
| CARBON | `#0D0D0D` | Campo slides 2, 4 |
| BONE | `#F2EFE9` | Texto narrativo slide 2, moral + handle slide 4, CTA afirmação |
| SLATE | `#A6A4A1` | Overlays de ano slides 1, 3 + legenda ALD slide 3 + divisor slide 4 |
| ACID | `#CBF23D` | Apenas CTA "Qual é o seu? ↓" no slide 4 |

---

## 7. PROIBIDO NO CARROSSEL INTEIRO

- Texto grande em cima da foto (slides 1 e 3) — só overlay de ano em Plex Mono micro
- Logo completo da Gene em qualquer slide
- Tagline "Estilo nos pés."
- Badges (ORDER, DROP, SIGNAL)
- Pattern, wave, bloom wash
- Números de slide (1/4, 2/4 etc)
- Hashtags na arte
- Logo da New Balance ou Aimé Leon Dore — só em texto, nunca em logo
- Aspas, itálico, underline em qualquer copy
- @gene.sneakers nos slides 1–3
- Emojis, stickers, decorativos

---

## 8. VERSÃO REEL (opcional — amplificação orgânica)

**Formato:** 9:16, 1080×1920, 30fps · **Duração:** 8s

| Frame | Tempo | Conteúdo |
|---|---|---|
| 1 | 0.0–1.5s | Imagem 1989, hold. "1989" aparece 0.3s depois em Plex Mono micro |
| 2 | 1.5–3.5s | Cut-in pro texto slide 2. Texto entra com Typographic Push da esquerda |
| 3 | 3.5–5.0s | Cut-in pra imagem 2020. "2020" aparece 0.3s depois, legenda ALD 0.6s depois |
| 4 | 5.0–8.0s | Cut-in pro slide 4. Moral aparece primeiro, CTA entra 1s depois com Signal Pulse no handle |

**Áudio:** instrumental grave, sem letra, sem drop. Foley urbano baixo volume aceitável. Não usar trend sound, beat reconhecível, voice-over.

**Proibido:** fade demorado, blur, bounce, parallax, partículas, kerning animado.

---

## 9. EXPORT

- **Feed (carrossel):** 4× PNG 1080×1350 + JPG 85% (nomear `post-04-slide-01.png` a `post-04-slide-04.png`)
- **Reel:** MP4 H.264, 9:16, 30fps, 8s, áudio -14 LUFS
- **Story cover opcional:** adaptar slide 4 pro 9:16

---

## 10. CHECKLIST DO DESIGNER

- [ ] 4 slides em 4:5 (1080×1350)
- [ ] Slide 1: imagem NB 550 clássico, 100% do frame, overlay "1989" em IBM Plex Mono 18pt SLATE canto superior esquerdo
- [ ] Slide 2: CARBON puro, texto narrativo 2 blocos Big Shoulders Regular 56pt BONE, esquerda
- [ ] Slide 3: imagem NB 550 ALD, 100% do frame, overlay "2020" em Plex Mono 18pt SLATE canto superior esquerdo + legenda "Aimé Leon Dore × New Balance" em Plex Mono 11pt SLATE rodapé esquerdo (× multiplicação, não x minúsculo)
- [ ] Slide 4: CARBON puro, moral Big Shoulders Bold 72pt BONE, divisor `—` Plex Mono SLATE, "Disponível sob encomenda" BS Regular 38pt BONE, CTA "Qual é o seu? ↓" BS Bold 52pt ACID, handle Plex Mono 14pt BONE rodapé
- [ ] @gene.sneakers apenas no slide 4
- [ ] Tipografia Big Shoulders Display (Bold/Regular) + IBM Plex Mono apenas
- [ ] Margem 96px nas bordas dos slides de texto; 48px nas bordas dos slides de imagem (para overlays)
- [ ] ZERO logo completo Gene, badge, pattern, wave, bloom wash, hashtag, número de slide, aspas
- [ ] Versão Reel 8s entregue se solicitado

---

## 11. Referências técnicas

- Design philosophy: `/tênis/gene-sneakers-design-philosophy.md` v2
- Color environments: `/tênis/gene-color-environments.html` v1.1 (ENV-01 Carbon)
- Brand voice: `/tênis/.claude/brand-voice-guidelines.md` v3
- Post 2 (ORIGEM #01 — AF1): `/tênis/conteudo/post-02-uma-verdade-sobre-o-tenis.md`
