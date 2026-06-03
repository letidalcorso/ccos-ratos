---
name: planejamento
description: >
  Rotina mensal de planejamento de conteúdo. Pesquisa tendências, notícias e
  comportamento do segmento de cada cliente ativo, gera ideias macro para o
  próximo mês e notifica a Letícia via Gmail quando estiver pronto pra revisar.
  Use quando o usuário pedir "planejamento do mês", "vamos planejar [mês]",
  "faz o planejamento", ou ao rodar no dia 15 pra organizar o mês seguinte.
---

# /planejamento — Planejamento Mensal de Conteúdo

## Dependências

- **Clientes:** `_contexto/empresa.md` + `clientes/[cliente]/AGENTS.md` de cada um
- **WebSearch + WebFetch** — pesquisa de tendências, notícias e viral por segmento
- **Gmail MCP** (`mcp__claude_ai_Gmail__create_draft`) — notificação quando pronto
- **Preferências:** `_contexto/preferencias.md`

---

## Passo 1 — Determinar o mês alvo

Verificar a data atual:
- Se dia ≥ 15: mês alvo = mês seguinte (ex: rodou em 15/05 → planeja junho/2026)
- Se dia < 15: mês alvo = mês atual

Apresentar:
> "Vou pesquisar e montar as ideias macro de [mês alvo] para FTemper, GeneSneakers, Sodi e Smartbase. Avisarei quando estiver pronto pra a gente revisar juntas."

---

## Passo 2 — Pesquisa por segmento

Pesquisar para cada cliente usando WebSearch e WebFetch. Buscar especificamente para o mês alvo.

### FTemper — Esquadrias, serralheria, construção civil (RS)
- Novidades técnicas em esquadrias de alumínio e vidro temperado
- Tendências de design arquitetônico para o período
- Acontecimentos no setor de construção civil no RS
- Datas sazonais relevantes (obras, reformas, feiras do setor)
- O que serralheiros e vidraceiros estão discutindo online

### GeneSneakers — Sneaker culture, D2C, moda de rua
- Drops confirmados ou esperados para o mês alvo
- Tendências de colorway e silhueta em alta
- Artistas, atletas ou influenciadores em evidência no período
- Comportamento e conversas de sneakerheads no Brasil (Twitter/X, Reddit, grupos)
- Colabs anunciadas ou rumores relevantes

### Sodi — Atendimento publicitário, educação, comunidade profissional
- Dores e discussões recentes de profissionais de atendimento em agências
- Conteúdos virais no nicho de educação para criativos e publicitários
- Acontecimentos no mercado de agências que geram conversa (demissões, cases, polêmicas)
- Temas de desenvolvimento profissional em alta (liderança, burnout, transição de carreira)

### Smartbase — iPhone, Apple, mercado de seminovos
- Notícias Apple relevantes para o mês alvo (rumores, lançamentos, atualizações)
- Comportamento do mercado de seminovos e importados no Brasil
- Variações de preço de iPhone no Paraguai e mercado cinza
- Objeções e dúvidas frequentes de quem quer comprar iPhone mas desconfia
- Conteúdos de concorrentes que estão performando bem

---

## Passo 3 — Gerar ideias macro

Com base na pesquisa de cada cliente, gerar 4 a 6 ideias macro. Cada ideia:

```
**[número]. [Tema em uma frase]**
Ângulo: [o que torna esse post único — por que não é um post genérico]
Formato: [estático / carrossel / vídeo curto]
Por que agora: [o que conecta essa ideia ao mês alvo especificamente]
```

Regras de qualidade:
- Toda ideia precisa de embasamento na pesquisa — nada inventado
- Toda ideia precisa de "por que agora" — sem ideias atemporais
- Ao menos uma ideia por cliente deve buscar inspiração fora do segmento (adaptação cruzada)
- Não gerar textos ou legendas aqui — apenas a direção estratégica

Salvar em cada pasta de cliente:
```
clientes/ftemper/03_conteudo/[mes-ano]/ideias-macro.md
clientes/genesneakers/03_conteudo/[mes-ano]/ideias-macro.md
clientes/sodi/03_conteudo/[mes-ano]/ideias-macro.md
clientes/smartbase/03_conteudo/[mes-ano]/ideias-macro.md
```

Formato do arquivo `ideias-macro.md`:
```markdown
# Ideias Macro — [Cliente] — [Mês/Ano]

## Referências de pesquisa
[lista das fontes usadas]

## Ideias

1. **[tema]**
   Ângulo: ...
   Formato: ...
   Por que agora: ...

2. ...
```

---

## Passo 4 — Notificação via Gmail

Quando todos os arquivos estiverem salvos, criar rascunho no Gmail usando `mcp__claude_ai_Gmail__create_draft`:

**Para:** contato@solzlab.com.br
**Assunto:** Ideias macro prontas — [mês alvo]

**Corpo:**
```
Oi! As ideias macro de [mês alvo] estão prontas pra revisar.

Clientes: FTemper, GeneSneakers, Sodi, Smartbase

Próximo passo: abra o Codex e rode /planejamento pra continuar
a revisão e partir pro desenvolvimento com /conteudo-social.
```

---

## Passo 5 — Revisão conjunta

Apresentar as ideias de cada cliente uma a uma. Para cada cliente:

> "**[Cliente] — [mês alvo]**
>
> 1. [tema] — [ângulo curto] — [formato]
> 2. ...
>
> O que você quer mudar ou aprovar antes de partir pro desenvolvimento?"

Aguardar feedback. Registrar aprovações e ajustes no arquivo `ideias-macro.md` (atualizar conforme necessário).

Ao aprovar um cliente:
> "Quer desenvolver [cliente] agora com `/conteudo-social`? Ele já vai ler as ideias aprovadas como ponto de partida."

---

## Output

```
clientes/[cliente]/03_conteudo/[mes-ano]/
  ideias-macro.md     ← ideias aprovadas, ponto de partida pro /conteudo-social
```

---

## Regras

- Nunca inventar tendência — toda ideia precisa de fonte real
- Pesquisar fora do segmento é obrigatório pra pelo menos uma ideia por cliente
- Não gerar legendas ou textos aqui — isso é trabalho do `/conteudo-social`
- Salvar os arquivos antes de notificar
- Se algum cliente não tiver a pasta `03_conteudo/`, criar antes de salvar
- Apresentar por cliente, nunca misturar
