---
name: tria-inbox-cockpit
description: Triagem on-demand do Notion DEMANDAS — roda quando Letícia pede ("tria minha inbox") fora do horário do briefing
---

Triagem on-demand da Central Letícia. Letícia chamou esse trigger porque jogou demandas brutas no Tarefas e quer organizar agora.

# IMPORTANTE — IDs DA CENTRAL LETÍCIA
- Tarefas data source: collection://356eebfd-6c87-815b-9636-000bd94462ef
- Cliente data source: collection://356eebfd-6c87-8198-b1ee-000b2068c546

# OBJETIVO
Processar TODAS as demandas no Tarefas com Status="📥 Inbox" ou sem status. NÃO faz briefing, só tria.

# PASSO 1 — CARREGAR DICIONÁRIO DE CLIENTES
Use mcp__410c6eb0-890c-4b70-8345-239e834d7f90__notion-search com data_source_url="collection://356eebfd-6c87-8198-b1ee-000b2068c546". Ler "Palavras-chave" + "Tipo" de cada cliente.

# PASSO 2 — LISTAR INBOX
mcp__410c6eb0-890c-4b70-8345-239e834d7f90__notion-search com data_source_url="collection://356eebfd-6c87-815b-9636-000bd94462ef".

# PASSO 3 — PRA CADA DEMANDA EM INBOX, INFERIR:

## CLIENTE — match contra dicionário (URL completa, NUNCA nome)
NUNCA passe só nome. SEMPRE URL: "https://www.notion.so/<id>"

## TIPO
- Cliente Tipo "Pessoal" → demanda "Pessoal"
- Outro cliente → "Cliente"
- "ideia", "testar", "experimento" → "Ideia"
- "imposto", "DAS", "boleto", "pagar" → "Financeiro"

## PRIORIDADE (sem emoji)
- "urgente", "asap", "agora" → "Alta"
- Prazo nos próximos 2 dias → "Alta"
- Próximos 7 dias → "Média"
- Default → "Baixa"

## DATA DE VENCIMENTO (date:Data de vencimento:start)
- "hoje", "amanhã" → datas
- dia da semana → próxima ocorrência
- "essa semana" → próxima sexta

## STATUS
- Prazo hoje OU prioridade Alta → "🔥 Hoje"
- Prazo nesta semana → "📅 Esta semana"
- "esperando", "aguardando", "depende de", pergunta enviada → "⏳ Aguardando"
- Default → mantém "📥 Inbox"

# PASSO 4 — APLICAR
mcp__410c6eb0-890c-4b70-8345-239e834d7f90__notion-update-page command="update_properties" pra cada demanda.

# PASSO 5 — DETECTAR CLIENTES NÃO CADASTRADOS
Se mencionar nome próprio que não bate com Smartbase/GeneSneakers/Ftemper/Castanhal/Letícia em 2+ demandas, REPORTAR como "possível cliente novo".

# PASSO 6 — REPORTAR (PT-BR, direto)

✅ **Triagem feita** — [N] demandas processadas

📊 [X] Cliente · [Y] Pessoal · [Z] Ideia · [W] Financeiro
🔥 [N] Hoje · 📅 [N] Esta semana · ⏳ [N] Aguardando · 📥 [N] Inbox (sem decisão)

⚠️ **Atenção:**
- [Demandas com prazo HOJE ou atrasadas]
- [Possíveis clientes novos]

❓ **Precisa da sua mão em:**
- [Demandas que ficaram em Inbox sem decisão clara]

REGRAS DE TOM: direto, performance, sem coach-speak.