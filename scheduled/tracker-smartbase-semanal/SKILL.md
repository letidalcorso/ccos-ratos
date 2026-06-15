---
name: tracker-smartbase-semanal
description: Toda sexta — alimentar o tracker de conteúdo da Smartbase com os números da semana (alcance, % não-seguidor, salvamentos, envios, comentários, DMs, vendas) e fechar o resumo semanal com leitura de seguir/pivotar.
---

Rotina semanal de medição da Smartbase. Roda toda sexta (~16h). Objetivo: manter o tracker vivo pra o conteúdo ser decidido com dado, não no feeling.

CONTEXTO IMPORTANTE:
- Não há fonte de dado paga conectada (Supermetrics expirou em 14/06; Meta Ads da Smartbase unsettled). Logo, os números NÃO são puxados automaticamente — a Letícia pega no app do Instagram ("Ver insights" de cada post) e me passa. Esta rotina PREPARA o terreno e PEDE os números; não inventa número nenhum.
- Tracker do mês corrente: `clientes/smartbase/conteudo/tracker-conteudo-[mes].md`. Se não existir o do mês atual, criar a partir do modelo do de junho (mesma tabela e seções).

PASSO 1 — Levantar os posts da semana:
- Ler o plano editorial do mês (`clientes/smartbase/conteudo/plano-editorial-[mes].md` ou a pauta vigente) e a base Postagens da Smartbase no Notion (`collection://0433d6af-8abb-826c-ba82-07ea480e05fc`, filtrar `Data de publicação` nos últimos 7 dias).
- Listar os posts que de fato saíram na semana.

PASSO 2 — Pedir os números à Letícia (mensagem curta, formato fácil):
Para cada post publicado, pedir nesta ordem: alcance · % não-seguidor · salvamentos · envios · comentários · DMs (conversas com a deixa do post) · venda (sim/não + qual). Lembrar onde achar: abrir o post → "Ver insights".

PASSO 3 — Preencher o tracker:
- Escrever os números na tabela do mês (uma linha por post). Não sobrescrever linhas já preenchidas de semanas anteriores.
- Preencher o bloco "Resumo semanal": post que mais salvou, mais enviou, mais trouxe DM, vendas na semana, o que repetir, o que cortar.

PASSO 4 — Leitura de seguir/pivotar (régua do tracker):
- Salvamento + envio + alcance de não-seguidor subindo e pingando DM → no caminho, segue.
- Engaja mas zero DM → o problema é o CTA/convite pro WhatsApp.
- Nada se move → o problema é o conteúdo, pivota formato.
- Lembrar do aprendizado-base: a conversão real vem de story + follow-up ativo, não só do feed.

PASSO 5 — Fechar no chat com o resumo + a recomendação da semana, e commitar o tracker atualizado.

REGRAS DE TOM:
- Direto, sem floreio, sem emoji. Voz da Letícia.
- Se a semana não teve número (ela não mandou), não inventar — registrar "sem dado" e cobrar gentilmente.
