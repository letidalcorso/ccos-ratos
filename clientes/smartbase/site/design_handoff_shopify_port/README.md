# Handoff: smartbase → tema Shopify

## Visão geral
**smartbase** é uma revenda Apple (loja particular) em Caxias do Sul / Serra Gaúcha.
Este pacote documenta como transformar o protótipo de design (aprovado) em um **tema Shopify**
onde a cliente gerencia **imagens, textos e produtos pelo painel do Shopify**, sem tocar em código.

Marca: visual **dark, editorial, "Liquid Glass" (iOS-novo)**, com **um único azul** de acento.
Tom de voz: **minúsculas**, primeira pessoa, gauchês leve ("tu", "fala", "a gente acha").
Conversão **100% via WhatsApp** (sem carrinho/checkout na v1).

## Sobre os arquivos deste pacote
Os arquivos em `source/` são **referências de design feitas em HTML/React (Babel)** — um protótipo
para revisão visual, **não código de produção pra copiar e colar**. A tarefa é **recriar estes
designs como um tema Shopify** (Liquid + CSS + JS vanilla), usando os padrões do Shopify
(sections, blocks, settings_schema, templates nativos de produto/blog).

O CSS (`colors_and_type.css`, `kit.css`, `pages.css`) **é CSS puro e portável** — vai quase
direto pros assets do tema. O que precisa ser reescrito é a camada React (`.jsx`) → Liquid.

## Fidelidade
**Alta fidelidade (hi-fi).** Cores, tipografia, espaçamentos, raios e materiais são finais.
Recrie pixel-a-pixel. Todos os valores exatos estão em "Design Tokens" abaixo e em
`source/colors_and_type.css`.

---

## ⚠️ Não portar: o "chrome" de protótipo
O protótipo é emoldurado por uma **barra estilo Safari + sidebar de ícones** — isso é só um
**dispositivo de apresentação**. **NÃO** vai pro tema real. O site verdadeiro é o conteúdo
dentro da moldura. A navegação real do tema é o header/menu padrão do Shopify.

---

## Arquitetura de páginas

O protótipo é um SPA (um `index.html` com troca de "páginas" por hash). No Shopify isso vira
**templates separados**:

| Página do protótipo | Template / objeto Shopify |
|---|---|
| Home | `templates/index.json` (sections empilhadas) |
| Vitrine | `templates/collection.json` ou `page.vitrine.json` (grid de produtos nativo) |
| Blog (listagem) | template nativo `blog` |
| Leitura (post) | template nativo `article` |
| FAQ | `templates/page.faq.json` |
| Contato | `templates/page.contato.json` |

---

## Sections (cada componente JSX → uma section Shopify)

### 1. Hero (Home) — `sections/home-hero.liquid`
- **Layout**: painel de vidro grande (`--sb-r-lg` = 36px) sobre foto da loja; texto à esquerda.
- **Conteúdo da marca**: linha "smartbase" (pill neutra) + pill de página (azul). Headline display
  em 2 linhas, 2ª linha em azul (`--sb-signal`). Lead (Inter). 2 botões (primário azul + glass).
- **Settings**: `image_picker` (foto de fundo), text (eyebrow, headline linha 1, headline linha 2,
  lead), 2 blocks de botão (label + link/whatsapp).
- **Imagem**: aplicar filtro `data-cool` (ver Imagens) pra obedecer à regra de um-azul.

### 2. Hero de página — `sections/page-hero.liquid` (Vitrine, FAQ, Contato, Blog)
- **Imagem ÚNICA dentro do vidro**, com scrim diagonal pra legibilidade do texto.
- **Topo**: "smartbase" (pill neutra) + nome da página (pill **azul preenchida**, destaque).
- **Base**: headline display 2 linhas (2ª azul) + lead. Respiro topo/base simétrico (~22px de conteúdo).
- Altura: `min-height: 76vh` (painel `clamp(360px,52vh,520px)`).
- **CTA**: **um botão só** por hero (decisão da cliente — 2 botões confundem):
  - Vitrine/Blog: sem CTA no hero.
  - FAQ: "tirar dúvidas no whatsapp".
  - Contato: "quero conhecer a loja" (rola até o mapa).
- **Settings**: `image_picker`, eyebrow/pill de página, headline (2 linhas), lead, 1 botão opcional.

### 3. Posicionamento (Home) — `sections/posicionamento.liquid`
- Rich-text + botão. Texto editorial sobre a proposta.

### 4. Diferenciais (Home) — `sections/diferenciais.liquid`
- **Blocks repetíveis** (card): índice (numeral), título, texto.

### 5. Vitrine embutida na Home (showcase) — `sections/home-showcase.liquid`
- Bloco imersivo sobre foto: título → **faixa de destaque (opcional)** → janela "novos" (grid de
  categorias) → barra "semi novos".
- **Faixa de destaque** = **dark Liquid Glass** (não translúcido demais), carrega a info do produto
  no próprio bloco (chips: capacidade, cor, garantia) + CTA em **primeira pessoa** ("quero esse").
  0, 1 ou 2 destaques. No Shopify: blocks repetíveis (imagem, etiqueta, produto/título, texto,
  chips de specs, destino do botão: whatsapp/coleção/url).
- **Janela "novos"**: 6 cards de categoria (Mac, iPad, iPhone, Watch, AirPods, Acessórios) → linkam
  pra coleção filtrada. Fundo do vidro levemente escurecido (menos translúcido).

### 6. Vitrine (página) — **grid de produtos nativo**
- Hero de página + **portas slim** (2 faixas horizontais: "novos" e "seminovos") + **filtro** +
  **grid de produtos 2-up** + faixa final.
- **Portas (Option B, slim)**: cada porta é uma faixa horizontal baixa — rótulo + frase à esquerda,
  **garantia como selo à direita** (separada por filete). "novos" = garantia apple · 12 meses;
  "seminovos" = smartbase · 3 meses. Clicar filtra o grid.
- **Filtro unificado** (uma pílula de vidro, centralizada e **alinhada ao conteúdo**, não à viewport):
  - Grupo 1 (condição, azul quando ativo): **tudo · novos · seminovos**
  - divisor
  - Grupo 2 (categoria, branco quando ativo): **todos · iPhone · Mac · iPad · Watch · AirPods · Acessórios**
  - No Shopify: links de coleção + filtros nativos (tags), ou JS leve de filtro client-side.
- **Card de produto** (recriar com `product` nativo):
  - Foto com **fundo infinito** (sweep radial branco de estúdio), `object-fit: contain`, padding 20px.
  - Suporta **2ª imagem** ("ambientada"): cross-fade no hover (`product.media[1]`).
  - **Topo**: categoria (eyebrow azul) à esquerda + **status à direita** ("sob encomenda" / "em estoque",
    com bolinha; verde `--sb-success` quando em estoque). *Não* repetir prazo (só "sob encomenda").
  - Nome (display), descrição, specs (linhas), **bolinhas de cor** + "N cores".
  - **Rodapé** (sem linha divisória): preço à esquerda + botão "quero esse" à direita.
    - Novos: se houver preço → "**a partir de** R$ ___"; seminovos → valor cheio; vazio → "sob consulta · no whatsapp →".
  - "quero esse" → WhatsApp com nome do produto pré-preenchido.
- **Estado vazio** (categoria sem item): "nada aqui nessa categoria ainda — mas se existe, a gente acha" + botão whatsapp.

### 7. FAQ — `sections/faq.liquid`
- Hero (1 botão) + painel comparativo de garantia + **acordeão por categoria** (JS vanilla ~15 linhas).
- **Fechamento**: "tirou as dúvidas? então bora." + botão **"vou escolher meu aparelho"** → leva pra Vitrine.
- **Settings/blocks**: categoria → perguntas (block: pergunta + resposta rich-text).

### 8. Blog + Leitura — templates nativos
- **Listagem**: grid **4-up** (responsivo: 2 em telas médias, 1 mobile), **alinhado ao hero**.
  Filtros = links de tag. Card: capa (150px) + corpo com mais respiro (categoria + título).
- **Artigo**: corpo de leitura + **rodapé clean** (NÃO usar CTA explícita; só "smartbase · caxias do
  sul · serra gaúcha · ficou com dúvida? chama no whatsapp" com link discreto) + **relacionados em
  rolagem horizontal full-bleed** (cards menores, sem cortar na animação de entrada).

### 9. Contato — `sections/contato.liquid`
- Hero (1 botão "quero conhecer a loja") + mapa (embed) + endereço/horário (settings).

### 10. Faixa pré-rodapé (todas as páginas) — `sections/cta-band.liquid`
- **Horizontal e enxuta**: texto à esquerda (eyebrow + headline + frase), **botão à direita**, mesma linha.
- **Um botão só** (whatsapp). Variação de cópia por página:
  - Vitrine: "não achou o que procura? / se existe, **a gente acha**." (1 botão).
  - Demais: "pronto pra escolher? / você já sabe o que quer. **falta só chamar a gente**." (1 botão).
- **Settings**: eyebrow, headline (linha 1 + linha 2 azul), sub, 1 botão.

### 11. Rodapé — `sections/footer` (group)
- Listas de links + contato: **whatsapp** (link direto) e **ligar · +55 54 99662-4494** (`tel:`).

---

## Comportamento / Interações
- **Tudo converte pra WhatsApp**: `https://wa.me/5554996624494?text=<mensagem url-encoded>`.
  Nos cards da vitrine, pré-preencher o nome do produto.
- **Acordeão do FAQ**: vanilla JS, ~15 linhas (toggle de classe + altura).
- **Cross-fade da 2ª foto do produto**: hover troca `media[0]` → `media[1]` com opacity transition.
- **Animações de entrada (reveal)**: **deixar pra depois** (decisão da cliente). Quando for a hora,
  usar reveal **scroll-driven em CSS puro** (`animation-timeline: view()`) com fallback estático —
  é o mais robusto. Gatear em `@media (prefers-reduced-motion: no-preference)`. NÃO depender de JS
  que adiciona classe `.in` (frágil com re-render). Tudo deve ser legível **sem** animação (estado
  base = visível).
- **Responsivo**: grids viram 1 coluna no mobile; pílula de filtro quebra de linha (esconde o divisor);
  tooltips da sidebar não existem no tema real.

## Design Tokens (valores exatos — fonte: `source/colors_and_type.css`)

**Cores**
- Fundo: void `#07070E` · surface `#0F0F1C` · surface-2 `#13131F`
- Acento (O azul): signal `#3E82F7` (washes: `rgba(62,130,247,.12)` / `.24`)
- Texto: white `#F2F2F6` · platinum `#C0C0D0` · silver `#7A7A96` · mute `#4A4A66`
- Status em estoque: success `#10B981`
- Hairlines: `rgba(255,255,255,.08)` (card) · `.14` (hover) · fill `.04`

**Liquid Glass**
- tint `rgba(255,255,255,.05)` · tint-hi `.12` · tint-blue `rgba(62,130,247,.12)`
- blur `blur(50px) saturate(180%)` · rim `rgba(255,255,255,.65)` · rim-lo `.12`
- shadow: `0 2px 8px rgba(0,0,0,.30), 0 24px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.65), inset 0 -1px 1px rgba(0,0,0,.40)`

**Raios**: pill 999px · card 28px · panel 22px · sm 16px · lg 36px

**Espaçamento** (base 8px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Gutter 120px · seção 160px.

**Tipografia**
- Display: **Bricolage Grotesque** (400–800), minúsculas, tracking apertado.
- Texto: **Inter** (400–700). (Google Fonts — sem substituição.)
- Escala: hero 80px/-2px/.98 · h1 56px/-1.5px · h2 40px/-1px · h3 26px/-.4px
  · lead 20px/1.4 · body 16px/1.55 · small 14px/1.5 · eyebrow 12px/3px (minúscula espaçada)

## Imagens
- Placeholders `<image-slot>` do protótipo → `image_picker` nas sections (heroes/capas/destaques) e
  **mídia nativa** nos produtos (vitrine).
- Tratamento **dark/cool**: filtro `data-cool` = `saturate(.5) hue-rotate(-22deg) brightness(.7)`
  pode ficar em `.hero img` pra qualquer foto obedecer à regra de um-azul. Ideal: subir imagens já
  tratadas, mínimo 1600px.
- Assets de referência usados no protótipo estão em `source/assets/` (fotos de produto + ambientes).

## Tweaks → settings_schema.json
O painel de Tweaks (intensidade do vidro, raio, acento, glow, movimento) mapeia pra
`settings_schema.json` (range/color) escrevendo as mesmas variáveis `--sb-*` no `:root`. Assim a
cliente ajusta o "tema visual" global no painel do Shopify.

## Arquivos (em `source/`)
> Os componentes de referência vêm com extensão **`.jsx.txt`** (renomeie pra `.jsx` ao abrir num
> editor React). Isso evita que ferramentas tratem as cópias de referência como código vivo do projeto.

- `colors_and_type.css` — **tokens + helpers de tipo + Liquid Glass** (portar direto pro tema)
- `kit.css` — chrome, botões, animações, base
- `pages.css` — estilos por section/página
- `index.html` — SPA do protótipo (referência de montagem)
- `Primitives.jsx.txt` — Logo, Button, Eyebrow, Headline, Icon, hero, sidebar (referência de componentes)
- `HomePage.jsx.txt` · `VitrinePage.jsx.txt` · `FaqPage.jsx.txt` · `MorePages.jsx.txt` (Contato/Blog/Post) · `App.jsx.txt` (shell, footer, CtaBand, tweaks defaults)
- `SHOPIFY.md` — mapa de port resumido (este README é a versão detalhada)
- `assets/` — imagens de referência

## Contato / dados reais
- WhatsApp / telefone: **+55 54 99662-4494**
- Local: **Caxias do Sul · Serra Gaúcha**
