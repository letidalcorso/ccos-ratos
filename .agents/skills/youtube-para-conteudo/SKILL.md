---
name: youtube-para-conteudo
description: >
  Extrai o conteúdo de um vídeo do YouTube e transforma em post, carrossel ou legenda
  para Instagram. Pode ser acionada com um link específico ou após uma pesquisa viral
  que identificou vídeos relevantes.
  Use quando o usuário compartilhar um link do YouTube e pedir pra transformar em conteúdo,
  ou quando pedir "transforma esse vídeo em carrossel", "extrai o que dá pra usar desse vídeo",
  "adapta esse vídeo pro Instagram", ou similar.
---

# /youtube-para-conteudo — YouTube para Conteúdo Social

## Dependências

- **Contexto do cliente:** `clientes/[nome-cliente]/AGENTS.md` — obrigatório (pra adaptar o tom)
- **WebFetch** — para acessar o vídeo e extrair transcrição
- `/carrossel` — se o output for carrossel visual

---

## Workflow

### 1. Extrair o conteúdo do vídeo

Dado o link do YouTube, extrair o ID do vídeo (parte após `v=` ou o trecho final da URL curta `youtu.be/`).

**Sequência de tentativas — nessa ordem:**

1. **Página do vídeo via WebFetch** — tentar `https://www.youtube.com/watch?v=[ID]` pra capturar título e descrição (não transcrição — o YouTube bloqueia conteúdo dinâmico).
2. **Serviço de transcrição externo** — tentar WebFetch em `https://youtubetranscript.com/?v=[ID]`. Se retornar 403/404, passar para o próximo.
3. **API de legendas do YouTube** — tentar `https://www.youtube.com/api/timedtext?v=[ID]&lang=pt-BR`. Geralmente retorna vazio — se falhar, passar para o próximo.
4. **Pedir à Letícia** — se todas as tentativas falharem, solicitar que ela:
   - Abra o vídeo no YouTube
   - Clique nos três pontinhos → "Abrir transcrição"
   - Copie e cole o texto aqui

> ⚠️ **Limitação conhecida:** WebFetch não consegue extrair transcrição do YouTube diretamente — o conteúdo é carregado via JavaScript dinâmico. O passo 4 é o mais confiável e deve ser sugerido sem hesitação se os anteriores falharem.

**O que extrair:**
- Tese central do vídeo (o argumento principal em 1-2 frases)
- 3-7 insights ou pontos de valor mais fortes
- Dados, exemplos concretos ou histórias que o vídeo usa como prova
- Estrutura narrativa: como o vídeo constrói o argumento (problema → solução? lista? storytelling?)

---

### 2. Avaliar o potencial de adaptação

Antes de transformar, identificar:
- O que é universalmente relevante vs. o que é específico demais do contexto original
- O que precisa ser adaptado pro público do cliente (linguagem, exemplos, referências culturais)
- Qual formato faz mais sentido para o conteúdo: post único, carrossel ou legenda longa

**CHECKPOINT:** apresentar o resumo extraído + sugestão de formato. Confirmar antes de criar.

---

### 3. Transformar em conteúdo

**Se for carrossel:**
- Montar roteiro de slides com base nos insights extraídos
- Seguir a estrutura da skill `/carrossel`: gancho → contexto → desenvolvimento → implicação → CTA
- Adaptar linguagem, exemplos e referências pro tom do cliente
- Perguntar se quer gerar o visual também (acionar `/carrossel`)

**Se for post único:**
- Gancho forte baseado no insight mais impactante do vídeo
- Desenvolvimento em texto corrido (não bullets)
- CTA natural
- 3-5 hashtags

**Se for legenda longa (para reels ou vídeo próprio):**
- Estrutura mais narrativa
- Referência ao tema original sem necessariamente citar a fonte (adaptar o conteúdo, não transcrever)

**Regras de adaptação:**
- Nunca copiar — sempre reinterpretar o conteúdo no tom e contexto do cliente
- Citar a fonte original apenas se agregar valor (ex: "vi um estudo que..." sem precisar linkar)
- O conteúdo deve parecer natural pra marca, não uma tradução de vídeo

---

### 4. Salvar

Salvar em `clientes/[nome-cliente]/03_conteudo/[mes-ano]/` com referência ao vídeo de origem.

---

## Output final

```
clientes/[nome-cliente]/03_conteudo/[mes-ano]/
  post-[tema].md      ← conteúdo adaptado + link do vídeo original como referência
```

## Regras

- Se a transcrição não estiver disponível, não inventar — pedir o trecho à Letícia
- Sempre adaptar pro cliente — nunca entregar o conteúdo como se fosse original sem adaptação de tom
- Se o vídeo for em inglês, adaptar pra linguagem do público brasileiro do cliente
- Vídeos de outros segmentos são os mais valiosos pra trazer ângulos que o concorrente não usa
