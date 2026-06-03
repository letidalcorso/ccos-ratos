#!/bin/bash
# Injeta catálogo de skills locais antes de cada mensagem
# Garante que o Claude sempre saiba quais skills usar — sem precisar pedir

REPO_ROOT=$(git -C "$(dirname "$0")" rev-parse --show-toplevel 2>/dev/null) || exit 0
SKILLS_DIR="$REPO_ROOT/.claude/skills"
COMMANDS_DIR="$REPO_ROOT/.claude/commands"

[ -d "$SKILLS_DIR" ] || exit 0

echo "=== SKILLS LOCAIS DISPONÍVEIS ==="
echo "REGRA OBRIGATÓRIA: Antes de responder qualquer tarefa, verificar se alguma skill abaixo é relevante. Se sim, invocar com a Skill tool imediatamente — sem esperar o usuário pedir."
echo ""

for skill_dir in "$SKILLS_DIR"/*/; do
  skill_name=$(basename "$skill_dir")
  skill_file="$skill_dir/SKILL.md"
  [ -f "$skill_file" ] || continue
  # Extrai o texto "Use quando..." do frontmatter (pode estar em múltiplas linhas)
  trigger=$(python3 -c "
import re, sys
content = open('$skill_file').read()
m = re.search(r'Use quando[^.]+\.', content, re.DOTALL)
if m:
    text = re.sub(r'\s+', ' ', m.group(0)).strip()
    print(text)
" 2>/dev/null)
  if [ -n "$trigger" ]; then
    echo "/$skill_name — $trigger"
  else
    echo "/$skill_name"
  fi
done

if [ -d "$COMMANDS_DIR" ]; then
  echo ""
  echo "Comandos: $(ls "$COMMANDS_DIR"/*.md 2>/dev/null | xargs -I{} basename {} .md | tr '\n' ' ')"
fi

echo "================================="
