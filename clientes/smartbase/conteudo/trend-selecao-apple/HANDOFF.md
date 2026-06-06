# HANDOFF — Carrossel "Seleção Apple" (Smartbase)

> Documento de continuidade. Cole/abra isso num chat novo do Claude Code dentro do workspace `ratos de ia` pra retomar o trabalho exatamente de onde parou. Tudo aqui reflete o **estado real dos arquivos**, não o histórico de conversa.

---

## 1. O que é

Carrossel de Instagram pra **Smartbase** participando da trend "jogador da Seleção = produto X" (no original era procedimento estético). Versão Smartbase: **cada craque da Seleção = um produto Apple**, conectando a personalidade do jogador ao produto.

**Gancho de timing:** Copa do Mundo 2026 (EUA/México/Canadá), começa 11/06, estreia do Brasil 13/06 vs Marrocos. A trend deve sair na semana de esquenta da Copa. Postar logo.

**Elenco usado:** os 4 do carrossel original — Neymar, Alisson, Marquinhos, Casemiro (escolha da Letícia, não trocar).

---

## 2. Mapa jogador → produto + copy final (TRAVADA)

Pilar de conteúdo: **DECIFRA APPLE** (cor azul `#3E82F7`). Tudo em caixa baixa.

**Capa** (foto dos 4 numa Apple Store):
- Título: "e se a seleção fosse da apple?"
- Sub: "a gente escalou a seleção com a linha apple." / "arrasta pra ver quem é quem →"

**Neymar = iphone 17 pro max**
o mais comentado de todos. às vezes nem é o que mais joga, mas tem gente que quer só ele. topo de linha, e ele sabe.

**Alisson = seminovo garantido**
o goleiro evita o gol antes dele acontecer. o seminovo testado da smartbase faz igual: bateria, originalidade e garantia conferidas antes de chegar em você.

**Marquinhos = macbook**
não aparece tanto quanto os atacantes, mas é ele que dá sustentação pra estrutura inteira. o trabalho pesado roda nele, sem alarde.

**Casemiro = apple watch**
conecta o time todo e não busca holofote. faz o trabalho que sustenta todo mundo, ali no pulso, discreto e essencial.

---

## 3. Estado dos arquivos

Pasta base: `clientes/smartbase/conteudo/trend-selecao-apple/`

| Arquivo | O que é |
|---|---|
| `out/v2/{neymar,alisson,casemiro,marquinhos,capa}.png` | **Imagens finais aprovadas** dos 5 slides (alta res, geradas por IA) |
| `slides/img/*.jpg` | Mesmas imagens normalizadas em 1080×1350 (cover-fit) — é o que entra no Figma |
| `slides/0X_*.svg` | SVGs montados dos 5 slides (referência de layout, não é o entregável final) |
| `in-*.json` | Inputs de geração de imagem (prompt + refs) usados no `infsh` |
| `refs/` | Fotos de referência dos jogadores (Wikimedia Commons). `marquinhos_face.jpg` = recorte de rosto usado por falta de foto boa |
| `build_slides.py` | Gera os SVGs a partir das imagens + copy |
| `render.mjs` | Render SVG→PNG via Playwright (NÃO foi usado no fim; a Letícia prefere editar no Figma) |

### Versão correta do Neymar (ATENÇÃO)
`out/v2/neymar.png` = **v6**: pose v1 (sentado no banco), rosto fiel, **fundo azul CLARO** padronizado com os outros, **iPhone 17 Pro Max TODO laranja** (corpo + barra de câmera na mesma cor laranja, só as lentes escuras — igual ao modelo real cosmic orange).
Histórico de erros já corrigidos: v2 tinha pose de pé (rejeitada), versões anteriores tinham barra de câmera preta e fundo azul escuro (rejeitadas). Não regredir pra essas.

---

## 4. Figma

- **Arquivo:** "Smartbase - Carrossel Seleção Apple"
- **fileKey:** `eKr8LOkr7ydi3hG48LWPgZ`
- **URL:** https://www.figma.com/design/eKr8LOkr7ydi3hG48LWPgZ
- **Frames (nós):** capa `2:2`, neymar `2:16`, alisson `2:31`, marquinhos `2:46`, casemiro `2:61`
- **Foto do Neymar (nó da imagem):** `2:17` — já atualizada com a v6 (fundo claro + iPhone laranja)
- Cada frame tem camadas editáveis: foto, overlay gradiente, accent bar azul, badge "DECIFRA APPLE", headline (Bricolage), corpo (Inter), footer (wordmark + @smartbase.br)

> Nota de cache: o Figma desktop às vezes segura a imagem antiga. Se a foto do Neymar não atualizar, sair e entrar do arquivo.

---

## 5. Pipeline de geração de imagem

Ferramenta: **CLI `infsh`** (inference.sh), modelo **`google/gemini-3-pro-image-preview`** (NanoBanana Pro) — escolhido por manter fidelidade de rosto a partir de foto de entrada. Firefly foi descartado (bloqueia/descaracteriza pessoa pública).

Comando padrão:
```bash
cd clientes/smartbase/conteudo/trend-selecao-apple
infsh app run google/gemini-3-pro-image-preview --input in-NOME.json --save out-NOME.json
# baixar: a URL sai em out-NOME.json -> output.images[0]
```

Padrão de prompt que funcionou (ver `in-*.json`):
- Sempre passar a foto real do jogador em `images` pra travar o rosto ("preserve his face / identity perfectly, do not change his face")
- Camisa amarela da Seleção, produto Apple esticado pra câmera, fundo azul claro de estúdio Apple, luz de produto, 4:5, espaço pra texto
- **Mix de ângulos** entre os jogadores (a Letícia pediu): pé 3/4, perfil, plongée, sentado lateral
- Pra **trocar só o produto ou só o fundo** mantendo a pose: passar a própria imagem gerada como entrada e instruir "keep everything the same, only change X" (foi assim que troquei o iPhone do Neymar pra laranja e depois o fundo)

Conta inference.sh: logada e **com crédito** (Gemini ~$0,15/imagem). Se acabar: https://app.inference.sh/settings/billing.

---

## 6. Identidade visual aplicada (design-guide Smartbase)

Fonte: `clientes/smartbase/marca/design-guide.md`. Tokens usados:
- Fundo `#07070E` · Accent azul `#3E82F7` · Headline `#F2F2F6` · Corpo `#7A7A96`/`#C7C7D6` · Footer `#9A9AB2`
- Headline: **Bricolage Grotesque** ExtraBold, caixa baixa, última parte (produto) em azul
- Corpo: **Inter** Regular 27px
- Accent bar vertical azul 4px na esquerda · badge "DECIFRA APPLE" (Inter Bold 16px, letter-spacing 2)
- Footer obrigatório: wordmark `smart•base` + `@smartbase.br` à direita
- Foto com overlay gradiente escuro na base pra leitura do texto (padrão "foto de produto com overlay")

> Se o Figma acusar fonte faltando: instalar **Bricolage Grotesque** pelo Google Fonts.

---

## 7. Pendências / próximos passos

1. Conferir os 5 slides no Figma e aprovar (principalmente o Neymar v6 propagado).
2. Exportar PNG final 1080×1350 de cada frame.
3. (Opcional) Salvar este fluxo "jogador → produto Apple" como referência reutilizável da Smartbase pra próximos drops.
4. Capa: hoje usa a foto IA dos 4 na Apple Store. Quando o site da Smartbase entrar no ar, dá pra trocar por print real da home (ideia original da Letícia).

---

## 8. Ambiente necessário no chat novo

Pra retomar 100%, o ambiente precisa de:
- **Conta claude.ai logada** com **Figma conectado** (o MCP do Figma é da conta, não de arquivo de projeto)
- **`infsh` instalado e logado** com crédito (`infsh login`) — pra gerar/ajustar imagens
- Python3 com Pillow (PIL) — usado pra normalizar imagens 1080×1350
- Estar no workspace `ratos de ia` (carrega CLAUDE.md + contexto da Smartbase)

O `.mcp.json` deste projeto cobre só o Playwright (render local). Figma e inference NÃO vêm de arquivo — dependem do login acima.
