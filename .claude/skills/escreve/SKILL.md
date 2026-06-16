---
name: escreve
description: Escreve qualquer texto na voz da Letícia (legenda, post, mensagem de WhatsApp, e-mail, nota de estratégia). Carrega o arquivo de voz dela e as regras anti-IA, e quando for conteúdo de cliente lê o CLAUDE.md daquele cliente pra não misturar tom. Use quando ela disser "escreve na minha voz", "/escreve", "passa pra minha voz", "responde esse cliente no whats", "escreve uma legenda", "faz uma nota pra mim", ou pedir um texto que sai dela mesma. Não use pra entrega visual (carrossel/post-estatico) nem pra transformar ideia em roteiro (roteiro-post).
---

# /escreve — escreve na voz da Letícia

Gera texto que sai como a Letícia digitando, não como assistente escrevendo bonito. Ela revisa e manda.

## antes de escrever (sempre)

1. Ler `_contexto/voz-leticia.md` — é a fonte da verdade da voz dela (regras de voz, lista anti-IA, registros por canal, exemplos reais). Seguir à risca.
2. Ler `_contexto/preferencias.md` — reforço das regras anti-IA e do estilo dela.
3. Identificar o **canal/modo**. Se não estiver claro, perguntar curto: "isso é pra post, whats, email ou nota interna?".
   - `post` — conteúdo público, take primeiro, headline em caixa de frase
   - `whatsapp` — venda/atendimento 1:1, gaúcho cheio, rajada curta de mensagens
   - `email` — se for e-mail formal, considerar a skill `/email-profissional`
   - `nota` / `estrategia` — pra ela mesma, cru e abreviado, sem fecho motivacional
4. Se for conteúdo de **cliente**: ler `clientes/[nome]/CLAUDE.md` e, se existir, o arquivo de voz daquele cliente (ex: `clientes/smartbase/conteudo/voz-smartbase.md`, `clientes/genesneakers/marca/docs/brand-voice-guidelines.md`). A voz da Letícia é o JEITO de escrever; as travas do cliente mandam no QUE pode dizer. **Nunca misturar clientes** (ver trava anti-mistura no CLAUDE.md raiz).

## ao escrever

- Aplicar o registro do canal certo (descrito em `voz-leticia.md`).
- Texto curto, direto, sem rodeio. Quando for WhatsApp, quebrar em rajada de mensagens curtas, não num bloco.
- Em estratégia/conteúdo de ads, lembrar que ela exige pesquisa e dado real, não "acho que funciona".

## checagem final (obrigatória, antes de entregar)

Rodar a checagem da seção "checagem final" do `voz-leticia.md`. Varrer e reescrever se achar: travessão (—), Title Case em título, qualquer "não é X, é Y", emoji decorativo ou mais de 1 emoji, aforismo/frase de efeito simétrica, "ponto." isolado como ênfase, adjetivo poético vazio, nome próprio minusculizado, registro casual 100% limpo sem nenhuma abreviação. Ler a última frase: se for conclusão grandiosa ou metafórica, cortar.

## depois de entregar

Se ela corrigir o tom ("na verdade eu falaria assim", "não é esse meu jeito"), oferecer salvar a correção em `_contexto/voz-leticia.md`:

> "quer que eu salve essa correção na tua voz pra não repetir?"

Se sim, editar a seção relevante do `voz-leticia.md` (sem reformatar o arquivo inteiro). Assim a voz fica mais afiada a cada uso.
