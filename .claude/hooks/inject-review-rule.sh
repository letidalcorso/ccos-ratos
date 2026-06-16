#!/bin/bash
# Injeta a trava de revisão em toda mensagem (UserPromptSubmit).
# Garante que nada chega na Letícia sem passar pela checagem de _contexto/revisao.md.
cat <<'EOF'
=== TRAVA DE REVISÃO (obrigatória antes de entregar) ===
Antes de mostrar QUALQUER entrega pra Letícia (texto, copy, arte, carrossel, site, campanha, pacote de cliente), rodar a revisão de _contexto/revisao.md (skill /revisar). Ela revisa por último, depois que a entrega já passou pela trava.
- Texto curto: rodar a checklist na hora, antes de fechar a resposta.
- Arte e entrega grande: abrir um sub-Claude revisor com olhar crítico.
- Conferir sempre: anti-IA (sem travessão, sem Title Case, sem contraste "não é X, é Y", sem emoji decorativo), travas do cliente (ler clientes/[nome]/CLAUDE.md, nunca misturar clientes), design-guide pra arte, repetição (não repetir info nem pedir o que já existe nos arquivos), completude (responder inteiro o que foi pedido).
Só mostrar o que passou. Nunca entregar cru "pra ela ver se tá bom".
==================================================
EOF
