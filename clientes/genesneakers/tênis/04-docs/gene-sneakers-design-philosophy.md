# Signal Origins
### A Design Philosophy — Gene Sneakers

**Versão:** 2.0 (expandida) · **Última atualização:** 19 abril 2026

---

## I. O Manifesto

**The movement:** Visual language born from the premise that origin is not a secret — it is the argument. Signal Origins operates at the intersection of industrial precision and editorial authority, where what something *is made of* becomes the most powerful thing it can communicate. This is not minimalism for aesthetic comfort. It is reduction as conviction.

**Form and space:** Compositions are built on tension between mass and void. Primary typographic elements occupy space with the confidence of structural engineering — not decorative, but load-bearing. Every form earns its place through weight and function. Negative space is not emptiness; it is the silence before a statement, the pause that gives the word its meaning. Spatial relationships are meticulously calibrated, the result of painstaking refinement where a single pixel of margin determines whether the composition commands or merely suggests.

**Color and material:** A palette of three: near-black as the field, bone-white as the messenger, and a single electric signal tone — a charge that cuts through. The signal color exists not as decoration but as frequency. It marks the essential. Used sparingly, it carries the weight of a redline annotation on a technical drawing — the expert's mark, placed with mastery and purpose. The palette is the product of deep expertise in chromatic restraint.

**Scale and rhythm:** The contrast between scales is absolute. What is meant to be read first is impossibly large. What supports it is almost imperceptibly small. There is no middle ground. This binary rhythm — monumental to whisper — creates the unmistakable cadence of a brand that knows what it is and does not over-explain. Typographic size is not emphasis; it is architecture.

**Visual hierarchy:** Information flows in one direction — from declaration to detail. The eye lands first on the non-negotiable, then descends, at its own pace, to the precise. Technical annotations in monospaced type function as scientific notation: small, clinical, anchored in the bottom register of the composition. Nothing shouts below the primary statement.

---

## II. Paleta Base — Tokens Invariantes

| Token | Hex | Papel |
|---|---|---|
| **CARBON** | `#0D0D0D` | Campo escuro, texto em fundos claros — âncora estrutural |
| **BONE** | `#F2EFE9` | Campo claro, texto em fundos escuros — mensageiro |
| **ACID** | `#CBF23D` | Frequência — signal tone. Invariante em TODOS os ambientes |
| **SLATE** | `#A6A4A1` | Metadados, subtexto, anotação técnica |
| **PRESS** | `#8CA62D` | ACID dimmed para contextos claros (hover, CTA em Daylight) |

---

## III. Color Environments v1.1 (aprovado 19/04/2026)

Signal Origins não é um clima único — é um sistema de **5 ambientes cromáticos** com regras duras. Cada ambiente tem função narrativa específica. Misturar ambientes dentro do mesmo frame é proibido.

### ENV-01 · Carbon *(default, 44% do feed)*
Campo `#0D0D0D` · Ink BONE · Accent ACID
**Uso:** drop, lançamento, hero escuro, performance, manifesto de noite. Base default da marca.

### ENV-02 · Daylight *(22%)*
Campo BONE · Ink CARBON · Accent PRESS (acid dimmed)
**Uso:** editorial, comparativo de preço, testimonial, institucional, "por que Gene".
**Não usar:** drop, FOMO, hero de LP, performance.

### ENV-03 · Bloom — TEXT-FIRST *(20% do feed, como accent)*
Tokens: `--bloom-field:#F5DEE0` · `--bloom-mid:#E8B5BD` · `--bloom-deep:#B97580` · `--peach:#FBDFC5` · `--bloom-ink:#2A1418`

**Regra principal:** rosa é VOZ, não fundo. Entra como palavra-chave de headline, pill de comunidade, filete, accent tipográfico sobre Carbon ou Daylight.

**Exceção (campo):** glass card translúcido sobre fotografia forte (ref. human.academy). 1x por mês, máximo.

**Nunca:** post chapado rosa sem fotografia; bloom de campo em contexto técnico/preço.

**Uso (texto):** cultura, creator feature, comunidade, afeto, milestone, "@handle".
**Uso (campo/exceção):** story com foto de tênis + glass, Live "AO VIVO".

### ENV-04 · Chrome *(11%)*
Tokens: `--chrome-deep:#141D26` · `--chrome-mid:#2A3845` · `--chrome-light:#8FA5B5` · `--chrome-ink:#E8ECF0`
Campo: gradiente chrome-deep → chrome-mid. Ink: chrome-ink. Accent: ACID.
**Uso:** origem, rota de importação, spec técnica, bastidor curatorial, "como chega", status de pedido.
**Não usar:** drop, creator feature (gela a pessoa), lifestyle, FOMO.

### ENV-05 · Acid Hero — RARO *(≤11%, 1 a cada 15 posts)*
Campo ACID · Ink CARBON · Accent-dark PRESS
**Regra dura:** raridade = valor. 1 post a cada 15.
**Uso:** drop hero (1 por lançamento), countdown 24h/48h, manifesto pilar (1x/trimestre), hero de LP.
**Nunca:** post comum, 2x seguidos, texto longo, comparativo.

### Regras gerais
1. **ACID é invariante** — presente em todos os ambientes como frequência
2. **Big Shoulders + IBM Plex Mono** — tipografia não muda em nenhum ambiente
3. **Um ambiente por peça** — nunca misturar dois climas no mesmo frame
4. **Feed tem ritmo** — a cada 5 posts, pelo menos 3 ambientes diferentes

### Transições permitidas / proibidas
- **OK:** Carbon → Carbon + Bloom text · Daylight → Daylight + Bloom text · Carbon → Chrome · Daylight → Acid (rising action) · Carbon → Bloom glass
- **EVITAR:** Bloom glass → Chrome (temperatura brusca) · Bloom glass → Acid (dois campos saturados)
- **NUNCA:** Bloom glass 2x seguido · Acid → Acid · dois ambientes dentro do mesmo frame

---

## IV. Tipografia

- **Big Shoulders Display Bold** — títulos, headlines, wordmarks (SEMPRE uppercase)
- **Big Shoulders Display Regular** — subtítulos, editorial, apoio
- **IBM Plex Mono** — preços, SKUs, labels, badges, copy técnico, anotações

**Regra de escala binária:** monumental → whisper. Sem meio-termo. O título é impossivelmente grande; o dado técnico é quase imperceptível. Tamanho tipográfico é arquitetura, não ênfase.

---

## V. Wave Family — 7 Variantes

A onda (wave) é o elemento gráfico estrutural da marca. Não decora — marca território. Cada variante tem função:

| # | Variante | Função | Quando usar |
|---|---|---|---|
| 1 | **Wave Hero** | Divisor monumental de seção | Hero de LP, abertura de drop, manifesto |
| 2 | **Wave Filet** | Filete fino, linha de acento | Separador editorial, rodapé de card |
| 3 | **Wave Pulse** | Ritmo repetido horizontal | Countdown, indicador de status, ticker |
| 4 | **Wave Shield** | Recorte de imagem em onda | Crop de foto de produto, máscara editorial |
| 5 | **Wave Frame** | Contorno de peça | Moldura de badge, selo "encomenda aberta" |
| 6 | **Wave Signature** | Assinatura sutil | Canto de card, marca d'água de peça |
| 7 | **Wave Bloom** | Onda em rosa sobre foto | Exclusivo Bloom glass, creator feature |

Referência visual completa: `/tênis/gene-design-system-expanded.html`

---

## VI. Iconografia Secundária — 8 Badges

Iconografia funcional, não decorativa. Cada badge carrega informação que o texto sozinho não carregaria bem:

1. **Origin** — pegada/selo de origem (marcar país/fábrica quando relevante)
2. **Transit** — ícone de rota/importação (em stories de bastidor)
3. **Drop** — marcador de lançamento (com data em IBM Plex Mono)
4. **Order** — status de encomenda (aberta, em trânsito, entregue)
5. **Cult** — cultura/cena (post de curadoria, história de modelo)
6. **Edit** — editorial/opinião (take forte, POV)
7. **Community** — creator feature (único badge que pode aparecer sobre Bloom)
8. **Signal** — destaque curatorial, "não existe por acaso"

Badges usam IBM Plex Mono em caixa alta, compactos, em ACID sobre Carbon ou em CARBON sobre Daylight. Nunca em Bloom de campo.

---

## VII. Patterns — 6 Padrões Estruturais

Padrões são matrizes de composição — não texturas. Dão ritmo ao feed sem virar ruído:

1. **Grid Technical** — grade fina tipo engenharia, sobre Carbon. Para spec, comparativo, tabela.
2. **Stripe Signal** — listra ACID diagonal fina sobre Carbon. Para drop, aviso, pulse.
3. **Dot Matrix** — malha de pontos slate, sobre Daylight. Para editorial institucional.
4. **Chrome Gradient** — degradê chrome-deep → chrome-mid. Para origem, logística.
5. **Bloom Wash** — gradiente rosa sutil como camada de luz sobre foto. Exclusivo Bloom glass.
6. **Trace Path** — linha vetorial fina simulando rota de importação. Para storytelling de logística.

---

## VIII. Motion — 3 Regras

Movimento é parte da voz. Gene não é estática — mas também não é barulhenta.

1. **Reveal Binary** — transições em 2 tempos duros (cut-in precisa + hold). Sem easing fofo. Sem fade demorado. Pensar em guilhotina, não em dissolve.
2. **Typographic Push** — tipografia entra empurrando, não aparecendo. Big Shoulders desliza do limite do frame pra dentro. IBM Plex Mono pisca (on/off) — nunca fade.
3. **Signal Pulse** — ACID pulsa em elementos críticos (countdown, CTA, "AO VIVO"). Frequência constante, nunca suave. Pulso é frequência, não decoração.

Proibido: motion blur longo, bounce elástico, partículas flutuando, parallax decorativo.

---

## IX. Usage Matrix — Quando Usar O Quê

| Situação | Ambiente | Wave | Badge | Pattern | Motion |
|---|---|---|---|---|---|
| Drop hero | Acid *(raro)* ou Carbon | Hero | Drop | Stripe Signal | Reveal Binary + Signal Pulse |
| Editorial/comparativo | Daylight | Filet | Edit | Dot Matrix | Typographic Push |
| Creator feature | Carbon + Bloom text *(ou Bloom glass 1x/mês)* | Bloom | Community | Bloom Wash *(só no glass)* | Typographic Push |
| Bastidor/logística | Chrome | Frame | Transit / Origin | Chrome Gradient + Trace Path | Reveal Binary |
| Spec técnica | Carbon | Filet | Signal | Grid Technical | — |
| Countdown | Carbon *(ou Acid no T-0)* | Pulse | Drop | Stripe Signal | Signal Pulse |
| Manifesto | Carbon ou Acid *(1x/trimestre)* | Hero | Edit | — | Reveal Binary |
| Status de pedido | Chrome | Frame | Order | Trace Path | — |

---

## X. O Que Não Fazer

- Produto em fundo branco estéril (é linguagem de marketplace — Droper, Innovare já ocupam)
- Rosa chapado de campo sem foto
- Dois ambientes no mesmo frame
- ACID como decoração (ACID é frequência)
- Motion decorativo (bounce, parallax fofo)
- Badge em Bloom de campo (exceto Community)
- Chrome para lifestyle ou creator
- Acid em post comum
- "100% original garantido" como copy (defensivo)
- Linguagem técnica sobre Bloom

---

## XI. Referências de Implementação

- **Manual visual:** `/tênis/gene-sneakers-brand-manual.html` (v4)
- **Design system expandido:** `/tênis/gene-design-system-expanded.html` (Wave Family, iconografia, patterns, motion)
- **Color environments:** `/tênis/gene-color-environments.html` (v1.1)
- **Identidade SVG:** `/tênis/identidade-gene.svg`
- **Figma:** https://www.figma.com/design/YHOF3HW9tzbKA0c7XV2Z2r/Id-visual
- **Brand voice:** `/tênis/.claude/brand-voice-guidelines.md` (v3)
