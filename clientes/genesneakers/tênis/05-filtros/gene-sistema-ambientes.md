# GENE · Sistema de Ambientes v1.0

Os **5 ambientes** da Gene são cinco temperaturas emocionais da marca. Cada ambiente = um filtro próprio. Usar em cadência traz o feed vivo — usar aleatório mata o sistema.

---

## OS 5 AMBIENTES — O QUE CADA UM FAZ

| Ambiente | Temperatura | Função narrativa | Peso no feed |
|---|---|---|---|
| **Daylight** | Warm editorial | Produto com vida · lifestyle · still com ar | ~35% |
| **Carbon** | Frio denso | Arquivo · ORIGEM · hero noturno · autoridade | ~25% |
| **Bloom** | Rosé emoção | Intimidade · detalhe humano · textura | ~15% |
| **Chrome** | Tech frio | Still técnico · produto isolado · spec | ~15% |
| **Acid** | Statement vivo | Hero · drop reveal · ataque visual | ~10% |

**Regra de rotação:** nunca dois posts seguidos no mesmo ambiente. Nunca três Acid no mesmo mês.

---

## QUANDO USAR CADA UM — CHEAT SHEET

### 🟡 DAYLIGHT
**Use quando:** foto de pessoa usando o tênis, rua, café, movimento do dia, lifestyle sem pose.
**Não use quando:** o conteúdo é referência histórica, peça técnica ou hero noturno.
**Exemplo:** Post 01 "O SEU PRÓXIMO." — AF1 branco com luz natural de janela.

### ⚫ CARBON
**Use quando:** série ORIGEM, modelo arquivado, hero noturno, anúncio denso, autoridade técnica.
**Não use quando:** o post é de lançamento vibrante ou lifestyle solar.
**Exemplo:** Post 02 "ORIGEM — AIR FORCE 1" — AF1 em luz dramática sobre superfície escura.

### 🌸 BLOOM
**Use quando:** detalhe emocional (sola descansando, laço amarrado, mão tocando), testimonial de cliente, behind-the-scenes suave.
**Não use quando:** o post precisa de urgência, autoridade ou statement.
**Exemplo:** close da costura de um NB 550 com luz de fim de tarde filtrada.

### 🔵 CHROME
**Use quando:** spec sheet, still-life técnico, produto isolado no estúdio, comparação de modelos, material educativo.
**Não use quando:** o post é humano ou emocional.
**Exemplo:** vista 3/4 do Dunk em cyclorama cinza — foco em construção.

### 🟢 ACID
**Use quando:** drop reveal, chamada agressiva de lançamento, hero de campanha, statement visual puro (fundo Acid sólido).
**Não use quando:** quase sempre. Acid é exceção, não regra.
**Exemplo:** anúncio "ESTILO NOS PÉS." em tipografia gigante sobre fundo Acid.

---

## ARQUIVOS DE CADA AMBIENTE

Para cada ambiente você tem 3 arquivos:

| Arquivo | Para quê |
|---|---|
| `gene-{ambiente}.xmp` | Preset Lightroom (foto) |
| `gene-{ambiente}.cube` | LUT 3D universal (vídeo: CapCut/Premiere/DaVinci/FCP) |
| `gene-{ambiente}-overlay-kit.svg` | Kit de overlay pro Figma |

**Lista completa:**

### Daylight
- `gene-daylight.xmp`
- `gene-daylight.cube`
- `gene-daylight-overlay-kit.svg`

### Carbon
- `gene-carbon.xmp`
- `gene-carbon.cube`
- `gene-carbon-overlay-kit.svg`

### Bloom
- `gene-bloom.xmp`
- `gene-bloom.cube`
- `gene-bloom-overlay-kit.svg`

### Chrome
- `gene-chrome.xmp`
- `gene-chrome.cube`
- `gene-chrome-overlay-kit.svg`

### Acid
- `gene-acid.xmp`
- `gene-acid.cube`
- `gene-acid-overlay-kit.svg`

**Comum a todos:** `gene-grain-texture.png` (seamless 512×512)

---

## VALORES TÉCNICOS — RESUMO

| Parâmetro | Daylight | Carbon | Bloom | Chrome | Acid |
|---|---|---|---|---|---|
| Temperature | +8 | −5 | +3 | **−15** | +2 |
| Tint | +3 | −2 | **+8** | −5 | −8 |
| Exposure | +0.15 | **−0.30** | +0.30 | 0 | +0.20 |
| Contrast | −10 | **+20** | −15 | +15 | **+20** |
| Highlights | −25 | **−60** | −20 | −10 | −5 |
| Shadows | +15 | −25 | **+25** | +10 | +5 |
| Clarity | 0 | +15 | −8 | **+25** | +10 |
| Vibrance | −5 | −10 | +8 | −15 | **+15** |
| Saturation | −12 | −20 | −5 | **−30** | **+15** |
| Grain | 20 | **35** | 15 | 8 | 10 |
| Vignette | −8 | **−25** | −5 | −10 | 0 |

**Leitura rápida do sistema:** Carbon e Acid são os extremos (denso/vivo). Daylight é o centro warm. Bloom é o desvio emocional. Chrome é o desvio frio.

---

## FEED ROTATION — EXEMPLO DE 10 POSTS

Sequência tipo:

```
1. DAYLIGHT  → lifestyle abertura
2. CARBON    → ORIGEM #01 (AF1)
3. DAYLIGHT  → produto com vida
4. BLOOM     → detalhe emocional
5. DAYLIGHT  → pessoa + tênis
6. CHROME    → spec técnico
7. DAYLIGHT  → lifestyle
8. CARBON    → ORIGEM #02 (NB 550)
9. ACID      → drop reveal
10. DAYLIGHT → pós-drop retorno
```

**Métrica de feed saudável:** abrir o perfil no celular e identificar os 5 ambientes sem esforço em 3 segundos.

---

## COMO APLICAR

- **Lightroom** → importar `.xmp`
- **CapCut / Premiere / DaVinci / FCP** → aplicar `.cube` como LUT
- **Figma** → importar `.svg` do overlay kit correspondente (ver `gene-daylight-figma.md` — mesmo processo pros outros 4)
- **VSCO / Snapseed** → valores manuais em `gene-preset-daylight.md` (outros ambientes: adaptar pelos valores da tabela acima)
- **Foto direta no celular** → exporta em alta, aplica no Lightroom Mobile com o preset, reposta

Passo a passo completo: `COMO-APLICAR.md`

---

## QUAL PRESET PRA QUAL POST — DECISÃO EM 10 SEGUNDOS

Responda 3 perguntas:

**1. Tem pessoa na foto?**
Sim → **Daylight** ou **Bloom**
Não → pula pra 2

**2. É produto isolado ou arquivo histórico?**
Arquivo / ORIGEM / hero noturno → **Carbon**
Produto isolado técnico → **Chrome**
Drop / hero vivo → **Acid**

**3. A foto de pessoa é emocional ou lifestyle?**
Lifestyle (movimento, rua, casual) → **Daylight**
Emocional (close, textura, intimidade) → **Bloom**

Se ainda ficar em dúvida: **Daylight**. É o ambiente default da marca.

---

## REGRAS DE OURO

1. **Nunca misture ambientes no mesmo post.** Um post = um filtro.
2. **Carousel pode ter 2 ambientes** se o narrativo pedir (ex: slide 1 Daylight "antes" / slide 5 Carbon "arquivo"). Nunca 3+.
3. **Story pode ser mais livre** que feed — aceita experimentação.
4. **Reels e vídeos** seguem os mesmos ambientes via `.cube`. Consistência foto↔vídeo é o que faz a marca parecer marca.
5. **Quando em dúvida, subexponha no ambiente.** Filtro leve > filtro forte. O look Gene é refinado, não instagramável óbvio.

---

## CHECKLIST VISUAL — A FOTO ESTÁ NO AMBIENTE CERTO?

Depois de aplicar qualquer preset, valide:

- [ ] Em thumbnail 200×200px, reconhece o ambiente sem texto?
- [ ] O ambiente desse post conversa com os 2 posts anteriores (sem repetir)?
- [ ] Tom técnico correto (warm/cold/neutral) pro tipo de conteúdo?
- [ ] Não ficou "filtro Instagram genérico"?
- [ ] A foto ainda parece da Gene (não do preset)?

Se 4 de 5 passaram: publica.
Se 3 ou menos: revisa escolha de ambiente — provavelmente é o ambiente errado pra esse conteúdo, não o preset aplicado com erro.

---

## EXTRA · CRIAR MASTER COMPONENT NO FIGMA

Pra o time ter acesso rápido:

1. Crie um arquivo Figma **"Gene — Filter Library"**.
2. Pra cada ambiente, monte um Frame 1080×1350 com:
   - Image slot (placeholder)
   - Overlay kit do ambiente por cima
   - Grain texture no topo
3. Transforme em Component. Nomeie: `GENE / Daylight`, `GENE / Carbon`, `GENE / Bloom`, `GENE / Chrome`, `GENE / Acid`.
4. Publish no Library.

Qualquer peça do time: arrasta o component → troca a imagem → ambiente aplicado. Fim do "qual filtro eu uso?".

---

## ARQUIVOS DESTA PASTA

**Daylight (foi o primeiro):**
- `gene-daylight.xmp` · `gene-daylight.cube` · `gene-daylight-overlay-kit.svg`
- `gene-preset-daylight.md` — valores técnicos
- `gene-preset-preview.html` — preview antes/depois
- `gene-daylight-figma.md` — guia Figma

**Carbon · Bloom · Chrome · Acid:**
- `gene-carbon.xmp` · `gene-carbon.cube` · `gene-carbon-overlay-kit.svg`
- `gene-bloom.xmp` · `gene-bloom.cube` · `gene-bloom-overlay-kit.svg`
- `gene-chrome.xmp` · `gene-chrome.cube` · `gene-chrome-overlay-kit.svg`
- `gene-acid.xmp` · `gene-acid.cube` · `gene-acid-overlay-kit.svg`

**Comum:**
- `gene-grain-texture.png` — textura seamless 512×512
- `gene-overlay-hud-4x5.svg` — HUD decorativo feed
- `gene-overlay-hud-9x16.svg` — HUD decorativo story
- `gene-ar-filter-spec.md` — spec filtro Instagram AR
- `gene-sistema-filtros.html` — doc visual master (v1 — Daylight only)
- `gene-sistema-ambientes.md` — **este arquivo** (v1 — 5 ambientes)
- `COMO-APLICAR.md` — passo a passo por app

---

*v1.0 · 21.04.2026 · Gene Sneakers*
