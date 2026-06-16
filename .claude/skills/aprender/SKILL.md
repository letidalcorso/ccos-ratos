---
name: aprender
description: Captura toda correção da Letícia e transforma em regra permanente (trava 2). Quando ela corrige, rejeita ou reescreve algo, identifica a regra por trás, decide onde salvar (revisao.md, voz-leticia.md, CLAUDE.md do cliente, preferencias.md ou memória) e confirma antes de gravar. Fecha o ciclo com a trava 1: a correção de hoje vira check do revisor amanhã. Use quando a Letícia disser "na verdade é assim", "não faz mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez...", quando ela reescrever a entrega, ou quando rejeitar uma direção.
---

# /aprender — correção vira regra (trava 2)

Cada correção da Letícia tem que virar regra, pra ela não corrigir a mesma coisa duas vezes. Esse é o motor que calibra o sistema.

## quando dispara

- correção explícita: "na verdade", "não é assim", "prefiro", "evita", "sempre que", "da próxima vez"
- correção implícita: ela reescreve o que foi entregue, rejeita uma direção, ou repete um pedido que eu já devia saber

## passo a passo

1. Identificar a REGRA por trás da correção, o padrão, não só o caso pontual.
2. Decidir onde ela mora:
   - jeito de escrever, tom, voz → `_contexto/voz-leticia.md`
   - o que revisar antes de entregar (qualidade) → `_contexto/revisao.md` (assim o `/revisar` passa a pegar isso sozinho)
   - regra de um cliente específico → `clientes/[nome]/CLAUDE.md`
   - preferência geral de estilo ou comportamento → `_contexto/preferencias.md`
   - fato durável do negócio → `_contexto/empresa.md` ou memória
   - regra de comportamento da pasta → `CLAUDE.md`
3. Mostrar a linha exata que vai salvar e confirmar: "salvo isso pra não repetir?".
4. Se sim, adicionar a linha sem reformatar o arquivo, e confirmar onde entrou.

## importante

- salvar o padrão, não o caso isolado. ex: ela corrige um título em Title Case → regra geral "sempre caixa de frase", não só naquele título.
- correção de qualidade vai pro `revisao.md` de propósito, pra fechar o ciclo: o que ela corrigiu hoje, o revisor pega sozinho amanhã.
- não encher ela de pergunta. se a correção for óbvia e durável, propor a linha já pronta pra ela só confirmar.
- isso operacionaliza a seção "Aprender com correções" do CLAUDE.md.
