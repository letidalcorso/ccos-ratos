---
name: bomdia
description: >
  Ritual de início de trabalho da Letícia. Lê o Notion, filtra o que está
  pendente e atrasado, mostra no máximo 3 prioridades, sugere uma coisa pra
  começar e oferece bloquear tempo no Google Calendar.
  Use quando o usuário disser "bom dia", "bomdia", "/bomdia", "por onde começo",
  "o que tenho hoje" ou abrir o Codex sem saber o que fazer.
---

# /bomdia — Ritual de Início

## Dependências

- **Notion MCP** — ler tarefas pendentes da base Tarefas
- **Gmail MCP** — verificar se tem email urgente de cliente
- **Google Calendar MCP** — bloquear tempo se necessário
- **Referência:** `_contexto/notion.md` — IDs e coleções do Notion

---

## Passo 1 — Ler o Notion

Acessar a base Tarefas via `collection://a373d6af-8abb-8243-8190-077dfd9b7d25`.

Filtrar todos os itens onde:
- Status NÃO é "✅ Feito", "🗄️ Arquivado" ou "Concluído"
- Tipo = "Cliente" (prioridade) OU Status = "🔥 Hoje" OU Status = "📥 Inbox"

Ordenar por:
1. Status "🔥 Hoje" primeiro
2. Depois "⏳ Aguardando" e "📥 Inbox"
3. Depois por Data de vencimento (mais antigo primeiro)

Se tiver dificuldade com a collection URL, tentar via `mcp__claude_ai_Notion__notion-fetch` na página ☀️ HOJE (`b573d6af8abb8215bcd78186f2300a0b`) que já vem filtrada.

---

## Passo 2 — Montar o briefing

Mostrar no máximo **3 itens**. Nunca mais que isso.

Formato:
```
Bom dia. Aqui o que tá na fila:

🔥 [título da tarefa] — [cliente] — vence [data ou "sem prazo"]
📥 [título] — [cliente]
⏳ [título] — [cliente] — aguardando desde [data]

→ Começa pelo [título do primeiro item]. [motivo em uma frase: "vence hoje", "está atrasado X dias", "cliente esperando"]
```

Se não tiver nada pendente:
```
Nada pendente. Dia livre pra avançar em algo que não é urgente — quer sugestão?
```

Se tiver mais de 3 itens, mostrar só os 3 mais críticos e avisar:
```
(+ X outras tarefas na fila — foca nisso primeiro)
```

---

## Passo 3 — Oferecer bloquear tempo

Depois de mostrar o briefing:

> "Quer que eu bloqueie um tempo no seu calendário pra [tarefa sugerida]? Se sim, quanto tempo você acha que vai levar?"

Se sim: usar Google Calendar MCP pra criar evento a partir de agora (ou horário que ela indicar) com o nome da tarefa.

---

## Passo 4 — Verificar inbox rápido (opcional)

Se a Letícia quiser ("tem email novo?"), verificar Gmail por mensagens não lidas de clientes (ftemper, gene, sodi, smartbase) e resumir em uma linha por email.

Não fazer isso automaticamente — só se ela pedir.

---

## Regras

- Máximo 3 itens — nunca sobrecarregar
- Tom direto e próximo, sem formalidade
- Uma sugestão clara de por onde começar — não deixar a decisão pra ela
- Não listar tudo que existe no Notion — só o que importa agora
- Se tiver tarefa com "📥 Inbox" sem título claro (veio do WhatsApp), mostrar o texto bruto e perguntar se quer processar com `/demanda`
- IDs e collections sempre de `_contexto/notion.md` — não hardcodar
