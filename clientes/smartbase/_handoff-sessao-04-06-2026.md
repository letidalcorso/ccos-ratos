# Handoff — sessão Smartbase Home v2

**Data:** 04/06/2026
**Status:** sessão encerrada por excesso de contexto e erros recorrentes
**Próxima ação:** abrir nova sessão zerada, retomar a partir desse doc

---

## ARQUITETURA FINAL — v1 do site

### Páginas que EXISTEM na v1:
1. **Home** (com Posicionamento embutido = o que era "Sobre")
2. **Vitrine** (era "Catálogo" — renomeado)
3. **Blog** (index)
4. **Post** (template)
5. **FAQ**
6. **Contato**

### Páginas que NÃO existem na v1:
- ❌ **Sobre dedicada** — virou Posicionamento na Home
- ❌ **Trade-in dedicado** — descontinuado pra escala nacional; só aparece como pergunta na FAQ com CTA WhatsApp

---

## DOCUMENTOS APROVADOS (no workspace)

| Arquivo | O que é | Status |
|---|---|---|
| `copy-site-v2.md` | Copy completa todas as telas | ~90% fechado |
| `arquitetura-informacao-sitemap.md` | AI v2 final | Aprovada (com ressalva: Sobre virou Posicionamento na Home) |
| `briefing-fotos-home-v2.md` | Briefing visual das 9 fotos | Entregue |
| `seo-auditoria-smartbase.md` | Auditoria SEO | Entregue |
| `lancamento-ativos-prontos.md` | Comms lançamento | Entregue |
| `lancamento-site-plano-gtm.md` | Plano GTM | Entregue |

## MEMÓRIAS PERSISTIDAS

Caminho: `~/Library/.../memory/`

- `feedback_copy_site_smartbase.md` — tese V2 atualizada ("tem apple. e tem o apple certo pra você.")
- `feedback_hero_site_v2_aprovado.md` — pattern visual Hero V2 (Vision Pro adaptado)
- `MEMORY.md` — índice geral

---

## FIGMA — frames existentes

**File:** `QKN6E4t9w2XPdATrXzivvN`
**Page:** "site v2 | rebuid" (ID 660:56)

| Frame | Posição (x, y) | Tamanho | Status |
|---|---|---|---|
| Wireframes lo-fi (7 páginas) | y=1100 | varia | Aprovados |
| Hero v1, v2, v3 | y=4400-5500 | 1440×1024 | Rejeitados |
| Hero v4 | (1500, 5500) | 1440×1024 | Produção original da Leti |
| **Home v5** ⭐ | (1500, 6700) | 1440×3700 | **HOME COMPLETA** — 5 seções aprovadas |
| Hero v6 | (1500, 7900) | 1440×1024 | Widget lateral — não usado |
| **Vitrine v1** | (3100, 6700) | 1440×3200 | Construída |
| **FAQ v1** | (6500, 6700) | 1440×2500 | Construída (recém) — ID 744:29 |
| ~~Sobre v1~~ | — | — | DELETADO (criado errado, Sobre virou Posicionamento na Home) |

**Falta criar:** Blog · Post · Contato

---

## COPY APROVADA — resumo navegável

### Header (todas as páginas)
`[logo smartbase] Vitrine · Sobre · Blog · FAQ [quero meu apple →]`

### Footer
- Col 1: logo + "sua apple store particular. novos sob encomenda e seminovos conferidos. caxias do sul · serra gaúcha."
- Col 2: Vitrine · Sobre · Blog · FAQ · Contato
- Col 3: WhatsApp · @smartbase.br · caxias do sul, rs
- Legal: "© 2026 smartbase · caxias do sul, rs"

### Home (5 seções na v5 do Figma)
1. **Hero**: "sua apple store. particular." + "novos e seminovos. pra quem usa apple todo dia." + caxias do sul · serra gaúcha + CTAs (ver vitrine · chamar no whatsapp)
2. **Posicionamento**: "tem apple. e tem o apple certo pra você. / aqui a recomendação vem do uso real, não da ficha técnica."
3. **Diferenciais** (4 cards): 01 loja física em caxias · 02 atendimento humano · 03 primeiro chega. depois paga. · 04 só apple
4. **Faixa editorial**: "o teu apple já tá te esperando." + lookbook (iPhone Pro / Air / Mac / iPad / Watch / AirPods) + CTA "ver tudo na vitrine"
5. **CTA final**: "você já sabe o que quer. / falta só nos chamar." + botão "vou chamar"

### Vitrine
1. **Hero**: "vitrine" + "o teu próximo está aqui." + "a apple inteira. particular tua. lacrada ou seminova. com garantia. e tu só paga quando ela tá na tua mão."
2. **2 portas** (NOVOS apple oficial 12 meses · SEMINOVOS smartbase 3 meses)
3. **Chips de categoria** (sticky): todos · iPhone · Mac · iPad · Watch · AirPods
4. **Card de produto** template: foto + nome + descrição + cor + armazenamento + status + campo livre + preço à vista + "quero esse →"
5. **CTA final**: "não achou o teu? / fala. eu acho. / qualquer apple. se existe no mundo, chega aqui na tua mão."

### Outras telas (copy fechada em `copy-site-v2.md`)
- Blog index + Post template
- FAQ (5 categorias × perguntas)
- Contato

---

## PENDÊNCIAS QUE PRECISAM DE TI

### 1. Decisões estratégicas (sem isso não dá pra fechar)
- **Garantia (2 colunas Novos vs Seminovos)** — onde mora?
  - a) Section nova na Home
  - b) Primeira section da FAQ
  - c) Página dedicada `/garantia`
  - d) Só no WhatsApp (não no site)
- **Loja física (endereço + horário + mapa)** — onde mora?
  - a) Section nova na Home
  - b) Página Contato (já existe na AI)
  - c) Só no Footer

### 2. Conteúdo real (placeholders no doc até receber):
- História do dono (ano início, como começou, marcos)
- Endereço completo
- Horário de funcionamento
- Telefone fixo
- Lat/long pro mapa

### 3. Fotos (9 total — todas no /smartbase/):
- **3 ambient já baixadas** (`_foto-posicionamento.jpg`, `_foto-diferenciais.jpg`, `_foto-cta-final.jpg`) — falta drop manual no Figma
- **6 produtos** — pegar no Apple Newsroom (apple.com/newsroom/product-images) com licença comercial garantida
- Briefing em `briefing-fotos-home-v2.md`

### 4. Design (Figma):
- ⏳ **Blog** index — falta criar
- ⏳ **Post** template — falta criar
- ⏳ **Contato** — falta criar
- ⏳ Possíveis ajustes Home/Vitrine/FAQ baseado em validação tua

---

## ERROS RECORRENTES NESSA SESSÃO (próxima sessão evita)

1. **Interpretar antes de confirmar** — propus 4 alternativas A/B/C/D quando você queria progresso
2. **Esquecer decisões anteriores** — criei página Sobre quando você já tinha decidido virar Posicionamento na Home
3. **Construir antes de aprovação visual** — fazia design antes de checar com você
4. **Iteração infinita** — propus 5 versões quando 1 boa servia
5. **Falhar em foto via API e perder tempo nisso** em vez de pedir drop manual direto

## INSTRUÇÕES PRA PRÓXIMA SESSÃO

**Antes de começar a fazer qualquer coisa, eu (Claude) devo:**

1. Ler este arquivo (`_handoff-sessao-04-06-2026.md`)
2. Ler `copy-site-v2.md` (fonte de verdade da copy)
3. Ler memórias relevantes: `feedback_copy_site_smartbase.md`, `feedback_hero_site_v2_aprovado.md`
4. Abrir Figma e ver Home v5 (703:29), Vitrine v1 (738:29), FAQ v1 (744:29)
5. **PERGUNTAR** quais das 2 decisões pendentes (Garantia + Loja física) tu já decidiu
6. Só depois disso, planejar próximo passo

**Regras de operação pra próxima sessão:**

- Quando a Leti aprovar algo, **executa direto** — não propõe 3 alternativas
- Quando a Leti criticar algo, **arruma rápido** — não diagnostica 5 problemas paralelos
- Quando faltar info real (endereço, etc), **deixa placeholder claro** e segue — não bloqueia a sessão
- Quando algo falhar tecnicamente, **pivota imediato pra drop manual** — não fica horas tentando outra forma técnica

---

## STATUS RESUMIDO

**Fechado:** 70% da copy + Home + Vitrine + FAQ no Figma
**Pendente decisão:** Garantia destino + Loja física destino + Trade-in destino final
**Pendente input:** info real do dono/loja + fotos
**Pendente design:** Blog, Post, Contato

**Tempo estimado pra fechar v1:** 1-2 sessões adicionais se as decisões pendentes vierem de cara.

---

## ATUALIZAÇÃO — sessão tarde 04/06/2026 (refinamentos Home / Vitrine / FAQ)

**Decisões fechadas pela Leti:**
- Garantia (comparação novos 12m × seminovos 3m) → mora na **1ª section da FAQ** ✅ executado
- Loja física (endereço/horário/mapa) → mora na **página Contato** (a construir)
- **Regra do azul:** HERÓIS em branco · headlines de SEÇÃO em azul · UM azul só = **#3E82F7** oficial (cortado o azul-suave `[140,191,242]` que tava errado)
- Voz "fala. eu acho." (Vitrine) → **MANTIDA** de propósito (1ª pessoa, dono falando)

**Executado no Figma (page "site v2 | rebuid", file QKN6E4t9w2XPdATrXzivvN):**
- **VITRINE (738:29):** preço cravado removido dos 3 cards → "sob consulta / no whatsapp →" (mantém funil WhatsApp). MacBook era R$ 11.499 (correto — o "1.499" foi má leitura de export em baixa).
- **FAQ (744:29):** bloco comparativo de garantia (2 colunas, #3E82F7, node 749:29) no topo da section garantia + 1º item colapsado; categorias reordenadas → **garantia · originalidade & procedência · entrega · pagamento · trade-in**. Hero "a gente responde." → branco.
- **HOME (703:29):** removido nó de preço solto/quebrado na faixa (era 726:37). Azul unificado.
- **AZUL:** varredura nas 3 telas — **15 nós** no azul-suave errado → #3E82F7 (headlines de seção, eyebrows, índices 01–04, link whatsapp, eyebrows de produto Vitrine, labels garantia Vitrine).

**Verificado visualmente:** Vitrine (card) ✅ · FAQ (full) ✅. **Home:** edições confirmadas por dados (15 nós retornados), FALTA passada visual — servidor Figma deu timeout/erro de rede no fim. Refazer screenshot do Home (703:29) quando o servidor voltar.

**Imagens:** `briefing-fotos-home-v2.md` já cobre a direção (exige **mín. 1600px**). As 3 ambient "prontas" (`_foto-posicionamento` 280×186, `_foto-diferenciais` 280×93, `_foto-cta-final` 200×133) são **thumbnails → NÃO dropar** (borram, matam o feel premium). Próximo passo: garimpar fotos em alta — Apple Newsroom pros 6 produtos, Unsplash dark pros 3 ambient.

**Telas construídas nessa sessão (estrutura hi-fi, page "site v2 | rebuid"):**
- CONTATO (frame 762:29, x=8100) — hero "onde estamos." + mapa placeholder + endereço/horário (placeholders ⚠️) + CTA "chama no whatsapp." Loja física mora aqui.
- BLOG index (frame 765:29, x=9700) — hero "dicas e novidades / do mundo Apple." + filtros (todos·iPhone·seminovo·garantia·comparativos) + 3 post cards com pautas reais.
- POST template (frame 769:29, x=11300) — cover + breadcrumb + título + meta + corpo (conteúdo-exemplo) + CTA whatsapp + 3 relacionados.

Todas seguem: heróis brancos · azul #3E82F7 · chrome (browser-bar + sidebar) clonado das telas existentes · slots de foto VAZIOS (pro tratamento de imagem em massa).

**Bug aprendido:** `text.resize()` reseta `textAutoResize` pra NONE → setar autoResize="HEIGHT" DEPOIS do resize. Causou overlap no corpo do Post, já corrigido.

**Pendente input real:** Contato (endereço/horário/telefone/lat-long ⚠️) · Blog/Post (conteúdo + covers reais) · TODAS (fotos hi-res — Apple Newsroom + Unsplash dark, mín 1600px).

**v1 do site agora tem o set completo:** Home · Vitrine · FAQ · Contato · Blog · Post (Sobre virou Posicionamento na Home). Falta: tratamento de imagem em massa + dados reais + port pro Shopify.
