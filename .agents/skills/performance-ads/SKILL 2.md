---
name: performance-ads
description: >
  Cria e gerencia campanhas de performance no Meta Ads (Instagram/Facebook) e TikTok Ads.
  Explica cada decisão em linguagem simples, sugere criativos, define públicos,
  orçamentos e métricas de acompanhamento.
  Use quando o usuário pedir "vamos começar os anúncios de [cliente]", "como impulsionar",
  "criar campanha no Meta", "boostar post", "ads para [cliente]", ou similar.
---

# /performance-ads — Campanhas de Performance

## Dependências

- **Contexto do cliente:** `clientes/[nome-cliente]/CLAUDE.md` — obrigatório
- **Conteúdo aprovado:** `clientes/[nome-cliente]/03_conteudo/` — criativos disponíveis
- **Identidade visual:** `clientes/[nome-cliente]/02_branding/` — para orientar criativos

---

## Princípio base

Ads amplificam o que já funciona — não criam do zero. O orgânico é o laboratório: o que engaja sem pagar, tem potencial de escalar com verba.

Nunca criar anúncio de conteúdo que não performou organicamente. Sempre testar pequeno antes de escalar.

---

## Workflow em 3 Fases

### Fase 1 — Diagnóstico e Estratégia

Antes de criar qualquer campanha, entender:

**Objetivo do cliente:**
- Awareness (ser visto por mais pessoas)?
- Engajamento (mais curtidas, comentários, seguidores)?
- Conversão (venda, contato no WhatsApp, visita ao site)?

Cada objetivo tem uma configuração diferente no Meta. Perguntar à Letícia qual é a prioridade agora.

**O que já existe pra impulsionar:**
- Tem posts orgânicos com bom desempenho?
- Tem vídeos ou imagens prontos?
- Tem uma página de destino (site, WhatsApp, link na bio)?

**Orçamento disponível:**
- Diário ou mensal?
- Qual o mínimo viável: R$15-30/dia já permite testar

**Output:** resumo da estratégia em linguagem simples — o que vai ser feito, por quê, e o que esperar.

**CHECKPOINT:** confirmar estratégia antes de detalhar as campanhas.

---

### Fase 2 — Estrutura da Campanha

Explicar a estrutura do Meta Ads em 3 níveis (sem jargão desnecessário):

```
CAMPANHA → define o objetivo geral
  CONJUNTO DE ANÚNCIOS → define quem vai ver e quanto gastar
    ANÚNCIO → define o criativo (imagem, vídeo, texto)
```

**Configuração recomendada para começar:**

**Campanha:**
- Objetivo: Tráfego (para site/WhatsApp) ou Engajamento (para crescer perfil)
- Nome: [Cliente] — [Objetivo] — [Mês]

**Conjunto de anúncios:**
- Público: começar com Advantage+ (o Meta otimiza sozinho) ou público por interesse
- Localização: cidade(s) do cliente ou Brasil inteiro conforme o produto
- Orçamento diário: R$15-30 para teste, escalar se o resultado aparecer
- Período: mínimo 7 dias (menos que isso não dá dados suficientes)

**Anúncio:**
- Criativo: usar post que já performou bem organicamente
- Texto: manter o mesmo da legenda orgânica ou versão adaptada (mais direta)
- CTA (botão): "Saiba mais", "Enviar mensagem" (WhatsApp) ou "Comprar" conforme objetivo

**Para cada cliente:**
- GeneSneakers: objetivo inicial = Tráfego para WhatsApp, público = interesse em sneakers/streetwear/tênis, Brasil
- Smartbase: objetivo inicial = Tráfego para site ou WhatsApp, público = interesse em Apple/iPhone/tecnologia, cidade do cliente

---

### Fase 3 — Criativos e Textos

Para cada anúncio, entregar:

**Criativo sugerido:**
- Qual post existente usar (ou descrever o que criar)
- Formato recomendado: imagem estática, carrossel ou vídeo
- Tamanho: 1080x1080 (feed) ou 1080x1920 (stories/reels)

**Texto do anúncio:**
- Linha 1 (gancho — aparece antes do "ver mais"): máximo 125 caracteres, direto
- Corpo: expansão do argumento, benefício claro
- CTA integrado no texto (não só no botão)

**Headline (abaixo da imagem):** máximo 40 caracteres, complementa o criativo

---

## Métricas para acompanhar

Explicar o que cada número significa em linguagem simples:

| Métrica | O que é | Bom resultado |
|---|---|---|
| **Alcance** | Quantas pessoas viram | Cresce com o tempo |
| **CPM** | Quanto custa 1000 visualizações | R$5-20 é razoável |
| **CTR** | % de quem clicou | Acima de 1% é bom |
| **CPC** | Quanto custou cada clique | Depende do objetivo |
| **Resultado** | Ação que você escolheu (mensagem, clique, etc.) | Crescer com o tempo |

Após 7 dias: avaliar qual anúncio performou melhor, pausar os piores, aumentar orçamento do melhor.

Salvar relatório em `clientes/[nome-cliente]/04_campanhas/ads/`

---

## Output final

```
clientes/[nome-cliente]/04_campanhas/ads/
  estrategia-[mes-ano].md     ← objetivo, público, orçamento, criativos
  resultados-[mes-ano].md     ← métricas quinzenais e decisões tomadas
```

## Regras

- Nunca criar anúncio de conteúdo que não existia no orgânico — orgânico é o laboratório
- Sempre começar com orçamento pequeno e escalar só após 7 dias de dados
- Explicar cada decisão em linguagem simples — Letícia está aprendendo ads
- Se o resultado não aparecer em 2 semanas: mudar criativo, não aumentar orçamento
- Ads de conversão (venda) só ativar quando tiver página de destino funcionando
- Registrar todas as decisões e resultados para aprender o que funciona por cliente
