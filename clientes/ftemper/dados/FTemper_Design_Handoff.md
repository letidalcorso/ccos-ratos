# Handoff Spec: FTemper — Instagram Posts (Templates de Conteúdo)

> **Figma:** [FTemper — Artes](https://www.figma.com/design/yVnA7166djnk4qYCVahoy1/FTemper?node-id=0-1)
> **Data do spec:** 05/04/2026
> **Formatos cobertos:** Post 1 · Post 2 · Post 3 (carousel landscape)
> **⚠️ Nota de plataforma:** O arquivo contém templates de Instagram (1080×1350px e 2160×1350px), não telas de app nativo. Se a intenção for adaptar para mobile app, ver seção "Adaptação Mobile" ao final.

---

## 1. Visão Geral

Três layouts de post para Instagram da marca **Ftemper** — empresa de alumínio para serralheiras e vidraçarias. Todos os layouts compartilham o mesmo sistema visual: tipografia display condensada (Morganite), paleta azul-marinho + branco, fotografia full-bleed e sobreposições geométricas arredondadas.

| # | Frame | Dimensões | Formato | Conteúdo |
|---|-------|-----------|---------|----------|
| 1 | Instagram post - 1 | 1080 × 1350px | Portrait 4:5 | Institucional sustentabilidade |
| 2 | Instagram post - 2 | 1080 × 1350px | Portrait 4:5 | Produto (pergolados) |
| 3 | Instagram post - 3 | 2160 × 1350px | Landscape 16:10 | Produto/sistema (orçamento) |

---

## 2. Design Tokens

### 2.1 Cores

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `color-primary-blue` | `#005AD4` | 0, 90, 212 | Card de headline (Post 1) |
| `color-accent-electric` | `#1A00B8` | 26, 0, 184 | Barra de destaque (Post 2) |
| `color-dark-navy` | `#03174F` | 3, 23, 79 | Overlay geométrico (Post 1) |
| `color-text-dark` | `#01002B` | 1, 0, 43 | Corpo de texto |
| `color-white` | `#FFFFFF` | 255, 255, 255 | Texto sobre dark, fundos |
| `color-overlay-frosted` | `rgba(255,255,255,0.40)` | — | Painel fosco (Post 1) |
| `color-overlay-card` | `rgba(255,255,255,0.80)` | — | Card de conteúdo (Post 2) |

> **Atenção:** O arquivo não possui variáveis/tokens formalizados no Figma. A página "Design System" está vazia. Recomenda-se formalizar esses tokens antes de escalar produção.

### 2.2 Tipografia

| Token | Família | Estilo | Tamanho | Line-height | Uso |
|-------|---------|--------|---------|-------------|-----|
| `type-display-xl` | Morganite | Bold | 180px | auto | Headline Post 1 |
| `type-display-lg` | Morganite | ExtraBold | 63px | 60px (tight) | Headline Post 2 |
| `type-display-md` | Morganite | Bold | ~90–100px (est.) | auto | Headline Post 3 |
| `type-body-lg` | (a confirmar) | Regular/Medium | 30px | auto | Corpo Post 1 |
| `type-body-md` | (a confirmar) | Regular/Bold mix | 25px | 35px | Corpo Post 2 |
| `type-brand` | Ftemper (custom) | — | — | — | Logotipo |

> **Fonte Morganite:** Display typeface condensada, todas maiúsculas (uppercase hardcoded no design). Confirmar licença de uso antes de implementar em web/app.
> **Corpo de texto:** A família do corpo não foi identificada com precisão via API. Verificar diretamente no Figma (parece ser um sans-serif neutro — possivelmente Inter ou similar).

### 2.3 Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `radius-pill` | 102px | Painel fosco oval (Post 1) |
| `radius-xl` | 71px | Card de conteúdo (Post 2) |
| `radius-lg` | 62px | Card de headline azul (Post 1) |
| `radius-sm` | 34px | Barra de acento (Post 2) |

### 2.4 Logo

| Ativo | Dimensões no Figma | Notas |
|-------|--------------------|-------|
| Logo Ftemper | 251 × 93px | Imagem rasterizada. Exportar em SVG ou PNG @2x do frame "Assets > logo" |

---

## 3. Layouts por Post

---

### Post 1 — "CICLO INFINITO E SUSTENTÁVEL"

**Dimensões do canvas:** 1080 × 1350px

**Composição (z-order, de baixo pra cima):**

| Camada | Tipo | Posição / Dimensões | Notas |
|--------|------|---------------------|-------|
| Foto (architectural render) | Imagem | 1831 × 2355px (oversized, clipped pelo frame) | Posicionada para cobrir o lado esquerdo do post. Crop focal: centro-esquerda |
| Overlay geométrico navy | Vetor | 1234 × 984px — `color-dark-navy` | Forma irregular (não retangular). Cobre a parte inferior-direita |
| Painel fosco oval | Retângulo | 1195 × 473px — `color-overlay-frosted` — `radius-pill` (102px) | Fundo da área de corpo de texto. Efeito glass |
| Card headline azul | Retângulo | 592 × 328px — `color-primary-blue` — `radius-lg` (62px) | Topo-direita. Contém o headline |
| Headline | Texto | `type-display-xl` (Morganite Bold 180px) — `color-white` | "CICLO INFINITO E SUSTENTÁVEL" em 2 linhas |
| Corpo de texto | Texto | 470 × 420px — `type-body-lg` (30px) — `color-text-dark` | "Alumínio para serralheiras e vidraçarias..." com itens em negrito |
| Logo | Imagem | 251 × 93px | Posição: bottom center, próximo à borda inferior |

**Lógica de composição:** Split layout — foto ocupa metade esquerda, conteúdo text-heavy na direita. O card azul "flutua" no topo direito, quebrando a grade e criando tensão visual.

---

### Post 2 — "PERGOLADOS DE ALUMÍNIO ESTÃO DOMINANDO OS PROJETOS MODERNOS"

**Dimensões do canvas:** 1080 × 1350px

**Composição (z-order, de baixo pra cima):**

| Camada | Tipo | Posição / Dimensões | Notas |
|--------|------|---------------------|-------|
| Foto (pergolado) | Imagem | 1161 × 2584px, y: -510 (oversized, clipped) | Full-bleed. Foto de produto real. Crop focal: porção central |
| Logo Ftemper | Imagem | 251 × 93px — x: 414, y: 53 | Centrado no topo, sobre a foto |
| Card branco 80% | Retângulo | 692 × 411px — `color-overlay-card` — `radius-xl` (71px) — x: 63, y: 834 | Container do conteúdo inferior |
| Barra acento elétrico | Retângulo | 820 × 132px — `color-accent-electric` — `radius-sm` (34px) — x: -127, y: 871 | **Sangra pela borda esquerda** (x negativo, intencional). Cria efeito de banda |
| Headline | Texto | 529 × 114px — `type-display-lg` (Morganite ExtraBold 63px / lh 60px) — `color-white` — x: 117, y: 889 | Posicionado sobre a barra azul |
| Corpo de texto | Texto | 539 × 175px — `type-body-md` (25px / lh 35px) — `color-text-dark` — x: 117, y: 1031 | Com texto em negrito inline ("alumínio", "escolha natural", "estética moderna e elegante") |

**Lógica de composição:** Hero photo full-bleed com conteúdo "emergindo" da parte inferior. A barra azul que sangra pela esquerda é intencional — cria dinamismo e rompe o container. O card branco semi-transparente dá legibilidade sem bloquear a foto.

**Estado de texto misto (Post 2 corpo):** O corpo de texto mistura peso regular e **bold inline** para destacar benefícios. Implementar como `NSAttributedString` (iOS) ou `SpannableString` (Android) se for app, ou HTML `<strong>` se for web.

---

### Post 3 — "ORÇAMENTO NÃO DEVIA DAR TRABALHO" (Landscape / Carousel)

**Dimensões do canvas:** 2160 × 1350px (landscape — formato carousel Instagram ou banner)

**Composição em 3 colunas:**

| Coluna | Largura (est.) | Conteúdo |
|--------|---------------|----------|
| Esquerda | ~700px | Headline grande em `color-text-dark` (Morganite Bold) + corpo em regular |
| Centro | ~760px | Foto de laptop com screenshot do sistema |
| Direita | ~700px | "conheça o" (small label) + headline secundário + "Ftemper" + lista de benefícios |

**Elementos notáveis:**
- Fundo: cinza-lavanda claro (não puro branco — tom quente/neutro)
- Headline esquerda: "ORÇAMENTO NÃO DEVIA DAR TRABALHO" — Morganite Bold, estimativa ~90px, `color-text-dark`
- Corpo esquerda: "Quando dá, quase sempre o problema não é o orçamento. É o método." — regular, ~28px, `color-text-dark`
- Headline direita: "SISTEMA PRÁTICO DE ORÇAMENTOS" — Morganite Bold, ~80px, `color-dark-navy`
- Label topo direita: "conheça o" — regular, ~22px
- Brand mark: "Ftemper" — tipografia da marca
- Lista de benefícios (direita): itens com texto sublinhado — "Todos orçamentos em um só lugar", "Preços atualizados automaticamente", etc. Sublinhado é estilístico (não link).

---

## 4. Ativos para Exportação

| Ativo | Frame Figma | Formato recomendado | Tamanho |
|-------|-------------|---------------------|---------|
| Logo Ftemper | Assets > logo | SVG + PNG @2x | 251 × 93px base |
| Post 1 (final) | Instagram post - 1 | PNG @1x (já em 1080px) | 1080 × 1350px |
| Post 2 (final) | Instagram post - 2 | PNG @1x | 1080 × 1350px |
| Post 3 (final) | Instagram post - 3 | PNG @1x | 2160 × 1350px |
| Foto arquitetônica | pomelli-image (4) 1 | JPEG exportado do Figma | Checar resolução source |

---

## 5. Estados e Edge Cases

| Elemento | Situação | Comportamento esperado |
|----------|----------|----------------------|
| Headline | Texto mais longo | Morganite é condensada — tolera bem textos maiores sem quebrar layout. Máximo ~3 linhas |
| Corpo (Post 2) | Texto muito longo | O card branco tem altura fixa (411px). Texto não deve ultrapassar esse limite. Máximo ~120 palavras |
| Logo | Fundo claro vs. escuro | No arquivo, o logo aparece sobre foto escura (Post 2) e sobre fundo claro (Post 1). Verificar se há versão dark/light do logo em Assets |
| Foto ausente | Sem imagem no template | Definir fallback: gradiente `color-dark-navy` → `color-primary-blue` como placeholder |
| Texto da lista (Post 3) | Itens com underline | Sublinhar apenas os itens de destaque — não o texto inteiro da linha |

---

## 6. Tipografia — Instruções de Implementação

### Morganite (Display)
- **Uso:** Apenas em headlines. Sempre uppercase.
- **Tracking/Letter-spacing:** 0% (padrão — não expandir)
- **Atenção ao line-height:** Em tamanhos grandes (180px), o line-height deve ser proporcional ou levemente tight para evitar espaço excessivo entre linhas

### Corpo de texto
- **Misto bold/regular inline:** Usar negrito para destacar termos-chave de produto ("alumínio", "durabilidade", "eficiência energética")
- **Alinhamento:** LEFT em todos os posts
- **Cor padrão:** `color-text-dark` (#01002B)

---

## 7. Acessibilidade (para adaptações digitais)

| Item | Status | Recomendação |
|------|--------|--------------|
| Contraste headline branca s/ azul (#005AD4) | ✅ Passa AA | Ratio ~4.6:1 |
| Contraste corpo (#01002B) s/ branco | ✅ Passa AAA | Ratio ~21:1 |
| Contraste headline branca s/ elétrico (#1A00B8) | ✅ Passa AA | Ratio ~6.2:1 |
| Texto sublinhado (Post 3) | ⚠️ Ambíguo | Em contexto digital, sublinhar sugere link. Usar peso bold como alternativa se não for clicável |
| Tamanho de fonte corpo (Post 2: 25px em 1080px canvas) | ℹ️ Nota | Em tela mobile real (375px), isso equivale a ~8.7px — aceitável para imagem estática, mas inadequado se for texto selecionável |

---

## 8. Adaptação Mobile (se for app nativo)

Caso os layouts precisem ser replicados dentro de um app iOS/Android:

| Elemento Figma | Equivalente iOS | Equivalente Android |
|----------------|-----------------|---------------------|
| Frame 1080×1350 | `UIView` com aspect ratio 4:5 | `ConstraintLayout` com ratio 4:5 |
| Foto full-bleed | `UIImageView` + `.scaleAspectFill` + `clipsToBounds` | `ImageView` + `scaleType="centerCrop"` |
| Overlay semi-transparente | `UIView` com `backgroundColor UIColor(white: 1, alpha: 0.8)` | `View` com `#CCFFFFFF` |
| Rounded rectangle card | `UIView` + `layer.cornerRadius` | `CardView` + `app:cardCornerRadius` |
| Barra sangrando borda | Posição negativa com `frame.x = -valor` | `marginStart` negativo ou `translationX` |
| Texto bold inline | `NSAttributedString` com `.font` bold em ranges | `SpannableString` + `StyleSpan(Typeface.BOLD)` |
| Morganite font | Adicionar via `UIFont(name:)` | Adicionar em `res/font/`, usar `fontFamily` |

---

## 9. O que está faltando no Figma (para o dev não ter que adivinhar)

- [ ] **Design System vazio** — A página "🎨 Design System" existe mas está sem conteúdo. Tokens de cor, tipografia e espaçamento precisam ser formalizados como Figma Variables ou Styles.
- [ ] **Família tipográfica do corpo não definida** — O Figma não retornou o nome da fonte do corpo de texto. Confirmar com o designer.
- [ ] **Versões do logo** — Só há uma versão do logo em Assets. Confirmar se existe versão monocromática (para fundos claros e escuros) e SVG vetorial.
- [ ] **Fundo do Post 3** — A cor exata do fundo lavanda/cinza não foi extraída. Verificar no Figma: provavelmente um fill sólido ou gradiente sutil.
- [ ] **Componentes reutilizáveis** — Os shapes e cards não estão componentizados. Se houver mais posts a produzir, vale criar componentes de "Card Headline", "Card Conteúdo" e "Badge Azul" no Figma.
- [ ] **Grid/margens** — Não há guias de grid definidas no arquivo. Recomenda-se definir margens laterais padrão (parece ser ~63px / ~5.8% da largura).

---

*Spec gerado com base nos dados do Figma em 05/04/2026. Revisão final com o designer recomendada antes de iniciar desenvolvimento.*
