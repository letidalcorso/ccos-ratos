# Cockpit no Botão de Ação — iPhone 17

Compilação da sessão de planejamento e construção dos atalhos.
Data: 19 de maio de 2026.

---

## A ideia central

Botão de Ação do iPhone 17 não vira UM atalho. Vira um **menu de atalhos** acionado com 1 toque longo. O Camera Control fica livre pra foto (swipe file orgânico).

Princípio: reduzir fricção entre **insight e execução**. Atacar 3 gargalos clássicos do estrategista freelancer:
1. Captura dispersa (você consome e pensa o tempo todo)
2. Context switching entre clientes (cada troca custa ~15min de re-imersão)
3. Entrada no estado de criação (precisa de ritual)

---

## Os 8 atalhos do menu Cockpit

Ordem por frequência real de uso (alto pra baixo):

| # | Atalho | Função | Por que funciona |
|---|--------|--------|------------------|
| 1 | 📥 Capturar Inbox | Texto → Inbox no Notion (status auto) | Fricção zero. Nada se perde. |
| 2 | 🎙️ Voice → Texto | Áudio → transcrição → Inbox | Suas melhores ideias vêm caminhando, no banho. |
| 3 | ✅ Adicionar Tarefa | Cliente + Prazo + Texto → Tarefa formal | Triagem na entrada quando você JÁ SABE que é tarefa. |
| 4 | ⏱️ Modo Criação 90min | Não Perturbe + Timer + Notion + playlist | Ritual de entrada. 90min = ciclo ultradian. |
| 5 | 💬 Cliente | Submenu com 4 clientes → WhatsApp/email | Reduz fricção de troca de contexto. |
| 6 | 📸 Swipe File | Câmera → álbum Referências | Banco visual organizado = repertório criativo. |
| 7 | 🔗 Salvar Reel/Post | URL da clipboard → Notion com tag | Consumo passivo vira arquivo estratégico. |
| 8 | 🧠 Brain dump | Voice → texto → Inbox com tag "dump" | Descarrego mental antes de criar. |

**Bonus 9 sugerido:** **Hook radar** — registra todo hook bom visto nas últimas 24h. Sexta revisa = banco de headlines pronto.

---

## Arquitetura: 2 atalhos vs menu vs híbrido

A decisão final foi por **2 atalhos separados** (Inbox + Tarefa) em vez de um só com bifurcação interna. Razão:

- **Capturar Inbox** = 1 input só (texto) + status auto. Pra ideia bruta. Fricção zero.
- **Adicionar Tarefa** = texto + cliente + prazo + status. Quando JÁ SABE que é tarefa.

Misturar os dois polui a Inbox e quebra confiança no sistema (clássico ciclo: "tenho Notion mas não uso").

---

## A descoberta crítica sobre Notion + iOS Shortcuts

Tentamos várias ações da integração oficial do Notion no iOS Shortcuts. Aprendizados:

### O que NÃO funciona

- ❌ **"Adicionar página ao banco"** clássica não existe mais
- ❌ **"Criar documento sem abrir"** NÃO respeita o template default da database. Mesmo com template setado pra Status = "📥 Inbox", a página criada via Shortcut vem sem status.
- ❌ Setar default via API é instável

### O que funciona (Plan B confirmado)

A ação **"Adicionar status"** do Notion no Shortcuts permite setar status manualmente depois da criação:

```
1. Pedir Texto com "qual a demanda, lele?"
2. Criar documento sem abrir
   ├─ Título: Resposta Fornecida
   ├─ Base: Tarefas
   ├─ Conta: solz lab
   └─ Espaço: lets make some money
3. Adicionar status
   ├─ Status: 📥 Inbox
   ├─ Página: variável "Documento criado" (saída da ação 2)
   ├─ Conta: solz lab
   └─ Espaço: lets make some money
```

### Pega-ratoeiras descobertas

1. **Variável "Pedir Entrada" pode apontar errado** se tiver múltiplas ações "Pedir" no mesmo atalho. No teste apareceu título = "19 de mai. de 2026, 11:14" porque pegou a Data em vez do Texto.

2. **Confundir "Resposta Fornecida" com nome da pergunta**: o badge azul claro é a VARIÁVEL (resposta), não a string literal da pergunta.

3. **A ação do Notion vem recolhida por padrão** — precisa tocar na seta ⌄ pra revelar Título, Corpo, Base, Conta, Espaço.

---

## Estado atual do banco Tarefas no Notion

**Workspace:** lets make some money
**Conta:** solz lab
**Banco:** 📒 Tarefas
**URL:** notion.so/f7f3d6af8abb822bb3b601818a5cfcb6

### Propriedades disponíveis
- Título (title)
- Status (📥 Inbox, 🔥 Hoje, 📅 Esta semana, ⏳ Aguardando, ✅ Feito, 🗄️ Arquivado, Em andamento, Concluído, Não iniciada)
- Status 1 (Não iniciada, Em andamento, Concluído)
- Cliente (relação)
- Projeto (relação)
- Leads (relação)
- Data de vencimento (date)
- Agendar para (date)
- Prioridade (Baixa, Média, Alta)
- Tag (Financeiro, Projetos, Vendas, Outros, Job fixo, Marketing, CLT, Pessoal)
- Origem (Email, Whats, Siri, Reunião, Manual, Briefing, Prospecção, Rotina)
- Tipo (Cliente, Pessoal, Ideia, Financeiro)
- Tempo estimado (⚡5min, 🟢15min, 🟡1h, 🔴2h+)
- Notas (text)
- Responsável (person)
- Adiada (number)
- Atrasado? (formula)
- Resumo (relação)
- Social Media (relação)

### Modificações feitas no Notion durante a sessão
- ✅ Template "💌 Nome da tarefa" — Status alterado de "🗄️ Arquivado" → "📥 Inbox"
- ✅ Template "💌 Nome da tarefa" — campo Notas limpo (era placeholder antigo)

⚠️ Essas mudanças no template **NÃO** ajudam o atalho do iOS (descoberto na hora), mas mantêm o template limpo pra uso manual no Notion.

---

## Próximos passos (onde paramos)

### Decisão pendente — qual caminho seguir

**Opção 1 (recomendada):** Terminar o atalho "Capturar" simples primeiro
- Estrutura: Pedir Texto → Criar página → Adicionar status (📥 Inbox)
- Depois construir "Adicionar Tarefa" em paralelo

**Opção 2:** Pular direto pro "Adicionar Tarefa" completo
- Estrutura: Texto + Prazo + Cliente + Status auto (🔥 Hoje)
- Mais fricção por captura mas estrutura completa

**Opção 3:** Atalho único com bifurcação inicial
- Menu "É ideia ou tarefa?" → bifurca pros dois caminhos
- Mais complexo de montar, atende os 2 usos

### Sobre o atalho "Adicionar Tarefa" proposto

Estrutura sugerida com Status integrado (faltava na proposta original):

```
1. Ditado/Texto → Título
2. Perguntar Data → Prazo
3. Escolher do Menu → Cliente:
   - Smartbase
   - GeneSneakers
   - Ftemper
   - Castanhal
   - 🔸 Sem cliente
4. Criar página (Tarefas)
   ├─ Título: Título
   ├─ Data de vencimento: Prazo
   └─ Cliente: Cliente
5. Adicionar status → 🔥 Hoje (ou menu pra escolher)
```

**Lógica do status:** se está cadastrando com prazo, já é tarefa real — pula triagem da IA, vai direto pra "🔥 Hoje" ou "📅 Esta semana".

---

## Atalho-mãe (Menu Cockpit)

Quando todos os atalhos individuais estiverem prontos, montar o menu:

1. Atalhos → + Novo atalho → Nome: "Cockpit"
2. Ação **"Escolher do Menu"** com 8-9 itens (emoji + nome)
3. Em cada item: ação **"Executar Atalho"** apontando pro respectivo
4. Ajustes → Botão de Ação → Atalho → "Cockpit"

Resultado: 1 toque longo no botão lateral → menu aparece.

### Pro tip avançado

Com app **Actions** (nativo iOS 18+), **duplo toque longo** roda OUTRO atalho. Dedicar isso direto pro "Modo Criação", sem passar pelo menu.

---

## Setup ainda pendente

### Apps necessários (verificar)
- [x] Notion (logado, conta solz lab, workspace lets make some money)
- [ ] Whisper Transcription (pra atalhos 2 e 7) — ou usar transcrição nativa Apple Intelligence
- [ ] WhatsApp (pra atalho 5)
- [ ] Spotify/Apple Music (pra atalho 4)

### Ajustes do iOS
- [ ] Apple Intelligence ativado em PT-BR
- [ ] Foco "Não Perturbe" configurado
- [ ] Foco "Trabalho" criado (opcional, pro atalho 4)

---

## Princípios estratégicos que guiaram as decisões

1. **Inbox ≠ Tarefas** — misturar os dois polui o sistema em 3 dias
2. **Fricção na captura mata a captura** — quanto mais campos, menos você usa
3. **Triagem em batch > triagem na entrada** — captura primeiro, processa depois (lógica GTD)
4. **Ritual de entrada cria estado** — Modo Criação não é só timer, é gatilho neurológico condicionado
5. **Consumo passivo vira arquivo estratégico** — sem isso, creator perde repertório
6. **Camera Control livre = swipe file orgânico** — não desperdiçar o botão lateral com câmera

---

---

## Sessão 2 — 25 de maio de 2026

### Atalho construído: Capturar Referência (Share Sheet)

Equivalente ao item #7 do menu Cockpit ("Salvar Reel/Post").

**Problema descoberto:** o Apple Intelligence "Resumir Texto" falha com posts do Instagram — a plataforma bloqueia acesso externo ao conteúdo, retornando HTML ilegível ou vazio.

**Solução adotada:** baseada em um atalho de captura de receitas encontrado como referência. A abordagem: buscar o HTML bruto da URL e mandar direto pra Claude API — o modelo aguenta conteúdo bagunçado e extrai o que há de útil, inclusive quando o HTML é parcial.

**Por que funciona melhor que Resumir Texto:**
- Apple Intelligence precisa de texto limpo — quebra com HTML
- Claude lida com HTML bruto e extrai o que importa
- Se não tiver conteúdo, responde "Sem conteúdo extraível" em vez de travar

**Estrutura final do atalho:**

```
1. Receber (URLs + Imagens) de Compartilhamento — se não houver entrada: Continuar
2. Obter conteúdo de → Entrada do Atalho
3. Obter conteúdo de URL → Conteúdos do URL (HTML bruto)
4. Texto — prompt para Claude:
   "The following is raw HTML from an Instagram post, reel, or website.
   Extract any readable text: captions, descriptions, text overlays, titles.
   If no readable content is available, say 'Sem conteúdo extraível'.
   Output in Portuguese:
   Título sugerido / Ideia central / Como adaptar / Cliente sugerido
   Link: [Entrada do Atalho]
   HTML: [Conteúdos do URL]"
5. Obter conteúdo de URL — POST https://api.anthropic.com/v1/messages
   Headers: x-api-key, anthropic-version: 2023-06-01, content-type: application/json
   Body: model claude-haiku-4-5-20251001, max_tokens 500, messages com o Texto do passo 4
6. Obter valor do dicionário → chave: content
7. Obter Primeiro Item da lista
8. Obter valor do dicionário → chave: text
9. Criar nota em pasta "Referências"
```

**Ativar no Share Sheet:** ... → Detalhes → "Mostrar na Folha de Compartilhamento"

**Arquivo de referência visual:** `Letícia Particular/scriptable/atalho-capturar-referencia.html`

**Nota sobre API key:** guardada em local seguro. Não registrada neste arquivo.

---

### Pesquisa feita nesta sessão

- **Speak AI** (speakai.co) — transcreve Reels por URL, gratuito para uso manual, requer plano pago para API. Descartado em favor da abordagem Claude API direta.
- **Apify Instagram Reel Analyzer** — mais robusto mas complexo demais para esse uso.
- Decisão: Claude API é mais simples, já integrado, sem conta extra necessária.

---

### Próximos atalhos pendentes do Cockpit

- [ ] #1 Capturar Inbox (Texto → Notion status 📥 Inbox) — arquitetura já documentada na sessão 1
- [ ] #2 Voice → Texto (ditado → Inbox)
- [ ] #3 Adicionar Tarefa (cliente + prazo + texto → Notion)
- [ ] #4 Modo Criação 90min
- [ ] #5 Cliente (submenu WhatsApp)
- [ ] #6 Swipe File (câmera → álbum)
- [x] #7 Capturar Referência (share sheet → Claude → Notes) ← **concluído nesta sessão**
- [ ] #8 Brain dump
- [ ] Menu Cockpit-mãe (une todos os atalhos)

---

## Glossário rápido

- **Cockpit** — sistema de organização no Notion (4 telas) + briefing automático 7h30
- **Inbox** — banco de captura crua, sem categoria
- **Tarefas** — banco de ação concreta com cliente + prazo
- **Swipe file** — biblioteca pessoal de referências visuais/copy/hooks
- **Brain dump** — descarrego mental (vs captura útil — diferente intenção)
