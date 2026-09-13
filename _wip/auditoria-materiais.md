# Auditoria de materiais — Etapa 2

**Data:** 2026-09-13  
**Repo:** workspace atual (SolzLab / Claude OS)  
**Escopo:** pastas de 1º e 2º nível. Sem mover, sem copiar, sem migrar.  
**Path pedido:** `/Users/leticiadalcorso/Cursor-repo/_wip/` — indisponível neste ambiente. Entrega em `_wip/auditoria-materiais.md` + chat.

---

## Critério (USO ATUAL — obriga)

| Mantém sentido | Fora do hub |
|---|---|
| Hub pessoal | Agência multi-cliente |
| Cliente ativo: **só Castanhal** (pontual) | Smartbase **não** neste repo |
| Projetos: **Express**, **Noob** | Gene, FTemper, Sodi, tênis |
| Áreas: **carreira**, **financeiro**, **moradia**, **processos** | Manuais de ferramenta |
| AGENTS curto (depois) | Pack do curso / skills de agência |

**Legenda**

- **OURO** — serve o hub pessoal agora (ou Castanhal ativo).
- **ARQUIVO** — cliente/ops mortos com valor histórico; Drive/arquivo morto, não referência ativa.
- **LIXO** — não serve o uso atual; duplicata, scratch, tool-manual, peso morto pra sair do repo.

Clientes mortos da pasta = só **ARQUIVO** ou **LIXO** (nunca OURO).

---

## Lacunas (ouro esperado, ainda não existe)

| Esperado pelo uso atual | Achado |
|---|---|
| Projeto **Express** | Ausente |
| Projeto **Noob** | Ausente |
| Área **carreira** | Ausente |
| Área **moradia** | Ausente |
| Área **processos** | Ausente |
| Área **financeiro** | Existe: `Letícia Particular/vida/financeiro.md` (gitignored) |

---

## 1º nível — classificação

| Item | Tipo | Classe | Por quê |
|---|---|---|---|
| `Letícia Particular/` | pasta | **OURO** | Único bloco claramente pessoal (vida, setup, capas Notion). |
| `clientes/castanhal/` | (via `clientes/`) | **OURO** | Único cliente ativo no uso atual. |
| `_contexto/` | pasta | **misto** | Ver 2º nível: voz/prefs/revisão = ouro; manuais/agency OS = arquivo/lixo. |
| `marca/` | pasta | **OURO** | Identidade Solz Lab ainda útil pro hub/marca pessoal. |
| `clientes/` (pasta-mãe) | pasta | **misto** | Castanhal = ouro; resto = arquivo/lixo. |
| `clientes destivados/` | pasta | **ARQUIVO** | Já é arquivo morto; não usar como referência ativa. |
| `templates/` | pasta | **ARQUIVO** | Templates de skill/agência; reutilizável no futuro, não hub atual. |
| `scheduled/` | pasta | **LIXO*** | Agendamentos de agência/clientes mortos (*cockpit pessoal: ver L2). |
| `scripts/` | pasta | **ARQUIVO** | Automações Z-API/Postforme — ops antiga, não Express/Noob. |
| `codex-plugin-cc-main/` | pasta | **LIXO** | Vendor plugin; “não editar”; não é material do hub. |
| `.claude/` | pasta | **ARQUIVO** | Skills/commands de agência; poda depois, não migrar agora. |
| `.agents/` | pasta | **ARQUIVO** | Espelho de skills de produto/agência. |
| `.codex/` | pasta | **LIXO** | Config de plugin; fora do uso atual. |
| `.superpowers/` | pasta | **LIXO** | Pack de tooling/curso. |
| `.vscode/` | pasta | **ARQUIVO** | Config IDE; irrelevante pra materiais. |
| `CLAUDE.md` (raiz) | arquivo | **ARQUIVO** | OS de agência (5 clientes). Vai ser reescrito curto depois. |
| `README.md` | arquivo | **ARQUIVO** | Descreve agência; desatualizado vs uso atual. |
| `painel-clientes.html` | arquivo | **LIXO** | Painel multi-cliente; não Castanhal-only. |
| `ratos de ia.code-workspace` | arquivo | **LIXO** | Workspace de curso/pack. |
| `skills-lock.json` | arquivo | **LIXO** | Lock de skills de ferramenta. |
| `.gitignore` | arquivo | **OURO** | Protege `vida/` e `scriptable/` — manter. |

---

## 2º nível — classificação

### `Letícia Particular/` → **OURO** (núcleo do hub)

| Item | Classe | Nota |
|---|---|---|
| `vida/` | **OURO** | Roda da vida, foco, financeiro. Privado (gitignore). Base da área financeiro. |
| `vida/financeiro.md` | **OURO** | Única área pedida que já existe. |
| `vida/roda-da-vida.md` | **OURO** | Pessoal. |
| `vida/foco-base-energia.md` | **OURO** | Pessoal. |
| `vida/smartbase-meu-aporte.md` | **ARQUIVO** | Aporte pessoal ligado a Smartbase — histórico, não ops Smartbase no repo. |
| `capas-notion/` | **OURO** | Capas (incl. financeiro); serve Notion pessoal. |
| `scriptable/` | **OURO** | Widgets pessoais (gitignore). |
| `iphone-setup.md` | **OURO** | Setup pessoal. |
| `cockpit-acao-iphone17.md` | **OURO** | Plano pessoal hardware. |
| `mockup-iphone.html` | **ARQUIVO** | Mockup; útil às vezes, não área core. |
| `CLAUDE.md` | **OURO** | Mapa curto do espaço pessoal — modelo pra AGENTS curto depois. |

### `clientes/`

| Item | Classe | Nota |
|---|---|---|
| `castanhal/` | **OURO** | Único cliente ativo. |
| `castanhal/projetos/` | **OURO** | Incl. `caderno-campo-2026`. |
| `castanhal/conteudo/` | **OURO** | Cintas/SVGs + scripts do projeto. |
| `castanhal/propostas/` | **OURO** | Proposta tráfego v2. |
| `castanhal/CLAUDE.md` + `README.md` | **OURO** | Contexto do cliente pontual. |
| `ftemper/` (~175M) | **ARQUIVO** | Cliente morto neste uso. |
| `genesneakers/` (~20M) | **ARQUIVO** | Cliente morto neste uso. |
| `tênis/` (~14M) | **ARQUIVO** | Assets Gene paralelos; morto. |
| `sodi/` | **ARQUIVO** | Cliente morto neste uso. |
| `smartbase/` (~250M) | **LIXO*** | Explicitamente **fora deste repo**. *Arquivar no Drive antes de apagar se ainda não estiver lá.* |
| `entrega-clientes.html` | **LIXO** | Entrega multi-cliente. |

### `clientes destivados/`

| Item | Classe | Nota |
|---|---|---|
| `Corneta Jogos/` | **ARQUIVO** | Encerrado. |
| `Faz ou Bebe/` | **ARQUIVO** | Encerrado; tem duplicata interna `Faz ou Bebe/Faz ou Bebe/` → miolo pode virar **LIXO** na limpeza. |

### `_contexto/`

| Item | Classe | Nota |
|---|---|---|
| `voz-leticia.md` | **OURO** | Voz pessoal/profissional — independente de cliente. |
| `preferencias.md` | **OURO** | Tom e estilo. |
| `revisao.md` | **OURO** | Trava de qualidade (ainda vale). |
| `notion.md` | **OURO** | IDs Notion — se cockpit pessoal continua. |
| `empresa.md` | **ARQUIVO** | Lista 5 clientes; desatualizado vs uso atual. |
| `estrategia.md` | **ARQUIVO** | Foco Smartbase/Gene/Sodi — obsoleto. |
| `AGENTS.md` | **ARQUIVO** | Reescrever curto depois (pedido explícito). |
| `CLAUDE.md` | **ARQUIVO** | Cópia/OS de agência. |
| `como-usar-o-claude.md` | **ARQUIVO** | Guia de fluxo antigo. |
| `como-usar-melhor.md` + `.docx` | **ARQUIVO** / `.docx` **LIXO** | Diagnóstico antigo; docx = peso. |
| `manual-skills.md` | **LIXO** | Manual de ferramenta — proibido no uso atual. |

### `marca/`

| Item | Classe | Nota |
|---|---|---|
| `design-guide.md` | **OURO** | Guia visual Solz Lab. |

### `templates/`

| Item | Classe | Nota |
|---|---|---|
| `perfis/` | **ARQUIVO** | Incl. `claude-md-solopreneur.md` — útil na reescrita do AGENTS. |
| `skills/` | **ARQUIVO** | Templates de skill de agência. |
| `ferramentas/catalogo.md` | **LIXO** | Catálogo de APIs/ferramentas (manual). |
| `marca/` | **ARQUIVO** | Exemplos de marca genéricos. |

### `scheduled/`

| Item | Classe | Nota |
|---|---|---|
| `morning-brief-weekdays/` | **ARQUIVO** | Ritual pessoal possível; hoje acoplado ao OS antigo. |
| `briefing-cockpit-7h30/` | **ARQUIVO** | Idem cockpit. |
| `review-cockpit-15dias/` | **ARQUIVO** | Idem. |
| `tria-inbox-cockpit/` | **ARQUIVO** | Inbox Notion — se processo pessoal continuar. |
| `claude-updates/` | **LIXO** | Digest de ferramenta. |
| `daily-meme/` | **LIXO** | Cliente morto (Faz ou Bebe). |
| `ftemper-tendencias-mensais/` | **LIXO** | Cliente morto. |
| `origem-02-onitsuka-tiger/` | **LIXO** | Conteúdo Gene. |
| `tracker-smartbase-semanal/` | **LIXO** | Smartbase fora do repo. |

### `scripts/`

| Item | Classe | Nota |
|---|---|---|
| `whatsapp-zapi.js` | **ARQUIVO** | Automação antiga. |
| `publish-postforme.js` | **ARQUIVO** | Publish social antigo. |

### `.claude/` (resumo)

| Item | Classe | Nota |
|---|---|---|
| `skills/` (maioria) | **ARQUIVO** | Arsenal de agência; não é material do hub. |
| `commands/` gene-*, ftemper | **LIXO** | Amarrados a clientes mortos. |
| `hooks/` | **ARQUIVO** | Travas do OS antigo. |
| `settings.json` | **ARQUIVO** | Config. |

### Infra / tooling (não-material)

| Item | Classe | Nota |
|---|---|---|
| `codex-plugin-cc-main/*` | **LIXO** | Vendor. |
| `.agents/skills/` | **ARQUIVO** | Pack produto/agência. |
| `.codex/`, `.superpowers/` | **LIXO** | Tooling. |
| `.vscode/` | **ARQUIVO** | IDE. |
| `.git/` | — | Fora do escopo de materiais. |

---

## Contagem rápida (itens L1+L2 classificados)

| Classe | Qtd aproximada | Peso no disco |
|---|---|---|
| **OURO** | ~20 itens | ~8–9M (Castanhal + Particular + marca + pedaços de `_contexto`) |
| **ARQUIVO** | ~25 itens | ~210M+ (FTemper, Gene, tênis, Sodi, destivados, templates, skills) |
| **LIXO** | ~20 itens | ~250M+ (Smartbase sozinho) + plugins/manuais/painéis |

Quase todo o peso do repo (~465M em `clientes/`) **não** é ouro no uso atual.

---

## Leitura executiva

1. **Ouro real hoje:** `Letícia Particular/` (+ `vida/financeiro`), `clientes/castanhal/`, `marca/`, voz/prefs/revisão/`notion` em `_contexto/`, `.gitignore`.
2. **Buracos:** Express, Noob, carreira, moradia, processos — não há pastas/materiais.
3. **Maior LIXO explícito:** `clientes/smartbase/` (~250M) — “não neste repo”.
4. **Maior ARQUIVO:** FTemper + Gene/tênis + destivados + `.claude` skills.
5. **Manuais de ferramenta:** `manual-skills.md`, `templates/ferramentas/`, `skills-lock.json`, packs `.superpowers`/codex → LIXO no critério atual.
6. **Nada foi movido/copiado** nesta etapa.

---

## Próximo (só quando pedir — não é esta etapa)

- Arquivar no Drive o que for ARQUIVO/LIXO pesado, depois apagar do repo.
- Criar esqueleto: `projetos/express`, `projetos/noob`, áreas carreira/moradia/processos.
- AGENTS curto (sem manuais).
