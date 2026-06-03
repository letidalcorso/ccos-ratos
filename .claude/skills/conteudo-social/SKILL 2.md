---
name: conteudo-social
description: >
  Cria estratégia e roteiro de conteúdo para redes sociais de um cliente.
  Começa com pesquisa de conteúdos virais (no segmento e fora dele), depois
  gera pauta mensal com ângulos criativos e textos prontos para aprovação.
  Serve todos os clientes — Instagram orgânico, feed e carrossel.
  Use quando o usuário pedir "faz a pauta de [cliente]", "preciso de ideias de post",
  "cria conteúdo pra [mês]", "o que postar essa semana", ou similar.
---

# /conteudo-social — Conteúdo para Redes Sociais

## Dependências

- **Contexto do cliente:** `clientes/[nome-cliente]/CLAUDE.md` — obrigatório
- **Preferências:** `_contexto/preferencias.md`
- **Posts anteriores:** `clientes/[nome-cliente]/03_conteudo/` — ler se existir (evitar repetição)
- **WebSearch / WebFetch** — para pesquisa de referências

## Skill complementar

- `/pesquisa-viral` — pode ser chamada separadamente para uma pesquisa mais aprofundada

---

## Workflow em 3 Fases

### Fase 1 — Pesquisa de Referências

Antes de criar qualquer pauta, buscar o que está funcionando:

**No segmento do cliente:**
- Conteúdos com alto engajamento (foco em salvamentos e comentários, não só curtidas)
- Formatos que se repetem nas maiores contas do nicho
- Tópicos em alta ou acontecimentos recentes ainda não explorados

**Fora do segmento (inspiração cruzada):**
- Buscar em nichos diferentes mas com público similar ou com padrões adaptáveis
- Identificar mecanismos de viralização: narrativa, formato, gatilho emocional
- Trazer pelo menos 2-3 ângulos que ninguém no segmento do cliente está usando

**Output:** lista de 5-8 referências com o mecanismo identificado e sugestão de adaptação

**CHECKPOINT:** apresentar referências. Confirmar direção antes de montar a pauta.

---

### Fase 2 — Pauta

**Período:** verificar se o usuário pediu modo quinzenal ("quinzena", "2 semanas", "q1", "q2") ou mensal (padrão).
- Mensal: planejar 30 dias, salvar em `[mes-ano]/`
- Quinzenal Q1 (dias 1–15): salvar em `[mes-ano]-q1/`
- Quinzenal Q2 (dias 16–fim): salvar em `[mes-ano]-q2/`

Adaptar a quantidade de posts ao período: se quinzenal, planejar metade do volume mensal do cliente.

**Se veio do `/planejamento`:** as ideias macro já estão em `clientes/[cliente]/03_conteudo/[mes-ano]/ideias-macro.md` — ler antes de criar a pauta e usar como ponto de partida.

Com as referências aprovadas, montar a pauta seguindo os pilares do cliente:

Para cada post:
- **Número do post** + **pilar** + **ângulo** (concreto, não genérico)
- **Formato:** estático, carrossel ou vídeo
- **Gancho** (primeira frase ou headline)
- **Inspiração de referência** (qual pesquisa embasou essa ideia)

**Regras de ângulo:**
- Cada post precisa de uma razão pra existir além de "mostrar o produto"
- Preferir: tutorial, bastidor, comparação, erro comum, before/after, dado surpreendente, história real, opinião contrária ao senso comum do segmento
- Evitar posts genéricos de "produto com legenda vaga"

**CHECKPOINT:** apresentar a pauta completa. Esperar aprovação ou ajustes antes de desenvolver os textos.

---

### Fase 3 — Textos

Para cada post aprovado na pauta, entregar:

**Legenda completa:**
- Gancho (1-2 linhas que param o scroll)
- Desenvolvimento (contexto, valor, argumento — sem listar tópicos com bullet)
- CTA claro e natural
- 3-5 hashtags relevantes no final

**Para carrosséis:** incluir o texto de cada slide. Se a Letícia quiser o visual junto, chamar `/carrossel`.

**Tom por cliente:**
- FTemper: técnico, direto, fala com o serralheiro como par
- Smartbase: confiável, sem exageros, foco em originalidade e custo-benefício
- GeneSneakers: lifestyle, aspiracional mas acessível
- Sodi: humano, próximo, relacional — foco em comunidade
- Castanhal: adaptar ao projeto específico

Salvar em `clientes/[nome-cliente]/03_conteudo/[mes-ano]/`

---

## Output final

```
clientes/[nome-cliente]/03_conteudo/[mes-ano]/
  referencias.md        ← pesquisa de viral aprovada
  pauta.md              ← pauta aprovada
  post-01.md            ← legenda + observação de design
  post-02.md
  ...
```

## Regras

- Pesquisa fora do segmento é obrigatória — não pular
- Nunca desenvolver textos sem pauta aprovada
- Sem emojis no texto, a menos que o CLAUDE.md do cliente indique o contrário
- Sem travessões (—) por padrão
- Se o cliente tiver carrossel na pauta, perguntar se usa `/carrossel` pra gerar o visual junto
