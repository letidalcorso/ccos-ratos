# Mapa do Notion — Referência para Skills

Use este arquivo como fonte única de verdade para IDs e coleções do Notion da Letícia.
Nunca hardcodar IDs nas skills — sempre referenciar este arquivo.

---

## Workspace principal

- **Nome:** freelancer | controle
- **ID da página raiz:** `f913d6af8abb83e7b393813d57ea43cf`

---

## Painéis principais

| Painel | ID |
|--------|-----|
| Painel de Produtividade | `0643d6af8abb8217983501f2e51836f0` |
| Painel de Projetos | `02e3d6af8abb835298db81b873f09294` |
| Painel de Marketing | `eaf3d6af8abb8201b9e2810ab26fd1fe` |
| ☀️ HOJE (view diária) | `b573d6af8abb8215bcd78186f2300a0b` |

---

## Databases

### Tarefas
- **Collection URL:** `collection://a373d6af-8abb-8243-8190-077dfd9b7d25`
- **Uso:** Tarefas do dia a dia — clientes, pessoal, inbox
- **Campos:**
  - `Título` — texto principal
  - `Status` — `📥 Inbox` | `🔥 Hoje` | `📅 Esta semana` | `⏳ Aguardando` | `Em andamento` | `✅ Feito` | `🗄️ Arquivado` | `Concluído`
  - `Tipo` — `Cliente` | `Pessoal` | `Ideia` | `Financeiro`
  - `Prioridade` — `Alta` | `Média` | `Baixa`
  - `Origem` — `Whats` | `Email` | `Manual` | `Briefing` | `Reunião` | `Siri` | `Prospecção` | `Rotina`
  - `Tempo estimado` — `⚡ 5min` | `🟢 15min` | `🟡 1h` | `🔴 2h+`
  - `Data de vencimento` — date
  - `Agendar para` — date (quando pretende fazer, diferente do prazo)
  - `Cliente` — relação → Clientes DB
  - `Projeto` — relação → Projetos DB *(novo)*
  - `Notas` — texto livre
  - `Adiada` — número (quantas vezes foi adiada — alerta em 3+)
  - `Concluído` — checkbox
- **Integração Make:** escreve aqui quando mensagem chega via Z-API/WhatsApp

### Projetos
- **Collection URL:** `collection://52e3d6af-8abb-82d2-90f4-07b08f912dfd`
- **Uso:** Projetos maiores com escopo definido
- **Campos:**
  - `Nome` — título
  - `Status` — `Não iniciado` | `Onboarding` | `Pesquisa` | `Em andamento` | `Off boarding` | `Feito`
  - `Fase` — `Imersão` | `Planejamento` | `Execução` | `Entregue` *(novo)*
  - `Tipo do projeto` — multi-select: `Website` | `Branding` | `Marketing` | `Design` | `Stand` | `Campanha` | `Social media` | `Pessoal` | `Outros`
  - `Cliente` — relação → Clientes DB
  - `Tarefa` — relação → Tarefas DB (bidirecional com Tarefas.Projeto)
  - `Data do projeto` — date range
  - `Valor` — número (R$)
  - `Fatura`, `Contrato`, `Proposta`, `Reuniões`, `Feedback` — relações com outros DBs financeiros

### Clientes
- **Collection URL:** `collection://50f3d6af-8abb-8223-b2e9-07f14eb71b8f`
- **Uso:** Registro dos clientes ativos
- **Clientes cadastrados:** FTemper, GeneSneakers, Sodi, Smartbase, Castanhal

### Resumo / Financeiro
- **Collection URL:** `collection://8153d6af-8abb-83f9-af4b-071154280c5e`
- **Uso:** Resumo mensal, controle financeiro — linkado a Tarefas e Projetos

---

## Integração Make

- **Cenário ativo:** WhatsApp pessoal (Z-API) → Notion Tarefas
- **Formato de mensagem:** `cliente: descrição` (enviada pra si mesmo no WhatsApp)
- **Formato com prazo:** `cliente: descrição | DD/MM` — Make lê a parte depois de `|` como data de vencimento
- **Campos preenchidos automaticamente:** Título, Status=`📥 Inbox`, Origem=`Whats`
- **Token da integração:** `[REDACTED — guardar no .env ou no Make diretamente]`
- **Integração compartilhada com:** Painel de Produtividade (página pai)

> **Atenção:** o formato com prazo (`| DD/MM`) ainda precisa ser configurado no cenário do Make para extrair e mapear a data. Por enquanto, o Make preenche apenas Título e Status.

---

## Como usar nas skills

### Ler tarefas pendentes (bomdia/demanda)
```
mcp__claude_ai_Notion__notion-query-database-view
collection: a373d6af-8abb-8243-8190-077dfd9b7d25
filtro: Status não é "✅ Feito", "🗄️ Arquivado", "Concluído"
```

### Criar nova tarefa
```
mcp__claude_ai_Notion__notion-create-pages
database_id: a373d6af-8abb-8243-8190-077dfd9b7d25
campos obrigatórios: Título, Status
campos opcionais: Tipo, Origem, Cliente (relação), Projeto (relação), Data de vencimento, Prioridade
```

### Atualizar status de tarefa
```
mcp__claude_ai_Notion__notion-update-page
page_id: [id do item]
Status: "Em andamento" | "✅ Feito" | etc.
```

### Ver página ☀️ HOJE
```
mcp__claude_ai_Notion__notion-fetch
page_id: b573d6af8abb8215bcd78186f2300a0b
```
