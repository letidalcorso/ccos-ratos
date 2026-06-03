# iPhone 17 Pro Max — Setup Editorial

Referência pessoal para recriar o setup caso troque de aparelho.

---

## Identidade visual

### Paleta de cor
| Nome | Hex | Uso |
|------|-----|-----|
| Areia | `#E8DFD0` | Fundo de widgets, wallpaper base |
| Grafite | `#1C1C1E` | Texto principal, ícones escuros |
| Terracota | `#C4714F` | Acento, destaques, borda de widgets |
| Creme | `#F5F0E8` | Fundo alternativo claro |

Essa paleta é editorial sem ser fria — tem personalidade, remete ao design impresso.

### Wallpaper
- **Estilo:** textura de papel ou foto editorial com fundo neutro (sem elementos chamativos)
- **Fontes gratuitas:** Gridfiti.com > "iOS wallpapers" / Pinterest "aesthetic iphone wallpaper neutral" / Unsplash ("beige texture", "minimal editorial")
- **Dica:** usar wallpaper levemente diferente por Focus Mode (ex: mais escuro no modo Trabalho, mais quente no Pessoal)

### Transparency Mode
Os widgets Widgy e Scriptable suportam fundo transparente — o wallpaper aparece por baixo com blur sutil. Efeito editorial, nada pesado.

**Como ativar no Scriptable:** os scripts já suportam fundo transparente via `bg.jpg`.

**Como ativar no Scriptable:**
1. Tirar print da tela inicial vazia (sem widgets ainda)
2. Salvar em Arquivos > Scriptable > `bg.jpg`
3. Os scripts carregam esse arquivo automaticamente

### Ícones
Manter os ícones nativos do iOS — sem customização. A estética vem dos widgets e do wallpaper, não dos ícones.

---

## Organização de apps

### Dock (fixo, sempre visível)
```
[ Telefone ]  [ WhatsApp ]  [ Safari ]  [ Notion ]
```

### Tela 1 — Dashboard Pessoal
Layout (de cima para baixo):
- Widget médio (2×1): **Saudação** — "Boa tarde, Letícia." + hora (Scriptable)
- Widget médio (2×1): **Tarefas de hoje** — prazo = hoje, com cliente e status (Scriptable · `notion-today-widget.js`)
- Widget médio (2×1): **Inbox** — demandas novas do WhatsApp via Make (Scriptable · `notion-inbox-widget.js`)
- Row de ícones: Notion / Spotify / Câmera / Mensagens

### Tela 2 — Trabalho
Layout:
- Widget grande (2×2): **Calendário** — próximos eventos (nativo)
- Widget médio (2×1): **Em andamento** — tarefas com cliente + prazo (Scriptable · `notion-tasks-widget.js`)
- Row de ícones: Gmail / Google Calendar / Google Drive / Figma
- Row de ícones: Instagram / Claude / WhatsApp / Safari

### Tela 3 — Lazer
Layout:
- Widget grande (2×2): **Spotify — tocando agora** (capa do álbum), transparente (Scriptable)
- Row de ícones: Netflix / YouTube / Twitter/X / TikTok
- Tela mais livre, pode variar por humor

### App Library
Todo o resto vai para a biblioteca. Sem pastas na home — mantém visual limpo.

---

## Focus Modes

### Trabalho
- **Ativa:** automaticamente Seg–Sex, 9h–18h
- **Tela:** Tela 2 (trabalho)
- **Notificações permitidas:** Gmail, WhatsApp (apenas contatos de clientes marcados como favoritos), Google Calendar
- **Silencia:** Instagram, TikTok, notificações de lazer

### Pessoal
- **Ativa:** automaticamente 18h30 em diante e fins de semana
- **Tela:** Tela 1 (dashboard)
- **Notificações permitidas:** WhatsApp (todos), família, amigos
- **Silencia:** Gmail, notificações de trabalho

### Sono
- **Ativa:** automaticamente 23h–7h
- **Tela:** tela escurecida mínima, só relógio
- **Notificações:** apenas contatos favoritos (emergências)

### Foco (manual)
- **Ativa:** botão de Ação ou Central de Controle
- **Tela:** Tela 1 mínima
- **Notificações:** silêncio total exceto alarmes
- **Uso:** sessões de concentração, reuniões

---

## Atalhos automáticos (app Atalhos)

### 1. Bom dia
**Gatilho:** Horário — 7h, Seg–Sex
**Ações:**
1. Ativar Focus: Pessoal
2. Mostrar notificação com os próximos 3 eventos do calendário
3. Abrir Spotify na playlist "Manhã"

### 2. Começar trabalho
**Gatilho:** Horário — 9h, Seg–Sex
**Ações:**
1. Ativar Focus: Trabalho
2. Abrir Notion (`notion://`)

### 3. Fim de expediente
**Gatilho:** Horário — 18h30
**Ações:**
1. Desativar Focus: Trabalho
2. Ativar Focus: Pessoal
3. Notificação: "Fim de expediente."

### 4. Chegar em casa
**Gatilho:** Localização — ao chegar em casa
**Ações:**
1. Ativar Focus: Pessoal
2. Notificação de boas-vindas opcional

### 5. Hora de dormir
**Gatilho:** Horário — 22h30
**Ações:**
1. Notificação: "Coloca pra carregar."
2. Focus Sono ativa automaticamente às 23h

### 6. Pomodoro / Foco rápido (manual)
**Gatilho:** Botão de Ação (Ajustes > Botão de Ação)
**Ações:**
1. Ativar Focus: Foco
2. Iniciar temporizador de 25 minutos
3. Ao terminar: desativar Focus + notificação "Pausa de 5 min"

---

## Central de Controle
Ajustes > Central de Controle

Ordem:
1. Lanterna
2. Câmera
3. Cronômetro
4. Foco Rápido (atalho)
5. Gravador de tela
6. Scanner de QR code
7. Tamanho do texto
8. Modo avião

---

## Widgets — Nativo vs Scriptable

### Nativos do iOS (sem configuração extra)
| Widget | Onde adicionar | Tela |
|--------|---------------|------|
| Calendário — próximos eventos | Segurar tela > + > Calendário | 1 e 2 |
| Apple Fitness — anéis (Apple Watch) | Segurar tela > + > Fitness | 4 |
| Saúde — Passos | Segurar tela > + > Saúde > Passos | 4 |
| Bateria (mostra Watch + iPhone) | Segurar tela > + > Bateria | Opcional |

Os anéis de atividade puxam dados direto do Apple Watch — nenhum ajuste necessário.

### Scriptable (customizados, pasta `scriptable/`)
Para instalar: Scriptable > + > colar código > salvar > adicionar widget na tela.

| Script | Tamanho | O que mostra |
|--------|---------|--------------|
| `greeting-widget.js` | Médio (2×1) | "Boa tarde, Letícia." + hora em texto grande |
| `notion-tasks-widget.js` | Médio (2×1) | Tarefas em andamento no Notion |
| `spotify-widget.js` | Grande (2×2) | Capa do álbum + faixa tocando |

**Paleta:** seção `CONFIG` no topo de cada script — mudar os hex codes atualiza todos de uma vez.

**Fundo transparente:** salvar print da tela inicial vazia como `bg.jpg` em Arquivos > Scriptable. Todos os scripts carregam automaticamente.

---

## Checklist de configuração (do zero)

**Passo 1 — Base visual**
- [ ] Baixar wallpapers (4 variações: Pessoal / Trabalho / Lazer / Fitness)

**Passo 2 — Transparency Mode**
- [ ] Organizar o layout das telas sem widgets ainda
- [ ] Tirar print de cada tela vazia e salvar como `bg.jpg` em Arquivos > Scriptable

**Passo 3 — Widgets nativos**
- [ ] Adicionar widget Calendário (Telas 1 e 2)
- [ ] Adicionar widget Apple Fitness — anéis (Tela 4)
- [ ] Adicionar widget Saúde — Passos (Tela 4)

**Passo 4 — Widgets Scriptable**
- [ ] Instalar Scriptable
- [ ] Adicionar `greeting-widget.js` (Tela 2, pequeno)
- [ ] Adicionar `notion-tasks-widget.js` — configurar token e database ID
- [ ] Adicionar `spotify-widget.js` — fazer auth no primeiro run

**Passo 5 — Focus Modes e automações**
- [ ] Configurar 4 Focus Modes (Pessoal, Trabalho, Sono, Foco)
- [ ] Criar os 6 atalhos automáticos no app Atalhos
- [ ] Configurar Central de Controle
- [ ] Configurar Botão de Ação (Pomodoro)

**Passo 6 — Finalização**
- [ ] Mover apps não usados para App Library
- [ ] Testar cada Focus Mode manualmente
- [ ] Tirar print final pra guardar como referência

---

## Referências de inspiração
- [Gridfiti — iOS 18 aesthetic ideas](https://gridfiti.com/aesthetic-ios-home-screen-ideas/)
- Pinterest: "aesthetic iphone home screen editorial"
- YouTube: Arthur Winer "Ultimate iPhone Setup 2025", Julia "seasonal iPhone customization"
- Lemon8: tutoriais visuais de customização
