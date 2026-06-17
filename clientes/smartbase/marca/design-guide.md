# Smartbase — Design System

> Fonte da verdade visual da marca. **Um sistema só** — serve post (Figma/SVG 1080×1350) e site (Shopify/web).
> Espelho em texto de `design-guide.html` (a versão visual, que a Letícia abre e aprova). Em conflito, o HTML vale.
> Ler junto com `marca/plataforma-de-marca.md` (estratégia) e `conteudo/voz-smartbase.md` (como escrever).
> Versão 2.0 — unificado em 17/06/2026 (fundiu o guia de post + o design system do site do Claude Design).

---

## Fundamentos (o visual serve a marca)

O visual é a **prova** dita em imagem. Território: *a marca da prova, num mercado de promessa*. O sistema afirma, não enfeita.
- Território "marca da prova" → **dark premium**, sóbrio (apple store particular que não grita).
- Essência "confiança se prova" → **vidro** (transparência real, mostra o que tem atrás).
- Voz take-primeiro, caixa baixa → **headline lowercase** Bricolage, palavra-chave no azul.

---

## Decisões de sistema (valem sobre qualquer descrição antiga)

- **Um azul só.** `#3E82F7` (`--sb-signal`) é a única cor de marca. **Sem cor por pilar** (roxo e verde-de-pilar removidos).
- **Nomenclatura oficial de token: `--sb-*`** (a do site, já em produção no tema).
- **Profundidade = degradê + glow + vidro + marca d'água "sb".** As quatro camadas convivem.
- **Marca d'água "sb" (ghost text) está ATIVA** — Bricolage 800, opacity 0.03–0.04, gigante (~520px), no fundo. Assinatura tipográfica de fundo. (Convive com o vidro: ghost = textura de fundo; vidro = material de painel.)
- **Vidro = efeito nativo "Vidro" do Figma** (Effects → Glass), aplicável a qualquer cor da marca. No site, equivalente em CSS (`backdrop-filter`).
- **Accent bar lateral: aposentada.** **Badge de pilar: só interno** (Figma), nunca na arte publicada.
- **Footer do post = `@smartbase.br` centralizado.** Sem wordmark, sem handle à direita.
- **Handle correto: `@smartbase.br`** (nunca `.rs`).

---

## Cor

### Fundo e superfície
| nome | token | hex | uso |
|------|-------|-----|-----|
| void | `--sb-void` | `#07070E` | fundo base de todo post e página |
| surface | `--sb-surface` | `#0F0F1C` | cards, blocos, badge "sb" |
| surface-2 | `--sb-surface-2` | `#13131F` | camada elevada, topo do degradê |
| ink | `--sb-ink` | `#11110F` | near-black em recortes claro-no-escuro |

### Texto (greyscale)
| nome | token | hex | uso |
|------|-------|-----|-----|
| white | `--sb-white` | `#F2F2F6` | headlines, títulos |
| platinum | `--sb-platinum` | `#C0C0D0` | texto secundário, "smart" do wordmark |
| silver | `--sb-silver` | `#7A7A96` | corpo, legendas, eyebrows |
| mute | `--sb-mute` | `#4A4A66` | handles, dividers fracos, ghost |

### Azul (acento único)
| nome | token | hex | uso |
|------|-------|-----|-----|
| signal | `--sb-signal` | `#3E82F7` | palavra-chave, dot, CTA, glow, links |
| blue-light | `--sb-blue-light` | `#6DAFF9` | hover, variante clara (Figma; ainda não tokenizada no css do tema) |
| signal-12 | `--sb-signal-12` | `rgba(62,130,247,0.12)` | tint de chips e tags |
| signal-24 | `--sb-signal-24` | `rgba(62,130,247,0.24)` | overlays e glows |

### Cores de sistema (funcionais, NÃO-marca)
| nome | token | hex | uso |
|------|-------|-----|-----|
| success | `--sb-success` | `#10B981` | status "em estoque" no site. **Nunca** como cor editorial de post. |
| wa-green | `--sb-wa` | `#25D366` | exclusivo de botão/CTA de WhatsApp. **Nunca** como destaque editorial. (Hardcoded no `theme.css` do site; `--sb-wa` é a referência do guia.) |

> Reconciliação 17/06: `surface-2` (era `#121220`), `text-muted`→`mute` (era `#4A4A60`) e alphas (eram 10%/30%) foram alinhados ao valor do site, que está no ar. Peças antigas não precisam de refação.

### Cor proibida
- Roxo `#8B5CF6`, verde-de-pilar, qualquer acento fora do azul.
- Branco puro `#FFFFFF` como fundo (a marca é dark-first).
- Paleta quente (laranja, vermelho, amarelo), gradiente neón.

---

## Tipografia

- **Bricolage Grotesque** — títulos, headlines, números-herói, capas. Pesos 300/400/500/600/700/800. Caixa baixa, nunca CAPS.
- **Inter** — corpo, subtítulos, legendas, chips, eyebrows, footer, handle. Pesos 300/400/500/600/700.

### Escala — site (web)
hero 80 / -2 / .98 · h1 56 / -1.5 / 1.0 · h2 40 / -1 / 1.02 · h3 26 / -.4 / 1.1 · lead 20 · body 16 · small 14 · eyebrow 12 (ls 3, lowercase).

### Escala — post (1080×1350)
headline 88–96 / peso 800 · corpo 26–34 / 400 · legenda e handle 22–26.

### Regras
Máx. 2 famílias. Nunca serifada. Nunca Bricolage abaixo de 28px. Nunca CAPS ou letter-spacing no headline (só em eyebrow/label).

---

## Vidro (a assinatura de profundidade)

Material "Vidro" nativo do Figma (Effects → Glass). Calibração da marca:

| luz | refração | profundidade | dispersão | gelo | splay | preenchimento | opacidade |
|-----|----------|--------------|-----------|------|-------|---------------|-----------|
| -56° / 80% | 80 | 46 | 40 | 2 | 52 | 20% | 50–80% (por peça) |

- **Fill aceita qualquer cor da marca** — neutro como padrão, azul `#3E82F7` pra acento, surface pra blocos.
- **Precisa de algo vívido atrás pra refratar** (canvas com glow ou foto). Nunca sobre preto chapado.
- Uma assinatura de vidro por peça.
- Nota: indústria recomenda profundidade 10–30 pra legibilidade; 46 dá vidro encorpado. Se pesar sobre texto, baixar.
- **Equivalente web (já no site):** `backdrop-filter: blur(50px) saturate(180%)` + rim especular + tint azul. CSS é aproximação — refração/dispersão reais só no Figma.

---

## Profundidade & canvas (4 camadas)

1. **Degradê** vertical: surface-2 `#13131F` no topo → void `#07070E` na base. Nunca preto chapado.
2. **Glow azul** — 1–2 elipses `#3E82F7`, blur ~200, opacity 0.12–0.24, atrás do conteúdo.
3. **Vidro** — material da seção acima, emoldura o herói da peça.
4. **Marca d'água "sb"** — ghost text Bricolage 800, opacity 0.03–0.04, gigante. Ativa.

---

## Raios, espaço, elevação

- **Raios** (`--sb-r-*`): pill 999 · lg 36 · card 28 · panel 22 · sm 16. Cantos contínuos (squircle iOS). Nunca borda viva (0px).
- **Espaçamento**: base 8px — 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Elevação**: soft `0 8px 30px` · card `0 24px 60px` · glass (rim especular + ambient).

---

## Componentes (site)

- **Browserbar + sidebar (nav):** vidro, pill 999, blur leve, borda azul `rgba(62,130,247,.55)`, glow. Sidebar de ícones na mesma receita.
- **Botões:** primary (branco sólido, texto `#07070E`) · glass (vidro) · whatsapp (verde funcional) · ghost (texto azul). Todos pill.
- **Chip:** pill com tint azul + borda de sinal. **Eyebrow:** Inter 500, ls 3px, lowercase, silver ou azul.
- **Slot de foto:** estado vazio com glow azul; recebe foto real recortada.

---

## Aplicação — post (1080×1350)

- Canvas 1080×1350, padding lateral 80px, área segura 80–1000px.
- Footer **`@smartbase.br` centralizado** (Inter medium ~26, branco ~85%). Obrigatório.
- **Kit de jogadas** (uma jogada-herói por carrossel): número-herói · palavra explodida · mockup de tela (device realista, lição 13/06) · capa glow + vidro · comparação em cards · lista com dots · enquete · foto/produto.
- Coesão dentro do carrossel (mesma moldura), variedade entre posts.
- Tokens SVG: degradê `#13131F`→`#07070E` · surface `#0F0F1C` · divider `stroke #1E1E2E` · acento `#3E82F7` · glow elipse `#3E82F7` blur ~200 opacity .12–.24 · ghost "sb" `#F2F2F6` opacity .03–.04 · headline `#F2F2F6` Bricolage 88–96 / 800 · corpo `#7A7A96` Inter 26–34 / 400 · footer `@smartbase.br` centralizado.

### Layout Vida Apple em Caxias (editorial, fechado 15/06)
Foto local quase full-bleed no topo → degradê de escurecimento (fade pro `#07070E`) → faixa de vidro no rodapé com headline curta (palavra-chave azul) + linha de EXIF ("iphone 17 pro max · caxias · golden hour"). Footer centralizado. Foto sempre real, tirada em iPhone na Serra. Template Figma: `QKN6E4t9w2XPdATrXzivvN` ("TEMPLATE · vida apple caxias").

---

## Aplicação — site

`www.smartbasebr.com` — mesma língua visual em web. Nav flutuante em vidro, conversão 100% WhatsApp.
Implementação técnica: `site/tema-shopify/assets/colors_and_type.css` + `kit.css` (derivados deste sistema). **Pull antes de push.**

---

## Pilares de conteúdo (categorias, sem cor)

Todos usam o mesmo sistema visual. Badge de pilar é só interno (Figma).
- **Decifra Apple** — carrosséis investigativos, dado real. KPI: salvamentos + envios.
- **Casa Smartbase** — "paga quando recebe", prova social, bastidor, upgrade. KPI: comentários + DMs.
- **Vida Apple em Caxias** — foto real em iPhone na Serra. KPI: alcance local.

---

## Copy (resumo — fonte é voz-smartbase.md)

Premissa, não promessa (LightCopy). Caixa baixa, take primeiro, fato concreto, CTA convite. "você/seu" no feed; "tu" só no WhatsApp 1:1.
**Proibido:** travessão, "não é X, é Y", emoji de enfeite, promoção genérica, preço no feed, "markup", "100% de bateria" como padrão.

---

## O que NUNCA fazer

**Cor:** roxo/verde/qualquer acento fora do azul · cor por pilar · branco puro de fundo · paleta quente/neón · wa-green fora de WhatsApp.
**Tipografia:** serifada · Bricolage < 28px · CAPS ou letter-spacing no headline · +2 famílias.
**Layout:** preço no feed · post sem footer centralizado · padding < 80px · accent bar lateral · badge de pilar na arte · vidro sobre preto chapado sem canvas.
**Tom visual:** estética de varejo · cara de "promoção" · peça irreconhecível sem o logo · "markup" em copy.
