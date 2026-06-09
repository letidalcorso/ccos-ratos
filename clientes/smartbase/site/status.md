# Status — Site Smartbase (tema Shopify)

> Atualizado em 2026-06-08. Esta é a fonte da verdade do estado do site.

## Onde está
- **Tema Shopify completo** em `clientes/smartbase/site/tema-shopify/` (recriado do zero a partir do design do claude.ai/design, pasta `site/design_handoff_shopify_port/`).
- **Publicado (LIVE)** na loja `smartbase-2903.myshopify.com`: nome **smartbase**, ID **#149876408413**. É o tema ativo do site. Push de mudanças: `shopify theme push --theme 149876408413 --allow-live` (de dentro de `tema-shopify/`).

## Mudanças recentes
- **2026-06-08 — Faixa pré-rodapé por página + correção do FAQ:**
  - `sections/cta-band.liquid` reescrita: copy/botão/**destino** (whatsapp · vitrine · link) próprios por página (home, vitrine, faq, contato, blog) + **liga-desliga por página**, tudo no painel (Personalizar → Faixa pré-rodapé), agrupado por página. IDs de campo mudaram (h_/v_/f_/c_/b_) — se houver customização antiga salva, volta aos novos defaults validados.
  - `sections/faq.liquid`: removido o "fechamento" embutido (`.faq-end`) que duplicava o CTA — agora só a faixa unificada (destino = vitrine). Hero do FAQ passou a usar `amb-iphones.png` (antes dividia a foto do blog).
- Código versionado no GitHub (auto-sync do workspace).
- O one-page HTML antigo (`site/index.html` etc.) foi **substituído** por este tema — não usar mais como referência ativa.

## O que está pronto (fiel ao protótipo)
- **Navegação:** BrowserBar (topo, estilo navegador) + Sidebar de ícones (início · vitrine · faq · contato · blog). NÃO tem top-nav de produtos (decisão: seguir o design system).
- **Home** (`templates/index.json`): hero, posicionamento, diferenciais, zona clara (emblema "sb" + banda editorial + como funciona), vitrine embutida (6 categorias), faixa pré-rodapé.
- **Vitrine** (`/pages/vitrine`): hero + 2 portas (garantias) + filtros (condição + categoria, client-side) + 15 aparelhos em cards + "quero esse" → WhatsApp + estado vazio.
- **FAQ** (`/pages/faq`): acordeão por categoria + painel comparativo de garantia + fechamento.
- **Contato** (`/pages/contato`): hero + mapa decorativo + 3 cards (endereço/horário/atendimento).
- **Blog** (`/pages/blog`): grade de 8 posts + filtros por categoria/tag.
- **Global:** rodapé + faixa de WhatsApp em todas as páginas. Conversão 100% WhatsApp (5554996624494), sem carrinho (v1).
- Tudo **editável no painel** (textos, imagens, produtos, perguntas, posts). Produtos e posts são **blocos no tema** (não produtos nativos do Shopify) — decisão da Letícia, encaixa no modelo só-WhatsApp.

## Decisões técnicas importantes
- **Páginas via `templates/page.liquid`** que roteia por handle (vitrine/faq/contato/blog) → usa modelo "Página padrão" no admin, sem precisar publicar o tema pra aparecer modelo custom. As 4 páginas precisam existir no admin com esses handles exatos.
- **Imagens nativas** (`<img>`), não o `<image-slot>` do protótipo (era frágil). Filtro "cool" e fill via `assets/theme.css`.
- **Animações de entrada desligadas** de propósito: `theme.css` força `.rise`/`.stagger`/`[hidden]` visíveis pra não sumir conteúdo (Safari não suporta `animation-timeline`).
- Imagens são **placeholders** (Apple oficiais / referência do handoff), pesadas (~6MB algumas) — otimizar antes de público.

## O que falta
1. **Trocar imagens placeholder** pelas reais (no painel → Personalizar).
2. ~~Publicar o tema~~ — feito (tema está LIVE). Falta revisar a vitrine de produtos com o dono.
3. **Animações de entrada** (CSS scroll-driven, quando quiser).
4. **Painel de ajustes globais (Tweaks)** — opcional, não feito.
5. **Go público de verdade:** domínio próprio + tirar senha da loja (passo separado, futuro).
6. Otimizar peso das imagens.

## Como retomar
1. No Terminal, na pasta `tema-shopify/`: `shopify theme dev --store smartbase-2903.myshopify.com` (preview ao vivo em `http://127.0.0.1:9292`).
2. Para reenviar mudanças pro tema na loja: `shopify theme push` (escolhe o tema smartbase #149876408413).
3. Páginas: vitrine, faq, contato, blog já criadas no admin (handles iguais). Home é `/`.
