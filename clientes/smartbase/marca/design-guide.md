# Smartbase — Guia de Design

> Referência visual para criação de posts, carrosséis e materiais da Smartbase.
> Ler antes de criar qualquer peça gráfica. Consultar junto ao `CLAUDE.md` do cliente.

---

## Decisões de sistema (reconciliado em 15/06/2026)

O guia foi auditado e alinhado ao que o feed realmente usa. Estas decisões valem sobre qualquer descrição antiga:

- **Sem cor por pilar.** O azul `#3E82F7` é a língua única. Não existe roxo/verde por pilar.
- **Profundidade = degradê + glow + painel de vidro.** O fundo padrão é degradê escuro com glow azul, não preto chapado.
- **Sem marca d'água de letras "sb".** A profundidade/assinatura vem do **painel de vidro** (frosted glass) no Figma — dá menos problema e fica premium.
- **Sem accent bar lateral.** Aposentada.
- **Badge de pilar = só interno.** Serve pra organizar no Figma; **nunca aparece na arte publicada.**
- **Footer = `@smartbase.br` centralizado** no rodapé. Sem wordmark, sem handle à direita.
- **Handle correto: `@smartbase.br`** (nunca `.rs`).
- **Vida Apple em Caxias:** o layout antigo não foi pro ar — **design novo a propor** (ver seção).

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
- **Avatar / badge compacto:** pill `#0F0F1C` com texto "sb" em `#3E82F7`, peso 600, border-radius 15px. (Uso: foto de perfil / ícone isolado — **não** é marca d'água de post.)
- **Tamanho mínimo:** não usar abaixo de 80px de largura — a cápsula perde forma
- **Área de proteção:** espaço equivalente à altura do pill ao redor em todos os lados
- **Handle:** `@smartbase.br` — sempre no footer dos posts, **centralizado** (ver Footer)

---

## Paleta de Cores

### Cores de fundo e superfície

| Nome | Token | Hex | Uso específico |
|------|-------|-----|----------------|
| bg-base | `--bg-base` | `#07070E` | Base do degradê de fundo (parte de baixo) |
| surface-1 | `--surface-1` | `#0F0F1C` | Cards, blocos internos, topo do degradê, badge "sb" do avatar |
| surface-2 | `--surface-2` | `#121220` | Camada intermediária, topo do degradê de fundo |
| surface-3 | `--surface-3` | `#1A1A2E` | Bordas, dividers (também aparece como `#1E1E2E` em SVGs) |

### Cores de texto

| Nome | Token | Hex | Uso específico |
|------|-------|-----|----------------|
| text-primary | `--text-primary` | `#F2F2F6` | Headlines e títulos principais |
| text-secondary | `--text-secondary` | `#7A7A96` | Corpo de texto, subtítulos, legendas |
| text-muted | `--text-muted` | `#4A4A60` | Handles, labels, rodapé menos importante |
| text-light | — | `#C0C0D0` | Subtítulos de impacto menor em peso 300 |

### Cor primária — o acento único do sistema

| Nome | Token | Hex | Uso específico |
|------|-------|-----|----------------|
| blue-primary | `--blue-primary` | `#3E82F7` | Palavra-chave do headline, dot do wordmark, CTA, glow, dots de lista |
| blue-light | `--blue-light` | `#6DAFF9` | Hover, variante mais clara do primário |
| blue-alpha-10 | `--blue-alpha-10` | `rgba(62,130,247,0.10)` | Background sutil de chips e tags |
| blue-alpha-30 | `--blue-alpha-30` | `rgba(62,130,247,0.30)` | Overlays e glows |

> **Sem cor por pilar.** O azul é a única cor de acento. Os 3 pilares (Decifra / Casa / Vida) são categorias **de conteúdo**, não têm cor própria na arte.

### Cor especial

| Nome | Token | Hex | Uso |
|------|-------|-----|-----|
| wa-green | `--wa-green` | `#25D366` | Exclusivo para botão e CTA de WhatsApp — nunca como cor de destaque editorial |

### Cor proibida

- Paletas quentes (laranja, vermelho, amarelo) — quebram o posicionamento tecnológico e sóbrio
- Branco puro `#FFFFFF` como fundo — a marca opera exclusivamente no dark mode
- Qualquer cor de saturação alta fora do azul do sistema — isola a peça visualmente
- Gradientes vibrantes ou neón — vão contra o estilo técnico/premium

---

## Tipografia

### Bricolage Grotesque — Títulos e Headlines
- **Uso:** headlines de posts, números em destaque, capas de carrossel, títulos de seção no site
- **Pesos utilizados:** 300 (smart no wordmark, subtítulos de impacto), 700, 800 (ExtraBold)
- **Caixa:** baixa (minúsculas) — nunca CAPS em headlines
- **Caráter:** contemporânea, variável óptica, forte em grandes tamanhos sem perder leveza
- **Tamanho padrão em post 1080×1350:** 88–96px para headline principal
- **Origem:** Google Fonts — `Bricolage Grotesque:opsz,wght@12..96,300;12..96,700;12..96,800`

### Inter — Corpo e Suporte
- **Uso:** subtítulos, corpo de texto, legendas, chips, footer, handle
- **Pesos utilizados:** 300 (texto leve), 400 (corpo padrão), 500 (semi-destaque), 600 (labels)
- **Caixa:** baixa para corpo e chips
- **Caráter:** geométrica, neutra, alta legibilidade em tamanhos pequenos — âncora do sistema
- **Tamanho padrão em post:** 26–34px para corpo, 22–26px para legendas e handle
- **Origem:** Google Fonts — `Inter:wght@300;400;500;600`

### Regras de uso
- Máximo 2 fontes por peça (Bricolage + Inter)
- Nunca fontes serifadas — contradizem o posicionamento tecnológico
- Nunca usar Bricolage em tamanhos pequenos (abaixo de 28px perde a força)
- Nunca letter-spacing em headlines

---

## Estilo Visual

### Conceito geral
Tecnológico e humano. Escuro, preciso, confiante — como um Apple Store particular que não precisa gritar. O azul ancora o sistema sem dominar: aparece no detalhe certo no momento certo. Cada peça deve ser reconhecível como Smartbase mesmo sem o logo.

### Tratamento de profundidade (a "linguagem" da marca)
É o fio condutor — constante em todo card:

1. **Fundo em degradê** — degradê vertical sutil de superfície (`#121220`/`#10..12` no topo → `#07070E` embaixo). **Nunca preto chapado puro.**
2. **Glow azul** — 1–2 elipses `#3E82F7` com layer blur ~200, opacity 0.12–0.30, atrás do conteúdo. Dá luz e profundidade.
3. **Painel de vidro (a assinatura de profundidade)** — substitui a antiga marca d'água "sb". Um painel/retângulo arredondado de **vidro fosco** atrás ou emoldurando o conteúdo:
   - **Figma:** frame com **Background blur ~30–60** + fill `#FFFFFF` a **4–8%** de opacidade + borda 1px `#FFFFFF` a ~10–14%, `rx` ~32–48.
   - Dá o ar premium "frosted glass" sem texto de letras (que dava problema de legibilidade/corte).
   - Pode emoldurar um número-herói, um trecho do conteúdo, ou só compor profundidade atrás.
   - **Uma assinatura de profundidade por card.**
4. **Tipo:** Bricolage ExtraBold nos headlines, Inter no corpo. Palavra-chave em azul.

### Elementos gráficos de apoio
- **Divider horizontal** — `stroke="#1E1E2E"` ou `#1A1A2E`, 1px, sem opacity. Separa blocos.
- **Chips** — pill arredondada: **tag** com contorno azul ~35%; **CTA** com fundo azul sólido.
- **Dots de lista** — bolinha `#3E82F7` (r≈6–7) antes de itens de lista.
- **Número-herói** — número gigante (Bricolage ExtraBold, `#C0C0D0` opacity ~0.20) como elemento visual de fundo em cards de dado/listicle (ex: "4", "90'", "11+").

> **Aposentados (não usar):** accent bar lateral · marca d'água de letras "sb" · badge de pilar na arte.

---

## Layout dos Posts

### Post estático / card de carrossel (1080×1350 — feed retrato padrão)

**Canvas:** 1080 × 1350px
**Padding lateral:** 80px (esquerda e direita)
**Área segura:** 80–1000px horizontal

**Estrutura vertical (referência, flexível por jogada):**
```
fundo      degradê escuro + glow azul + (painel de vidro)
y=~160     Headline principal (Bricolage 800, 88–96px) — palavra-chave em azul
           OU headline no rodapé do bloco, conforme a jogada
meio       elemento-herói da jogada (número, lista com dots, mockup, etc.)
corpo      subtexto (Inter 400, 26–34px, #7A7A96 / #C0C0D0)
y=~1270    Footer: @smartbase.br centralizado
```

### Footer (obrigatório em todo post)
- **`@smartbase.br` centralizado** no rodapé (Inter Medium ~26, branco ~85%).
- Sem wordmark, sem badge "sb", sem handle à direita. Só o @ no meio.

### Carrossel
- **Canvas:** 1080 × 1350px
- **Capa:** degradê + glow + (painel de vidro), headline forte (1–2 linhas) com palavra em azul, indicador de arraste em chip ("arrasta →", Inter, azul)
- **Slides internos:** mesma moldura (degradê + glow + footer), hierarquia clara (título Bricolage, dados Inter), dividers separando blocos
- **Último slide:** CTA direto — "falar no whatsapp →" / "manda no whatsapp →", footer padrão

### Stories (quando produzido)
- Canvas: 1080 × 1920px
- Mesma paleta, tipografia e tratamento de profundidade — nunca mudar o sistema só pela proporção
- Footer compacto: só `@smartbase.br` centralizado na base

---

## Kit de jogadas — variar ao longo do feed

Escolher **uma jogada-herói por carrossel**, variando entre posts pra o grid não ficar carimbado.

1. **Número-herói** — número gigante como visual (ex: "4", "90'", "11+"). Dado/listicle.
2. **Palavra explodida** — uma palavra dominando o slide (ex: "a caixa.", "errado.", "pegadinha."). Take/virada.
3. **Mockup de tela** — desenhado no Figma: card de app (ícone + nome + placar) ou tela de bloqueio com Live Activity. Autêntico, não precisa de foto.
4. **Capa glow + painel de vidro** — atmosférica, hook grande, palavra em azul, profundidade pelo vidro.
5. **Comparação em cards** — dois cards contrastando (ex: "todo iphone 11+" x "a inteligência nova"). Esclarece + gera comentário.
6. **Lista com dots** — itens com bolinha azul (ex: o que vem no seminovo, o que a gente avalia na troca).
7. **Enquete** — pergunta + opções com checkbox visual ("responde nos comentários"). Engajamento.
8. **Foto/produto** — slot reservado pra foto real recortada — preenche quando tiver imagem.

### Regra de ouro: variedade x coesão
- **Variedade vive ENTRE posts:** cada carrossel usa uma jogada-herói diferente.
- **Coesão vive DENTRO do carrossel:** os slides compartilham a moldura (degradê + glow + painel de vidro + footer + estilo de tipo); só o elemento-herói do meio muda. Não misturar 6 estruturas num só carrossel.

### Mockups de dispositivo (padrão — lição 13/06)
Quando um card mostra uma tela ou aparelho, usar **mockup de dispositivo REALISTA**, nunca retângulo desenhado à mão.
- **Device frame realista:** iPhone/Watch com notch, dynamic island, botões, sombra e **wallpaper real do iOS**. Fonte: bibliotecas de device do Figma / Apple Design Resources.
- **UI/screenshot real do recurso** dentro do device (ex.: Apple Sports com bandeiras, Dynamic Island com placar, tela de bloqueio com Live Activity).
- **Conteúdo real** (bandeiras, chrome do app, wallpaper) > texto chapado. Dá cara de keynote da Apple.
- Técnico: imagem entra no Figma via `upload_assets` (POST dos bytes pra URL retornada); `createImageAsync` não é suportado no `use_figma`.

---

## Pilares de conteúdo (categorias — sem cor própria)

Os pilares organizam o **conteúdo**, não a cor. Todos usam o mesmo sistema visual (degradê + glow + vidro + azul). O badge de pilar é **só interno** (organização no Figma) — nunca vai na arte publicada.

### DECIFRA APPLE
- **Objetivo:** carrosséis investigativos — dados reais (tributação, garantia, modelos, recursos)
- **Tom visual:** informativo, técnico, preciso — como um briefing Apple
- **Jogadas típicas:** número-herói, lista com dots, comparação em cards, mockup de tela

### CASA SMARTBASE
- **Objetivo:** diferencial "paga quando recebe", prova social, bastidor, upgrade
- **Tom visual:** humano, próximo, confiante
- **Jogadas típicas:** palavra explodida, capa glow + vidro, foto/produto, enquete

### VIDA APPLE EM CAXIAS  — *layout a redefinir*
- **Objetivo:** ancoragem local, fotos em iPhone na Serra Gaúcha
- **Status:** o layout antigo (foto-led com headline no rodapé) **não foi pro ar**. Design novo a propor — manter degradê/glow/vidro e azul como sistema, resolvendo como a foto local entra sem virar "banco de imagem". Marcar como pendência de design.

---

## O que NUNCA fazer

**Cores:**
- `#FFFFFF` (branco puro) como fundo — a marca é dark-first
- `#25D366` (wa-green) fora de contexto de WhatsApp
- Cor quente (laranja, vermelho, amarelo) em qualquer elemento
- Gradiente vibrante ou neón
- Inventar cor de acento fora do azul `#3E82F7`

**Tipografia:**
- Fontes serifadas em qualquer contexto
- Bricolage abaixo de 28px
- Mais de 2 famílias tipográficas por peça
- Caps lock ou letter-spacing no headline

**Layout:**
- Preço no feed — nunca. Só no WhatsApp
- Banneraço com preço + telefone + produto + texto junto — estética de varejo
- Falta de margem — padding mínimo de 80px lateral, sempre
- Post sem footer — `@smartbase.br` centralizado é obrigatório
- **Badge de pilar na arte publicada** — é só interno
- **Marca d'água de letras "sb" na arte** — usar painel de vidro pra profundidade
- **Accent bar lateral** — aposentada

**Tom visual:**
- Estética de varejo genérica (fundo branco, produto grande, preço em vermelho)
- Qualquer elemento que pareça "promoção" — a Smartbase posiciona, não promove
- Posts sem identidade — qualquer peça deve ser lida como Smartbase sem ver o logo

---

## Princípio de copy (LightCopy + storytelling)
- **Premissa, não promessa** (Ladeira): ensina algo real, a venda vem de consequência.
- **Storytelling de jornada:** uma missão em passos numerados (01, 02, 03...), produto como último passo. O leitor aplica os passos mesmo sem comprar.
- **Engajamento:** ao menos 1 slide salvável/comentável (enquete, checklist, dado).
- **Voz (de `conteudo/voz-smartbase.md`):** caixa baixa, take primeiro, fato concreto, CTA convite. **Pessoa:** "você/seu" no feed; "tu" fica só pro WhatsApp 1:1. **Proibido:** travessão, "não é X, é Y", emoji de enfeite, promoção genérica, preço no feed, prometer "100% de bateria" como padrão.

---

## Referências visuais aprovadas

- Figma `QKN6E4t9w2XPdATrXzivvN`, página "orgânico feed | junho/26" — kit aplicado: Copa `1000-29`, iOS 27 `992-29`, seminovo `1004-29`, upgrade/trade-in `647-286`.
- `conteudo/1. orgânico | abril/12-05_carrossel_01.png` — referência de hierarquia e footer.

---

## Tokens para uso em SVG

```
Fundo (degradê):  topo #121220 → base #07070E (vertical)
Surface:          fill="#0F0F1C"
Divider:          stroke="#1E1E2E"
Acento (único):   fill="#3E82F7"
Glow:             elipse #3E82F7, blur ~200, opacity 0.12–0.30
Painel de vidro:  fill="#FFFFFF" opacity 0.04–0.08 + stroke #FFFFFF opacity 0.10–0.14 + background blur (Figma)
Headline:         fill="#F2F2F6"  font-family="'Bricolage Grotesque'" font-size="88-96" font-weight="800"
Corpo:            fill="#7A7A96"  font-family="'Inter'" font-size="26-34" font-weight="400"
Número-herói:     fill="#C0C0D0" opacity 0.20  font-family="'Bricolage Grotesque'" font-weight="800"
Footer (handle):  fill="#F2F2F6" opacity 0.85  font-family="'Inter'" font-size="26" font-weight="500"  → @smartbase.br CENTRALIZADO
Dot de lista:     <circle r="6" fill="#3E82F7"/>
```
