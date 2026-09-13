# Auditoria de instruções — Etapa 1

Escopo: só os caminhos da lista. Sem migração, sem cópia, sem grep amplo.
`como-usar-melhor.docx` ignorado (existe `.md`).
Data: 2026-09-13.

Notas de path no disco:
- `./AGENTS.md` (raiz) **não existe** — só `_contexto/AGENTS.md`
- `./clientes/Letícia Particular/CLAUDE.md` **não existe** — arquivo real: `./Letícia Particular/CLAUDE.md`

---

## 1. Por arquivo (caminho + bullets)

### `_contexto/AGENTS.md`
- Onboarding curto em inglês pra agentes: ordem de leitura e regras mínimas.
- Aponta pra CLAUDE, `_contexto/empresa.md`, preferencias, estrategia, `marca/design-guide.md`, templates/skills e catálogo de ferramentas.
- Pipeline visual com Playwright (screenshot 1080×1350) referenciando template de carrossel.
- Onde salvar: `conteudo/`, `clientes/<client>/conteudo/`, skills em `.claude/skills/`.
- Paths misturam `clientes/` e `clients/`; papel sobrepõe o que um AGENTS de raiz deveria fazer.

### `_contexto/CLAUDE.md`
- OS Solz Lab completo: quem é, pastas, clientes ativos (Gene, Sodi, FTemper, Smartbase, Castanhal), rituais, skills.
- Bloco “Colaboração Claude + Codex” (`/codex:rescue`) — ausente no root.
- Sem bloco explícito de trava 1, higiene de sessão, arquivo morto, nem mapa de save pra `voz-leticia.md` / `revisao.md`.
- Duplicata defasada do `./CLAUDE.md` (raiz é a versão mais completa).

### `_contexto/como-usar-melhor.md`
- Diagnóstico de uso (01/06/2026): sessão misturada, app vs Code, `@`, `/compact`, estrategia desatualizada, ads duplicados.
- Pendências datadas (Smartbase junho, Gene, FTemper, Sodi, limpeza de settings).
- Regras humanas úteis (1 sessão = 1 tema) misturadas com checklist operacional velho.
- Snapshot + manual de hábito — não é regra viva de agente.

### `_contexto/como-usar-o-claude.md`
- Manual da Letícia: chat = memória temp; arquivo = permanente.
- Como abrir guia/aba no VSCode, `/iniciar`, `/bomdia`, `/atualizar`, `/syncar`.
- Explica travas 1 e 2, voz, quando abrir guia nova vs ficar.
- 100% manual Claude/Cursor — **fora** do AGENTS novo por regra da etapa.

### `_contexto/preferencias.md`
- Tom: descontraído, próximo, direto; evitar emoji decorativo, texto longo, corporativês.
- Anti-IA: sem travessão, sem “não é X, é Y”, sem Title Case.
- Postura de papel (sênior conduz; sem pergunta-oferta de execução no fechamento).
- Fluxo Figma (avisar + link do node) e regras de arquivo morto vs backup de finalizados.
- Fonte viva — AGENTS novo só aponta, não cola.

### `_contexto/revisao.md`
- Checklist da trava 1: nada chega na Letícia sem passar por aqui (`/revisar`).
- Anti-IA, travas por cliente, design (inclui render Playwright + tema escuro), repetição, completude.
- Travas detalhadas de Smartbase (markup, nota, Paraguai no site) + Gene / FTemper / Sodi.
- Mantém como arquivo de qualidade; AGENTS novo só referencia (e no futuro a trava Smartbase fica só no cliente).

### `_contexto/voz-leticia.md`
- Voz central da Letícia (transcripts reais); skill `/escreve` lê sempre.
- Regras acionáveis + anti-IA inegociável + adaptação por canal (post / whats / nota).
- Exemplos de ritmo; no fim: voz dela + travas do cliente (anti-mistura, incl. Smartbase).
- Mantém; AGENTS novo só aponta.

### `./AGENTS.md`
- **Ausente no disco.** Nada a auditar no conteúdo.
- Gap: onboarding de agente hoje só em `_contexto/AGENTS.md`.

### `./CLAUDE.md`
- Fonte mais completa do OS: pastas, arquivo morto, clientes, rituais, skills, travas 1 e 2, higiene de sessão, aprender, atualizar contexto.
- Trava anti-mistura explícita; mapa de save inclui `voz-leticia.md`, `revisao.md`, CLAUDE do cliente.
- Resumo de clientes ativos **inclui Smartbase** (não vai pro AGENTS novo).
- Longo demais e mistura OS + resumo de cliente + processo — destilar, não copiar.

### `clientes/castanhal/CLAUDE.md`
- Cliente sob demanda, sem escopo fixo (stand, campanha, peças).
- Cada projeto = subpasta em `projetos/`.
- Pede leitura de empresa + preferencias Solz antes.
- Leve; fica no cliente. AGENTS só ponte genérica.

### `clientes/ftemper/CLAUDE.md`
- Distribuidora gaúcha; 6 posts/mês; fee R$500; público serralheiro.
- Pilares, tom, identidade (azul `#005AD4`, Morganite/Sora, glassmorphism) e fluxo de produção.
- Contexto: 1 ano, +120 seguidores, sem verba além do fee.
- Mantém no cliente; AGENTS não embute resumo.

### `clientes/genesneakers/CLAUDE.md`
- D2C tênis; origem fabril interna vs posição externa (curadoria / markup nacional).
- Escopo IG/TikTok/ads pós-orgânico; prioridade vendas (abr/2026) com CTA claro.
- Vocabulário trava, pilares, IV escura, fluxo copy→design, WhatsApp informal.
- Mantém no cliente; AGENTS não embute resumo.

### `Letícia Particular/CLAUDE.md` _(path real; lista apontava sob `clientes/`)_
- Espaço pessoal: vida, Scriptable, capas Notion, setup iPhone.
- `vida/` privado / gitignore; não misturar com cliente.
- Fora do AGENTS de agência (no máximo “existe pasta particular”).

### `clientes/smartbase/CLAUDE.md`
- Contexto denso: sócia do dono, gap de confiança, herói linha 17, CTWA, GMB, marca, voz, site Shopify.
- Status por área (`04_campanhas/`, `conteudo/`, `site/`), design tokens, fluxos post/site.
- **Fora do AGENTS novo** (regra SEM Smartbase).
- Mantém na pasta do cliente enquanto existir no repo; não sobe pro OS compartilhado.

### `clientes/sodi/CLAUDE.md`
- Hub educação atendimento; Lele + Soi; produto S.O.S Atendi (7 módulos).
- Objetivo: comunidade antes do lançamento; tom próximo sem academicismo.
- Curto; mantém no cliente.

### `clientes/smartbase/conteudo/voz-smartbase.md`
- Guia de copy Smartbase (take primeiro, fato concreto, LightCopy, vetos markup/nota/Paraguai site).
- Mix Decifra / Casa / desejo / cultura; humanização; teste rápido pré-envio.
- **Fora do AGENTS novo.** Mantém no cliente.

---

## 2. Tabela de destino

| Arquivo | Destino | 1 linha |
|---|---|---|
| `_contexto/AGENTS.md` | **INCLUIR NO AGENTS NOVO** (esqueleto) → depois **ARQUIVAR** | Base curta do AGENTS; aposentar após unificar na raiz. |
| `_contexto/CLAUDE.md` | **DESCARTAR** (ou arquivar zip) | Duplicata defasada do root `CLAUDE.md`. |
| `_contexto/como-usar-melhor.md` | **ARQUIVAR** | Snapshot jun/2026 + pendências; não é regra viva. |
| `_contexto/como-usar-melhor.docx` | **DESCARTAR** | Espelho do `.md`. |
| `_contexto/como-usar-o-claude.md` | **ARQUIVAR** | Manual Claude/Cursor; não entra no AGENTS. |
| `_contexto/preferencias.md` | **MANTER** + **INCLUIR NO AGENTS NOVO** | Ponte: ler preferencias; não colar. |
| `_contexto/revisao.md` | **MANTER** + **INCLUIR NO AGENTS NOVO** | Ponte trava 1; checklist fica no arquivo. |
| `_contexto/voz-leticia.md` | **MANTER** + **INCLUIR NO AGENTS NOVO** | Ponte voz / `/escreve`; não colar. |
| `./AGENTS.md` | **INCLUIR NO AGENTS NOVO** (criar) | Slot vazio na raiz — destino do AGENTS curto. |
| `./CLAUDE.md` | **ARQUIVAR** após destilar *(ou enxugar a MANTER mínimo)* | Fonte rica; AGENTS herda regras duráveis, sem Smartbase e sem manuais. |
| `clientes/castanhal/CLAUDE.md` | **MANTER** | Contexto de cliente; AGENTS só diz “ler CLAUDE do cliente”. |
| `clientes/ftemper/CLAUDE.md` | **MANTER** | Idem. |
| `clientes/genesneakers/CLAUDE.md` | **MANTER** | Idem. |
| `Letícia Particular/CLAUDE.md` | **MANTER** | Pessoal; fora do AGENTS de agência. |
| `clientes/smartbase/CLAUDE.md` | **MANTER** (pasta cliente) · **não** no AGENTS | SEM Smartbase no AGENTS novo. |
| `clientes/sodi/CLAUDE.md` | **MANTER** | Contexto de cliente. |
| `clientes/smartbase/conteudo/voz-smartbase.md` | **MANTER** (cliente) · **não** no AGENTS | Voz do cliente; fora do OS. |

Legenda: **MANTER** = fonte viva onde está · **ARQUIVAR** = sai do caminho quente · **DESCARTAR** = redundante · **INCLUIR NO AGENTS NOVO** = regra/ponte no AGENTS curto (sem colar o arquivo).

---

## 3. AGENTS futuro (proposta — não criar ainda)

Curto. Sem manuais Claude/Cursor. Sem Smartbase. Sem duplicar preferencias / revisao / voz / CLAUDE de cliente.

```markdown
# AGENTS.md — Solz Lab

## Negócio
Freelance de marketing digital (Solz Lab / SolzLab). Conteúdo, campanha, marca, design.
No início de trabalho relevante: `_contexto/empresa.md`, `_contexto/preferencias.md`, `_contexto/estrategia.md`.

## Pastas
- `_contexto/` memória do sistema
- `clientes/[nome]/` um cliente por pasta — fonte: `CLAUDE.md` do cliente
- `marca/` identidade Solz
- `templates/` skills e catálogo de ferramentas
- `clientes destivados/` arquivo morto (não usar como ativo)
- `Letícia Particular/` pessoal (não misturar com cliente)

## Antes de trabalhar
1. Preferências: `_contexto/preferencias.md`
2. Texto na voz dela: `_contexto/voz-leticia.md`
3. Cliente: `clientes/[nome]/CLAUDE.md` (prevalece sobre qualquer resumo)
4. Visual: design-guide do cliente ou `marca/design-guide.md` · entrega em SVG

## Clientes ativos (só ponte — sem persona/tom aqui)
- GeneSneakers → `clientes/genesneakers/`
- Sodi → `clientes/sodi/`
- FTemper → `clientes/ftemper/`
- Castanhal → `clientes/castanhal/` (sob demanda)

Anti-mistura: público, tom e travas de um cliente nunca vazam pro outro.

## Qualidade
- Trava 1: checklist `_contexto/revisao.md` antes de entregar (`/revisar`).
- Trava 2: correção permanente → `/aprender` e salvar no arquivo certo
  (preferencias / voz / revisao / CLAUDE do cliente / empresa / estrategia / CLAUDE raiz).
- Arte: honestar se é rascunho pra Figma; não entregar cru.

## Skills e rituais
- Antes da tarefa: skill em `.claude/skills/` ou `.claude/commands/`?
- `/bomdia` · `/demanda` · `/planejamento` → `/conteudo-social`
- Contexto: `/atualizar` · voz: `/escreve`
- Tarefa repetível sem skill: perguntar se cria.

## Arquivo morto
Repo leve. Só o que não está referenciado. Listar → confirmar cópia no Drive → apagar.
Binário pesado fora do git.
```

De fora de propósito: `como-usar-*`, tips Claude/Codex/Cursor, resumos longos de cliente, qualquer bloco Smartbase, Playwright colado, duplicata `_contexto/CLAUDE.md`.

---

## 4. Achados pra próxima etapa (só nota — não migrar)

1. Criar `AGENTS.md` na raiz a partir do esqueleto acima; aposentar `_contexto/AGENTS.md` e `_contexto/CLAUDE.md`.
2. Manuais humanos (`como-usar-*`) → arquivo / docs pra Letícia, não pro agente.
3. Root `CLAUDE.md` é o principal a enxugar: tira Smartbase e resumos de cliente; deixa ponte.
4. Smartbase continua nos arquivos do cliente; some só do AGENTS/OS compartilhado.
5. Path mental: Particular não está sob `clientes/`.

— Fim da Etapa 1. Nenhuma cópia/migração feita.
