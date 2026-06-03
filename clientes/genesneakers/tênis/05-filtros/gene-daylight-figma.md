# GENE · Daylight no Figma

O Figma não importa `.xmp` (Lightroom) nem `.cube` (LUT) nativamente. Mas tem 3 caminhos pra aplicar o filtro Gene Daylight direto lá. Use o que encaixar no seu fluxo.

---

## OPÇÃO 1 · Image Adjustments nativos (o mais rápido)

**Funciona pra:** qualquer imagem importada no Figma, sem plugin, sem overlay.
**Precisão:** 85% do resultado do Lightroom. O Figma não tem HSL por cor, então algumas correções ficam de fora — mas o "look" geral pega.

### Passo a passo

**1.** Selecione a imagem no Figma.
**2.** No painel direito, em **Fill**, clique na miniatura da imagem.
**3.** Na janela que abre, selecione a aba **Adjustments** (ícone de sliders).
**4.** Aplique exatamente estes valores:

| Slider | Valor |
|---|---|
| Exposure | **+15** |
| Contrast | **−10** |
| Saturation | **−12** |
| Temperature | **+8** |
| Tint | **+3** |
| Highlights | **−25** |
| Shadows | **+15** |

**5.** Feche. Pronto.

### Bonus: salvar como Style

Depois de ajustar uma imagem:
- **Cmd/Ctrl + Option + T** não funciona pra image adjustments (infelizmente).
- Workaround: cria um **Component** de uma imagem-máster com esses ajustes e usa **Swap Instance** pra trocar a foto mantendo os adjustments.

---

## OPÇÃO 2 · Overlay Kit (precisão editorial)

**Funciona pra:** quando você quer o grão + sepia + vinheta que o Image Adjustments não faz.
**Precisão:** 95% do resultado Lightroom.
**Arquivos necessários:** `gene-daylight-overlay-kit.svg` + `gene-grain-texture.png` (ambos nesta pasta)

### Passo a passo

**1.** No Figma, **File → Import...** → selecione `gene-daylight-overlay-kit.svg`.
**2.** O SVG vira um grupo com 4 retângulos empilhados. Delete o grupo chamado `GUIDE-REMOVER-DEPOIS`.
**3.** Posicione o grupo **exatamente por cima da sua foto** (mesmo tamanho, mesma posição).
**4.** Agrupe foto + overlay num frame único (Cmd/Ctrl + Alt + G).
**5.** Agora configure o **blend mode de cada retângulo** (Figma não preserva blend mode de SVG — setar manual):

| Layer (nome do grupo) | Blend Mode | Opacity |
|---|---|---|
| `shadow-lift-softlight` | **Soft Light** | 70% |
| `warm-wash-overlay` | **Overlay** | 45% |
| `sepia-midtones-multiply` | **Multiply** | 25% |
| `vignette-multiply` | **Multiply** | 50% |

**Como mudar blend mode no Figma:** selecione o layer → painel direito → ícone `◐` (Pass through) → escolha o blend mode da lista.

**6.** Pro grão:
   - Arraste `gene-grain-texture.png` pra dentro do frame
   - Posicione por cima de todos os overlays
   - Blend mode: **Overlay**
   - Opacity: **25%**
   - Se a foto for maior que 512px, escale a textura ou use padrão: selecione → **Image fill** → **Tile**

**7.** Pronto. Pra reaproveitar em outras fotos: transforma o frame em **Component** e usa como template.

### Por que os blend modes são esses

- **Shadow lift (Soft Light 70%)** — levanta sombras sem achatar o preto
- **Warm wash (Overlay 45%)** — puxa tudo pro warm sem chapar
- **Sepia mids (Multiply 25%)** — adiciona o tom editorial nas áreas médias
- **Vignette (Multiply 50%)** — escurece bordas sutil (−8 no Lightroom)
- **Grain (Overlay 25%)** — textura filme (grain 20 no Lightroom)

---

## OPÇÃO 3 · Plugin LUT Filter (aplicar o .cube direto)

**Funciona pra:** quando você quer 100% do resultado Lightroom, aplicado de forma automatizada.
**Plugin recomendado:** **LUTs** (Figma Community) ou **Image Tracer LUT**

### Passo a passo

**1.** Vá em **Plugins → Find Plugins** (ou Cmd/Ctrl + /) → busque por **"LUT"**.
**2.** Instale um dos plugins de aplicação de LUT (o mais popular é chamado apenas "LUTs").
**3.** Selecione sua imagem.
**4.** **Plugins → LUTs → Import LUT** → selecione `gene-daylight.cube`.
**5.** O plugin aplica a transformação e rasteriza como nova camada.

**⚠️ Limite:** plugins de LUT no Figma geralmente rasterizam a imagem (não ficam vivos). Pra edição não-destrutiva, use Opção 2 (Overlay Kit).

---

## QUAL ESCOLHER?

| Situação | Opção |
|---|---|
| Mockup rápido, foto única | **Opção 1** (Image Adjustments) |
| Post final pra feed, quer grão + sepia | **Opção 2** (Overlay Kit) |
| Tem 30 fotos pra tratar igual | **Opção 3** (Plugin LUT) |
| Vai aplicar em vídeo depois | Pula o Figma — trata no CapCut com `.cube` |

---

## CRIAR UM COMPONENT "GENE DAYLIGHT" NO SEU DESIGN SYSTEM

Pra reusar em todo projeto:

**1.** Crie um **Frame** 1080×1350 (ou seu tamanho padrão).
**2.** Dentro do frame, coloque:
   - Uma **image slot** (imagem placeholder com os Image Adjustments da Opção 1)
   - O **overlay kit** da Opção 2 por cima, com os blend modes configurados
   - A **grain texture** no topo
**3.** Agrupe tudo → **Create Component** → nome: `GENE / Daylight`.
**4.** Publish no seu library file da Gene.

Agora qualquer imagem do time só precisa ser arrastada pro slot — o filtro já vem aplicado.

---

## TROUBLESHOOTING

**"O blend mode não aparece na lista"**
→ Selecione o layer **dentro** do grupo, não o grupo inteiro. Grupos têm blend mode "Pass through" por padrão.

**"A foto ficou laranja demais"**
→ Reduza opacity do `warm-wash-overlay` de 45% pra 30%.

**"Não vejo o grão"**
→ Aumente opacity da `gene-grain-texture.png` de 25% pra 40%. Se ainda não vê, aumente o size da imagem (ela pode estar muito pequena na escala).

**"A foto perdeu nitidez"**
→ Isso é normal — o Image Adjustments do Figma comprime textura. Pra foto hero, use Opção 3 (LUT) ou trate no Lightroom e importa tratada.

**"Quero que o filtro fique na foto, não como overlay"**
→ Selecione tudo → **Export** como PNG → reimporta. A partir dali a imagem é "queimada" com o filtro.

---

## ARQUIVOS DESTA OPÇÃO

- `gene-daylight-figma.md` — este guia
- `gene-daylight-overlay-kit.svg` — kit de overlay pra Figma (Opção 2)
- `gene-grain-texture.png` — textura de grão 512×512 seamless

---

*v1.0 · 21.04.2026 · Gene Sneakers*
