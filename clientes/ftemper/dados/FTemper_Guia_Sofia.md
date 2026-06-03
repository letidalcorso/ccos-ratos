# FTemper — Guia de Uso do Design System
### Para: Sofia (Diretora de Arte)

> Tudo que você precisa saber para criar novos posts mantendo a identidade da Ftemper intacta. Consulte também a página **🎨 Design System** no Figma para referência visual.

---

## Como criar um novo post — passo a passo

**1. Duplique um post existente**
Na aba "Artes" do Figma, clique com botão direito em qualquer post → *Duplicate*. Isso preserva o frame com as dimensões certas, o grid "margens feed" e a estrutura de camadas.

**2. Troque a foto de fundo**
Selecione a camada da imagem (geralmente a primeira, chamada de nome do arquivo ou "COMPONENT"). No painel direito, em *Fill*, clique na miniatura e use *Choose Image* para importar a nova foto. Reposicione com Alt+arrastar para enquadrar o focal correto.

**3. Edite os textos**
Dê duplo clique no texto para entrar em modo de edição. Regra simples: títulos em **Morganite Bold, CAIXA ALTA** — corpo em **Sora Regular**, sem alterar cor nem tamanho. Não crie novos estilos de texto.

**4. Mantenha o grid ativo**
Ative em *View → Grids* para ver as guias vermelhas (margens feed). Nenhum elemento de conteúdo deve ultrapassar os 80px de margem em todos os lados. A única exceção é a barra acento do Post 2, que sangra intencionalmente pela borda esquerda.

**5. Use só as cores da paleta de variáveis**
Todas as cores estão nas variáveis do Figma (painel direito → Variables → coleção "colors"). Nunca insira valores hex manualmente — aplique sempre via variável para manter consistência.

**6. Exporte em PNG @1x**
Selecione o frame do post. Painel direito → Export → "+" → PNG, 1x. O canvas já está em 1080×1350px (ou 2160×1350px para o formato landscape). Pronto para publicar.

---

## Paleta de Cores

| Token | Hex | Uso principal |
|-------|-----|---------------|
| `cor/azul/principal` | `#005AD4` | CTAs, card headline azul |
| `cor/azul/1` | `#3DAFE1` | Destaques secundários |
| `cor/azul/azul 2` | `#00A8FF` | Ícones, acentos de produto |
| `cor/azul/azul 3` | `#295FA8` | Variações de fundo, gradientes |
| `cor/azul/2` | `#1A00B8` | Barra de destaque (Post 2) |
| `cor/azul/azul 6` | `#03174F` | Overlay geométrico escuro |
| `cor/azul/azul 7` | `#01002B` | Corpo de texto, títulos escuros |
| `cor/base/branco` | `#FFFFFF` | Texto sobre fundos escuros, fundos de card |
| `cor/base/cinza` | `#717171` | Textos secundários, legendas |

> **Post 3 (landscape):** fundo branco `#FFFFFF` com overlay cinza `rgba(217,217,217,0.30)` — resultado visual ≈ `#F4F4F4`. Essa cor não está na paleta de variáveis e é uma exceção pontual.

---

## Tipografia

### Morganite — Títulos e Headlines
- **Uso:** exclusivamente headlines, títulos de post, calls de impacto
- **Regra obrigatória:** sempre CAIXA ALTA (`text-transform: uppercase`)
- **Pesos disponíveis:** Bold (mais usado) e Extra Bold (Post 2)
- **Nunca use** em corpo de texto, legendas ou textos de apoio

### Sora — Corpo de Texto
- **Uso:** parágrafos, listas de benefícios, copy de apoio
- **Pesos:** Regular para texto corrido, **Bold inline** para destacar termos-chave (ex: "**alumínio**", "**escolha natural**")
- **Linha:** mantenha o line-height padrão do template — não comprima

---

## Componentes disponíveis

Todos na página **🎨 Design System** → seção *05 — Componentes Reutilizáveis*:

| Componente | O que é | Quando usar |
|-----------|---------|-------------|
| `Card/Headline` | Retângulo azul arredondado com texto Morganite em branco | Headline de impacto em cima de foto |
| `Card/Conteúdo` | Card branco semitransparente (80%) + barra azul elétrica | Bloco de texto sobre foto full-bleed (padrão Post 2) |
| `Barra/Acento` | Faixa azul elétrico (`#1A00B8`) que sangra pela borda esquerda | Destacar headline dentro do card |
| `Painel/Fosco` | Oval/pill branco a 40% de opacidade | Dar legibilidade a texto sobre foto clara |

Para usar: clique com botão direito no componente → *Detach instance* — depois edite livremente o conteúdo interno.

---

## Grid e Margens

- **Formato dos posts:** 1080 × 1350px (portrait 4:5) ou 2160 × 1350px (landscape carousel)
- **Margens:** 80px em todos os lados
- **Área de conteúdo útil:** 920 × 1190px
- **Grid no Figma:** guia "margens feed" — ative em *View → Grids* para visualizar

---

## DOs ✅

- Usar **fotografias de produto real** (alumínio, pergolados, serralheria em ação)
- Combinar azul principal (`#005AD4`) com branco nos cards de headline
- Morganite sempre em **CAIXA ALTA**
- Deixar a barra acento sangrar pela borda esquerda do frame (intenção de design)
- Usar Sora Bold inline para termos técnicos de produto
- Exportar sempre em **PNG @1x**
- Aplicar cores **sempre via variável** no Figma

## DON'Ts 🚫

- ~~Usar cores fora da paleta de variáveis~~ (sem hex manual)
- ~~Morganite em caixa baixa~~ — jamais
- ~~Morganite no corpo do texto~~ — só Sora
- ~~Alterar o cornerRadius dos componentes~~ — cada valor tem significado
- ~~Esticar ou distorcer o logo~~ — use somente as versões do frame "símbolos" em Assets
- ~~Ultrapassar a área de conteúdo de 920×1190px~~ (exceto barra acento)
- ~~Exportar em JPG~~ — sempre PNG

---

## Referência rápida — onde encontrar no Figma

| O que preciso | Onde está |
|--------------|-----------|
| Posts para duplicar | Aba "Artes" |
| Logo vetorizado | Aba "Assets" → frame "símbolos" |
| Cores (variáveis) | Painel direito → Variables → "colors" |
| Componentes reutilizáveis | 🎨 Design System → seção 05 |
| Exemplo de grid/margens | 🎨 Design System → seção 06 |
| Referência tipográfica | 🎨 Design System → seção 02 |

---

*Dúvidas sobre o sistema? Consulte a página 🎨 Design System no Figma ou entre em contato com a equipe de design.*
