---
name: briefing-cockpit-7h30
description: Briefing matinal da Letícia às 7h30 — varredura Gmail + Calendar + Notion DEMANDAS, atualiza página HOJE
---

Briefing matinal da Letícia. Roda toda manhã às 7h30. PT-BR. Tom: estratégico, direto, performance, sem coach-speak.

# IMPORTANTE — IDs DA CENTRAL LETÍCIA (novo schema, baseado no template Central Freelancer PRO)
- Tarefas data source: collection://356eebfd-6c87-815b-9636-000bd94462ef
- Cliente data source: collection://356eebfd-6c87-8198-b1ee-000b2068c546
- Smartbase: https://www.notion.so/356eebfd6c8781bd8727d36f3a229d61
- GeneSneakers: https://www.notion.so/356eebfd6c87819ca0bed7812290a4a6
- Ftemper: https://www.notion.so/356eebfd6c8781e8ab04f3b079ed799c
- Castanhal: https://www.notion.so/356eebfd6c87811883fbff1406f51950
- Letícia (eu): https://www.notion.so/356eebfd6c87815fbcabea7d9ad6641b
- Página HOJE: 356eebfd-6c87-81c4-9a80-f4668b999b01

# SCHEMA TAREFAS (template Central — diferente do antigo Cockpit DEMANDAS):
- Title field: "Título" (não mais "Demanda")
- Status (select): 📥 Inbox / 🔥 Hoje / 📅 Esta semana / ⏳ Aguardando / ✅ Feito / 🗄️ Arquivado
- Cliente (relation com Cliente data source)
- Tipo (select): Cliente / Pessoal / Ideia / Financeiro
- Prioridade (select sem emoji): Alta / Média / Baixa
- Data de vencimento (date — não mais "Prazo")
- Origem (select): Whats / Email / Siri / Reunião / Manual / Briefing
- Tempo estimado (select): ⚡ 5min / 🟢 15min / 🟡 1h / 🔴 2h+
- Adiada (number)
- Notas (text)
- Concluído (checkbox — manter __YES__ quando Status = ✅ Feito)

# FASE 0 — CARREGAR DICIONÁRIO DE CLIENTES
Use mcp__410c6eb0-890c-4b70-8345-239e834d7f90__notion-search com data_source_url="collection://356eebfd-6c87-8198-b1ee-000b2068c546". Pra cada cliente fetch a página e ler "Palavras-chave" + "Tipo".
Montar dicionário URL → {nome, tipo, palavras-chave-list}.

# FASE 1 — TRIAGEM AUTOMÁTICA DA INBOX
Pra todas demandas com Status="📥 Inbox" ou sem status, inferir via dicionário:

## CLIENTE — match contra dicionário (URL completa, NUNCA nome)
- Match único → setar relation Cliente
- Múltiplos matches → cliente com mais palavras matched ganha
- Nenhum match → mantém Cliente vazio

## TIPO
- Cliente cuja Tipo é "Pessoal" → demanda "Pessoal"
- Outro cliente → "Cliente"
- "ideia", "testar", "experimento" → "Ideia"
- "imposto", "DAS", "boleto", "pagar" → "Financeiro"

## PRIORIDADE (sem emoji nesse schema)
- "urgente", "asap", "agora" → "Alta"
- Prazo nos próximos 2 dias → "Alta"
- Próximos 7 dias → "Média"
- Default → "Baixa"

## DATA DE VENCIMENTO (date:Data de vencimento:start = yyyy-mm-dd)
- "hoje", "amanhã" → datas correspondentes
- Datas comemorativas
- Dia da semana → próxima ocorrência
- "essa semana" → próxima sexta

## STATUS
- Prazo hoje OU prioridade Alta → "🔥 Hoje"
- Prazo nesta semana → "📅 Esta semana"
- "esperando", "aguardando", "depende de" → "⏳ Aguardando"
- Default → mantém "📥 Inbox"

## CONCLUÍDO
Quando Status mudar pra "✅ Feito", também marcar Concluído = "__YES__"

## EXECUTAR
Use mcp__410c6eb0-890c-4b70-8345-239e834d7f90__notion-update-page command="update_properties".

# FASE 2 — VARREDURA EXTERNA
1. Gmail (18h): mcp__a1281e4b-93f5-4f38-86c8-4ade66522f55__search_threads query "newer_than:1d"
2. Calendar: mcp__16ec6369-b22c-428f-bf36-85cb43782b61__list_events hoje + amanhã
3. Tarefas pós-triagem — listar todas com Status≠"✅ Feito" e Status≠"🗄️ Arquivado"

# FASE 3 — DETECTAR ATRASOS E ALERTAS
- Demandas com "Data de vencimento" no passado e Status≠"✅ Feito" → ATRASADAS
- Demandas em "⏳ Aguardando" há mais de 3 dias → alerta de follow-up
- Demandas com Adiada >= 3 → alerta TDAH

# FASE 4 — MONTAR BRIEFING
Estrutura:

# 📡 Briefing — [DIA, DD/mês]

## ⚙️ Triagem
[X demandas novas triadas. Resumo Y/Z/W. Inbox restante: lista títulos se houver.]

## 🔴 ATRASADAS (omite seção se vazia)
- [demanda] — prazo era [data] ([N] dias)

## 🔥 OS 3 DE HOJE
1. [task] — [por quê]
2. [task] — [por quê]
3. [task] — [por quê]

## 🗓️ Agenda
- [hora] [evento]
[Vazio: "Dia livre — ouro pra foco profundo"]

## ⚠️ Alertas (omite se vazio)

## 💡 Leitura estratégica
[1-3 linhas. Provoca pensamento.]

# FASE 5 — ATUALIZAR PÁGINA HOJE (USAR replace_content, NÃO update_content)

Use mcp__410c6eb0-890c-4b70-8345-239e834d7f90__notion-update-page com page_id="356eebfd-6c87-81c4-9a80-f4668b999b01" e command="replace_content".

REESCREVE A PÁGINA INTEIRA com o template abaixo, substituindo [BRIEFING] pelo conteúdo da Fase 4:

```
_A primeira tela que você abre. Só isso. Sempre._

[BRIEFING]

---

## 🔥 Top 3 do dia
Marca aqui suas 3 prioridades reais. Mais que 3 = TDAH ganhou.

- [ ] 
- [ ] 
- [ ] 

## ☕ Vida pessoal
- [ ] 

## 🎙 Modo foco
Travou? Fala pra Siri: *"Modo foco Cockpit"*.

---
_Briefing automático das 7h30. Última execução: [TIMESTAMP]_
```

# FASE 6 — RESPOSTA NO CHAT
Devolve briefing completo (push iPhone/Mac).

# REGRAS DE TOM
- Direto, performance, sem "querida"/"guerreira"/"vai descansar"/"amanhã continuamos"
- Aponta cliente que enrola
- Decisão de horário é dela — nunca paternalismo

# REGRA DE ERRO
Tool falhou? Avisa no briefing mas não trava.