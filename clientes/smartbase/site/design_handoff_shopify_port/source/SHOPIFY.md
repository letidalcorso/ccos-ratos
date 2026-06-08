# Porting smartbase → Shopify

The UI kit (`ui_kits/site/`) is a React/Babel prototype for design review. It is built
to **port cleanly to a Shopify theme**. Mapping:

## Design tokens
- `colors_and_type.css` (the `--sb-*` variables + `.sb-glass` / `.sb-canvas` helpers) is
  plain CSS — drop it into the theme's `assets/` and `{{ 'colors_and_type.css' | asset_url | stylesheet_tag }}`.
- `ui_kits/site/kit.css` + `pages.css` are also plain CSS; split into the theme's
  `base.css` (tokens, chrome, buttons, animations) and per-section CSS.
- Fonts: Bricolage Grotesque + Inter via Google Fonts (or upload as theme assets and
  `@font-face`). Same families as the Figma — no substitution.

## Sections (each JSX component → one Shopify section)
| Prototype component | Shopify section | Notes |
|---|---|---|
| `HomeHero` | `hero.liquid` | image = section setting (`image_picker`); badge/eyebrow/headline = text settings |
| `Posicionamento` | `posicionamento.liquid` | rich-text + button block |
| `Diferenciais` | `diferenciais.liquid` | blocks (repeatable card: índice, título, texto) |
| `Lookbook` | `lookbook.liquid` | blocks → link to collections |
| `VitrinePage` cards | **product grid** | use native Shopify `product` cards + `collection` loops; "quero esse" → WhatsApp link built from product title |
| `FaqPage` | `faq.liquid` | blocks (categoria → perguntas); accordion JS is ~15 lines vanilla |
| `BlogPage` / `PostPage` | native **Blog** + **Article** templates | filters = tag links |
| `ContatoPage` | `contato.liquid` | map embed + address settings |
| `Footer` | `footer` group | link lists |

## Images
- Prototype uses `<image-slot>` placeholders. In Shopify these become section
  `image_picker` settings (heroes/covers) and native product media (vitrine).
- Keep the **dark / on-black, cool** treatment: the `data-cool` filter
  (`saturate(.5) hue-rotate(-22deg) brightness(.7)`) can live on `.hero img` so any
  uploaded photo obeys the one-blue rule. Ideally upload already-graded images (min 1600px).

## Behaviour
- Everything converts to WhatsApp: build links as `https://wa.me/5554996624494?text=...`
  (prefill product name on the vitrine cards). No cart/checkout in v1.
- Liquid Glass + animations are pure CSS (`backdrop-filter`, keyframes) — fully portable.
  Gate animations behind `@media (prefers-reduced-motion)` (already done).
- The browser-bar + sidebar chrome is a **prototype framing device** — do NOT ship it in
  the real theme (it mimics Safari). The real site is the content inside it.

## Tweaks → theme settings
The Tweaks panel (glass intensity, radius, accent, glow) maps to `settings_schema.json`
range/color settings writing the same `--sb-*` variables on `:root`.
