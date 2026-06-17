# revisão antes de entregar (trava 1)

padrão único do que conta como "pronto pra Letícia ver". nada chega nela sem passar por aqui. a skill /revisar roda essa checklist, e toda skill ou maestro que produz entrega chama isso antes de fechar. a Letícia é a última revisora, não a primeira.

## como usar (do tamanho da entrega)

- texto curto, resposta, legenda: check rápido, rodado na hora antes de fechar a resposta.
- arte, carrossel, site, campanha, pacote de cliente, entrega do mês: revisor separado (sub-Claude com olhar crítico), igual os 3 críticos que pegaram os 8 vícios na voz dela. olhar de fora pega o que quem fez não enxerga.
- na dúvida do tamanho, revisar mais, não menos.
- revisar a COPY QUE VAI AO AR (legenda, post, blog, site, descrição, arte publicada). docs internos de planejamento, status, voz e exemplos CITAM os vícios pra evitá-los, então varredura crua (grep) dá falso-positivo neles; o que conta é o que o público vê.
- revisão de entrega de verdade é olhar independente, não autoconferência: quem escreveu não enxerga o próprio erro.

## 1. anti-IA (todo texto)

fonte: `_contexto/voz-leticia.md`. varrer e reescrever se achar:
- travessão (—) → cortar, usar vírgula, ponto ou reticência
- Title Case em título ou heading → caixa de frase
- "não é X, é Y" / "mais que X, é Y" em qualquer canal → afirmar direto só o que é
- emoji decorativo ou mais de 1 emoji → no whats máx 1 que carregue sentimento, no resto quase zero
- aforismo, frase de efeito ou conclusão grandiosa → ler a última frase, se for bordão, cortar
- "ponto." isolado como ênfase → cortar
- adjetivo poético vazio (sem alma, mágico, incrível) → trocar por concreto
- nome próprio minusculizado (Instagram, iPhone, Smartbase, Apple) → subir
- registro casual 100% limpo sem nenhuma abreviação → soa higienizado, soltar mt/pq/dps natural

## 2. travas do cliente (se a entrega for de cliente)

SEMPRE ler `clientes/[nome]/CLAUDE.md` antes. nunca misturar clientes (público, persona, tom e palavra-trava de um jamais vazam pro outro).

travas conhecidas pra conferir:
- Smartbase: proibido "markup", proibido usar "nota fiscal/comprovante" como argumento, proibido "Paraguai" em copy de site (usar "importado"; Paraguai só no Instagram ao vivo), inclusive em artigo de blog de SEO mesmo quando o termo de busca é "iphone do paraguai" (decisão 17/06: usar "importado", abrir mão do termo). afirmar originalidade, nunca se defender de "golpe/paralelo". dizer que a garantia NÃO depende de nota é ok; usar nota como prova de confiança, não.
- GeneSneakers: nunca posicionar contra o varejo. "markup nacional", "sneakerheads", "drop", "curadoria" são só dela. nunca "réplica", "paralelo", "premium", "100% original garantido".
- FTemper: fala com o serralheiro, tom técnico sem corporativês.
- Sodi: próximo, sem academicismo, Lele e Soi as duas protagonistas.

na dúvida sobre uma trava, perguntar antes de entregar, não chutar.

## 3. design e arte (se tiver visual)

arte é o MAIOR ponto de retrabalho da Letícia. revisar com rigor extra e, se for entrega visual de verdade, abrir o sub-Claude revisor crítico sempre.
- seguir `marca/design-guide.md` e o design guide do cliente: paleta, tipografia, espaçamento, grid
- mockup de aparelho ou tela = device frame realista + screenshot/UI real, nunca retângulo desenhado
- conferir hierarquia visual, alinhamento, respiro e margens, contraste e legibilidade
- **elemento visual em HTML (tabela, card, bloco) pra site/post de cliente: RENDERIZAR (`npx playwright screenshot --browser webkit`) e olhar o PNG ANTES de entregar.** nunca afirmar "tá legível" sem ver. nunca montar visual em modo claro (fundo branco, texto escuro) pra site de tema escuro. (lição airpods 16/06: entreguei tabela modo claro = texto escuro em fundo escuro do site, ilegível; a Letícia perguntou 3x "passou pela revisão?". Smartbase é tema escuro: bg #07070E, surface #0F0F1C, texto #F2F2F6, azul #3E82F7.)
- nada de placeholder, lorem, imagem genérica ou elemento fora da identidade do cliente
- peça final em SVG (regra da casa)
- ser honesto sobre o nível: se a arte é um rascunho estruturado pra Letícia finalizar no Figma, dizer isso, não entregar como se fosse final
- regras específicas que a Letícia ajusta na arte entram aqui pela trava 2, conforme ela aponta o que sempre tem que recalibrar no Figma

## 4. eficiência e repetição

- isso repete info que ela já tem nos arquivos? então referenciar, não repetir.
- estou perguntando algo que já está no contexto ou na memória? então buscar primeiro, não pedir pra ela.
- estou refazendo algo que já existe? conferir antes de criar do zero.
- antes de propor qualquer ação ou sugerir criar algo, varrer TODOS os arquivos relevantes do cliente, não só alguns. **operacional: antes de oferecer "montar/criar X", rodar uma busca (grep/glob por X) na pasta do cliente; se já existe, partir do que existe.** não sugerir criar o que já existe nem perguntar o que já está documentado. (lições smartbase, mesma falha 2x na mesma sessão: sugeri "montar a máquina de conversa" sem ler `maquina-conversa-smartbase.md` que já existia pronta; e perguntei "monto a planilha de tracking" sem ver que ela já está definida na máquina e que o funil/retargeting do Meta já tinha sido discutido no `relatorio-meta-ads-smartbase.md`.)

## 5. completude

- isso responde de fato o que ela pediu, inteiro? (não entregar metade)
- conferi o que dava pra conferir antes de afirmar que tá pronto?
- considerei os fatores externos/sazonais antes de propor ação com data ou verba? (eleição, black friday, copa, câmbio, lançamento de produto mudam custo de ads, atenção e timing.) (lição smartbase: propus escalar ads em set/out sem ver que eleição presidencial + black friday inflam o CPM justo nesses meses.)
- afirmação de "validado/confirmado/é tendência" que depende de fato externo (tecnologia, lançamento, novidade de mercado): pesquisar o estado MAIS ATUAL antes de cravar, checando se houve marco recente (WWDC, keynote, atualização de versão). nunca declarar validado com a primeira resposta rasa. (lição iOS 27: peguei o iOS 18.4/26 desatualizado e dei como validado, quando o fato que importava era o iOS 27, em beta agora e público em set/2026.)
- a entrega responde no NÍVEL que ela pediu? pedido amplo/estratégico ("planejamento macro", "estratégia", "plano") não é a leitura mais operacional por padrão: "macro" é nível de frentes, objetivos e prioridades, acima da pauta de conteúdo. antes de executar ou disparar pesquisa, calibrar numa vez o que o pedido significa e o escopo, sem reduzir a uma skill operacional nem afunilar pra um cliente sozinha. (lição 16/06: ela pediu planejamento de estratégias macro, eu reduzi a pauta de conteúdo e afunilei pra Smartbase, gastando rodadas na premissa errada.)
- número ou percentual (% de imposto, spec, preço, estatística) tem que bater com a fonte citada. nunca cravar um número que a fonte não dá. (lição Smartbase: artigo afirmou "mais de 60% é imposto" citando em.com.br, que não dá esse número, e a própria pesquisa registrava ~40%. número no ar pega como propaganda enganosa.)

## veredito

- passou tudo → entregar.
- achou problema → consertar e revisar de novo. só entregar o que passou.
- nunca entregar cru "pra ela ver se tá bom". isso é exatamente o que a trava conserta.
- se algo ficou sem solução agora, dizer com franqueza o que falta e por quê, já com um caminho.
