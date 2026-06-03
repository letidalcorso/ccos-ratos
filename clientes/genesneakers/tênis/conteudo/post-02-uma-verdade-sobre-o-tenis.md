# HANDOFF DE DESIGN · Post "ORIGEM #01 — AIR FORCE 1"
**Gene Sneakers · Instagram Feed · Pilar 1 (Produto com Vida) · Ambiente Carbon · Série: ORIGEM #01**
**Versão:** 3.0 (rework — carrossel 3 slides, mescla do estático colecionável com profundidade cultural) · **Data:** 21 abril 2026 · **Publicação-alvo:** 22/04/2026

---

## 0. RESUMO OPERACIONAL

**Editoria:** Série ORIGEM #01 · Pilar 1 (Produto com Vida) · Ambiente Carbon
**Tipo de post:** Carrossel 3 slides (feed 4:5, 1080×1350 cada) + versão story 9:16

**Copy da arte:**

**SLIDE 1 · HERO**
```
1982
AIR FORCE 1
Nike tirou de linha em 1984.
Três lojistas de Baltimore salvaram.
```

**SLIDE 2 · CONTEXTO**
```
The Three Amigos.

Freddy Hicks.
Darryl Jenkins.
Tony Roberts.

Três lojistas da Downtown Locker Room,
Baltimore.

Compraram todo o estoque que sobrou
em 1984 — e pressionaram a Nike
a voltar a produzir.
```

**SLIDE 3 · MORAL + GENE**
```
Hoje, é o tênis
mais vendido
da história.

—

Gene trouxe.

@gene.sneakers
```

**Legenda:**
```
1982. Air Force 1.

A história que quase não existiu:
em 1984 a Nike ia aposentar o modelo.
Três lojistas de Baltimore — Freddy Hicks,
Darryl Jenkins e Tony Roberts, conhecidos
como "The Three Amigos" — convenceram
a marca a continuar produzindo.

Sem eles, o tênis mais vendido da história
não existiria hoje.

Gene trouxe. Link na bio.
```

---

## TL;DR pro designer

Carrossel 3 slides em ambiente Carbon. **Slide 1** mantém a estrutura do estático original (imagem editorial 60% + zona Carbon 40% com 3 tiers tipográficos — ano/nome monumental/linha de origem). **Slide 2** é Carbon puro com texto-first — desdobra a história dos Three Amigos em 3 blocos (título / nomes em Plex Mono como ficha / contexto em Big Shoulders). **Slide 3** é Carbon puro com remate — hero monumental sobre o legado + divisor `—` + "Gene trouxe." em Acid como fechamento de autoridade (mesma lógica do sussurro ACID do Post 5). Handle @gene.sneakers só no slide 3, canto inferior direito.

**Princípio da série ORIGEM:** o slide 1 é autossuficiente — quem não deslizar ainda pega a história completa (screenshot-ability preservada). Quem desliza, ganha profundidade cultural (slide 2) e reconexão com Gene (slide 3).

**Mudança em relação à v2.1:** era estático único. Agora é carrossel 3 slides. Slide 1 é idêntico ao estático anterior. Slides 2 e 3 são novos. A regra de "3 slides sempre" vira padrão da série.

---

## 1. ARQUITETURA DO CARROSSEL

**Proporção:** 1080 × 1350 px (4:5) · **Ambiente:** Carbon em todos os 3 slides

**Ritmo do swipe:**
- Slide 1 → visual + hook (imagem + 3 tiers de texto)
- Slide 2 → densidade textual (ficha dos 3 lojistas + contexto)
- Slide 3 → moral + conversão (hero textual + Acid)

**Contraste interno:** slide 1 tem imagem (arejo visual). Slides 2 e 3 são texto puro em Carbon (densidade). O ritmo força o leitor a desacelerar nos slides 2 e 3 — é lá que a história é lida, não escaneada.

---

## 2. SLIDE 1 · HERO (imagem + 3 tiers de texto)

*Este slide é idêntico ao estático da v2.1. Foi mantido como âncora colecionável da série.*

### Zona de imagem (superior, ~60% do frame)
- Placeholder ocupando **0–810px verticais**, sangrando nas bordas laterais e superior
- Imagem editorial de tênis AF1 em luz dramática sobre superfície escura (concreto escuro, asfalto, madeira queimada). Fundo escuro dominante.
- Transição natural da imagem pra zona de texto — **sem linha divisória**. O fundo escuro da foto conversa com o Carbon da zona inferior.
- **Fallback para mockup:** retângulo `#1A1A1A` com marcação "IMAGE" em IBM Plex Mono 10pt centralizada em SLATE `#A6A4A1`.

### Zona de texto (inferior, ~40% do frame)
Campo **CARBON `#0D0D0D`**. Três tiers tipográficos empilhados.

**TIER 1 · Ano (metadado/arquivo)**
```
1982
```
- Fonte: **IBM Plex Mono** regular
- Caixa: numérico
- Cor: **SLATE `#A6A4A1`**
- Tamanho: ~14pt
- Tracking: normal
- Alinhamento: esquerda
- Placement: margem 64px da esquerda, a ≈ 40px do topo da zona de texto
- Função: âncora de arquivo, sinal técnico, frequência de autoridade

**TIER 2 · Nome do modelo (hero)**
```
AIR FORCE 1
```
- Fonte: **Big Shoulders Display Bold**
- Caixa: UPPERCASE
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~96pt em frame 1080×1350 (monumental)
- Tracking: -20 a -30
- Leading: 0.92
- Alinhamento: esquerda
- Placement: imediatamente abaixo do ano, distância vertical ≈ 12px
- Função: identificação monumental — o que você está olhando

**TIER 3 · Linha de origem (whisper)**
```
Nike tirou de linha em 1984.
Três lojistas de Baltimore salvaram.
```
- Fonte: **Big Shoulders Display Regular**
- Caixa: Title Case (primeira letra maiúscula por frase)
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~30pt (ratio ~3.2:1 em relação ao hero)
- Leading: 1.05 (respiração entre as duas linhas)
- Alinhamento: esquerda
- Placement: imediatamente abaixo do nome do modelo, distância vertical ≈ 20px
- Função: o fato. A curiosidade. O que o sneakerhead não sabia (ou sabia e quer ver escrito).

### Handle (ausente no slide 1)
O handle @gene.sneakers **não entra no slide 1** — aparece só no slide 3. O slide 1 é arquivo, não assinatura. A ausência de handle reforça o ar de "ficha de catálogo".

### Proibido no slide 1
- Handle @gene.sneakers (só no slide 3)
- Badge de qualquer tipo
- CTA, preço, tagline, logo completo
- Hashtag, pattern, wave, aspas

---

## 3. SLIDE 2 · CONTEXTO (Carbon puro, texto-first)

Campo **CARBON `#0D0D0D`** em todo o frame. Zero imagem. Três blocos tipográficos verticais com hierarquia clara.

### Estrutura do frame (4:5 · 1080×1350)

**Margem geral:** 80px da esquerda, alinhamento à esquerda em todos os blocos.

### BLOCO 1 · Título (topo, ~25% do frame)
```
The Three Amigos.
```
- Fonte: **Big Shoulders Display Bold**
- Caixa: Title Case
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~72pt
- Tracking: -15
- Leading: 1.0
- Placement: ≈ 120px do topo do frame

### Respiração
- ~60px de ar em Carbon entre o título e os nomes

### BLOCO 2 · Os três nomes (ficha técnica, ~25% do frame)
```
Freddy Hicks.
Darryl Jenkins.
Tony Roberts.
```
- Fonte: **IBM Plex Mono** regular
- Caixa: Title Case
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~24pt
- Tracking: normal
- Leading: 1.4 (respiração entre linhas)
- Função: os nomes viram ficha de arquivo. Mono carrega a frequência de "registro histórico", não de "marketing".

### Respiração
- ~80px de ar em Carbon entre os nomes e o contexto

### BLOCO 3 · Contexto (corpo narrativo, ~45% do frame)
```
Três lojistas da Downtown Locker Room,
Baltimore.

Compraram todo o estoque que sobrou
em 1984 — e pressionaram a Nike
a voltar a produzir.
```
- Fonte: **Big Shoulders Display Regular**
- Caixa: Sentence case
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~38pt
- Tracking: -5
- Leading: 1.1
- Placement: dois parágrafos separados por ~24px de ar
- Função: a história em prosa editorial. Dois parágrafos curtos — quem / o quê.

### Handle (ausente no slide 2)
O handle @gene.sneakers **não entra no slide 2** — aparece só no slide 3. Mantém a pureza arquivística.

### Proibido no slide 2
- Handle (só no slide 3)
- Imagem, pattern, wave, badge
- Aspas nas frases (o fato fala sozinho — "The Three Amigos" é o apelido, vai sem aspas; se quiser marcar tipograficamente, aceita em itálico sutil, mas preferível sem)
- Algarismos arábicos além de "1984" (é dado histórico)

---

## 4. SLIDE 3 · MORAL + GENE (Carbon puro, hero + Acid)

Campo **CARBON `#0D0D0D`** em todo o frame. Zero imagem. Hero tipográfico + divisor + remate Acid + handle.

### Estrutura do frame (4:5 · 1080×1350)

**Margem geral:** 80px da esquerda, alinhamento à esquerda.

### BLOCO 1 · Hero monumental (topo, ~55% do frame)
```
Hoje, é o tênis
mais vendido
da história.
```
- Fonte: **Big Shoulders Display Bold**
- Caixa: Sentence case
- Cor: **BONE `#F2EFE9`**
- Tamanho: ~96pt (monumental — o peso da afirmação carrega)
- Tracking: -20
- Leading: 0.95
- 3 linhas empilhadas, alinhadas à esquerda
- Placement: ≈ 120px do topo do frame
- Função: o legado em 7 palavras. A frase não precisa de exclamação nem hashtag — a escala tipográfica entrega o peso.

### Divisor
```
—
```
- Tipo: em dash (U+2014, não hífen)
- Fonte: **Big Shoulders Display Regular**
- Cor: **SLATE `#A6A4A1`**
- Tamanho: ~48pt
- Placement: ~60px abaixo do hero, alinhado à esquerda na mesma margem
- Função: pausa visual. Sinal de que o argumento terminou e o remate vai chegar.

### BLOCO 2 · Remate Gene (Acid, ~25% do frame)
```
Gene trouxe.
```
- Fonte: **Big Shoulders Display Bold**
- Caixa: Sentence case
- Cor: **ACID `#CBF23D`**
- Tamanho: ~56pt
- Tracking: -15
- Leading: 1.0
- Placement: ~60px abaixo do divisor, alinhado à esquerda
- Função: o remate. "Trouxe" é palavra de posse — não é "vende", não é "oferece", não é "disponibiliza". É trouxe. Carrega autoridade e história.

### Assinatura
```
@gene.sneakers
```
- Fonte: **IBM Plex Mono** regular
- Cor: **BONE `#F2EFE9`** (não Acid — pra não competir com o "Gene trouxe." em Acid)
- Tamanho: ~10pt
- Placement: canto inferior direito, margem 40px da base e da direita

### Proibido no slide 3
- CTA explícito ("compre agora", "encomende", "link na bio") — o CTA vai na legenda
- Preço, badge, hashtag
- Imagem, pattern, wave
- Logo Gene completo, tagline "Estilo nos pés."
- Acid em mais de um elemento (só "Gene trouxe." recebe Acid — se o handle também vier em Acid, dilui a autoridade do remate)

---

## 5. PALETA APLICADA

| Elemento | Token | Hex | Onde |
|---|---|---|---|
| Campo (todos os slides) | CARBON | `#0D0D0D` | Base |
| Ano (slide 1) | SLATE | `#A6A4A1` | Tier 1 |
| Nome do modelo (slide 1) | BONE | `#F2EFE9` | Tier 2 |
| Linha de origem (slide 1) | BONE | `#F2EFE9` | Tier 3 |
| Título (slide 2) | BONE | `#F2EFE9` | Bloco 1 |
| Nomes (slide 2) | BONE | `#F2EFE9` | Bloco 2 |
| Contexto (slide 2) | BONE | `#F2EFE9` | Bloco 3 |
| Hero (slide 3) | BONE | `#F2EFE9` | Bloco 1 |
| Divisor (slide 3) | SLATE | `#A6A4A1` | — |
| Remate (slide 3) | ACID | `#CBF23D` | "Gene trouxe." |
| Handle (slide 3) | BONE | `#F2EFE9` | Canto inferior direito |

---

## 6. HIERARQUIA TIPOGRÁFICA ENTRE OS 3 SLIDES

Cada slide tem um "hero" próprio, mas com escala coerente dentro da escala binária da marca:

| Slide | Hero | Tamanho | Fonte |
|---|---|---|---|
| 1 | AIR FORCE 1 | ~96pt | Big Shoulders Bold |
| 2 | The Three Amigos. | ~72pt | Big Shoulders Bold |
| 3 | Hoje, é o tênis mais vendido da história. | ~96pt | Big Shoulders Bold |

Slides 1 e 3 monumentais (abre e fecha). Slide 2 mid-scale (é pra ser lido, não escaneado — leitura exige respiração, não brutalidade).

---

## 7. LEGENDA (texto pronto)

```
1982. Air Force 1.

A história que quase não existiu:
em 1984 a Nike ia aposentar o modelo.
Três lojistas de Baltimore — Freddy Hicks,
Darryl Jenkins e Tony Roberts, conhecidos
como "The Three Amigos" — convenceram
a marca a continuar produzindo.

Sem eles, o tênis mais vendido da história
não existiria hoje.

Gene trouxe. Link na bio.
```

Versão curta (alternativa pra story):
```
1982. Air Force 1.
A Nike ia tirar de linha em 1984.
Três lojistas de Baltimore salvaram a história.
Gene trouxe. Link na bio.
```

Sem hashtags nessa fase (post 2 ainda é pra quem já chegou no perfil — hashtag entra a partir do Post 6).

---

## 8. REGRA DA SÉRIE ORIGEM (pra próximos)

A partir desse post, **toda peça da série ORIGEM segue 3 slides**:

- **Slide 1 · Hero** — ano + nome monumental + 2 linhas de origem (colecionável)
- **Slide 2 · Contexto** — quem / onde / o que aconteceu (densidade cultural)
- **Slide 3 · Moral + Gene** — o legado + "Gene trouxe." em Acid

Essa é a arquitetura canônica. Próximo ORIGEM (#02 · Onitsuka Tiger, previsto pra 30/04) já segue esse modelo.

**Regra de rotação:** 1 ORIGEM a cada 10–15 posts. A série não é diária — é colecionável. Quando vira ritual, tem gente esperando.

**Regra de pesquisa:** toda linha de origem e todo contexto do slide 2 precisam ser verificáveis (livro, entrevista, arquivo de marca, matéria confiável). Se o designer ou o social quiser propor um modelo, traz o fato antes — fato ruim derruba a série.

---

## 9. VARIAÇÕES FUTURAS DA SÉRIE (mesmo layout, dados diferentes)

| Ano | Modelo (hero) | Linha de origem (slide 1) | Gancho pro slide 2 |
|---|---|---|---|
| **1982** | **AIR FORCE 1** | Nike tirou de linha em 1984. Três lojistas de Baltimore salvaram. | The Three Amigos |
| **1949** | **ONITSUKA TIGER** | Kihachiro Onitsuka fundou em Kobe no pós-guerra. Queria reerguer o Japão com esporte. | A história do pós-guerra japonês |
| **1950** | **ADIDAS SAMBA** | Adi Dassler desenhou pra treinar em campo congelado. Virou clássico sem querer. | O campo congelado de 1950 |
| **1985** | **NIKE DUNK** | Feito pra times universitários. Cada faculdade teve sua cor. O skate adotou dez anos depois. | "Be True to Your School" |
| **1989** | **NEW BALANCE 550** | Feito pro basquete. Sumiu nos anos 90. Aimé Leon Dore achou em 2020. | O salvamento ALD |
| **2010** | **NEW BALANCE 2002R** | Lançado em 2010. Ninguém ligou. Voltou em 2022 com cara de usado de propósito. | Estética "worn-in" |
| **2023** | **ASICS GEL-NYC** | Frankenstein de dois modelos dos anos 2000. Um tênis que nunca existiu — até existir. | A lógica do remix |

---

## 10. EXPORT

- **Feed (carrossel):** 3 PNGs 1080×1350 + JPGs 85% qualidade
- **Nomenclatura sugerida:** `gene_post02_origem01_af1_01.png`, `02.png`, `03.png`
- **Story:** 3 PNGs 1080×1920 — cada slide vira 1 story frame. Ano sobe pro topo, hero continua central, handle segue no canto inferior direito.
- **Thumb/capa:** o slide 1 serve de thumb no feed (vai ser o que aparece na grade)

---

## 11. CHECKLIST DO DESIGNER

### Global
- [ ] 3 slides 4:5 (1080×1350)
- [ ] Ambiente Carbon `#0D0D0D` em todos os slides
- [ ] Handle @gene.sneakers apenas no slide 3 (ausente nos 1 e 2)
- [ ] Versão story 1080×1920 dos 3 slides entregue junto

### Slide 1 · Hero
- [ ] Zona de imagem ocupando ~60% superior, sangrando nas bordas laterais e superior
- [ ] Zona inferior em CARBON com ~40% do frame
- [ ] Transição suave entre imagem e zona de texto (sem linha divisória)
- [ ] **TIER 1** — Ano "1982" em IBM Plex Mono ~14pt, SLATE, margem 64px da esquerda
- [ ] **TIER 2** — "AIR FORCE 1" em Big Shoulders Display Bold, uppercase, BONE, ~96pt
- [ ] **TIER 3** — "Nike tirou de linha em 1984. / Três lojistas de Baltimore salvaram." em Big Shoulders Display Regular, Title Case, BONE, ~30pt, 2 linhas, leading 1.05
- [ ] Ratio tipográfico hero:origem ≈ 3:1

### Slide 2 · Contexto
- [ ] Campo Carbon puro (sem imagem)
- [ ] **Título** "The Three Amigos." em Big Shoulders Display Bold, ~72pt, BONE, margem 80px esquerda
- [ ] **Nomes** "Freddy Hicks. / Darryl Jenkins. / Tony Roberts." em IBM Plex Mono regular, ~24pt, BONE, leading 1.4
- [ ] **Contexto** em Big Shoulders Display Regular, ~38pt, BONE, leading 1.1, 2 parágrafos separados por ar
- [ ] Respiração de ar em Carbon entre os blocos (~60–80px)
- [ ] ZERO handle, imagem, badge, aspas

### Slide 3 · Moral + Gene
- [ ] Campo Carbon puro (sem imagem)
- [ ] **Hero** "Hoje, é o tênis / mais vendido / da história." em Big Shoulders Display Bold, ~96pt, BONE, 3 linhas, leading 0.95
- [ ] **Divisor** `—` em em dash (U+2014), ~48pt, SLATE, alinhado à esquerda
- [ ] **Remate** "Gene trouxe." em Big Shoulders Display Bold, ~56pt, **ACID `#CBF23D`**
- [ ] **Handle** @gene.sneakers em IBM Plex Mono regular, ~10pt, BONE, canto inferior direito
- [ ] ZERO CTA explícito, preço, hashtag, logo completo, tagline, imagem, Acid em mais de um elemento

---

## 12. Referências técnicas

- Design philosophy: `/tênis/gene-sneakers-design-philosophy.md` v2
- Color environments: `/tênis/gene-color-environments.html` v1.1
- Design system expandido: `/tênis/gene-design-system-expanded.html`
- Brand voice: `/tênis/.claude/brand-voice-guidelines.md` v3
- Handoff anterior (v2.1 estático único): substituído por essa versão 3.0

---

## 13. NOTA ESTRATÉGICA (pra time criativo, não designer)

Esse post é **a abertura cultural da Gene no Instagram**. O Post 1 apresenta o catálogo. O Post 2 apresenta o *porquê* existe uma curadoria.

Quem lê os 3 slides entende que:
1. Gene trabalha com história, não com hype (slide 1)
2. Gene conhece o catálogo em profundidade cultural (slide 2)
3. Gene traz o que importa, não o que tá sobrando (slide 3 — "trouxe" como posse)

**"Gene trouxe." é frase-âncora.** Pode e deve ser repetida em outros posts da série ORIGEM e em posts de novos drops. Cria vocabulário de marca com 2 palavras.
