---
name: design-guide
description: >
  Cria, audita ou expande o guia de design visual de um cliente de marca.
  Use quando precisar documentar identidade visual (logo, paleta, tipografia, aplicações),
  auditar um guia existente pra ver o que falta, ou estender o guia com novos formatos e pilares.
  Diferente de design-system — essa skill é para marca e conteúdo, não para UI/software.
argument-hint: "[audit | document | extend] <cliente ou elemento>"
---

# /design-guide

Cria ou mantém o guia de design visual de um cliente — paleta, tipografia, logo, aplicações de conteúdo e regras de uso.

## Uso

```
/design-guide audit [cliente]         # Audita o guia existente — o que falta ou está impreciso
/design-guide document [cliente]      # Cria o guia completo do zero
/design-guide extend [cliente] [elemento]  # Expande o guia com novo formato, pilar ou aplicação
```

---

## Componentes de um Guia de Design de Marca

### Tokens de Marca
Valores atômicos que definem a linguagem visual:
- **Cores** — primárias, secundárias, neutras, gradientes, cor proibida
- **Tipografia** — famílias, pesos, uso por hierarquia (título, corpo, legenda)
- **Espaçamento e margens** — padrões de respiro nos layouts
- **Bordas e formas** — border-radius, bordas, shapes recorrentes
- **Logo** — versões, área de proteção, tamanho mínimo, uso por fundo

### Elementos Visuais
Partes recorrentes da identidade que aparecem nos posts:
- Ícones e símbolos da marca
- Texturas e padrões decorativos
- Tags, pills e badges
- Separadores e linhas de apoio
- Padrões de fundo (foto + overlay, gradiente, cor sólida)

### Aplicações
Como os tokens e elementos se combinam em formatos reais:
- Post estático (1:1, 4:5)
- Carrossel (capa, slides internos, CTA final)
- Stories
- Banner de site
- Layout por pilar de conteúdo

## Princípios

1. **Consistência antes de criatividade** — o guia existe pra que todo post pareça da mesma marca
2. **Uso específico por elemento** — cada cor, peso e fonte tem uma função — não usar de forma genérica
3. **Documentar o que existe** — o guia descreve o que foi aprovado, não reinventa
4. **Regras do que não fazer** — tão importante quanto o que fazer

---

## Output — Audit

Ler o guia existente em `clientes/[nome-cliente]/marca/design-guide.md`.
Avaliar completude e precisão de cada seção.

```markdown
## Auditoria do Guia de Design — [Cliente]

### Resumo
**Seções avaliadas:** [X] | **Lacunas encontradas:** [X] | **Completude:** [X]%

### Tokens de Marca
| Elemento | Status | Problema |
|----------|--------|---------|
| Paleta de cores | ✅ / ⚠️ / ❌ | [ex: "hex listado mas sem indicação de uso por cor"] |
| Tipografia | ✅ / ⚠️ / ❌ | [ex: "fonte definida mas sem pesos especificados"] |
| Logo | ✅ / ⚠️ / ❌ | [ex: "sem versão para fundo escuro documentada"] |
| Gradientes | ✅ / ⚠️ / ❌ | [ex: "não documentado"] |
| Cor proibida | ✅ / ⚠️ / ❌ | [ex: "ausente"] |

### Elementos Visuais
| Elemento | Status | Problema |
|----------|--------|---------|
| Ícones/símbolos | ✅ / ⚠️ / ❌ | [descrição] |
| Padrões de fundo | ✅ / ⚠️ / ❌ | [descrição] |
| Elementos de apoio | ✅ / ⚠️ / ❌ | [descrição] |

### Aplicações
| Formato | Status | Problema |
|---------|--------|---------|
| Post estático | ✅ / ⚠️ / ❌ | [ex: "sem especificação de hierarquia visual"] |
| Carrossel | ✅ / ⚠️ / ❌ | [descrição] |
| Layout por pilar | ✅ / ⚠️ / ❌ | [ex: "pilares não têm tratamento visual distinto"] |

### Ações Prioritárias
1. [Lacuna mais crítica — o que bloqueia a produção de conteúdo]
2. [Segunda prioridade]
3. [Terceira prioridade]
```

---

## Output — Document

Criar o guia completo do zero. Antes de escrever:

1. Ler `clientes/[nome-cliente]/AGENTS.md` — contexto, tom, pilares, referências
2. Checar `clientes/[nome-cliente]/marca/` e `clientes/[nome-cliente]/dados/` — arquivos existentes
3. Coletar o que faltar em perguntas agrupadas por bloco (logo, cores, tipografia, estilo, aplicações)

**CHECKPOINT:** confirmar dados antes de escrever.

```markdown
# [Nome do Cliente] — Guia de Design

> Referência visual para criação de posts, carrosséis e materiais da [Marca].
> Ler antes de criar qualquer peça gráfica.

---

## Logo

- **Nome da marca:** [caixa alta/baixa/mixed]
- **Símbolo/ícone:** [descrição do elemento]
- **Logo principal:** [wordmark / imagotipo / combinado]
- **Uso em fundo claro:** [versão e cor]
- **Uso em fundo escuro:** [versão e cor]
- **Arquivo principal:** `[caminho]`
- **Avatar/ícone isolado:** `[caminho]` — [descrição]
- **Tamanho mínimo:** [px] — abaixo disso perde legibilidade
- **Área de proteção:** [descrição — ex: "espaço equivalente à altura do X ao redor"]

---

## Paleta de Cores

### Cores principais

| Nome | Hex | Uso específico |
|------|-----|---------------|
| [nome] | `#XXXXXX` | [ex: destaque, botões, tags — não apenas "cor principal"] |

### Cores secundárias

| Nome | Hex | Uso específico |
|------|-----|---------------|
| [nome] | `#XXXXXX` | [ex: fundos secundários, overlays, textos de apoio] |

### Gradientes

- **[nome]:** `#XXXX` → `#XXXX` ([diagonal/radial]) — [quando usar]

### Cor proibida

- [o que não pode aparecer e por quê — ex: "tons pastéis quebram a seriedade industrial"]

---

## Tipografia

### [Fonte — Títulos]
- **Uso:** títulos principais, headlines, capas de carrossel
- **Pesos:** [ex: Bold, ExtraBold — 700-900]
- **Caixa:** [alta / baixa / mista]
- **Caráter:** [o que comunica — ex: condensada, forte, impacto, contemporânea]
- **Origem:** Google Fonts / arquivo local em `[caminho]`

### [Fonte — Corpo]
- **Uso:** subtítulos, corpo de texto, legendas, botões
- **Pesos:** [ex: Regular, SemiBold]
- **Caráter:** [ex: geométrica, limpa, boa legibilidade em tamanhos pequenos]
- **Origem:** Google Fonts / arquivo local em `[caminho]`

---

## Estilo Visual

### Conceito geral
[1-2 frases sobre o que a identidade comunica e como — ex: "Técnico e confiável. Azul dominante transmite seriedade sem ser fria. O gradiente adiciona movimento sem perder autoridade."]

### Padrões de fundo

1. **[Nome]** — [descrição + quando usar — ex: "foto de produto + overlay gradiente azul semitransparente — posts de produto aplicado"]
2. **[Nome]** — [descrição + quando usar]
3. **[Nome]** — [descrição + quando usar]

### Elementos visuais de apoio

- **[elemento]** — [como aparece, onde usar — ex: "chevron triplo como marca d'água ou detalhe de canto"]
- **[elemento]** — [como aparece, onde usar]

---

## Layout dos Posts

### Post estático (1:1 ou 4:5)
- [estrutura: posição do logo, título, subtexto, foto/fundo]
- Hierarquia: [o que o olho vê primeiro → segundo → terceiro]
- Tipografia: [fonte e peso por área]

### Carrossel
- **Capa:** [fundo, título, elemento de identidade, indicador de arraste]
- **Slides internos:** [estilo de fundo, tipografia predominante, uso de destaque]
- **Último slide:** [CTA, logo, contato]

### Stories (se aplicável)
- [diferença do feed, estrutura específica]

### Banner de site (se aplicável)
- [proporção, estrutura, elementos obrigatórios]

---

## Layout por Pilar de Conteúdo

### [Pilar 1]
- **Fundo:** [qual padrão usar]
- **Tipografia em destaque:** [qual fonte/peso]
- **Elemento de apoio:** [se aplicável]
- **Tom visual:** [mais sóbrio, mais energético, mais informativo]

### [Pilar 2]
[mesma estrutura]

---

## O que NUNCA fazer

**Cores:**
- [regra específica — não genérica — ex: "não usar paletas quentes (laranja, vermelho) — quebram posicionamento industrial"]

**Tipografia:**
- [regra — ex: "sem fontes serifadas — contrastam com a identidade técnica"]
- [regra — ex: "não misturar mais de 2 famílias por peça"]

**Layout:**
- [regra — ex: "arte poluída com preço + telefone + produto + texto tudo junto"]
- [regra — ex: "falta de respiro — margens generosas são obrigatórias"]

**Tom visual:**
- [regra — ex: "estética de varejo (bannerzão com preço) — vai contra o posicionamento"]
- [regra — ex: "posts sem identidade — cada peça deve ser reconhecível como [marca] sem o logo"]

---

## Referências visuais

- [@conta](link) — [o que observar: produto aplicado, apresentação profissional]
- [@conta](link) — [o que observar]
```

Salvar em `clientes/[nome-cliente]/marca/design-guide.md`.
Se a pasta `marca/` não existir, criar.

Após salvar: listar seções completas e indicar o que ficou com placeholder por falta de informação.

---

## Output — Extend

Adicionar ao guia existente um novo formato, pilar ou elemento visual.
Ler o guia atual antes de estender — manter coerência com o que já existe.

```markdown
## Extensão: [Elemento ou Formato]

### Problema
[O que esse novo elemento resolve — ex: "pilares de conteúdo não tinham tratamento visual distinto"]

### Consistência com o guia atual
| Existente | Como se conecta |
|-----------|----------------|
| [elemento/cor/fonte já documentada] | [como o novo elemento usa ou respeita isso] |

### Proposta

#### [Seção a adicionar]
[Conteúdo novo no mesmo formato do guia]

### O que NÃO fazer (específico)
- [anti-padrão para esse elemento]

### Perguntas em aberto
- [decisão que precisa de aprovação antes de documentar]
```

Ao finalizar: editar o `design-guide.md` do cliente com a extensão. Não reescrever o arquivo inteiro — adicionar a seção nova no lugar correto.

---

## Regras

- Nunca inventar hex, fontes ou elementos — só documentar o que existe ou foi confirmado
- Usar o guia da FTemper (`clientes/ftemper/marca/design-guide.md`) como referência de nível de detalhe
- Paleta precisa ter uso específico por cor — não basta listar o hex
- Se o cliente já tem `design-guide.md`, rodar `/design-guide audit` antes de reescrever
- Ao final de qualquer modo, verificar se o AGENTS.md do cliente precisa ser atualizado
