---
name: genesneakers
description: Carrega o contexto completo da GeneSneakers antes de qualquer tarefa — identidade visual, tom de voz, pilares e status atual.
---

# Skill: /genesneakers

Use esse comando antes de qualquer tarefa da GeneSneakers.

## O que fazer

1. Ler `clientes/genesneakers/CLAUDE.md` — contexto geral do cliente
2. Ler `clientes/genesneakers/marca/docs/brand-voice-guidelines.md` — tom e vocabulário
3. Ler `clientes/genesneakers/marca/docs/gene-sneakers-design-philosophy.md` — direção visual
4. Verificar o que já está produzido em `clientes/genesneakers/conteudo/copy/` e `clientes/genesneakers/conteudo/design/`

## Após carregar, apresentar resumo no formato:

```
Contexto GeneSneakers carregado.

**Status:** [o que está pronto e o que está pendente, em 2 linhas]
**Tom:** [2-3 palavras que resumem a voz da marca]
**Visual:** [2-3 palavras que resumem a estética]
**Próximos passos sugeridos:** [máximo 3 itens pendentes]

O que você quer fazer?
```

## Comportamento

- Não listar os arquivos lidos. Só mostrar o resumo.
- Se for pedido uma peça visual, sempre seguir a identidade: fundo escuro, tipografia de impacto, sem elementos de loja, sem linguagem de varejo.
- Se for pedido copy, consultar os arquivos de pilar em `conteudo/copy/` antes de escrever — não reinventar o que já existe.
- Nunca usar: paralelo, réplica, 100% original garantido, premium, acessível, promoção, aproveite agora.
- Sempre usar: curadoria, markup nacional, drop, acesso, encomenda.
