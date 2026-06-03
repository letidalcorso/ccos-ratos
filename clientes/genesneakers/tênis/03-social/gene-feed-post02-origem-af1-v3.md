# POST 02 · ORIGEM #01 — AIR FORCE 1 · v3.0

**Data de publicação:** 22/04/2026
**Editoria:** Série ORIGEM #01 · Pilar 1 (Produto com Vida) · Ambiente Carbon
**Formato:** Carrossel 3 slides feed (4:5) + 3 stories (9:16)
**Versão:** 3.0 (rework do estático único v2.1 em carrossel 3 slides)

---

## ARQUIVOS ENTREGUES

### Feed 4:5 (1080×1350)
- `gene-feed-post02-origem-af1-v3-slide01.svg` — Hero (imagem + 3 tiers)
- `gene-feed-post02-origem-af1-v3-slide02.svg` — Contexto (The Three Amigos + ficha + prosa)
- `gene-feed-post02-origem-af1-v3-slide03.svg` — Moral + Gene (hero + em dash + Acid)

### Story 9:16 (1080×1920)
- `gene-feed-post02-origem-af1-v3-story01.svg`
- `gene-feed-post02-origem-af1-v3-story02.svg`
- `gene-feed-post02-origem-af1-v3-story03.svg`

**Próximo passo do designer:**
Inserir foto editorial do AF1 (luz dramática sobre superfície escura) no placeholder IMAGE dos slides/stories 01. O gradiente de fade pro Carbon já está na SVG — a foto precisa ter fundo escuro na parte inferior pra transição natural.

---

## LEGENDA — VERSÃO PRINCIPAL

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

## LEGENDA — VERSÃO CURTA (story)

```
1982. Air Force 1.
A Nike ia tirar de linha em 1984.
Três lojistas de Baltimore salvaram a história.
Gene trouxe. Link na bio.
```

**Sem hashtags.** Hashtag entra só a partir do Post 6.

---

## VALORES APLICADOS NAS SVG (referência pro designer refinar no Figma)

### Slide 1 · Hero
| Elemento | Fonte | Tamanho | Cor | Posição |
|---|---|---|---|---|
| Imagem | — | 0–810px | Placeholder `#1A1A1A` | sangra laterais |
| Ano "1982" | IBM Plex Mono Regular | 22 | SLATE `#A6A4A1` | x=64, y=878 |
| "AIR FORCE 1" | Big Shoulders Bold | 130 | BONE `#F2EFE9` | x=60, y=1010 |
| Origem linha 1 | Big Shoulders Regular | 42 | BONE | x=64, y=1095 |
| Origem linha 2 | Big Shoulders Regular | 42 | BONE | x=64, y=1145 |

> **Sobre tamanhos:** o handoff sugeriu `~96pt` pro hero e `~14pt` pro ano. Escalei pra 130 e 22 pra garantir legibilidade no feed mobile (o canvas é 1080 — pt rende pequeno). Se preferir exatamente o spec, edita direto os atributos `font-size` no SVG.

### Slide 2 · Contexto
| Elemento | Fonte | Tamanho | Cor |
|---|---|---|---|
| "The Three Amigos." | Big Shoulders Bold | 92 | BONE |
| Nomes (3 linhas) | IBM Plex Mono Regular | 30 | BONE |
| Contexto (2 parágrafos) | Big Shoulders Regular | 46 | BONE |
| Leading | — | 1.15 | — |

### Slide 3 · Moral + Gene
| Elemento | Fonte | Tamanho | Cor |
|---|---|---|---|
| Hero (3 linhas) | Big Shoulders Bold | 120 | BONE |
| Divisor em dash `—` | Big Shoulders Regular | 64 | SLATE |
| "Gene trouxe." | Big Shoulders Bold | 72 | ACID `#C4FF3C` |
| Handle @gene.sneakers | IBM Plex Mono Regular | 20 | BONE |

---

## DECISÃO: ACID `#C4FF3C` (não `#CBF23D`)

O handoff v3.0 trouxe o Acid como `#CBF23D`. **Apliquei `#C4FF3C`** (token canônico da marca, conforme logo oficial e sistema de peças). Se quiser padronizar no `#CBF23D`, a troca é uma find-and-replace nos 2 arquivos (slide 3 feed + story 3).

**Recomendação:** manter `#C4FF3C` e atualizar o handoff na próxima revisão — a marca não pode ter dois Acid.

---

## RITMO DO CARROSSEL

| Slide | Função narrativa | Densidade visual |
|---|---|---|
| 01 | Hook + arquivo colecionável | Arejo (imagem + tipografia) |
| 02 | Densidade cultural (quem / onde) | Texto puro · leitura |
| 03 | Moral + remate Gene | Texto puro · monumental |

**Lógica:** quem não desliza pega a história completa no slide 1 (screenshot-ability preservada). Quem desliza ganha profundidade — e é recompensado com "Gene trouxe." no fim.

---

## CONTRASTE COM O POST 01

| | Post 01 "O SEU PRÓXIMO." | Post 02 "ORIGEM — AF1" |
|---|---|---|
| Ambiente | Daylight (Bone) | Carbon |
| Formato | Estático 4:5 | Carrossel 3 slides |
| Tom | Editorial silencioso | Denso técnico cultural |
| Função | Presente · produto com vida | Passado · arquivo que autoriza |
| Remate | Badge ORDER OPEN | "Gene trouxe." em Acid (slide 3) |

Na thumbnail do perfil: dois posts de temperaturas e densidades opostas da mesma marca. Sistema instantâneo.

---

## REGRA CANÔNICA · SÉRIE ORIGEM (a partir deste post)

Toda peça da série ORIGEM segue **3 slides**:

1. **Hero** — ano + nome monumental + 2 linhas de origem (colecionável)
2. **Contexto** — quem / onde / o que aconteceu (densidade cultural)
3. **Moral + Gene** — legado + "Gene trouxe." em Acid

**Cadência:** 1 ORIGEM a cada 10–15 posts. Não é diário — é colecionável.
**Regra de pesquisa:** toda linha verificável (livro, entrevista, arquivo). Fato ruim derruba a série.
**Frase-âncora:** "Gene trouxe." — pode repetir em outros drops, vira vocabulário de 2 palavras.

---

## PRÓXIMAS ORIGEM (template pronto)

| # | Ano | Modelo | Linha slide 1 | Gancho slide 2 |
|---|---|---|---|---|
| 01 | 1982 | AIR FORCE 1 | Nike tirou de linha em 1984. Três lojistas de Baltimore salvaram. | The Three Amigos |
| 02 | 1949 | ONITSUKA TIGER | Kihachiro Onitsuka fundou em Kobe no pós-guerra. Queria reerguer o Japão com esporte. | Pós-guerra japonês |
| 03 | 1950 | ADIDAS SAMBA | Adi Dassler desenhou pra treinar em campo congelado. Virou clássico sem querer. | O campo congelado |
| 04 | 1985 | NIKE DUNK | Feito pra times universitários. Cada faculdade teve sua cor. Skate adotou 10 anos depois. | Be True to Your School |
| 05 | 1989 | NEW BALANCE 550 | Feito pro basquete. Sumiu nos anos 90. Aimé Leon Dore achou em 2020. | O salvamento ALD |
| 06 | 2010 | NEW BALANCE 2002R | Lançado em 2010. Ninguém ligou. Voltou em 2022 com cara de usado de propósito. | Worn-in |
| 07 | 2023 | ASICS GEL-NYC | Frankenstein de dois modelos dos anos 2000. Um tênis que nunca existiu — até existir. | Remix |

**Próxima publicação:** ORIGEM #02 · Onitsuka Tiger · 30/04/2026

---

## EXPORT

- **Feed:** 3 PNGs 1080×1350 + JPGs 85% qualidade
- **Nomenclatura:** `gene_post02_origem01_af1_01.png` · `02.png` · `03.png`
- **Story:** 3 PNGs 1080×1920
- **Thumb do feed:** slide 01 (é o que aparece na grade)
- **Ordem de postagem:** carrossel horizontal padrão Instagram

---

## CHECKLIST FINAL

### Global
- [x] 3 slides 4:5 (1080×1350) em Carbon
- [x] 3 stories 9:16 (1080×1920) em Carbon
- [x] Handle @gene.sneakers **apenas** no slide 3
- [x] Acid canônico `#C4FF3C` aplicado em "Gene trouxe."

### Slide 1 · Hero
- [x] Zona imagem 0–810px com fade pro Carbon
- [x] TIER 1 · Ano mono Slate
- [x] TIER 2 · "AIR FORCE 1" Bold Bone monumental
- [x] TIER 3 · Origem 2 linhas Regular Bone
- [ ] **Foto editorial do AF1 no placeholder IMAGE** (designer/fotógrafo)

### Slide 2 · Contexto
- [x] Campo Carbon puro
- [x] Título "The Three Amigos." Bold
- [x] Nomes em Mono (ficha)
- [x] Contexto 2 parágrafos Regular
- [x] Respiração em Carbon entre blocos
- [x] ZERO handle, imagem, badge, aspas

### Slide 3 · Moral + Gene
- [x] Campo Carbon puro
- [x] Hero 3 linhas Bold Bone monumental
- [x] Divisor em dash (U+2014) Slate
- [x] "Gene trouxe." Bold ACID
- [x] Handle mono Bone canto inferior direito
- [x] ZERO CTA explícito, preço, hashtag, logo completo

---

## NOTA ESTRATÉGICA

Este post é a **abertura cultural** da Gene.
Post 01 apresenta o catálogo. Post 02 apresenta o porquê existe uma curadoria.

Quem lê os 3 slides entende:
1. Gene trabalha com **história**, não com hype (slide 1)
2. Gene conhece o catálogo em **profundidade cultural** (slide 2)
3. Gene **traz** o que importa, não o que sobrou (slide 3 — "trouxe" como posse)

"Gene trouxe." é **frase-âncora**. Pode e deve ser repetida em outros ORIGEM e drops. Vocabulário de marca em 2 palavras.

---

*Handoff v3.0 · 21.04.2026 · Gene Sneakers*
