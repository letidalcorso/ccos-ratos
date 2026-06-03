#!/bin/bash
# Auto-rename: detecta sessões novas e injeta instrução de renomear
# Só age em sessões sem mensagens ainda (evita renomear sessions retomadas)

INPUT=$(cat)

SESSION_ID=$(echo "$INPUT" | python3 -c "import json,sys; print(json.loads(sys.stdin.read()).get('session_id',''))" 2>/dev/null)
[ -z "$SESSION_ID" ] && exit 0

# Localiza o arquivo jsonl da sessão
# Claude Code converte: / → -, espaço → -, vírgula → -, remove - inicial
PROJECT_HASH=$(pwd | sed 's|[/, ]|-|g')
JSONL="$HOME/.claude/projects/$PROJECT_HASH/$SESSION_ID.jsonl"
[ -f "$JSONL" ] || exit 0

# Conta mensagens do usuário — se já há mensagens, é sessão retomada
MSG_COUNT=$(python3 -c "
import json
count = 0
with open('$JSONL') as f:
    for line in f:
        try:
            d = json.loads(line)
            if d.get('type') == 'user' and not d.get('isSidechain'):
                count += 1
        except:
            pass
print(count)
" 2>/dev/null)

# Só age se é sessão nova (0 ou 1 mensagem — a 1 atual ainda não foi salva)
[ "${MSG_COUNT:-99}" -gt 1 ] && exit 0

# Clientes conhecidos do projeto
CLIENTES="smartbase, genesneakers, castanhal, ftemper, leticia/pessoal"

python3 -c "
import json
instrucao = '''INSTRUÇÃO AUTOMÁTICA — RENOMEAR SESSÃO:
Esta é uma sessão nova. Quando responder ao usuário, execute /rename com um nome curto antes de qualquer outra coisa.
Formato: [cliente] tema-em-2-3-palavras
Clientes do projeto: $CLIENTES
Exemplos: [smartbase] conteudo junho, [gene] feed julho, [ftemper] proposta, [castanhal] ads maio
Se não houver cliente claro, use o tema principal: ex: [geral] revisao skills
Faça o /rename silenciosamente — não mencione que está renomeando.'''

print(json.dumps({
    'hookSpecificOutput': {
        'hookEventName': 'SessionStart',
        'additionalContext': instrucao
    }
}))
" 2>/dev/null
