---
name: identidade-visual
description: >
  Cria identidade visual completa para um cliente. Gera direção estratégica e SVGs
  iniciais para exploração no Figma. Quando a Letícia voltar com o resultado aprovado,
  lapida e documenta em guia de identidade visual.
  Use quando o usuário pedir "cria identidade visual", "preciso de uma logo",
  "vamos começar a identidade de [cliente]", ou mencionar branding de um cliente.
---

# /identidade-visual — Criação de Identidade Visual

## Dependências

- **Contexto do cliente:** `clientes/[nome-cliente]/AGENTS.md` — ler antes de tudo
- **Briefing:** `clientes/[nome-cliente]/01_briefing/` — se existir
- **Referências:** `clientes/[nome-cliente]/06_referencias/` — se existir

## Skills complementares disponíveis

- `/design-critique` — usar após Figma para dar feedback estruturado antes de aprovar
- `/design-handoff` — usar na Fase 3 para gerar specs técnicas se o cliente precisar entregar pra dev

---

## Workflow em 3 Fases

### Fase 1 — Direção Estratégica

1. Ler o AGENTS.md do cliente e os arquivos de briefing/referências
2. Se faltar contexto, perguntar: segmento, público-alvo, 3 adjetivos da marca, referências visuais
3. Criar **2 direções distintas**, cada uma com:
   - **Nome da direção** (ex: "Industrial Minimalista")
   - **Conceito** — o que comunica e por que faz sentido pro cliente (1 parágrafo)
   - **Paleta:** 3-4 cores com hex
   - **Tipografia:** fonte para títulos + fonte para corpo (Google Fonts)
   - **Estilo visual:** 3-4 palavras descritivas do mood
   - **O que evitar:** o que não combina com essa direção

**CHECKPOINT:** apresentar as 2 direções. Esperar escolha antes de continuar.

---

### Fase 2 — Geração dos SVGs (ponto de partida pro Figma)

Com a direção aprovada, criar:

**1. Logo principal** (`logo.svg`)
- Símbolo + nome da marca
- Funciona em fundo claro e escuro
- 400x200px como referência de proporção
- Paths otimizados, sem dependências externas

**2. Símbolo isolado** (`simbolo.svg`)
- Apenas o ícone, sem o nome
- Formato quadrado — funciona como avatar

**3. Paleta** (`paleta.svg`)
- Swatches com hex visível
- 600x200px

**4. Tipografia** (`tipografia.svg`)
- Demonstração das fontes em uso (título de exemplo + parágrafo curto)

**Regras SVG:**
- Apenas shapes e paths — sem `<image>` ou fontes embarcadas
- Comentar grupos: `<!-- Símbolo -->`, `<!-- Logotipo -->`
- Texto do nome da marca: usar `<text font-family="Nome da Fonte">` — a Letícia vai lapidar no Figma
- Preferir formas geométricas limpas, alto contraste, tipografia bold

Salvar em `clientes/[nome-cliente]/02_branding/svg/`

**CHECKPOINT:** apresentar os SVGs. A Letícia leva pro Figma.

> Quando voltar com a versão aprovada, chamar: "tô de volta com o resultado" ou "aprova, vamos pra documentação" para iniciar a Fase 3.

---

### Fase 3 — Documento de Identidade Visual

Com o visual aprovado pelo Figma, criar o guia em HTML:

**Estrutura:**
1. Capa — nome da marca + conceito em 1 frase
2. Conceito da marca — direção escolhida em linguagem de apresentação
3. Logo — versões (principal, símbolo, monocromática), área de proteção, tamanho mínimo
4. Paleta de cores — primárias e secundárias com hex e RGB
5. Tipografia — fontes com exemplos de hierarquia
6. Tom de voz — 3 adjetivos + exemplos do que a marca fala e evita
7. Aplicações — mockups textuais ou SVGs simples (stories, cartão, etc.)
8. O que não fazer — regras de uso da logo

**Visual do documento:**
- Usar as cores e tipografia da marca do cliente — não o design guide da Letícia
- Limpo, profissional, apresentável direto ao cliente

Salvar em `clientes/[nome-cliente]/02_branding/identidade-visual.html`

Opcional: usar `/design-handoff` se o cliente precisar de specs técnicas para dev.

---

## Output final

```
clientes/[nome-cliente]/02_branding/
  svg/
    logo.svg
    simbolo.svg
    paleta.svg
    tipografia.svg
  identidade-visual.html
```

## Regras

- Nunca pular o CHECKPOINT da Fase 1 — direção tem que ser aprovada antes de qualquer visual
- Os SVGs são ponto de partida, não entrega final — a Letícia lapida no Figma
- Fase 3 só começa quando a Letícia trouxer de volta o resultado do Figma
- Não reinventar na Fase 3 — documentar o que foi aprovado
