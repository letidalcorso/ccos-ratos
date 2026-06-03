# Gene Sneakers · Landing Page de Lançamento

LP one-page do lançamento. Estrutura prescrita pelo Manual de Marca v5.0:
**Acesso → Processo → FAQ.** CTA primário no WhatsApp, captura de email opcional no rodapé.

---

## Modo Preview (validação com cliente · ATIVO)

A LP está com **gate de senha** ativado. Quem abrir o link sem a senha vê só uma tela "Em validação com cliente". Funciona assim:

- **Senha atual:** `GENE2026` (placeholder — TROCAR antes de mandar pro cliente)
- **Como trocar:** abre `index.html`, procura `window.GENE_PREVIEW_PASS = "GENE2026";` e troca o valor
- **Tag `noindex`** já adicionada no `<head>` — Google não vai indexar a URL
- **Como remover quando for pra produção:** apaga 3 blocos do HTML
  1. A tag `<meta name="robots" content="noindex, nofollow">` no head
  2. O bloco `<div class="gate" id="gate">` no body
  3. O `<script>` que define `GENE_PREVIEW_PASS` (logo abaixo do gate)
  4. A classe `is-locked` do `<body class="is-locked">`
  5. O CSS `.gate` (procura por `============= GATE / PREVIEW LOCK`)

**Limitação honesta:** o gate é client-side (JS). Quem inspecionar o source do HTML vê a LP mesmo sem senha. Pra validar com 1 cliente que vai abrir, ler e dar feedback, é mais que suficiente. Se precisa proteção de verdade contra terceiros, vai pra **opção C** abaixo.

---

## Como subir (3 opções, da mais rápida pra mais robusta)

### A · Netlify Drop com gate JS (atual · 2 min)

1. Troca a senha no `index.html` (ver acima)
2. Abre [app.netlify.com/drop](https://app.netlify.com/drop) (não precisa criar conta)
3. Arrasta a **pasta inteira** `lancamento/` no quadrado da tela
4. Em ~10s o Netlify gera uma URL tipo `https://amazing-curie-9e2f.netlify.app`
5. Manda link + senha pro cliente em mensagens separadas

**Pra trocar o nome do site:**
- Cria conta grátis no Netlify (Google ou email)
- Site settings → Change site name → ex: `gene-sneakers-preview.netlify.app`

### B · URL obscura sem proteção (0 min · zero fricção)

Mesmo passo da opção A, mas **sem trocar a senha** — você manda o link com a senha placeholder pro cliente, ou remove o gate e confia que ele não compartilha. URL random do Netlify + `noindex` já garante que ninguém acha pelo Google. Recomendado só se o cliente é confiável.

### C · Cloudflare Pages + Access (15 min · grátis · proteção real)

Pra proteção server-side de verdade (cliente recebe email com código one-time):

1. Cria conta grátis em [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Create a project → Direct Upload** → arrasta a pasta `lancamento/`
3. Site fica no ar em URL tipo `gene-sneakers.pages.dev`
4. Vai em [one.dash.cloudflare.com](https://one.dash.cloudflare.com) (Cloudflare Zero Trust · free tier 50 usuários)
5. **Access → Applications → Add an application → Self-hosted**
6. Application domain: `gene-sneakers.pages.dev` · Path: `/`
7. **Add a policy** → "Allow" → emails iguais ao(s) do cliente
8. Cliente recebe email com código one-time toda vez que abrir
9. Remove o gate JS do HTML (o gate da Cloudflare substitui ele)

Vantagem: **proteção real**, source code não vaza, expira sozinho, pode revogar acesso.

---

## Pra produção (depois de aprovado)

Quando o cliente aprovar e for pra ir ao ar pro público:

1. **Remover gate** do HTML (passo a passo acima)
2. **Remover `<meta robots>`** noindex
3. **Configurar Formspree** (próxima seção) pra capturar emails de waitlist
4. **Adicionar pixel Meta + TikTok** se for rodar Ads
5. Re-deploy no Netlify (sobe o arquivo atualizado em cima)

---

## Como subir no ar pra público (depois)

1. Abre [app.netlify.com/drop](https://app.netlify.com/drop) (não precisa criar conta na primeira vez)
2. Arrasta a **pasta inteira** `lancamento/` (com `index.html` dentro) no quadrado da tela
3. Espera ~10 segundos. O Netlify gera uma URL pública tipo `https://random-name-123.netlify.app`
4. Pra trocar o nome do site (ex: `gene-sneakers.netlify.app`):
   - Cria conta grátis no Netlify (Google ou email)
   - Vai em **Site settings → Change site name**

**URL final sugerida:** `gene-sneakers.netlify.app` ou `genesneakers.netlify.app`

---

## Trocar pra domínio próprio (depois)

Quando comprar `genesneakers.com.br`:
1. Netlify → **Domain settings → Add custom domain**
2. Apontar os DNS do registro.br pros nameservers do Netlify
3. SSL é automático (Let's Encrypt, grátis)

---

## Captura de email (Formspree)

A LP tem um campo de email no rodapé pra "avise quando abrir um drop".
**Como ativar (5 minutos · 50 emails/mês grátis):**

1. Cria conta em [formspree.io](https://formspree.io)
2. **New Form** → cola seu email pra receber os leads
3. Copia o **Form ID** (algo como `xnqkvogr`)
4. Abre o `index.html`, procura por `YOUR_FORM_ID` e substitui

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

Se você não fizer isso, o form ainda mostra "Anotado" pra quem submeter — mas os emails não chegam em lugar nenhum. Recomendo configurar antes de divulgar a LP.

---

## Alternativas pra captura de email

- **Mailchimp Free** (até 500 contatos · embed form direto)
- **ConvertKit Free** (até 1k contatos · landing pages próprias)
- **Klaviyo Free** (até 250 contatos · ecossistema D2C completo, recomendado pra Gene)

Quando você crescer e quiser disparar emails de drop, **Klaviyo** é o caminho — ele integra com Shopify/WooCommerce no futuro e tem o melhor playbook de e-commerce.

---

## Tokens da identidade aplicados

- Carbon `#0D0D0D` · Carbon Deep `#080808`
- Bone `#F2EFE9`
- **Acid `#C4FF3C`** (oficial validado 20/04 — não confundir com #CBF23D antigo)
- Press `#8CA62D` · Slate `#A6A4A1`
- Bloom-mid `#E8B5BD` · Bloom-deep `#B97580` (apenas como text accent)
- Chrome-deep `#141D26` → Chrome-mid `#2A3845`
- Tipografia: Big Shoulders Display (Black), Big Shoulders Text (Regular), IBM Plex Mono, IBM Plex Sans Condensed (SemiBold)

---

## Cuidados antes de subir

- [ ] Testar no celular (a LP é mobile-first; abre no Safari/Chrome do iOS e Android)
- [ ] Conferir o link do WhatsApp clicando no CTA — abre no app com mensagem pré-pronta
- [ ] Cadastrar Formspree e trocar o `YOUR_FORM_ID`
- [ ] (Opcional) Adicionar pixel do Meta/TikTok antes de subir Ads
- [ ] (Opcional) Trocar a mensagem pré-pronta do WhatsApp se quiser ajustar tom

---

## O que tem nessa LP

| Seção | Ambiente | Função |
|---|---|---|
| Hero | Acid | Manifesto pilar + CTA WhatsApp |
| 01 · Sobre | Carbon | Definição da marca + 3 pilares (acesso/preço/curadoria) |
| 02 · Comparativo | Daylight | Argumento racional + price frame demo |
| 03 · Como funciona | Chrome | 3 passos (pede → confirma → recebe) |
| 04 · FAQ | Carbon | 6 perguntas resolvendo objeções (prazo, autenticidade, processo) |
| CTA final | Acid | "QUAL É O SEU?" + WhatsApp + form de email |
| Footer | Carbon Deep | GENE wordmark + canais + origem Caxias |

---

## Próximos passos sugeridos

1. **Subir no Netlify** (2 min)
2. **Configurar Formspree** (5 min)
3. **Adicionar pixel Meta + TikTok** antes da primeira campanha de Ads
4. **Pegar o link curto** (bit.ly ou link.gene-sneakers.netlify.app) pra colocar no bio do Instagram
5. Depois do primeiro mês, **avaliar conversão por origem**: quanto do tráfego do IG chega na LP, quanto vira lead no WhatsApp, quanto fecha encomenda

---

`GENE.CODE · LP v1 · 25.04.2026`
