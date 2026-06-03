---
name: ftemper
description: Carrega o contexto completo da FTemper antes de qualquer tarefa — design system, tom de voz, pilares de conteúdo e status atual.
---

# Skill: /ftemper

Use esse comando antes de qualquer tarefa da FTemper.

## O que fazer

1. Ler `clientes/ftemper/CLAUDE.md` — contexto geral do cliente
2. Ler `clientes/ftemper/marca/design-guide.md` — design system completo com paleta, tipografia, glassmorphism e exemplos

## Após carregar, apresentar resumo no formato:

```
Contexto FTemper carregado.

**Status:** [o que está em produção, escopo mensal — 6 posts/mês]
**Tom:** técnico, empático, parceiro do serralheiro
**Visual:** azul royal + glassmorphism + Morganite/Sora
**Pilares:** Autoridade Técnica / Produto Aplicado / Institucional / Novidades

O que você quer fazer?
```

## Comportamento

- Não listar os arquivos lidos. Só mostrar o resumo.
- Para qualquer peça visual, aplicar obrigatoriamente o design system da FTemper:
  - Cor principal: Azul Royal `#005AD4`
  - Tipografia: Morganite (títulos/impacto) + Sora (corpo)
  - Assinatura visual: glassmorphism — cards translúcidos com `backdrop-filter: blur(16px)` e `rgba(255,255,255,0.55)`
  - Gradiente padrão: `linear-gradient(135deg, #005AD4 0%, #1A00B8 100%)`
  - Margem mínima: 80px em todos os lados
  - Logo: sempre referenciar `dados/id visual/Logomarca/logo 2.png` — nunca recriar em texto
  - Fundo: foto+overlay / gradiente azul puro / claro com textura (escolher um dos 3 padrões)
- Para copy, seguir o vocabulário da marca:
  - Palavras certas: parceiro, obra, variedade, agilidade, suporte técnico, catálogo, pronta entrega
  - Palavras proibidas: imperdível, aproveite, inovador, revolucionar, premium, jornada, ecossistema
  - Tom: direto, prático, de igual pra igual — nunca varejo, nunca corporativo
- Salvar entregas em `clientes/ftemper/conteudo/[nome-da-entrega]/`
