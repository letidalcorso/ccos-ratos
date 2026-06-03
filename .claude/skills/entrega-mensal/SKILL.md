---
name: entrega-mensal
description: >
  Gera a apresentação mensal de conteúdo para entrega ao cliente.
  Formato: slide de calendário com todos os posts do mês + um slide por post
  com data, formato, legenda e visual lado a lado.
  Use quando o usuário pedir "monta a entrega do mês", "cria o deck de aprovação",
  "faz o ppt do [cliente] de [mês]", ou ao finalizar a produção mensal de um cliente.
---

# /entrega-mensal — Apresentação de Entrega Mensal

## Dependências

- **Posts do mês:** `clientes/[nome-cliente]/03_conteudo/[mes-ano]/` — textos aprovados
- **Visuais:** `clientes/[nome-cliente]/03_conteudo/[mes-ano]/design/` — SVGs dos posts estáticos + PNGs dos carrosséis (capa)
- **Identidade do cliente:** `clientes/[nome-cliente]/CLAUDE.md` — cor de destaque pra tema do deck
- **Template base:** `templates/entrega-mensal/template-base.pptx` — estrutura e layout de referência (Corneta)
- **pptx skill** — usar `pptxgenjs` para gerar o arquivo `.pptx`

---

## Workflow

### 1. Coletar o conteúdo do mês

Ler todos os arquivos em `clientes/[nome-cliente]/03_conteudo/[mes-ano]/`:
- `pauta.md` — lista de posts com datas e formatos
- `post-01.md`, `post-02.md`... — legenda aprovada de cada post
- `design/post-01.svg`, `design/post-02.png`... — visuais aprovados

Montar internamente a lista:
```
Post 1: data | formato | legenda | caminho do visual
Post 2: ...
```

Se algum visual estiver faltando, avisar antes de gerar o deck.

---

### 2. Tema visual do deck

O deck usa sempre a identidade visual da Letícia — não do cliente. Ler `marca/design-guide.md`.

- **Fundo escuro:** `#0D1B2A`
- **Cor de destaque principal:** `#FF1EB4` (magenta neon)
- **Cor de destaque secundária:** `#39FF4C` (verde neon)
- **Texto:** `#FFFFFF`
- **Fundo dos slides de post (painel esquerdo):** `#0D1B2A` com texto branco
- **Tipografia:** Bebas Neue (títulos) + Inter ou DM Sans (corpo)

---

### 3. Gerar o deck com pptxgenjs

**Formato do arquivo:** 7,5" × 10" (retrato) — `prs.defineLayout({ width: 7.5, height: 10 })`

Usar a skill `/pptx` (pptxgenjs). Estrutura do deck:

**Slide 1 — Capa**
- Fundo: `#0D1B2A`
- Título: "CRONOGRAMA [MÊS/ANO]" — Bebas Neue, grande, `#FF1EB4`
- Nome do cliente abaixo — branco, menor
- Handle do Instagram do cliente — `#39FF4C`, menor ainda
- Rodapé: "SOLZ LAB" ou marca da Letícia — discreto, branco

**Slide 2 — Calendário do mês**
- Fundo: `#0D1B2A`
- Grade 7 colunas (Dom–Sáb), linhas por semana
- Cabeçalho dos dias: fundo `#FF1EB4`, texto `#0D1B2A`, Bebas Neue bold
- Células com post: fundo `#142535`, texto branco — formato + tema curto
- Células vazias: número do dia em `#555555`
- Eventos especiais: fundo `#39FF4C`, texto `#0D1B2A`
- Rodapé: nome do cliente + "CALENDÁRIO MENSAL - [MÊS]" em branco pequeno

**Slides 3+ — Um slide por post**

Layout dois painéis:

*Painel esquerdo (~48% da largura):*
- Fundo: `#0D1B2A`
- Data + tipo no topo: `"04/03 FEED ✅"` — Bebas Neue grande, `#FF1EB4`
- `"Formatos:"` em `#39FF4C` bold + valor em branco itálico
- Se reels: adicionar `"Objetivo:"` e `"Roteiro:"` no mesmo padrão
- `"Legenda:"` em `#39FF4C` bold + texto completo aprovado em branco, fonte menor
- Rodapé: "SOLZ LAB" discreto em cinza

*Painel direito (~52% da largura):*
- Visual do post ocupando toda a altura do painel
- SVG converter para PNG antes de inserir (pptxgenjs não aceita SVG direto)
- Para carrossel: imagem da capa com badge "carrossel — X slides" no canto inferior

**Converter SVG para PNG antes de gerar o deck:**
```bash
# Com Playwright (já disponível no projeto)
npx playwright screenshot --viewport-size=1080,1080 "file:///caminho/absoluto/post-01.svg" post-01.png

# Com rsvg-convert (se instalado)
rsvg-convert -w 1080 post-01.svg -o post-01.png
```

---

### 4. Exportar e salvar

Salvar o `.pptx` em:
```
clientes/[nome-cliente]/05_entregaveis/[mes-ano]-entrega.pptx
```

Converter para imagens via LibreOffice + pdftoppm pra QA visual antes de declarar pronto.

---

## Output final

```
clientes/[nome-cliente]/05_entregaveis/
  [mes-ano]-entrega.pptx
```

## Regras

- Nunca gerar o deck sem ter todos os visuais — conferir antes de começar
- A legenda no slide deve ser exatamente a legenda aprovada, sem editar
- Se o cliente não tiver identidade visual definida, usar tema escuro neutro (`#0D1B2A` + branco)
- QA visual obrigatório: converter pra imagem e inspecionar antes de entregar
- Um slide por post — não agrupar posts num mesmo slide
