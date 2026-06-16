# Letícia — Claude Code OS

# O que é esse workspace?
Workspace central da SolzLab. Aqui ficam os arquivos de contexto do negocio, 
materiais de clientes, conteudo, projetos proprios e tudo que o Claude precisa pra que a Letícia consiga orquestrar uma agência. 
Sou freelancer de marketing digital e alguns materiais off (como desing para stand, banner, etc). Por mais que eu seja freelancer, eu tenho alguns parceiros que costumam trabalhar comigo. 
Tenho uma marca: Solz Lab - com domínio próprio para e-mails mas sem site.
Aqui ficam todos os clientes, entregas e conteúdos.

**Estrutura de pastas:**
- `_contexto/` — memória do sistema (não apagar)
- `clientes/` — um subdiretório por cliente
- `clientes destivados/` — arquivo morto de clientes encerrados (não apagar, não usar como referência ativa)
- `marca/` — identidade visual e guia de design
- `templates/` — templates de skills prontos pra personalizar
- `scheduled/` — agendamentos recorrentes do Claude
- `scripts/` — scripts de automação
- `Letícia Particular/` — projetos pessoais da Letícia
- `codex-plugin-cc-main/` — plugin Codex (não editar manualmente)
- `templates/ferramentas/catalogo.md` – APIs e ferramentas disponíveis pra usar skills

## Organização e arquivo morto
Manter as pastas e o repositório leves. Arquivo antigo ou inútil (iterações de design já superadas, prints/previews, duplicados, zips de tema antigos, exports já usados) deve ser arquivado no Google Drive (pasta de arquivo morto) e apagado do computador.
- Só arquivar o que NÃO está referenciado por docs, site ou ativos em uso.
- Sempre mostrar a lista antes de apagar, e confirmar a cópia no Drive antes de deletar.
- Binário pesado (zip, vídeo, lote de PNG) não deve viver no repositório.

## Quem sou
Sou Letícia, formada em Relações Públicas e sempre trabalhei em agências, tanto de pesquisa e plano de negócio quanto atendimento de uma agência de marketing digital.
Quero ter o meu próprio negócio e por isso optei por começar a fazer freelancer. 
Atendo pequenas empresas com foco em estratégia de marketing digital completa — do planejamento ao design e execução.
Quero criar solucoes com IA, design e tecnologia pra resolver problemas reais dos negócios dos meus clientes, otimizar tempo e conseguir gerar mais renda

## O que mais faço
- Conteúdo para redes sociais
- Planejamento de campanhas
- Idealização de projetos 
- Ser criativa
- Estrategia de marca e comunicacao

## Clientes ativos

> **Trava anti-mistura:** cada cliente tem público, tom e regras próprios. NUNCA aplicar persona, público ou tom de um cliente em outro (ex: "sneakerheads" é só GeneSneakers; "serralheiro" é só FTemper). Antes de qualquer tarefa de um cliente, ler o `CLAUDE.md` da pasta dele em `clientes/[nome]/CLAUDE.md`, que é a fonte da verdade e prevalece sobre este resumo.

### GeneSneakers
Marca D2C de tênis sob encomenda. Produtos dos mesmos fabricantes que produzem para Nike, Adidas, New Balance — sem o markup da cadeia de varejo brasileira. **Esse modelo de origem não é comunicado externamente.** Posicionamento externo: marca editorial com curadoria de modelos, acesso antecipado, sem markup nacional. Tagline: "Estilo nos pés."
**Escopo:** Instagram orgânico, TikTok, Meta Ads + TikTok Ads (após validação orgânica), identidade visual (concluída), site/one-pager (pendente), WhatsApp como canal de atendimento e conversão.
**Público:** Sneakerheads — mentalidade, não faixa etária. Entendem de drops, reconhecem qualidade, não querem pagar intermediário.
**Pilares:** Produto com vida / Takes fortes / Cultura sneaker.
**Tom:** Confiante, insider, provocativo sem ser agressivo. Afirma, não explica. Nunca usar: paralelo, réplica, 100% original garantido, premium, promoção. Usar: curadoria, markup nacional, drop, acesso, encomenda.
**WhatsApp:** completamente informal, máximo 1 emoji, sem linguagem de promoção.
**Aprovação:** PPT mensal no Google Drive.
**Pasta:** `clientes/genesneakers/`

### Sodi
Hub de educação para profissionais de atendimento publicitário. Modelo de parceria: Letícia (Lele) + Soiane (Soi) por comissão. As duas são protagonistas — ambas aparecem, gravam e têm voz.
**Soiane:** ex-gerente de atendimento da Duo Studio, liderou 16 atendimentos, especializações em jornada do cliente.
**Produto:** S.O.S Atendi — curso de atendimento publicitário em desenvolvimento. 7 módulos + bônus. Promessa: sair do atendimento operacional para o estratégico.
**Instagram:** @sodi.hub. Existe grupo no Instagram mas não está sendo fomentado.
**Objetivo:** construir comunidade antes do lançamento. Fluxo: seguidores → comunidade engajada → compradores do S.O.S Atendi.
**Tom:** próximo, direto, sem academicismo. "A gente sabe o que você tá sentindo porque a gente também sentiu." Evitar: linguagem corporativa, coach genérico, promessas vazias.
**Pasta:** `clientes/sodi/`

### FTemper
Distribuidora gaúcha de esquadrias de alumínio e componentes para vidro temperado. 10 anos de mercado, +2.200 SKUs, frota própria, atende +100 municípios no RS.
**Instagram:** @ftempercomponentes | **Site:** ftemper.com
**Escopo:** 6 posts/mês (~4 estáticos + ~2 carrosséis), copy + design, banners para site sob demanda. Stories e Reels fora do escopo. Fee: R$500/mês.
**Público:** Serralheiros (foco), vidraceiros, arquitetos.
**Pilares:** Autoridade Técnica / Produto Aplicado / Institucional-Regional / Novidades.
**Tom:** profissional, empático, técnico sem ser corporativo. Fala com o serralheiro como quem entende do ofício.
**Identidade:** tons industriais — cinza grafite, azul petróleo, branco, aço.
**Contexto:** 1 ano de trabalho, apenas 120 seguidores ganhos. Cliente não investe além do fee. Maximizar orgânico sem verba.
**Aprovação:** PPT mensal no Google Drive.
**Pasta:** `clientes/ftemper/`

### Smartbase
Loja de aparelhos Apple com preço acessível. Vende iPhones e outros produtos Apple originais — novos (importados do Paraguai) e seminovos. Diferenciais: originalidade garantida e preço competitivo.
**Loja Shopify:** smartbase-2903.myshopify.com
**Escopo:** Instagram orgânico + início de impulsionamento. Site no Shopify em desenvolvimento (houve perda de dados — recuperar via histórico de revisões do tema antes de retrabalhar).
**Público:** pessoas que querem Apple original com preço mais baixo, desconfiam de paralelos mas não conseguem pagar preço de loja oficial.
**Tom:** confiável, acessível, direto. Transmitir segurança sobre originalidade. Sem exageros nem linguagem de "promoção genérica".
**Aprovação:** PPT mensal no Google Drive.
**Pasta:** `clientes/smartbase/`

### Castanhal
Cliente sob demanda — sem escopo fixo. Projetos solicitados conforme necessidade (stand, campanhas, peças avulsas). Cada projeto é independente, criar subpasta em `projetos/`.
**Pasta:** `clientes/castanhal/`

> Contexto dos clientes migrado em 2026-04-22. FTemper, GeneSneakers e Smartbase têm briefing/ e conteudo/ populados.

## Como trabalho
Cada cliente tem sua pasta em `clientes/[nome-cliente]/`.
Cada pasta de cliente tem um `CLAUDE.md` com o contexto completo do cliente — ler antes de qualquer tarefa relacionada.
Propostas salvar em `clientes/[nome-cliente]/proposta.html`.
**Estrutura de pastas:**
- `_contexto/` – quem somos, preferencias, foco atual
- `marca/` – identidade visual e design guide
- `clientes/` – pasta por cliente com briefing e proposta
- `dados/` – arquivos de referencia, prints, imports
- `docs/` – especificações e documentação de projetos
- `letícia/` – arquivos pessoais da Letícia
- `templates/skills/` – templates de skills prontos pra personalizar com /mape
- `templates/ferramentas/catalogo.md` – APIs e ferramentas disponiveis pra usa skills

Ferramentas: Google Workspace, Figma, Notion, Claude, Gemini e costumava usar os agentes de LightCopy do Leandro Ladeira no ChatGPT.

## Tom de voz
Descontraído e próximo, sem perder o profissionalismo. Direto ao ponto.
Evitar: emojis, textos longos, linguagem corporativa.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (se existirem e estiverem configurados):

1. `_contexto/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_contexto/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_contexto/estrategia.md` — foco atual, prioridades, o que pode esperar

Se a tarefa for sobre um cliente específico, usar a seção correspondente em **## Clientes ativos** como contexto principal. Os arquivos do cliente ficam em `clientes/[nome-cliente]/` — briefings, conteúdos, propostas e dados.

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, proposta, slide, landing page), consultar `marca/design-guide.md` como referência de estilo. Enviar em SVG.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Rituais de trabalho

### Todo dia — Início do trabalho
Rodar `/bomdia`. Lê o Notion, mostra no máximo 3 tarefas prioritárias e sugere por onde começar. Oferece bloquear tempo no Google Calendar.

### Todo dia às 17h — Processar demandas
Rodar `/demanda`. Lê tarefas com status "📥 Inbox" no Notion (criadas automaticamente pelo WhatsApp via Z-API + Make), interpreta com contexto do cliente e executa: copy → visual no Figma.
Para registrar uma demanda: mandar mensagem pra si mesma no WhatsApp no formato `cliente: descrição`.

### Dia 15 de cada mês — Planejamento do mês seguinte
Rodar `/planejamento`. A skill detecta a data automaticamente, pesquisa tendências e novidades por segmento de cada cliente, gera ideias macro e envia notificação para contato@solzlab.com.br quando estiver pronto.
Depois da revisão das ideias, partir pro `/conteudo-social` por cliente para desenvolver textos e pauta completa.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe uma skill relevante em `.claude/skills/` ou `.claude/commands/`.
Se encontrar, seguir as instruções da skill.
Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Revisão antes de entregar (trava 1)

Nada chega na Letícia sem passar pela revisão. Antes de mostrar qualquer entrega (texto, copy, arte, carrossel, site, campanha, pacote de cliente), rodar a checklist de `_contexto/revisao.md` (skill `/revisar`). Ela revisa por último, depois que a entrega já passou pela trava.

- Texto curto: rodar a checklist na hora, antes de fechar a resposta.
- Arte e entrega grande: abrir um sub-Claude revisor com olhar crítico.
- Conferir: anti-IA, travas do cliente (ler `clientes/[nome]/CLAUDE.md`, nunca misturar), design-guide, repetição e completude.

Só mostrar o que passou. A trava também é reforçada por hook em toda mensagem (`inject-review-rule.sh`).

---

## Higiene de sessão

Avisar a Letícia de forma proativa e curta (sem nagging, só com sinal claro) quando: a conversa começar a misturar assuntos ou clientes, a tarefa atual fechar e o próximo pedido for outro tema (hora de abrir guia nova), ou a sessão ficar longa e pesada (risco de a compactação perder detalhe, então oferecer salvar em arquivo). A decisão de trocar de guia é dela. Reforçado pelo hook `inject-fluxo-rule.sh`. Detalhe do fluxo de guias em `_contexto/como-usar-o-claude.md`.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** → `_contexto/empresa.md`
- **Sobre preferências e estilo** → `_contexto/preferencias.md`
- **Sobre prioridades e foco atual** → `_contexto/estrategia.md`
- **Sobre o jeito de escrever / voz** → `_contexto/voz-leticia.md`
- **Sobre o que revisar antes de entregar (qualidade)** → `_contexto/revisao.md`
- **Sobre um cliente específico** → `clientes/[nome]/CLAUDE.md`
- **Regra de comportamento nessa pasta** → `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar o que foi salvo mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato. Só quando a informação tiver valor duradouro.

Essa é a **trava 2** do ciclo de calibração. A skill `/aprender` faz essa captura e o hook lembra dela em toda mensagem. Correção de qualidade vai pro `revisao.md` de propósito: o que a Letícia corrige hoje, o `/revisar` (trava 1) passa a pegar sozinho amanhã. Quando a correção for óbvia e durável, propor a linha já pronta pra ela só confirmar, sem encher de pergunta.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante no projeto (novo cliente, nova skill, mudança de foco, novo processo, ferramenta instalada, estrutura de pastas alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize os arquivos de memória?"

Se sim, identificar o que precisa atualizar:

- **Novo cliente, serviço, ferramenta, equipe** → `_contexto/empresa.md`
- **Mudança de prioridade ou foco** → `_contexto/estrategia.md`
- **Correção de tom ou estilo** → `_contexto/preferencias.md`
- **Nova pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Mudança visual (cores, fontes, logo)** → `marca/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais que não mudam o contexto
- Perguntas simples ou conversas sem ação
- Mudanças que já foram salvas pelo bloco "Aprender com correções"

**Dica:** se não sabe se algo mudou, rode `/atualizar` pra uma varredura completa.

---

## Criação de skills

Quando o usuário pedir pra criar uma nova skill:

1. Verificar se existe um template relevante em `templates/skills/`. Se existir, usar como base e adaptar pro contexto do usuário
2. Perguntar: "Essa skill é específica pra esse projeto ou vai ser útil em qualquer projeto?"
   - Específica desse negócio → salvar em `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Útil em qualquer projeto → salvar em `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_contexto/empresa.md` e `_contexto/preferencias.md` pra calibrar o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, referências, exemplos), criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code
