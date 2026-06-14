# Brief de Dev — Estrutura de Blog/Artigo no tema Smartbase

> Para: time de dev · De: Letícia (SolzLab) · Data: 14/06/2026
> Objetivo: habilitar a publicação de artigos de blog otimizados para SEO no site da Smartbase, hoje impossível porque o tema não tem página de artigo.

---

## 1. Contexto e problema

- Loja: `smartbase-2903.myshopify.com` → domínio `www.smartbasebr.com`. **Tema LIVE: "smartbase" #149876408413.**
- O tema é customizado e enxuto: só `templates/index.json` + `templates/page.liquid` (páginas internas roteadas por handle: vitrine/faq/contato/blog).
- O "blog" hoje é a `sections/blog.liquid`: uma **grade de cards** montados como blocks no editor. Cada card tem só: categoria, tags, título, resumo, capa e um campo "link". **Não existe página de artigo nem corpo de texto.** Ou seja: dá pra mostrar a chamada do post, mas não há onde publicar o artigo em si.
- Resultado: não conseguimos publicar artigos de SEO (que precisam de página própria, com URL, título e texto completo indexáveis).
- A loja está **com senha (pré-lançamento)**, então dá pra desenvolver sem afetar o público.

## 2. O que precisa ser construído (escopo)

**Recomendação: adotar o blog nativo do Shopify** (Online Store → Blog posts) como motor dos artigos, e estilizar na identidade do tema. É a forma SEO-correta, escalável e de baixa manutenção (cada post novo é criado no Admin, sem mexer em código).

1. **Template de artigo** — `templates/article.json` + `sections/main-article.liquid`, estilizado com os tokens/classes já existentes em `assets/theme.css`. Deve renderizar:
   - H1 = `article.title`
   - capa = `article.image` (com `alt`)
   - corpo = `article.content` (rich text/HTML — é onde o texto do artigo entra)
   - data e tempo de leitura
   - CTA de WhatsApp no fim (reaproveitar o padrão/ް classes do tema, ex. botão `.btn`)
2. **Template de listagem** — `templates/blog.json` + `sections/main-blog.liquid`, OU adaptar a `sections/blog.liquid` atual para iterar `for article in blog.articles` (em vez de blocks manuais), **mantendo o visual de cards e os filtros por categoria/tag** que já existem (chips: todos / iPhone / seminovo / garantia / comparativos / dicas — hoje filtrados via `assets/global.js`). As **tags do artigo** devem alimentar esses filtros.
3. **SEO por artigo (essencial):**
   - `<title>` e **meta description** editáveis por post (campo "Editar SEO do site" do Shopify → `page_title` / `meta_description`).
   - URL limpa: `/blogs/{blog}/{handle-do-post}`.
   - 1 único H1 (título) + H2/H3 na ordem semântica (o corpo já vem com a hierarquia certa).
   - **JSON-LD**: `Article`/`BlogPosting` **+ `FAQPage`** (os artigos têm bloco de FAQ no fim). Gerar o FAQPage a partir do conteúdo ou de um metafield dedicado.
   - **Open Graph / Twitter Card** por artigo (`og:title`, `og:description`, `og:image`) no `<head>` (em `layout/theme.liquid`).
   - **Canonical** correto por artigo.
   - `alt` na imagem de capa.
4. **Links internos** entre artigos funcionando (os textos referenciam uns aos outros via `/blogs/.../handle`).
5. **Compatibilidade:** não quebrar o resto do tema; usar os tokens/classes de `assets/theme.css`; manter as animações de entrada como já estão configuradas (o tema força `.rise`/`.stagger` visíveis de propósito — Safari não suporta `animation-timeline`).

## 3. Como o conteúdo chega (já está pronto)

Os artigos vêm prontos, com: título, handle sugerido, meta title, meta description, e **corpo em HTML** (headings, listas, negrito, links e FAQ). Já há 4 escritos e 2 a caminho.

- Mapeamento sugerido: **corpo em HTML → campo "Conteúdo" do post** (aceita HTML). O bloco de FAQ já vem em `<h3>` + `<p>`; o dev gera o `FAQPage` JSON-LD a partir dele (ou usamos um metafield).
- Exemplo de artigo pronto pra usar de modelo de dados: `clientes/smartbase/conteudo/blog-artigos/PUBLICAR-01-garantia.md` (tem os campos do Shopify + o HTML do corpo).
- Demais artigos: `00-pilar-...`, `02-iphone-seminovo-...`, `03-iphone-do-paraguai-...` na mesma pasta.

## 4. Restrições do repositório (importante)

- **Tema LIVE #149876408413. Pull antes de push** — a Letícia edita no painel; sempre `shopify theme pull` e conferir antes de subir, pra não sobrescrever o trabalho dela.
- Estrutura oficial Shopify: `sections/ snippets/ templates/ assets/ layout/ config/`. CSS em `assets/theme.css`.
- Regras de schema já aprendidas no tema: nunca `default`+`presets` juntos; setting `url` não aceita `/pages/...` como default; `text` default não pode ser vazio; nome de bloco ≤ 25 caracteres.

## 5. Entregável esperado

Conseguir, pelo Admin do Shopify: criar um post de blog, colar o conteúdo (HTML), definir título/URL/SEO, e ele aparecer **estilizado** tanto na **página do artigo** quanto na **grade do blog** (com os filtros por categoria funcionando), com os metadados de SEO e o JSON-LD corretos.

## 6. Decisões pra alinhar com o dev

- Grade do blog: migrar pra **loop automático de artigos** (recomendado, menos manutenção) ou manter os cards manuais apontando pra artigos nativos?
- Mostrar autor e data no post? (sugestão: data sim, autor opcional)
- Blog handle a usar (ex.: `/blogs/blog` ou `/blogs/dicas`) — definir 1 só e manter.

## 7. Observação de prioridade

A loja está com senha e **não indexa no Google enquanto não for pública**. Então essa estrutura pode ser construída no ritmo do projeto de lançamento do site — o ganho de SEO só começa a contar quando o site sair da senha. O conteúdo já está pronto e guardado, esperando a estrutura.
