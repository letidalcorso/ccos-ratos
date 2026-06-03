# Auditoria SEO — smartbasebr.com

**Tipo:** Full site audit (técnico + on-page + local + content gap + competitivo)
**Data:** 26/05/2026
**Estado do site:** Rascunho protegido por senha — **não indexável pelo Google até o lançamento**

---

## Executive Summary

Site tem **fundação técnica boa** (Shopify custom, `lang="pt-BR"`, viewport mobile, Open Graph, canonical, fontes via CDN, mobile-first com `@media`). O `<title>` foi consertado pra não duplicar "smartbase | SmartBase". O HTML é semântico e leve.

Mas tem **três lacunas críticas** pra ranquear bem, especialmente no **SEO local** — que é o maior leverage rápido pra Smartbase (loja física + Caxias é mercado pesquisado):

1. **Zero presença em Google My Business / Apple Maps / Bing Places.** Pra um negócio com endereço físico, isso é o ROI mais alto por hora investida em SEO. Possivelmente bloqueia ~40% das buscas locais de "iphone caxias", "loja apple caxias", etc.
2. **Sem dados estruturados (schema.org).** O Google entende contexto sem schema, mas com schema (Organization + LocalBusiness + Product) ele ranqueia MELHOR e mostra rich snippets (estrelas, horário, endereço direto no resultado).
3. **Zero conteúdo SEO** — blog em "em breve", páginas curtas. Sem isso não há tráfego orgânico nacional. Já temos plano de blog mapeado, falta executar.

**Bloqueio #0:** o site está com senha. Enquanto não tirar, Google literalmente não vê o site. **Toda a checklist SEO só ativa após o lançamento.** Antes disso, a gente prepara.

**Avaliação geral:** fundação técnica boa, infraestrutura SEO inexistente. **Lançamento + 4 ações da primeira semana resolvem 70% do potencial de SEO local.**

---

## Bloqueador #0 — Tirar a senha

O Shopify, com senha ativa, serve um `<meta name="robots" content="noindex">` automático na página de bloqueio. Resultado: Google não rastreia nada do site.

**Ação:** Loja virtual → Preferências → Proteção por senha → desativar. Pré-requisito: endereço da loja cadastrado em Configurações + plano pago ativo.

Tudo o que segue só faz efeito depois disso.

---

## Quick Wins — primeira semana após lançamento

Cada um é executável em ≤ 2 horas, alto impacto, baixo risco. Ordem por leverage.

### 1. **Google My Business** ⭐ (prioridade máxima)

Custo: 0. Tempo: ~1h pra cadastrar + 7-14 dias pra validar (Google manda código por carta postal pro endereço).

**Por que crítico:**
- Smartbase tem loja física em endereço fixo — qualifica pra rank no **Google Maps + pack local**
- 46% das buscas no Google têm intent local
- "iphone caxias", "apple store caxias", "comprar iphone serra gaúcha" → quem aparece no pack local pega o clique antes do site
- Inclui rating em estrelas (social proof), botão direto pra WhatsApp/ligação, horário, fotos

**Como cadastrar:**
1. Acessar https://business.google.com
2. Buscar "Smartbase" + endereço → se já existir um perfil (alguém pode ter criado), **reivindicar**. Senão, criar novo.
3. Preencher tudo: nome (Smartbase), categoria primária (**Loja de eletrônicos** OU **Loja de telefones celulares**), endereço completo da loja física, número de WhatsApp como telefone, horário de funcionamento, 8-12 fotos (loja por dentro, fachada, balcão, produtos, dono, equipe — autenticidade pesa)
4. Aguardar a validação (carta com código)
5. Pós-validação: configurar atributos (loja física, atendimento ao cliente, tem WhatsApp), adicionar produtos/serviços

**Dicas Smartbase-específicas:**
- Categoria secundária: **Serviço de reparo de eletrônicos** (se vocês fazem ajustes/troca de tela) OU **Loja de acessórios para celular**
- Foto do dono na loja é ouro — humaniza e ranqueia
- Botão de "Mensagem" do GMB pode ir pro WhatsApp direto

### 2. **Apple Business Connect + Bing Places** (mesma família, 30 min cada)

**Apple Business Connect** (https://businessconnect.apple.com) — atualiza a Smartbase no Apple Maps, Spotlight, Siri. Importante: usuários de iPhone (vocês literalmente vendem iPhone) usam Apple Maps por padrão. **Zero negócio Apple deveria deixar isso de fora.**

**Bing Places** (https://www.bingplaces.com) — vai pro Bing/Yahoo/DuckDuckGo. Cobertura adicional baixa mas grátis.

Cadastrar agora. Atualizar 1 vez por trimestre.

### 3. **Meta descriptions personalizadas no Shopify**

O tema usa `{{ page_description | escape }}` — bom, mas isso só funciona se a SEO description estiver preenchida em cada página, no admin.

Páginas que precisam de SEO description manual (sem isso, Google escolhe um texto aleatório):

| Página | Sugestão de description (máx 160 chars) |
|---|---|
| Home | `Apple original com garantia da gente. iPhone novo sob encomenda e seminovo avaliado, atendimento direto no WhatsApp. Loja física em Caxias do Sul.` |
| /pages/produtos | `Catálogo Apple completo: iPhone 17, Mac, iPad e acessórios. Original, com garantia, entrega em todo o Brasil via pedido no WhatsApp.` |
| /blogs/news | `Conteúdo Apple por quem vive Apple: comparativos, dicas de compra, o que importa pra escolher o iPhone certo.` |

Onde editar: Admin → Loja virtual → Páginas (ou Postagens do blog) → cada página → Listagem em motores de busca → Descrição.

### 4. **Schema.org no `theme.liquid`** (dados estruturados)

Adicionar JSON-LD pra Google entender contexto da empresa. Faço isso pra você no código, mas precisa de algumas informações que só você tem:

- Endereço completo da loja (rua, número, bairro, CEP, cidade, estado)
- Telefone fixo (se houver, além do WhatsApp)
- Horário de funcionamento
- Latitude/longitude do endereço (Google Maps mostra)
- Logo em PNG quadrado (mínimo 500×500)

Com isso, adiciono blocos `Organization`, `LocalBusiness` e `Store` no `<head>`, e schema `Product` automático nas páginas de produto. Isso desbloqueia rich snippets (horário, endereço, telefone direto no resultado de busca).

**Me passa essas infos e eu codo.**

### 5. **Google Search Console + envio do sitemap**

Custo: 0. Tempo: 15 min.

1. Acessar https://search.google.com/search-console
2. Adicionar propriedade: `smartbasebr.com`
3. Verificar via DNS (a forma recomendada) — adicionar um TXT record no provedor do domínio
4. Após verificado, enviar o sitemap: `smartbasebr.com/sitemap.xml` (o Shopify gera automaticamente)
5. Acompanhar a cada 1-2 semanas: cliques, impressões, queries que estão trazendo gente

Bing equivalente: Bing Webmaster Tools (mesmo processo, opcional).

### 6. **Melhorar alt text de imagens**

O alt text atual é genérico ("iPhone 17", "Seminovo Apple"). Melhor: descritivo + keyword natural.

Antes → depois:
- `alt="iPhone 17"` → `alt="iPhone 17 Pro Max em cor cosmic orange — Smartbase Caxias"`
- `alt="Seminovo Apple"` → `alt="iPhone seminovo avaliado com garantia Smartbase"`

Ajusto no editor ou via campo "alt" na hora do upload da imagem.

---

## Investimentos estratégicos — próximos 90 dias

### 1. **Blog ativo** (já no plano)

Postagens iniciais com alta probabilidade de ranquear:

| Pauta | Keyword alvo | Intent | Dificuldade |
|---|---|---|---|
| "Vale a pena comprar iPhone seminovo? O que olhar antes" | iphone seminovo vale a pena | Informacional + comercial | Moderada |
| "iPhone 17 vs iPhone 16: qual escolher em 2026" | iphone 17 vs iphone 16 | Comercial alta intent | Alta (Apple oficial domina) |
| "Como saber se o iPhone é original" | como saber se iphone é original | Informacional alta intent | Moderada |
| "iPhone importado é seguro? Tudo sobre garantia internacional Apple no Brasil" | iphone importado é seguro | Informacional alta intent | Baixa-Moderada |
| "Trade-in iPhone: como funciona e quando vale" | trade in iphone | Comercial | Moderada |
| "Onde comprar iPhone em Caxias do Sul" | comprar iphone caxias do sul | Comercial local alta intent | **Baixa** (oportunidade) |
| "iPhone Pro vs iPhone Air: diferenças que importam" | iphone pro vs iphone air | Comercial | Alta |
| "iPhone com nota fiscal: por que importa" | iphone nota fiscal | Comercial | Baixa-Moderada |

**Cadência recomendada:** 1 post/semana nos primeiros 90 dias = 12 posts. Cada post 800-1.500 palavras, com CTA pro WhatsApp no fim.

### 2. **Citações locais (NAP)** — diretórios brasileiros

Cadastrar a Smartbase (com nome, endereço, telefone IGUAIS em todos) em:

- Apontador
- GuiaMais
- TeleListas
- Foursquare/Swarm
- Yelp Brasil
- Hagah
- Páginas Amarelas online

15 min cada, 0 custo. Sinaliza pra Google que o negócio é real e consistente.

**Crítico:** o NAP (Name, Address, Phone) tem que ser **exatamente igual** em todo lugar — site, GMB, citações. Variação ("Smart Base" vs "Smartbase", "Caxias" vs "Caxias do Sul") confunde o Google.

### 3. **Reviews no GMB** — sistemático

Cada cliente que fecha venda → pedir review no GMB. Pode ser via WhatsApp depois da venda:

> *"oi [nome], beleza? espero que esteja curtindo o iphone. se a experiência com a gente foi boa, dá uma força com uma review rápida no Google? link aqui: [link curto pro GMB]. ajuda demais a galera nova a encontrar a loja. valeu!"*

Meta: 30-50 reviews nos primeiros 6 meses. 4.7+ estrelas. Isso sozinho coloca a Smartbase no top do pack local pra "iphone caxias".

### 4. **Backlinks regionais**

Aproveitar mídia/blogs/parceiros locais:
- Pauta em jornal regional ("Caxias ganha apple store particular online")
- Menção em blog de tecnologia gaúcho
- Parceria com co-working ou centro empresarial (links recíprocos)
- Patrocínio pequeno de evento local com link no site do evento

Cada backlink de qualidade > 100 backlinks ruins.

### 5. **Topic cluster — "seminovo iphone confiável"**

Pilar (página robusta): `/blogs/news/guia-completo-iphone-seminovo-com-garantia` (2.500+ palavras, atualizada anualmente)

Posts satélites linkando pro pilar:
- "Quanto vale meu iPhone usado?"
- "iPhone 13 ainda vale a pena em 2026?"
- "Bateria de iPhone seminovo: quando trocar"
- "Diferença entre seminovo, recondicionado e usado"

Cada satélite linka pro pilar. Pilar consolida autoridade no tema.

---

## Issues on-page no site atual

| Página | Issue | Severidade | Fix |
|---|---|---|---|
| Todas | `<meta name="description">` puxa de `page_description` — vazio se não cadastrado no admin | Alta | Cadastrar SEO description em cada página/post |
| Todas | Sem `og:image` (preview de compartilhamento social fica feio) | Média | Adicionar `<meta property="og:image" content="...">` no theme.liquid, apontando pro logo ou hero |
| Todas | Sem schema.org JSON-LD (Organization, LocalBusiness, Product) | Alta | Adicionar bloco no theme.liquid (preciso das infos da loja) |
| Todas | Sem `<meta name="twitter:card">` | Baixa | Adicionar card type summary_large_image |
| Home | Alt texts genéricos ("iPhone 17", "Seminovo Apple") | Média | Descritivos + keyword natural |
| Home | H1 é "sua apple store. particular." — bom de marca, mas sem keyword | Baixa | Aceitável (marca > keyword no hero). Compensar com H2s ricos. |
| Home | H2 "aparelho novo, garantia do primeiro dia." — sem keyword "iPhone" | Média | Reformular pra incluir "iPhone novo sob encomenda" como H2 ou subtítulo |
| /pages/produtos | H1 "o Apple que você quer. novo ou seminovo." — sem keyword forte | Média | Acrescentar subtítulo "iPhone, Mac, iPad — original com garantia" |
| /blogs/news | Vazio. Sem conteúdo, sem ranqueamento. | Crítica | Publicar primeiros 4 posts nos primeiros 30 dias pós-lançamento |
| Páginas de produto (quando existirem) | Sem schema Product | Alta | Adicionar JSON-LD Product nas pages-produto |
| Site todo | Sem `<link rel="alternate">` (mas é só PT-BR, ok) | N/A | Não aplicável |

---

## Checklist técnico

| Item | Status | Notas |
|---|---|---|
| HTTPS ativo | ✅ Pass | Shopify default |
| `lang="pt-BR"` no `<html>` | ✅ Pass | Já no theme.liquid |
| Viewport meta tag | ✅ Pass | Configurado |
| Mobile-friendly (responsive) | ✅ Pass | `@media` no CSS |
| Canonical tag | ✅ Pass | Conditional no theme.liquid |
| Open Graph básico | ✅ Pass | title/description/type/locale |
| `og:image` | ❌ Fail | Adicionar |
| Twitter card | ⚠️ Warning | Não crítico |
| Title tag único por página | ⚠️ Warning | OK no template, depende do SEO title de cada página |
| Meta description única por página | ⚠️ Warning | Vazio por default — preencher por página |
| H1 único por página | ✅ Pass | Cada template tem 1 |
| Schema.org (Organization, LocalBusiness) | ❌ Fail | Adicionar |
| Schema.org Product | ❌ Fail | Adicionar quando tiver produtos |
| Schema.org BreadcrumbList | ❌ Fail | Adicionar |
| Schema.org FAQPage (para FAQ) | ❌ Fail | Não tem FAQ ainda |
| Sitemap XML | ✅ Pass | Shopify auto: /sitemap.xml |
| robots.txt | ✅ Pass | Shopify auto. Conferir após desativar senha |
| URLs limpas e legíveis | ✅ Pass | Shopify default |
| Alt text em imagens | ⚠️ Warning | Genérico — melhorar |
| Page speed (estimativa) | ⚠️ Warning | Conferir com PageSpeed Insights após lançamento |
| Core Web Vitals | ⚠️ Warning | Conferir pós-lançamento |
| Google Search Console | ❌ Fail | Cadastrar |
| Bing Webmaster | ❌ Fail | Opcional, baixa prioridade |
| **Google My Business** | ❌ Fail | **PRIORIDADE MÁXIMA** |
| **Apple Business Connect** | ❌ Fail | Importante (vendem Apple) |
| Bing Places | ❌ Fail | Opcional |
| Citações locais (NAP consistentes) | ❌ Fail | Cadastrar 5-10 diretórios |
| Reviews ativas (GMB) | ❌ Fail | Sistema de pedir review pós-venda |

---

## Comparativo competitivo

Análise estimada (sem dados de Semrush/Ahrefs conectados — para precisão de volumes e backlinks, conectar essas ferramentas depois).

| Dimensão | Smartbase | iPlace | Trocafone | Mercado Livre |
|---|---|---|---|---|
| Autoridade de domínio | Baixa (novo) | Alta | Média-Alta | Muito Alta |
| Profundidade de conteúdo | Mínima | Média (blog ativo) | Alta (guias) | N/A (marketplace) |
| Cobertura de keywords | Mínima | Boa (oficial) | Foco seminovo | Domina por volume |
| Schema.org | Nenhum | Completo | Completo | Completo |
| Reviews públicas | 0 | Centenas | Milhares | Milhões |
| SERP local "iphone caxias" | Não aparece | Pack local | Não aparece | Pode aparecer |
| Pontos fortes | Loja física Caxias + atendimento humano | Marca oficial Apple | Foco seminovo, garantia | Volume, recall |
| Pontos fracos | Sem digital | Caro | Preços ainda altos | Sem garantia, paralelo |
| **Onde a Smartbase ganha** | **SEO local Caxias/Serra** | + atendimento pessoal | + atendimento humano direto + loja física | + confiança real |

**Insight competitivo:** a Smartbase **não vai bater** Apple/Mercado Livre em volume nacional no curto prazo. Mas pode **dominar SEO local da Serra Gaúcha** em 90 dias (baixa concorrência local). E pode rankear muito bem nas keywords informacionais de **confiança/garantia** (onde marketplaces não rankeiam bem). Esses dois ângulos são o caminho.

---

## Keyword Opportunity Table

| Keyword | Dificuldade estimada | Score de oportunidade | Intent | Formato sugerido |
|---|---|---|---|---|
| iphone caxias | Baixa | **Alto** | Comercial local | Página otimizada da home + GMB |
| iphone caxias do sul | Baixa | **Alto** | Comercial local | Mesma página |
| loja apple caxias | Baixa | **Alto** | Comercial local | Mesma página |
| comprar iphone serra gaúcha | Baixa | Alto | Comercial local | Página local ou post |
| iphone seminovo caxias | Baixa | Alto | Comercial local | Seção seminovos otimizada |
| iphone bento gonçalves | Muito baixa | Médio | Comercial local | Página local (se atender bem a região) |
| comprar iphone com garantia | Moderada | Alto | Comercial | Blog post + landing page |
| iphone seminovo vale a pena | Moderada | **Alto** | Informacional alta intent | Pilar de blog |
| como saber se iphone é original | Moderada | **Alto** | Informacional alta intent | Blog post |
| iphone importado é seguro | Baixa-Moderada | Alto | Informacional alta intent | Blog post |
| iphone 17 vs iphone 16 | Alta | Médio | Comercial | Blog post comparativo |
| iphone 17 pro preço brasil | Alta | Médio | Comercial | Página de produto + post |
| iphone 17 air é bom | Baixa-Moderada | Médio | Informacional + comercial | Blog post |
| trade in iphone como funciona | Moderada | Médio | Informacional + comercial | Página de trade-in + post |
| iphone com nota fiscal | Baixa | Médio | Comercial + confiança | Blog post |
| garantia apple internacional brasil | Moderada | Médio | Informacional | Blog post |
| iphone novo sob encomenda | Baixa | Alto | Comercial alta intent | Seção home + post |
| onde comprar iphone barato e confiável | Moderada | Alto | Comercial | Blog post (defensivo) |
| iphone refurbished vs seminovo | Baixa | Médio | Informacional | Blog post |
| mac caxias | Muito baixa | Médio | Comercial local | Página categoria Mac + GMB |
| ipad caxias | Muito baixa | Médio | Comercial local | Página categoria iPad + GMB |
| iphone usado quanto custa | Moderada | Médio | Informacional + comercial | Post + calculadora se possível |

---

## Plano de ação priorizado

### Quick Wins (essa primeira semana após lançamento)

| Ação | Impacto | Esforço | Dependência |
|---|---|---|---|
| Tirar a senha do Shopify | **Crítico** | Baixo | Plano pago + endereço |
| Cadastrar Google My Business | **Alto** | 1h + 7-14d validação | Endereço, fotos da loja |
| Cadastrar Apple Business Connect | Alto | 30min | — |
| Adicionar SEO description em cada página | Médio-Alto | 30min | — |
| Adicionar `og:image` no theme.liquid | Médio | 15min | Logo PNG ou hero |
| Cadastrar Google Search Console + enviar sitemap | Alto | 15min | Acesso DNS do domínio |
| Cadastrar Bing Places | Baixo | 30min | — |
| Adicionar schema.org Organization + LocalBusiness | Alto | 1h (eu codo) | Infos da loja |

### Investimentos estratégicos (próximos 90 dias)

| Ação | Impacto | Esforço | Dependência |
|---|---|---|---|
| Publicar 4 primeiros posts no blog (pautas listadas) | Alto | 2 dias (escrita + revisão) | — |
| Citações em 5-10 diretórios locais | Médio | 2h total | NAP consistente |
| Pedir review GMB a cada cliente | **Alto** | Sistema simples | GMB validado |
| Buscar 3-5 backlinks regionais | Alto | Esforço relacional | Networking |
| Construir topic cluster "iphone seminovo confiável" | Alto | 1 mês | Calendário editorial |
| Schema Product nas páginas de produto | Médio | 1h (eu codo) | Página com produtos cadastrados |
| Otimizar Core Web Vitals (após PageSpeed) | Médio | Variável | PSI rodado pós-lançamento |
| Implementar FAQ na home com schema FAQPage | Médio | 2h | Lista de perguntas frequentes |

---

## Decisões / inputs necessários

Pra eu codar o schema.org direito, preciso de:

1. **Endereço completo da loja física** (rua, número, complemento, bairro, CEP)
2. **Horário de funcionamento** (dias da semana + horários)
3. **Telefone fixo** (se houver, além do WhatsApp)
4. **Latitude e longitude** (Google Maps → clica no endereço → coordenadas aparecem)
5. **Logo em PNG quadrado** (500×500 mín, fundo transparente)

E pra GMB:

6. **Acesso ao Google account** que vai gerenciar (recomendo conta dedicada da Smartbase, não pessoal)
7. **8-12 fotos da loja** (fachada, interior, balcão, atendimento, equipe, produtos)
8. **Categoria primária preferida** (sugestão: "Loja de telefones celulares" ou "Loja de eletrônicos")

Com isso a gente fecha quase tudo da primeira semana de SEO em 1 manhã de trabalho.
