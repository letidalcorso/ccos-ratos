# AGENTS.md — Agent onboarding and quick rules

Purpose: help AI coding agents get productive in this workspace quickly. Read these links first and follow the minimal, actionable conventions below.

Essential reading (in order)

- [CLAUDE.md](CLAUDE.md) — primary project context and workspace rules.
- [_contexto/empresa.md](_contexto/empresa.md) — company & tools overview.
- [_contexto/preferencias.md](_contexto/preferencias.md) — tone and communication preferences.
- [_contexto/estrategia.md](_contexto/estrategia.md) — current priorities and focus.
- [marca/design-guide.md](marca/design-guide.md) — required for any visual output.
- [templates/skills/](templates/skills/) — skill templates to reuse when creating new skills.
- [templates/ferramentas/catalogo.md](templates/ferramentas/catalogo.md) — available tools and CLIs.

Quick agent rules (concise)

- Always read the three `_contexto/` files and the root `CLAUDE.md` before making changes that affect project workflow or client content.
- Prefer linking to existing docs rather than copying content. Use workspace-relative links.
- When creating skills, follow the local conventions: save them in `.claude/skills/<name>/SKILL.md` and include any templates in the same folder. See `templates/skills/` for examples.
- For visual render pipelines, follow `marca/design-guide.md` and the Playwright commands in `templates/skills/carrossel.md`:

  ```bash
  npx playwright install chromium
  npx playwright screenshot --viewport-size=1080,1350 --full-page "file:///absolute/path/slide-01.html" slide-01.png
  ```

- Keep changes minimal and surgical: avoid refactoring unrelated files.
- If the task is multi-step, create or update a todo list using the workspace `manage_todo_list` convention (ask before long, disruptive changes).
- If a change affects a client, update that client's `CLAUDE.md` (e.g., `clients/<name>/CLAUDE.md`) or ask the owner before editing.

Where to save common outputs

- Generated content: `conteudo/` or `clientes/<client>/conteudo/` when client-specific.
- Visual assets: `clientes/<client>/conteudo/` or `conteudo/carrosseis/<tema>/` per templates.
- Skills (local): `.claude/skills/<skill-name>/SKILL.md`.

If you can't find something

- Run a quick repo scan for `templates/skills` or `CLAUDE.md`. If unclear, ask the user one focused question.

Contact / feedback

If you're unsure about tone, visual choices, or where to save artifacts, ask a single clarifying question referencing the exact file or client.

— End
