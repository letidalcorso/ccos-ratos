---
name: crescimento-organico
description: >
  Cria plano de crescimento orgânico de seguidores para Instagram.
  Pesquisa o que está funcionando no segmento e fora dele, diagnostica o perfil atual
  e gera táticas concretas sem ads.
  Foco em GeneSneakers e Smartbase, mas serve qualquer cliente com meta de crescimento.
  Use quando o usuário pedir "como crescer o perfil de [cliente]", "preciso de mais seguidores",
  "estratégia de crescimento orgânico", "como aumentar o alcance", ou similar.
---

# /crescimento-organico — Crescimento Orgânico no Instagram

## Dependências

- **Contexto do cliente:** `clientes/[nome-cliente]/CLAUDE.md` — obrigatório
- **Posts anteriores:** `clientes/[nome-cliente]/03_conteudo/` — se existir
- **Análise competitiva:** `clientes/[nome-cliente]/analise-competitiva.md` — se existir
- **WebSearch / WebFetch** — para pesquisa de referências

## Skill complementar

- `/pesquisa-viral` — pode ser chamada antes para uma pesquisa de referências mais aprofundada

---

## Workflow em 3 Etapas

### Etapa 1 — Pesquisa e Diagnóstico

**Pesquisa de referências (fora e dentro do segmento):**
- Buscar contas do mesmo nicho que estão crescendo e identificar o que estão fazendo
- Buscar em nichos diferentes com crescimento expressivo: quais formatos, cadências e abordagens estão funcionando?
- Identificar ao menos 1 tática disruptiva que ninguém no segmento do cliente está usando

**Diagnóstico do perfil atual:**
Perguntar à Letícia (se não tiver no CLAUDE.md):
- Seguidores atuais e meta
- Posts por semana
- Post que performou melhor até hoje e por quê
- Canal com mais engajamento real (comentários, DMs, stories)

Com base nisso, identificar onde está o gargalo:
- **Awareness:** conteúdo não alcança novos usuários
- **Conversão:** alcança mas não converte em seguidor
- **Retenção:** ganha seguidores mas não engaja

**CHECKPOINT:** apresentar pesquisa + diagnóstico. Confirmar antes de montar o plano.

---

### Etapa 2 — Plano de Crescimento

**Curto prazo (próximas 4 semanas) — Quick wins:**
- Ações com resultado rápido sem depender de consistência acumulada
- Exemplos: colaboração com perfil complementar do nicho, post de lista shareable, reels com áudio em alta, engajamento estratégico em contas maiores do segmento
- Incluir ao menos 1 tática inspirada em outro segmento adaptada pro contexto

**Médio prazo (1-3 meses) — Consistência:**
- Formato ou série que cria expectativa e fideliza
- Cadência viável pra realidade da Letícia (trabalha sozinha)
- Estratégia de hashtags segmentada por tipo de post

**Longo prazo (3-6 meses) — Autoridade:**
- Posicionamento de conteúdo que diferencia o perfil no nicho
- Parceiros estratégicos para crescimento mútuo
- Conteúdo evergreen com efeito composto (tutoriais, comparativos, guias)

**Por cliente:**
- GeneSneakers: cultura sneaker e lifestyle, colabs com micro-influenciadores do nicho, conteúdo de bastidor e autenticidade
- Smartbase: educação como tração (como identificar original, comparativo de preço, por que vale mais), prova social e depoimentos

---

### Etapa 3 — Métricas e Revisão

Definir o que monitorar:
- **Alcance** — conteúdo está chegando em novos usuários?
- **Taxa de conversão seguidor** — de quem viu, quantos seguiram?
- **Engajamento** — curtidas + comentários / seguidores
- **Salvamentos** — indicador mais confiável de conteúdo de valor

Cadência sugerida: revisão a cada 4 semanas, ajustar o plano com base no que performou.

Salvar em `clientes/[nome-cliente]/04_campanhas/crescimento-organico.md`

---

## Output final

```
clientes/[nome-cliente]/04_campanhas/
  crescimento-organico.md    ← pesquisa + diagnóstico + plano com táticas
```

## Regras

- Pesquisa fora do segmento é obrigatória — não pular
- Sem táticas genéricas: cada ação precisa ser concreta e executável
- Considerar a capacidade real de produção (Letícia trabalha sozinha)
- Não recomendar ads — escopo separado
- Se o cliente ainda não tiver perfil ativo, montar plano de lançamento em vez de crescimento
