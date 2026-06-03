---
name: post-estatico
description: >
  Gera o design de um post estático para Instagram em SVG, pronto para abrir no Figma
  ou exportar direto. Lê a identidade visual do cliente e o texto aprovado e monta
  a composição visual.
  Use quando o usuário pedir "faz o design do post", "cria o SVG do post [X]",
  "gera o visual do post estático", ou quando um post da pauta precisar de visual.
---

# /post-estatico — Design de Post Estático em SVG

## Dependências

- **Identidade visual do cliente:** `clientes/[nome-cliente]/02_branding/svg/` — paleta, tipografia, logo
- **Contexto do cliente:** `clientes/[nome-cliente]/AGENTS.md` — tom visual, referências
- **Texto do post:** fornecido pela Letícia ou gerado pelo `/conteudo-social`
- **Design guide pessoal:** `marca/design-guide.md` — referência de estilo da Letícia (nível de ousadia, contraste)

---

## Formatos disponíveis

| Formato | Dimensão | Uso |
|---|---|---|
| Feed quadrado | 1080x1080px | Padrão de feed |
| Feed vertical | 1080x1350px | Maior ocupação no feed |
| Stories | 1080x1920px | Stories e reels cover |

Padrão: **1080x1080px** — pedir formato diferente se necessário.

---

## Workflow

### 1. Coletar inputs

Verificar o que existe:
- Texto aprovado (gancho, corpo, CTA)
- Identidade visual do cliente (paleta SVG, tipografia definida)
- Referência de estilo ou mood específico do post (opcional)

Se a identidade visual do cliente ainda não existir, avisar:
> "A identidade visual de [cliente] ainda não foi criada. Quer rodar `/identidade-visual` primeiro ou prefere que eu use um estilo temporário baseado no AGENTS.md do cliente?"

---

### 2. Definir composição

Antes de gerar, definir:
- **Elemento central:** tipografia como protagonista, produto, ilustração geométrica, ou combinação
- **Hierarquia:** o que o olho vê primeiro (gancho), segundo (complemento), terceiro (logo/marca)
- **Uso do espaço:** denso ou com muito respiro

Apresentar a proposta de composição em texto antes de gerar o SVG.

**CHECKPOINT:** confirmar a direção de composição antes de gerar.

---

### 3. Gerar o SVG

Criar o SVG com:

**Estrutura do arquivo:**
```xml
<!-- Post: [título do post] -->
<!-- Cliente: [nome] -->
<!-- Data: [data] -->
<!-- Dimensões: 1080x1080 -->
```

**Regras técnicas:**
- Dimensões exatas no `viewBox` e `width`/`height`
- Apenas formas, paths e `<text>` — sem `<image>` externa
- Fontes via `font-family` com nome exato da Google Font escolhida (o Figma carrega automaticamente)
- Comentar as seções: `<!-- Fundo -->`, `<!-- Gancho -->`, `<!-- Corpo -->`, `<!-- Logo -->`, `<!-- CTA -->`
- Cores exatamente da paleta do cliente
- Logo: incluir como grupo SVG copiado do `logo.svg` do cliente, se existir

**Variação de layout por tipo de post:**
- **Autoridade/educativo:** tipografia grande ocupa 60-70% do espaço, fundo sólido, cor de destaque no gancho
- **Produto aplicado:** área reservada para foto (retângulo com placeholder + instrução de substituição), texto em rodapé ou lateral
- **Institucional:** composição mais equilibrada, logo com mais destaque
- **Provocativo/opinião:** contraste alto, gancho centralizado, corpo menor

Salvar em `clientes/[nome-cliente]/03_conteudo/[mes-ano]/design/post-[numero].svg`

---

### 4. Entregar

Após gerar o SVG:
- Mostrar a estrutura do layout em texto (o que está em cada área)
- Indicar o que pode precisar de ajuste no Figma (ex: substituir placeholder de foto, ajustar quebra de linha)
- Se tiver logo do cliente em SVG, confirmar se foi incluída corretamente

---

## Output final

```
clientes/[nome-cliente]/03_conteudo/[mes-ano]/design/
  post-01.svg
  post-02.svg
  ...
```

## Regras

- Nunca inventar cores ou tipografia — usar sempre a identidade do cliente
- Se não tiver identidade visual criada, perguntar antes de improvisar
- Posts com foto de produto: gerar com placeholder e instrução clara de onde inserir a imagem no Figma
- O SVG precisa abrir corretamente no Figma — testar mentalmente se os elementos estão auto-contidos
- Layouts diferentes por pilar de conteúdo — não repetir a mesma composição em todos os posts
