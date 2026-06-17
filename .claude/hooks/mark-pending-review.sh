#!/bin/bash
# PostToolUse (Write|Edit): marca que uma ENTREGA de cliente foi produzida e
# ainda precisa passar pela revisão (trava 1). Cria/anexa em .claude/.pending-review.
# Só conta entrega publicável dentro de clientes/ (copy, arte, blog, site),
# fora de status.md, CLAUDE.md e briefing/ (que são internos).
INPUT=$(cat)
FLAG="/Users/leticiadalcorso/Documents/lets get tech, bitch/ratos de ia/.claude/.pending-review"
printf '%s' "$INPUT" | python3 -c "
import json, sys
flag = r'''$FLAG'''
try:
    d = json.load(sys.stdin)
except Exception:
    sys.exit(0)
p = (d.get('tool_input', {}) or {}).get('file_path', '') or (d.get('tool_response', {}) or {}).get('filePath', '')
if not p:
    sys.exit(0)
deliverable = (
    '/clientes/' in p
    and p.endswith(('.md', '.svg', '.html'))
    and not p.endswith(('status.md', 'CLAUDE.md'))
    and '/briefing/' not in p
)
if deliverable:
    with open(flag, 'a') as f:
        f.write(p + '\n')
" 2>/dev/null
exit 0
