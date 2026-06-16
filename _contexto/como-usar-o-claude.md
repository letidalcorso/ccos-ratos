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

---

## As travas de qualidade (montadas em junho/2026)
Duas travas rodam sozinhas agora, pra parar de te entregar coisa crua:
- **Trava 1, revisão antes de entregar:** nada chega em ti sem passar por uma checklist (anti-IA, travas do cliente, design-guide, repetição, completude). Texto curto eu confiro na hora; arte e entrega grande passa por um revisor separado. Tu vira a última a revisar, depois que já passou pela trava. Skill: `/revisar`. Padrão em `_contexto/revisao.md`.
- **Trava 2, correção vira regra:** quando tu corrige algo, eu transformo aquilo em regra permanente e ofereço salvar no lugar certo. Da próxima, o revisor já pega sozinho. Skill: `/aprender`.

## Como corrigir pra ensinar o sistema
Tua correção é o que calibra tudo. Quanto mais tu corrige no começo, mais rápido afia.
- Mira no padrão por trás, não só naquele caso. Em vez de "muda esse título", diz "esse tipo de título sempre em caixa de frase". Eu salvo como regra.
- Quando eu errar, me diz o porquê numa frase. Aí eu conserto a trava, e não só aquele caso.
- Se eu te entregar algo cru sem revisar, me cobra: "passou pela trava?". É sinal de que falhei e tenho que rodar o `/revisar`.

## Como pedir pra gastar menos e render mais
- Diz o canal e o cliente quando pedir ("legenda pro Smartbase", "whats pra um lead"). Economiza ida e volta.
- Tarefa pequena: skill direta (`/escreve`, `/post-estatico`). Tarefa grande (entrega do mês, planejamento): vale o maestro e os subagentes, que gastam mais mas fazem em paralelo.
- Não precisa repetir contexto que já tá nos arquivos. Se eu te pedir algo que já existe, me corrige, é a trava 2 trabalhando.

## A voz
Tua voz mora em `_contexto/voz-leticia.md`, tirada de conversas reais tuas. A skill `/escreve` usa ela. Se algo sair com cara de IA, me avisa que eu ajusto o arquivo.
