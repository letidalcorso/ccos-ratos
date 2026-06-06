# Como usar o Claude (guia prático da Letícia)

## A regra mental número 1
O chat é memória temporária. Os arquivos são memória permanente. Tudo que importa (decisão, contexto, copy aprovada) tem que virar arquivo, senão some quando o chat acabar. Se o Claude só responde no chat e não salva, peça pra salvar.

## Um chat por tema, não um chat eterno
- Cada chat focado num assunto (ex: "Smartbase lançamento", "Smartbase conteúdo julho").
- Não empilhar assuntos diferentes no mesmo chat: fica lento e aumenta o risco de confusão.
- Chat muito longo o Claude resume sozinho pra caber (compactação), e nesse resumo pode perder detalhe.
- Regra: assunto novo grande = chat novo. Mesma tarefa em andamento = mesmo chat.

## Como abrir uma aba/sessão exclusiva (extensão VSCode)
Três formas:
1. **Atalho:** `Cmd+Shift+Esc` abre uma conversa nova em aba (Open in New Tab).
2. **Command Palette:** `Cmd+Shift+P`, digitar "Claude Code", escolher "Open in New Tab" ou "Open in New Window".
3. **Activity Bar:** clicar no ícone Spark na barra lateral esquerda → lista de sessões → nova.

Importante: a aba nova abre no MESMO projeto (mesma pasta-raiz `ratos de ia`), então compartilha a mesma memória e o mesmo CLAUDE.md. Cada aba tem histórico próprio. Dá pra ter várias abas abertas em paralelo (uma geral, uma Smartbase). Renomear a sessão (passar o mouse na sessão no histórico → renomear) ajuda a achar depois.

Para retomar uma conversa antiga: botão "Session history" no topo do painel.

## Começo de sessão
- `/iniciar` carrega o contexto do negócio. `/bomdia` é o ritual diário com prioridades.
- Na aba do Smartbase, basta dizer "vamos no Smartbase" que o contexto do cliente carrega.

## Durante a sessão
- Mandar dado real e específico. É o que faz a entrega ser boa.
- Se o Claude misturar contexto ou sair da linha, corrigir na hora e pedir pra salvar a correção.
- Saídas importantes têm que ir pra arquivo (o Claude faz por padrão; confirmar).

## Fim de sessão (vale rodar comandos)
- `/atualizar` varre o que mudou e atualiza os arquivos de contexto.
- `/syncar` salva tudo no GitHub (backup). O workspace já sincroniza sozinho de tempos em tempos, mas o `/syncar` força agora.
- Aprendeu algo permanente? Pedir "salva isso na memória".

## Como saber qual skill rodou
- A lista gigante que aparece a cada mensagem é só o CATÁLOGO de skills disponíveis (injetada automaticamente). NÃO é o que rodou.
- O que realmente rodou aparece como um passo na conversa (ex: "Skill: /iniciar"). É ali que se vê qual foi ativada.

## Ciclo resumido
Abre com `/iniciar` ou "vamos no Smartbase" → trabalha um tema por chat → fecha com `/atualizar` + `/syncar`.
