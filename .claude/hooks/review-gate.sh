#!/bin/bash
# Stop hook: TRAVA 1 dura. Não deixa a resposta terminar se houve entrega de
# cliente produzida nesta sessão que ainda não passou pela revisão.
# Loop-safe: se stop_hook_active=true (já bloqueou antes), libera pra não travar infinito.
INPUT=$(cat)
FLAG="/Users/leticiadalcorso/Documents/lets get tech, bitch/ratos de ia/.claude/.pending-review"
[ -f "$FLAG" ] || exit 0
ACTIVE=$(printf '%s' "$INPUT" | python3 -c "
import json, sys
try:
    print(json.load(sys.stdin).get('stop_hook_active', False))
except Exception:
    print(False)
" 2>/dev/null)
if [ "$ACTIVE" = "True" ]; then
  exit 0
fi
printf '%s' '{"decision":"block","reason":"TRAVA 1: voce produziu entrega de cliente nesta sessao que ainda NAO passou pela revisao. Rode /revisar agora contra _contexto/revisao.md (revisor independente para arte/entrega grande), conserte o que nao passar, e so entao finalize. O /revisar limpa o marcador ao concluir."}'
exit 0
