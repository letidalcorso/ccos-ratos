---
name: pesquisa-viral
description: >
  Pesquisa conteúdos virais e tendências para inspirar estratégia de conteúdo.
  Busca tanto no segmento do cliente quanto em segmentos diferentes para gerar
  ideias disruptivas e fora do óbvio.
  Use quando o usuário pedir "pesquisa viral", "o que tá bombando em [nicho]",
  "referências de conteúdo", "o que posso adaptar", "o que tá em alta agora",
  "busca vídeos sobre [tema]", ou antes de criar pauta de conteúdo para um cliente.
---

# /pesquisa-viral — Pesquisa de Conteúdos Virais

## Dependências

- **Contexto do cliente:** `clientes/[nome-cliente]/CLAUDE.md` — ler antes de pesquisar
- **WebSearch** e **WebFetch** — ferramentas de busca

---

## O que esta skill faz

Busca conteúdos que estão performando bem — não só no segmento do cliente, mas em outros nichos que podem gerar inspiração cruzada. O objetivo é trazer ângulos que o concorrente não vai usar porque está olhando só pra dentro do próprio segmento.

---

## Workflow

### 1. Entender o contexto

Identificar no CLAUDE.md:
- Segmento principal do cliente
- Público-alvo
- Tom de voz
- O que já foi testado (evitar)

Se não estiver claro, perguntar: qual é o objetivo da pesquisa? (pauta mensal, campanha específica, lançamento, ou exploração livre)

---

### 2. Pesquisa no segmento

Buscar o que está viralizando dentro do nicho do cliente:

**O que procurar:**
- Posts com alto engajamento (comentários + compartilhamentos + salvamentos — não só curtidas)
- Formatos que aparecem com frequência nas maiores contas do segmento
- Tópicos recorrentes que geram debate ou identificação
- Notícias e acontecimentos recentes do segmento que ainda não foram explorados

**Como buscar:**
- WebSearch: `"[segmento] instagram viral 2025"`, `"[tema] conteúdo que bombou"`, `"tendências [nicho] redes sociais"`
- YouTube: buscar `"[tema] site:youtube.com"` ou `"[nicho] youtube mais vistos 2025"` — o que viraliza lá chega no Instagram depois. Quando encontrar vídeo relevante, usar `/youtube-para-conteudo` pra extrair e transformar
- Quando encontrar um perfil relevante, usar WebFetch pra analisar os posts mais recentes

**Output desta etapa:** 5-8 referências do segmento com o que tornou cada uma viral (ângulo, formato, gatilho emocional)

---

### 3. Pesquisa fora do segmento (inspiração cruzada)

Buscar o que está viralizando em nichos diferentes mas com o mesmo público ou com padrões adaptáveis:

**Critérios para escolher nichos de referência:**
- Mesmo público-alvo em contexto diferente (ex: cliente de produto técnico → buscar como nicho de educação/saúde fala com o mesmo perfil)
- Categorias que costumam inovar em formato: finanças pessoais, fitness, culinária, humor, lifestyle
- Marcas que são referência em comunicação fora do óbvio (não necessariamente do mesmo segmento)

**O que adaptar:**
- Formatos narrativos (storytelling, antes/depois, diário, desafio)
- Gatilhos emocionais (curiosidade, pertencimento, orgulho, ironia)
- Estruturas de roteiro (revelar no final, começar com a conclusão, perguntar antes de responder)

**Output desta etapa:** 3-5 referências de fora do segmento com o mecanismo de viralização identificado e sugestão concreta de como adaptar pro cliente

---

### 4. Síntese e recomendações

Com base nas duas pesquisas, entregar:

**Tendências identificadas:**
- O que está funcionando agora no segmento (padrões, formatos, temas)
- O que está saturado (evitar)

**Ângulos disruptivos:**
- 3-5 ideias de conteúdo que ninguém no segmento do cliente está fazendo, mas que fazem sentido pro público
- Para cada ideia: o mecanismo de viralização (por que funcionaria) + como adaptar ao tom e contexto do cliente

**Sugestão de próximos passos:**
- Se for alimentar uma pauta: indicar quais ideias têm maior potencial pra virar post, carrossel ou reels
- Se for campanha: indicar qual tendência tem timing favorável agora

Salvar em `clientes/[nome-cliente]/03_conteudo/pesquisa-viral-[mes-ano].md`

---

## Output final

```
clientes/[nome-cliente]/03_conteudo/
  pesquisa-viral-[mes-ano].md    ← referências + ângulos disruptivos
```

## Regras

- Nunca recomendar "fazer igual" — sempre identificar o mecanismo e adaptar
- Priorizar ângulos que o segmento ainda não explorou
- Buscar fora do segmento é obrigatório — não opcional
- Se não encontrar nada interessante em uma busca, tentar um nicho diferente antes de concluir
- Referências de fora do Brasil são válidas e muitas vezes chegam antes ao Brasil — incluir quando relevante
