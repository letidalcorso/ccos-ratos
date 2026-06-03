---
name: "source-command-gene-mes"
description: "Cria o planejamento mensal de conteúdo da GeneSneakers — pesquisa, calendário, copies e designs SVG — com aprovação em cada etapa."
---

# source-command-gene-mes

Use this skill when the user asks to run the migrated source command `gene-mes`.

## Command Template

# Skill: /gene-mes

Cria o planejamento completo de um mês de conteúdo para a GeneSneakers.

## Como usar

```
/gene-mes [mês]
```

Se o mês não for informado, usar o mês atual.

---

## Etapa 0 — Carregar contexto

Ler silenciosamente (sem confirmar):
1. `clientes/genesneakers/AGENTS.md`
2. `clientes/genesneakers/marca/docs/brand-voice-guidelines.md`
3. `clientes/genesneakers/marca/docs/gene-sneakers-design-philosophy.md`
4. `clientes/genesneakers/briefing/estrategia-lancamento.md`
5. Verificar copies e designs já produzidos em `clientes/genesneakers/conteudo/`

---

## Etapa 1 — Pesquisa

Usar busca na internet para levantar (rodar em paralelo):
- Drops e lançamentos confirmados para o mês no mercado global de sneakers
- O que os concorrentes estão postando (Droper, Innovare, LK Sneakers)
- Tendências e momentos culturais da cena sneaker para o mês
- Modelos em alta no mercado brasileiro agora

Não apresentar os resultados brutos. Usar como base para o calendário.

---

## Etapa 2 — Perguntas antes de planejar

Perguntar apenas:
1. Tem algum modelo, campanha ou data específica que precisa entrar esse mês?
2. Quantos posts por semana — mantém o ritmo atual ou quer acelerar?

Aguardar resposta antes de montar o calendário.

---

## Etapa 3 — Calendário

Apresentar o planejamento do mês no formato:

```
**Planejamento [Mês] — GeneSneakers**
Foco do mês: [objetivo principal — conversão/venda como prioridade]

| Semana | Formato | Pilar | Tema/Modelo | Ângulo | CTA |
|--------|---------|-------|-------------|--------|-----|
| Sem 1  | Carrossel | Pilar X | ... | ... | ... |
| Sem 1  | Reel | Pilar X | ... | ... | ... |
| ...    | ...  | ... | ... | ... | ... |

**Lógica do mês:** [2-3 linhas explicando a estratégia — por que essa sequência, como os posts se complementam]

Aprova o calendário ou quer ajustar?
```

**Critérios do calendário:**
- Foco em conversão: todo post tem CTA claro (encomenda, link, mensagem)
- Mix de pilares equilibrado: não repetir o mesmo pilar mais de 2 vezes seguidas
- Aproveitar drops e momentos culturais identificados na pesquisa
- Variar formatos: misturar carrossel, reel e estático

Aguardar aprovação antes de avançar.

---

## Etapa 4 — Produção de copies

Para cada post aprovado no calendário, produzir em sequência:

```
**Post [N/total] — [Tema]**

[Slides com texto, ou roteiro de reel]

**Caption:** [legenda pronta]
**CTA:** [chamada de ação clara]

Aprova ou quer ajustar antes do próximo?
```

Produzir um post por vez. Aguardar aprovação antes de passar para o próximo.

**Tom:** confiante, insider, afirma — não explica. Nunca: paralelo, réplica, 100% original garantido, premium, acessível, promoção, aproveite. Sempre: curadoria, markup nacional, drop, acesso, encomenda.

---

## Etapa 5 — Design SVG

Após aprovação de cada copy, criar o design SVG correspondente:

**Antes de executar cada design, ler obrigatoriamente:**
- `clientes/genesneakers/marca/docs/gene-sneakers-design-philosophy.md` — filosofia "Signal Origins": paleta, tipografia, hierarquia, uso de espaço
- `clientes/genesneakers/conteudo/design/carrossel-dunk.html` — referência de estilo aprovado
- `clientes/genesneakers/conteudo/design/carrossel-nb1906r.html` — referência de estilo aprovado

**Criatividade dentro da identidade:** não repetir o mesmo layout post a post. Ser criativo na composição — desde que respeite a paleta, a filosofia tipográfica e a estética geral da marca.

**Formatos:**
- Post de feed (carrossel ou estático): **1080×1350px** por slide
- Reel: capa estática **1080×1920px**

**Salvar em:** `clientes/genesneakers/conteudo/design/[mes]/[formato]-[slug].svg`

Apresentar design e perguntar se ajusta antes de passar para o próximo post.
