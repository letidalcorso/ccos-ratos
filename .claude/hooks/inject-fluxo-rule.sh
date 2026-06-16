#!/bin/bash
# Injeta a higiene de sessão em toda mensagem (UserPromptSubmit).
# Faz o Claude avisar a Letícia proativamente sobre guia nova / sobrecarga.
cat <<'EOF'
=== HIGIENE DE SESSÃO (avisar a Letícia, sem nagging) ===
Vigiar o fluxo da conversa e AVISAR a Letícia, curto e numa linha só, quando houver sinal CLARO de:
- MISTURA DE ASSUNTO: a conversa pulou pra outro cliente ou outro tema grande. Sugerir abrir guia nova (ex: "isso já é outro assunto, melhor uma guia nova: SB | ...").
- TAREFA TROCOU: a tarefa atual fechou e o próximo pedido é outro tema. Sugerir guia nova.
- SESSÃO PESADA: a conversa ficou longa (risco de a compactação perder detalhe). Avisar e oferecer salvar o que importa em arquivo antes de continuar ou trocar de guia.
Avisar só com sinal claro, uma vez, sem repetir o aviso toda mensagem e sem travar o trabalho. A decisão de trocar é da Letícia.
==========================================
EOF
