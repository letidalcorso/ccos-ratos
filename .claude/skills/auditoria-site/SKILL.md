# Skill: Auditoria de Site Pré-Lançamento

Use quando o usuário disser "revisa o site antes de ir pro ar", "auditoria do site", "checar as copies do site", "confere o site da Smartbase", "o site tá pronto pra publicar", ou chamar `/auditoria-site`.

Quando o usuário chamar `/auditoria-site` ou pedir pra "revisar o site antes de ir pro ar", "auditar o site", "checar as copies do site", execute este fluxo.

---

## O que esta skill faz

Revisa o site da Smartbase antes do lançamento em duas frentes:

1. **Copy** — lê todos os textos do site e avalia tom, clareza, alinhamento com o briefing do cliente
2. **Imagens** — para cada seção, verifica se existe imagem adequada em `site/img/`, sugere direção visual e oferece gerar com IA se faltar

---

## Fluxo de execução

### Passo 1 — Identificar escopo

Se o usuário não especificou qual página, auditar todas:
- `clientes/smartbase/site/index.html` — one-page principal
- `clientes/smartbase/site/seminovos.html` — seminovos
- `clientes/smartbase/site/formulario-tradein.html` — trade-in
- `clientes/smartbase/site/blog.html` — blog

Se especificou uma só, auditar apenas ela.

---

### Passo 2 — Ler os arquivos

Ler os HTMLs com o Read tool. Extrair:
- Todos os textos visíveis ao usuário (headlines, subtítulos, parágrafos, labels, CTAs, botões, tooltips)
- Atributos `alt` das imagens
- Referências de imagens usadas (`src` de `<img>`)

Ler também:
- `clientes/smartbase/CLAUDE.md` — briefing completo do cliente
- `clientes/smartbase/design-system.md` — identidade visual

---

### Passo 3 — Auditoria de copy

Para cada seção do site, avaliar:

**Critérios do briefing Smartbase:**
- Tom confiante, direto, com personalidade — fala como quem entende de Apple
- Nunca: linguagem de promoção genérica, "100% original garantido" defensivo, exclamações em excesso
- Sempre: desejo pelo produto, senso de oportunidade, confiança de especialista, CTA direto pro WhatsApp
- Trade-in e seminovos existem mas não são foco — não elevar como diferencial principal

**Para cada seção, identificar:**
- O que está funcionando bem
- O que está em desacordo com o tom ou objetivos
- Sugestão de reescrita (quando necessário — escrever a versão melhorada, não só apontar o problema)

**Formato da análise de copy:**

```
### [Nome da seção]
STATUS: ✓ OK / ⚠ AJUSTE / ✗ REESCREVER

TEXTO ATUAL:
"..."

PROBLEMA (se houver):
[O que está errado e por quê]

SUGESTÃO:
"..."
```

---

### Passo 4 — Auditoria de imagens

Listar todas as imagens referenciadas no HTML. Para cada seção com imagem:

1. Verificar se o arquivo existe em `site/img/`
2. Se existe: avaliar se o tipo de imagem (produto, ambiente, lifestyle) faz sentido para a seção
3. Se não existe ou está inadequada: sugerir direção visual

**Verificar também o repositório existente:**
```
clientes/smartbase/site/img/
```
Imagens disponíveis: hero-iphone17pro.jpg, iphone17-black.jpg, iphone17-lavender.jpg, iphone17e.jpg, iphone17-novos.jpg, watch-ultra3.jpg, seminovo-iphone14pro.png, seminovo-iphone14pro-frente.png

**Formato da análise de imagens:**

```
### [Nome da seção]
IMAGEM ATUAL: [nome do arquivo ou "nenhuma"]
STATUS: ✓ Adequada / ⚠ Pode melhorar / ✗ Falta imagem

DIREÇÃO VISUAL IDEAL:
[Descrever: tipo de produto, ângulo, fundo, clima — específico o suficiente pra gerar ou buscar]

IMAGEM DO REPOSITÓRIO QUE PODE USAR: [nome do arquivo, se houver match]
```

---

### Passo 5 — Gerar imagens faltantes (se necessário)

Ao final da análise, listar todas as seções sem imagem adequada.

Perguntar: "Quer que eu gere as imagens faltantes agora?"

Se sim, para cada imagem faltante:
- Usar a skill `/ai-image-generation` ou `/p-image`
- Prompt em inglês, fotorrealista, estilo Apple Marketing: fundo escuro ou neutro, produto em destaque, iluminação limpa, sem texto
- Salvar em `clientes/smartbase/site/img/[nome-descritivo].jpg`
- Atualizar o `src` correspondente no HTML

---

### Passo 6 — Relatório final

Entregar um resumo executivo com:

```
## Auditoria Smartbase — [data]

### Copy
- [N] seções OK
- [N] seções com ajuste sugerido
- [N] seções para reescrever

### Imagens
- [N] seções com imagem adequada
- [N] seções com imagem a trocar
- [N] seções sem imagem

### Próximos passos
1. [ação prioritária]
2. [ação prioritária]
3. [ação prioritária]
```

Perguntar se quer que as correções de copy sejam aplicadas diretamente nos HTMLs.

---

## Regras

- Nunca só apontar problemas — sempre entregar a solução (texto reescrito ou direção de imagem)
- Não sugerir mudanças estruturais no site — só copy e imagens
- Manter o tom do cliente: confiante, insider, sem exagero
- Se a copy estiver boa, dizer que está boa — não inventar problema onde não tem
- Ao aplicar correções nos HTMLs: sempre ler o arquivo antes de editar, mostrar o trecho antes/depois
