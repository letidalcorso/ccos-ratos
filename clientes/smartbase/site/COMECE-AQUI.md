# 🟢 COMECE AQUI — guia do zero pra montar o site smartbase no Shopify

Oi, Leti! Este guia é pra **quem nunca fez um site**. Vou explicar **cada passo**, o que é cada
ferramenta e o que clicar. Vai com calma, um item de cada vez. Não dá pra "quebrar" nada — se
travar, copia a mensagem de erro e cola pro Claude Code; ele te ajuda a sair.

---

## 1. Entendendo as peças (leia 2 minutos)

Pensa assim, como numa cozinha:

- **O pacote (este zip)** = a *receita e os ingredientes* do site (design + instruções). NÃO é o site pronto.
- **Shopify** = a *loja* em si (onde ficam produtos, e onde o site vai morar no ar).
- **Tema Shopify** = a *roupa* da loja (o visual). É isso que vamos construir a partir da receita.
- **VS Code** = o *programa* onde você abre os arquivos e trabalha. (Como um "Word" pra sites.)
- **Claude Code** = o *assistente* dentro do VS Code que vai escrever o código do tema pra você.
- **Shopify CLI** = uma *ferramentinha de terminal* que liga o que você está fazendo no VS Code
  à sua loja Shopify (faz o "preview ao vivo" e publica).
- **Node.js** = um *motor* que o Shopify CLI precisa pra funcionar. Instala e esquece.
- **Terminal** = uma *caixinha de texto* dentro do VS Code onde você digita comandos. Calma, vou dar os comandos prontos.

👉 Resumo do fluxo: **abrir a pasta no VS Code → pedir pro Claude Code construir o tema → ver no
preview ao vivo → publicar na sua loja Shopify.**

---

## 2. O que instalar (uma vez só)

Faça nesta ordem. Cada um é "baixar e clicar em avançar".

### a) Node.js
1. Vá em **https://nodejs.org**
2. Baixe a versão **"LTS"** (o botão da esquerda).
3. Instale (avançar → avançar → concluir).

### b) VS Code
1. Vá em **https://code.visualstudio.com**
2. Baixe e instale.

### c) A extensão do Claude Code no VS Code
1. Abra o VS Code.
2. Na barra lateral esquerda, clique no ícone de **Extensões** (quadradinhos, `Ctrl+Shift+X`).
3. Pesquise **"Claude Code"** e clique em **Install**.
4. Faça login com sua conta Anthropic quando ele pedir.

### d) Shopify CLI
1. No VS Code, abra o **terminal**: menu **Terminal → New Terminal** (ou `Ctrl+'`).
2. Na caixinha que abrir embaixo, digite exatamente isto e aperte Enter:
   ```
   npm install -g @shopify/cli@latest
   ```
3. Espere terminar (aparece o cursor de novo). Pronto.
   - Se der erro de permissão no Mac, tente colocando `sudo ` na frente e sua senha.

### e) Uma loja Shopify (ou loja de teste grátis)
- Se você **já tem a loja** smartbase no Shopify: ótimo, vamos usar ela.
- Se ainda **não tem** e quer testar de graça: crie uma **development store** (loja de
  desenvolvimento, gratuita) em **https://partners.shopify.com** → criar conta → **Stores → Add store
  → Development store**. Serve perfeitamente pra montar e ver o site antes de pagar plano.

---

## 3. Abrir o projeto no VS Code

1. **Descompacte** este zip numa pasta fácil de achar (ex.: na Área de Trabalho, pasta `smartbase-handoff`).
2. No VS Code: menu **File → Open Folder…** e escolha essa pasta `smartbase-handoff`.
3. Você vai ver, na lateral esquerda, os arquivos: `README.md`, a pasta `source/`, e este guia.

---

## 4. Pedir pro Claude Code construir o tema

1. Abra o **Claude Code** no VS Code (ícone dele na lateral, ou aperte `Cmd+Esc` no Mac / `Ctrl+Esc` no Windows).
2. **Cole exatamente este pedido** na conversa do Claude Code:

```
Esta pasta tem um pacote de handoff de design. Leia o README.md INTEIRO primeiro —
ele é a fonte da verdade. Quero construir um TEMA SHOPIFY completo e funcional da loja
smartbase, com a estrutura oficial de tema (layout/, sections/, templates/, snippets/,
assets/, config/settings_schema.json), onde EU consigo gerenciar imagens, textos e
produtos pelo painel do Shopify (sem mexer em código).

Regras:
- Use o CSS de source/ (colors_and_type.css, kit.css, pages.css) direto nos assets do tema.
- Os arquivos .jsx.txt são SÓ referência dos componentes — recrie como seções .liquid.
- NÃO inclua a moldura estilo Safari nem a sidebar de ícones (são só do protótipo).
- Conversão é via WhatsApp (+55 54 99662-4494), sem carrinho na v1.
- As ANIMAÇÕES ficam pra depois — não precisa fazer agora.

Antes de programar, me explique em português, de forma simples, o plano em etapas, e
vá fazendo UMA etapa de cada vez, esperando eu aprovar cada uma.
```

3. Ele vai ler o README e te responder com um **plano**. Leia, e responda **"pode começar pela etapa 1"**.
4. Vá aprovando etapa por etapa. Se não entender algo, pergunte pra ele em português normal — ele explica.

> 💡 O Claude Code pode pedir permissão pra criar arquivos e rodar comandos. Pode aprovar.

---

## 5. Ver o site AO VIVO (o "preview" do Shopify) — passo a passo

Isto mostra o site no navegador e **atualiza sozinho** cada vez que algo muda. É a parte mais legal.

1. No VS Code, abra o terminal (**Terminal → New Terminal**).
2. Digite e aperte Enter:
   ```
   shopify theme dev
   ```
3. **Na primeira vez**, ele vai abrir o navegador pedindo pra você **fazer login na sua loja
   Shopify** e autorizar. Faça o login e clique em permitir.
   - Se você tiver mais de uma loja, ele pergunta qual — escolha a smartbase (ou a de teste).
4. Quando terminar de carregar, o terminal mostra alguns links (URLs). Procure o que ele chama de
   **"Preview"** (algo como `http://127.0.0.1:9292`). **Segure Ctrl (ou Cmd) e clique** nesse link —
   abre o site no navegador.
5. **Deixe esse terminal rodando** enquanto trabalha. Cada mudança que o Claude Code fizer aparece
   sozinha no preview (é só atualizar/esperar). 🎉
6. Pra **parar** o preview quando terminar: clique no terminal e aperte `Ctrl + C`.

> Se o comando `shopify theme dev` reclamar que "não é um tema", é porque o Claude Code ainda não
> criou a estrutura — termine a etapa 1 do plano dele (a que cria as pastas do tema) e tente de novo.

---

## 6. Publicar na loja (quando estiver pronto)

Você tem dois jeitos — comece pelo preview (passo 5) até gostar do resultado. Depois:

**Jeito A — subir direto (recomendado):**
1. No terminal: `shopify theme push`
2. Ele pergunta se quer criar um tema novo (diga que sim, dê um nome tipo "smartbase v1").
3. Isso envia o tema pra sua loja como **rascunho** (não troca o site no ar ainda).
4. No painel do Shopify: **Loja virtual (Online Store) → Temas** → você vê o "smartbase v1" na lista.
   Clique em **Visualizar** pra conferir, e em **Publicar** quando quiser deixar no ar.

**Jeito B — gerar um arquivo .zip do tema:**
1. Peça ao Claude Code: *"gere o .zip do tema pronto pra subir no Shopify"*.
2. No painel do Shopify: **Temas → Adicionar tema → Fazer upload de arquivo zip** → escolha o zip.
   ⚠️ Atenção: esse zip é **o tema construído pelo Claude Code**, NÃO o zip do handoff.

---

## 7. Editar textos, imagens e produtos (a parte boa — sem código!)

Depois do tema na loja, é tudo pelo painel do Shopify:
- **Textos e imagens das seções**: painel → **Temas → Personalizar**. Clica em cada seção (hero,
  destaques, etc.) e troca texto/foto nos campos do lado direito.
- **Produtos da vitrine**: painel → **Produtos → Adicionar produto** (nome, fotos, preço, descrição).
  A vitrine puxa eles automaticamente.
- **Posts do blog**: painel → **Loja virtual → Postagens do blog**.

---

## 8. Quando voltar pra mim (animações)

As animações de entrada (os blocos "subindo" conforme rola) a gente deixou **pra depois**, de
propósito. Quando o tema estiver no ar e você quiser, é só me chamar — eu te passo o trecho de
animação (CSS puro) ou um pedido pronto pra colar no Claude Code.

---

## ❓ Se travar
- Copie a mensagem vermelha/erro e **cole no Claude Code** perguntando "o que faço com isso?".
- Erros comuns: faltou instalar o Node, ou rodou o comando fora da pasta do tema, ou não fez login
  na loja. O Claude Code resolve cada um desses contigo.

Você consegue. 💪 Um passo de cada vez.
