---
name: "source-command-gene-post"
description: "Produz um post completo para a GeneSneakers — pesquisa, copy e design SVG — com aprovação em cada etapa."
---

# source-command-gene-post

Use this skill when the user asks to run the migrated source command `gene-post`.

## Command Template

# Skill: /gene-post

Produz um post completo para a GeneSneakers em 3 etapas com aprovação.

## Como usar

```
/gene-post [modelo ou tema]
```

Se o modelo/tema não for informado, perguntar antes de começar.

---

## Etapa 0 — Carregar contexto

Ler silenciosamente (sem confirmar):
1. `clientes/genesneakers/AGENTS.md`
2. `clientes/genesneakers/marca/docs/brand-voice-guidelines.md`
3. `clientes/genesneakers/marca/docs/gene-sneakers-design-philosophy.md`
4. Verificar copies existentes em `clientes/genesneakers/conteudo/copy/`

---

## Etapa 1 — Pesquisa

Usar busca na internet para levantar:
- Novidades e lançamentos recentes do modelo/tema pedido
- O que os concorrentes estão postando sobre isso (Droper, Innovare, LK Sneakers)
- Referências visuais e culturais relevantes da cena sneaker agora
- Qualquer gancho de timing (drop recente, colaboração, momento cultural)

Rodar as buscas em paralelo. Não apresentar os resultados brutos — usar como base para a próxima etapa.

---

## Etapa 2 — Copy + estratégia

**Perguntar apenas:** qual o formato? (carrossel / reel / post estático)

Se o usuário não souber, sugerir o mais adequado com base na pesquisa.

Apresentar:

```
**Pesquisa:** [2-3 achados relevantes que vão informar o conteúdo]

**Proposta:**
- Formato: [carrossel X slides / reel / estático]
- Pilar: [Produto com vida / Takes fortes / Cultura sneaker]
- Ângulo: [o ponto de vista da peça em 1 linha]

**Copy:**
[Slides com texto, ou roteiro de reel]

**Caption:**
[legenda pronta]

**CTA:** [chamada de ação clara — encomenda aberta, link na bio, manda mensagem]

Aprova ou quer ajustar?
```

**Foco em conversão:** todo post deve ter CTA direto e claro. O objetivo agora é venda, não branding. A estética e o tom insider se mantêm, mas o conteúdo precisa mover o seguidor pra ação.

**Tom:** confiante, insider, afirma — não explica. Nunca usar: paralelo, réplica, 100% original garantido, premium, acessível, promoção, aproveite agora. Sempre usar: curadoria, markup nacional, drop, acesso, encomenda.

Aguardar aprovação antes de avançar.

---

## Etapa 3 — Design SVG

Após aprovação da copy, criar o design em SVG.

**Antes de executar, ler obrigatoriamente:**
- `clientes/genesneakers/marca/docs/gene-sneakers-design-philosophy.md` — filosofia "Signal Origins": paleta, tipografia, hierarquia, uso de espaço
- `clientes/genesneakers/conteudo/design/carrossel-dunk.html` — referência de estilo aprovado
- `clientes/genesneakers/conteudo/design/carrossel-nb1906r.html` — referência de estilo aprovado

**Criatividade dentro da identidade:** o design não precisa seguir um template fixo. Ser criativo na composição, no uso do espaço, na hierarquia — desde que respeite a paleta, a filosofia tipográfica e a estética geral da marca. Não repetir sempre o mesmo layout.

**Formatos:**
- Post de feed (carrossel ou estático): **1080×1350px** por slide
- Reel: capa estática **1080×1920px**

**Salvar em:** `clientes/genesneakers/conteudo/design/[formato]-[modelo-slug].svg`

Apresentar o design e perguntar se precisa ajustar.
