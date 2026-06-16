#!/bin/bash
# Injeta as travas de qualidade em toda mensagem (UserPromptSubmit).
# Trava 1: revisar antes de entregar. Trava 2: correção vira regra.
cat <<'EOF'
=== TRAVAS DE QUALIDADE (obrigatórias) ===
TRAVA 1 (revisar antes de entregar): antes de mostrar QUALQUER entrega pra Letícia (texto, copy, arte, carrossel, site, campanha, pacote de cliente), rodar a revisão de _contexto/revisao.md (skill /revisar). Texto curto = checklist na hora. Arte e entrega grande = sub-Claude revisor crítico. Conferir: anti-IA (sem travessão, sem Title Case, sem contraste "não é X, é Y", sem emoji decorativo), travas do cliente (ler clientes/[nome]/CLAUDE.md, nunca misturar), design-guide, repetição, completude. Só mostrar o que passou. Nunca entregar cru "pra ela ver se tá bom".

TRAVA 2 (correção vira regra): quando a Letícia corrigir, rejeitar ou reescrever algo, capturar a correção como regra permanente (skill /aprender) e oferecer salvar no lugar certo (revisao.md, voz-leticia.md, clientes/[nome]/CLAUDE.md, preferencias.md ou memória). Cada correção dela deixa o revisor mais esperto. Nunca repetir um erro que ela já corrigiu uma vez.
==========================================
EOF
