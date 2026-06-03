---
name: demanda
description: >
  Fluxo completo para pedidos avulsos de clientes. Lê as demandas pendentes do
  Notion (status "📥 Inbox"), carrega contexto do cliente, interpreta a demanda,
  questiona o que não estiver claro e só então estrutura no Notion e parte pra execução.
  Rodar todo dia às 17h ou quando o usuário trouxer uma demanda nova.
  Use quando o usuário pedir "tem demanda nova", "roda o demanda", "o que está pendente",
  ou ao receber um pedido avulso de qualquer cliente.
---

# /demanda — Pedidos Avulsos de Clientes

## Dependências

- **Notion MCP** — ler inbox de demandas e atualizar itens
- **Referência Notion:** `_contexto/notion.md` — IDs e coleções
- **Contexto do cliente:** `clientes/[cliente]/CLAUDE.md` — carregar conforme o cliente identificado
- **Identidade visual:** `marca/design-guide.md`
- **Figma MCP** — criar visual diretamente no Figma (quando disponível)
- **Preferências:** `_contexto/preferencias.md`

---

## Passo 1 — Ler inbox do Notion

Acessar a base Tarefas via `collection://a373d6af-8abb-8243-8190-077dfd9b7d25`.

Buscar itens com Status = "📥 Inbox".

Se não houver itens pendentes:
> "Sem demandas novas no Notion. Se quiser registrar uma agora, me conta o que chegou."
→ Pular para o Passo 3 (intake manual)

Se houver itens pendentes, listar:
> "Tem [N] demanda(s) no inbox:
> 1. [texto bruto da demanda]
> 2. ...
>
> Vou analisar uma por uma."

---

## Passo 2 — Interpretar e questionar

Para cada demanda pendente, em sequência:

**2.1 — Identificar o cliente**
Ler o texto bruto e identificar o cliente pelo nome mencionado (gene, ftemper, sodi, smartbase, castanhal).
Carregar imediatamente `clientes/[cliente]/CLAUDE.md`.

Se o cliente não estiver claro no texto:
> "Essa demanda é de qual cliente?"

**2.2 — Interpretar a demanda**
Com o contexto do CLAUDE.md do cliente em mãos, interpretar:
- O que foi pedido (entregável)
- Formato provável (post, story, carrossel, banner, outro)
- Prazo (se mencionado)
- O que está faltando pra executar

**2.3 — Questionar o que não estiver claro**
Se faltar informação essencial pra execução, perguntar — uma coisa por vez:
- Formato/dimensão (se não estiver claro)
- Data do evento ou prazo (se for urgente ou tiver data relevante)
- Referência visual (se for peça nova sem precedente)
- Qualquer detalhe específico que o cliente mencionou mas que precisaria de confirmação

Não inventar nada. Só avançar quando tiver o suficiente pra executar.

**2.4 — Confirmar entendimento**
Apresentar um resumo antes de atualizar o Notion:
> "Entendi assim: [cliente] precisa de [entregável] em formato [formato] até [prazo]. Correto?"

---

## Passo 3 — Intake manual (sem Notion prévio)

Se a demanda chegou diretamente na conversa (sem passar pelo Notion):

Perguntar em sequência:
1. Qual cliente?
2. O que foi pedido? (pode colar o texto do WhatsApp)
3. Formato do entregável
4. Prazo

Após coletar, aplicar o mesmo Passo 2.3 (questionar o que não estiver claro).

---

## Passo 4 — Atualizar o Notion

Com a demanda entendida e aprovada, atualizar o item no Notion usando `mcp__claude_ai_Notion__notion-update-page`:
- Status: "🔄 Em andamento"
- Tipo: "Cliente" (se não estiver preenchido)
- Origem: "Whats" (se veio do WhatsApp) ou "Manual"
- Preencher campos estruturados: descrição detalhada, prazo

**Linkar ao cliente:** Se a base Tarefas tiver relação com Clientes (`collection://50f3d6af-8abb-8223-b2e9-07f14eb71b8f`), buscar o ID do cliente correto e preencher o campo de relação.

Se veio do intake manual (Passo 3), criar item novo com `mcp__claude_ai_Notion__notion-create-pages`:
- Database: `a373d6af-8abb-8243-8190-077dfd9b7d25`
- Status: "🔄 Em andamento"
- Tipo: "Cliente"
- Origem: "Manual" ou "Whats" conforme o caso

---

## Passo 5 — Copy primeiro

Gerar o texto do entregável com base no contexto do cliente (CLAUDE.md) e na demanda confirmada:

- Headline ou texto do visual (se aplicável)
- Legenda completa: gancho + desenvolvimento + CTA
- Hashtags (quando for post)

Apresentar e aguardar aprovação:
> "Texto pronto. Quer ajustar antes de ir pro visual?"

Não avançar pro visual sem aprovação.

---

## Passo 6 — Visual no Figma

Após copy aprovado, usar `/figma-use` para criar o design diretamente no Figma:
- Dimensões corretas pelo formato confirmado (feed: 1080x1350, story: 1080x1920, carrossel: 1080x1080)
- Identidade visual do cliente conforme CLAUDE.md
- Copy aprovado já posicionado no layout
- Estrutura editável — não agrupar tudo num objeto só

> "Visual criado no Figma. Abre lá pra ajustar o que precisar."

**Fallback — se Figma MCP não estiver disponível:**
Gerar HTML estruturado (variáveis CSS explícitas, dimensões corretas, copy posicionado) e renderizar com Playwright para PNG:
```bash
npx playwright screenshot --viewport-size=[largura],[altura] --full-page "file:///caminho/visual.html" visual.png
```
Salvar em `clientes/[cliente]/03_conteudo/avulsos/[data]-[tema].png`.

**Nunca gerar SVG diretamente** — SVG gerado pelo Claude tem qualidade inconsistente e sempre precisa de ajuste manual. Figma MCP ou HTML→PNG são as opções.

---

## Passo 7 — Atualizar Notion como concluído

Após entrega aprovada, atualizar o item no Notion:
- Status: "✅ Feito"

---

## Regras

- Nunca executar sem entender a demanda — sempre questionar o que não estiver claro
- Nunca criar visual sem copy aprovado
- Nunca usar SVG — preferir Figma MCP; fallback é HTML→Playwright PNG
- Tom e estilo sempre pelo CLAUDE.md do cliente — sem inventar nada fora do briefing
- Demandas avulsas não alteram a pauta mensal — são entregáveis independentes
- Processar uma demanda por vez, não todas de uma vez
- IDs e collections sempre de `_contexto/notion.md` — não hardcodar
