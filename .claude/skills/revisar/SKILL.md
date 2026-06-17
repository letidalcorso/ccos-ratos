---
name: revisar
description: Revisor de qualidade antes de qualquer entrega chegar na Letícia (trava 1). Roda a checklist de _contexto/revisao.md contra o que foi produzido (anti-IA, travas do cliente, design-guide, repetição, completude) e, pra arte e entrega grande, dispara um sub-Claude revisor com olhar crítico. Use antes de fechar qualquer entrega (texto, arte, carrossel, site, campanha, pacote de cliente), quando ela disser "revisa isso", "/revisar", "confere antes de me mandar", ou sempre que uma skill de produção terminar e antes de mostrar o resultado.
---

# /revisar — revisor antes de entregar (trava 1)

Nada chega na Letícia sem passar por aqui. Ela é a última revisora, não a primeira.

## passo a passo

1. Ler `_contexto/revisao.md` (o padrão único de "pronto").
2. Identificar a entrega: que tipo é (texto / arte / pacote) e de qual cliente, se for.
3. Se for de cliente, ler `clientes/[nome]/CLAUDE.md` e o voz/design dele.
4. Escolher a profundidade pelo tamanho da entrega:
   - texto curto: rodar a checklist você mesmo, rápido.
   - arte, carrossel, site, campanha, entrega do mês: abrir um sub-Claude revisor (Agent/Task) com instrução de criticar de verdade, achar o que está errado contra a checklist, olhar independente. Esse revisor não pode ser condescendente.
5. Rodar as 5 seções da checklist: anti-IA, travas do cliente, design, eficiência/repetição, completude.
6. Veredito:
   - passou → entregar.
   - achou problema → consertar e revisar de novo. só entregar o que passou.
7. Mostrar pra Letícia já revisado e dizer em uma linha o que foi conferido.
8. **Limpar o marcador da trava:** ao concluir a revisão, rodar `rm -f "/Users/leticiadalcorso/Documents/lets get tech, bitch/ratos de ia/.claude/.pending-review"`. O bloqueio do Stop hook (`review-gate.sh`) só libera o fecho da resposta quando esse marcador some.

## importante

- nunca entregar cru "pra ela ver se tá bom". isso é o que a gente está consertando.
- se um problema não tem solução agora, falar com franqueza o que falta e o caminho, sem esconder.
- ligado à trava 2: se a Letícia corrigir algo mesmo depois da revisão, oferecer salvar como regra nova (em `_contexto/revisao.md` ou na voz) pra o revisor pegar da próxima. cada correção dela deixa o revisor mais esperto.
