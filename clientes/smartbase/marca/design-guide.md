# Smartbase — Guia de Design

> Referência visual para criação de posts, carrosséis e materiais da Smartbase.
> Ler antes de criar qualquer peça gráfica. Consultar junto ao `1. CLAUDE.md` do cliente.

---

## Logo

- **Nome da marca:** smartbase (caixa baixa, sempre)
- **Símbolo:** cápsula/pill horizontal com dot azul `#3E82F7` posicionado à direita
- **Wordmark:** `smart` (peso 300, cinza claro) · `•` (dot azul, 10–12px) · `base` (peso 700, branco)
- **Uso em fundo escuro (padrão):** versão branca — pill sem borda, wordmark branco/cinza claro
- **Uso em fundo claro:** versão preta — pill com borda escura, wordmark dark
- **Arquivos:**
  - `briefing/logo png branco.png` — versão para fundos escuros (uso padrão)
  - `briefing/logo png preto.png` — versão para fundos claros
- **Avatar / badge compacto:** pill `#0F0F1C` com texto "sb" em `#3E82F7`, peso 600, border-radius 15px
- **Tamanho mínimo:** não usar abaixo de 80px de largura — a cápsula perde forma
- **Área de proteção:** espaço equivalente à altura do pill ao redor em todos os lados
- **Handle:** `@smartbase.br` — sempre no footer dos posts, alinhado à direita em `#4A4A60` ou `#7A7A96`

---

## Paleta de Cores

### Cores de fundo e superfície

| Nome | Token | Hex | Uso específico |
|------|-------|-----|----------------|
| bg-base | `--bg-base` | `#07070E` | Fundo de todos os posts e páginas — nunca substituir |
| surface-1 | `--surface-1` | `#0F0F1C` | Cards, blocos internos, badge "sb" |
| surface-2 | `--surface-2` | `#121220` | Camada intermediária, hover de card |
| surface-3 | `--surface-3` | `#1A1A2E` | Bordas, dividers, dashes (também aparece como `#1E1E2E` em SVGs) |

### Cores de texto

| Nome | Token | Hex | Uso específico |
|------|-------|-----|----------------|
| text-primary | `--text-primary` | `#F2F2F6` | Headlines e títulos principais |
| text-secondary | `--text-secondary` | `#7A7A96` | Corpo de texto, subtítulos, legendas |
| text-muted | `--text-muted` | `#4A4A60` | Handles, labels, rodapé menos importante |
| text-light | — | `#C0C0D0` | Subtítulos de impacto menor em peso 300 |

### Cor primária

| Nome | Token | Hex | Uso específico |
|------|-------|-----|----------------|
| blue-primary | `--blue-primary` | `#3E82F7` | Destaque de headlines, dot do wordmark, CTA, pilar PRODUTO/DECIFRA APPLE, accent bar |
| blue-light | `--blue-light` | `#6DAFF9` | Hover, variante mais clara do primário |
| blue-alpha-10 | `--blue-alpha-10` | `rgba(62,130,247,0.10)` | Background sutil de badges e tags |
| blue-alpha-30 | `--blue-alpha-30` | `rgba(62,130,247,0.30)` | Overlays e glows |

### Cores por pilar

| Pilar | Hex de destaque | Hex de superfície | Uso |
|-------|----------------|-------------------|-----|
| DECIFRA APPLE | `#3E82F7` (blue) | `#0E1E3A` | Accent bar, pill, última palavra do headline, citação |
| CASA SMARTBASE | `#8B5CF6` (purple) | `#1C1028` | Idem — pilar identidade/confiança |
| VIDA APPLE EM CAXIAS | `#10B981` (green) | `#0A201A` | Idem — pilar local/lifestyle |

### Cor especial

| Nome | Token | Hex | Uso |
|------|-------|-----|-----|
| wa-green | `--wa-green` | `#25D366` | Exclusivo para botão e CTA de WhatsApp — nunca usar como cor de destaque editorial |

### Cor proibida

- Paletas quentes (laranja, vermelho, amarelo) — quebram o posicionamento tecnológico e sóbrio
- Branco puro `#FFFFFF` como fundo — a marca opera exclusivamente no dark mode
- Qualquer cor de saturação alta fora da paleta de pilares — isola a peça visualmente
- Gradientes vibrantes ou neón — vão contra o estilo técnico/premium

---

## Tipografia

### Bricolage Grotesque — Títulos e Headlines
- **Uso:** headlines de posts, números em destaque, capas de carrossel, títulos de seção no site
- **Pesos utilizados:** 300 (smart no wordmark, subtítulos de impacto), 700, 800
- **Caixa:** baixa (minúsculas) — nunca CAPS em headlines
- **Caráter:** contemporânea, variável óptica, forte em grandes tamanhos sem perder leveza
- **Tamanho padrão em post 1080×1350:** 96px para headline principal
- **Origem:** Google Fonts — `Bricolage Grotesque:opsz,wght@12..96,300;12..96,700;12..96,800`

### Inter — Corpo e Suporte
- **Uso:** subtítulos, corpo de texto, legendas, labels, badges, footer, handles
- **Pesos utilizados:** 300 (texto leve), 400 (corpo padrão), 500 (semi-destaque), 600 (labels em caps)
- **Caixa:** baixa para corpo; CAPS com letter-spacing 2px para labels/badges de pilar
- **Caráter:** geométrica, neutra, alta legibilidade em tamanhos pequenos — âncora do sistema
- **Tamanho padrão em post:** 26–28px para corpo, 20–22px para legendas e handles
- **Origem:** Google Fonts — `Inter:wght@300;400;500;600`

### Regras de uso
- Máximo 2 fontes por peça (Bricolage + Inter)
- Nunca fontes serifadas — contradizem o posicionamento tecnológico
- Nunca usar Bricolage em tamanhos pequenos (abaixo de 28px perde a força)
- Letter-spacing apenas em labels de pilar (Inter, caps, 2px) — nunca em headlines

---

## Estilo Visual

### Conceito geral
Tecnológico e humano. Escuro, preciso, confiante — como um Apple Store particular que não precisa gritar. A cor azul ancora o sistema sem dominar: aparece no detalhe certo no momento certo. Cada peça deve ser reconhecível como Smartbase mesmo sem o logo.

### Padrões de fundo

1. **Dark sólido** — `#07070E` puro com texto e elementos gráficos. Usado em posts editoriais, manifestos, autoridade. É o padrão.
2. **Foto de produto com overlay** — foto Apple oficial (iPhone, Watch, etc.) com escurecimento sutil. Mantém o produto reconhecível sem deixar o fundo roubar o texto. Usado em posts de produto (DECIFRA APPLE).
3. **Ghost text** — texto grande em opacity 0.03 (`#F2F2F6`) como elemento de fundo — ex: "sb", número do modelo. Adiciona profundidade sem poluir.

### Accent bar vertical
- Barra de 4px de largura, altura total do post (1350px), colada na borda esquerda (x=0)
- Cor = cor do pilar do post
- Obrigatória em posts com pilar definido — é a âncora visual de identidade

### Elementos gráficos de apoio

- **Divider horizontal** — `stroke="#1E1E2E"` ou `stroke="#1A1A2E"`, 1px, sem opacity. Separa blocos do layout.
- **Badge de pilar** — pill `rx=14`, fundo na cor de superfície do pilar, texto Inter 16px 700 caps, cor do pilar. Posição: 80px left, ~98px top.
- **Linha de destaque** — `rect` de 100px × 7px, `rx=3.5`, cor do pilar. Aparece abaixo do badge antes do headline.
- **Ghost "sb"** — `font-size="520"` Bricolage 800, `#F2F2F6` opacity 0.03. Posição: canto esquerdo, visível no centro/baixo.

---

## Layout dos Posts

### Post estático (1080×1350 — feed retrato padrão)

**Canvas:** 1080 × 1350px  
**Padding lateral:** 80px (esquerda e direita)  
**Área segura:** 80–1000px horizontal

**Estrutura vertical:**
```
y=0–1350   Accent bar vertical esquerda (4px, cor do pilar)
y=72–140   Badge de pilar (pill)
y=188–195  Linha de destaque horizontal (100px, cor do pilar)
y=310–670  Headline principal (Bricolage 800, 96px) — 3–4 linhas
            Última palavra/frase: cor do pilar
y=720–730  Divider horizontal (1E1E2E, 1px)
y=774–850  Corpo / subtexto (Inter 400, 26–28px, #7A7A96)
y=900      Citação ou CTA secundário (Inter 500, 30px, #3E82F7)
y=1258     Divider footer (1E1E2E, 1px)
y=1276–    Footer: wordmark esquerda + handle direita
```

**Footer fixo (obrigatório em todo post):**
- Divider em y=1258 (ou y=1040 nos posts com foto de fundo)
- Esquerda: badge "sb" (pill #0F0F1C, texto azul) + wordmark `smart` (300, `#C0C0D0`) · dot azul · `base` (700, `#F2F2F6`)
- Direita: `@smartbase.br` Inter 20–22px, `#4A4A60` ou `#7A7A96`, alinhado em x=1000

### Carrossel

- **Canvas:** 1080 × 1350px (mesmo do post estático)
- **Capa:** accent bar, badge pilar, headline forte (1–2 linhas), foto de produto ou dark sólido, seta/indicador de arraste em Inter 22px `#3E82F7`
- **Slides internos:** fundo `#07070E`, sem accent bar lateral, hierarquia clara (título em Bricolage, dados em Inter), dividers como separadores de blocos
- **Último slide:** CTA direto — "falar no whatsapp →" ou similar, wordmark centralizado ou no footer padrão
- **Capa aprovada de referência:** `conteudo/1. orgânico | abril/12-05_carrossel_01.png`

### Stories (quando produzido)
- Canvas: 1080 × 1920px
- Manter mesma paleta e tipografia — nunca mudar o sistema só pela proporção
- Accent bar na base inferior em vez da lateral esquerda (opcional)
- Footer compacto: só o handle `@smartbase.br`

---

## Layout por Pilar de Conteúdo

### DECIFRA APPLE
- **Objetivo:** carrosséis investigativos — dados reais (tributação, Paraguai, garantia, modelos)
- **Cor de pilar:** blue `#3E82F7` / surface `#0E1E3A`
- **Fundo:** dark sólido + ghost text opcional
- **Tipografia em destaque:** Bricolage 800 com palavra-chave em azul
- **Tom visual:** informativo, técnico, preciso — como um briefing Apple

### CASA SMARTBASE
- **Objetivo:** diferencial "paga quando recebe", prova social, bastidor
- **Cor de pilar:** purple `#8B5CF6` / surface `#1C1028`
- **Fundo:** foto de vendedor ou ambiente (com overlay escuro) ou dark sólido
- **Tipografia em destaque:** Bricolage 800 com palavra-chave em roxo
- **Tom visual:** humano, próximo, confiante — como quem realmente conhece a pessoa

### VIDA APPLE EM CAXIAS
- **Objetivo:** ancoragem local, fotos em iPhone na Serra Gaúcha
- **Cor de pilar:** green `#10B981` / surface `#0A201A`
- **Fundo:** preferencialmente foto com overlay — lifestyle, local, atmosfera
- **Tipografia em destaque:** Bricolage 800 com palavra-chave em verde
- **Tom visual:** editorial, leve, cotidiano — Apple como parte da vida

---

## O que NUNCA fazer

**Cores:**
- Usar `#FFFFFF` (branco puro) como fundo — nunca; a marca é dark-first
- Usar `#25D366` (wa-green) fora de contexto de WhatsApp
- Adicionar cor quente (laranja, vermelho, amarelo) em qualquer elemento
- Criar gradiente vibrante ou neón — vai contra o posicionamento técnico-premium
- Misturar mais de uma cor de pilar no mesmo post — cada post tem uma só cor de acento

**Tipografia:**
- Fontes serifadas em qualquer contexto
- Bricolage em tamanho abaixo de 28px
- Mais de 2 famílias tipográficas por peça
- Texto em caps lock no headline — Bricolage já tem força, não precisa gritar
- Letter-spacing em headlines — só em labels de pilar (Inter, caps)

**Layout:**
- Preço no feed — nunca. Só no WhatsApp, onde a conversa já é quente
- Banneraço com preço + telefone + produto + texto junto — estética de varejo
- Falta de margem — padding mínimo de 80px lateral, sempre
- Post sem footer — wordmark e handle são obrigatórios em toda peça
- Accent bar ausente em posts com pilar definido

**Tom visual:**
- Estética de loja de varejo genérica (fundo branco, produto grande, preço em vermelho)
- Qualquer elemento que pareça "promoção" — a Smartbase posiciona, não promove
- Posts sem identidade reconhecível — qualquer peça deve ser lida como Smartbase sem ver o logo

---

## Referências visuais aprovadas

- `conteudo/1. orgânico | abril/12-05_carrossel_01.png` — capa de carrossel com foto e accent bar azul. Referência de hierarquia e footer.
- `conteudo/1. orgânico | abril/12-05_carrossel_02.png` — slide interno de carrossel
- `conteudo/2. orgânico | maio/post_29-05.png` — post estático aprovado de maio
- `conteudo/orgânico | não aprovado/` — referências de estrutura, mas estilo não aprovado pelo cliente

---

## Tokens para uso em SVG

```
Fundo:       fill="#07070E"
Surface:     fill="#0F0F1C"
Divider:     stroke="#1E1E2E"
Accent blue: fill="#3E82F7"
Accent purp: fill="#8B5CF6"
Accent green:fill="#10B981"
Headline:    fill="#F2F2F6"   font-family="'Bricolage Grotesque'" font-size="96" font-weight="800"
Corpo:       fill="#7A7A96"   font-family="'Inter'" font-size="26" font-weight="400"
Handle:      fill="#4A4A60"   font-family="'Inter'" font-size="20" font-weight="500"
Wordmark:    smart → font-weight="300" fill="#C0C0D0" / base → font-weight="700" fill="#F2F2F6"
Dot:         <circle r="5" fill="#3E82F7"/>
Badge sb:    <rect rx="15" fill="#0F0F1C"/> <text fill="#3E82F7" font-weight="600">sb</text>
```
