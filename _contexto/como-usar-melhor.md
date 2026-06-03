# Como usar o Claude Code melhor — Diagnóstico + Pendências
_Gerado em 01/06/2026 — atualizar conforme evolui_

---

## O que está errado no seu uso atual

### 1. Sessões longas com tópicos misturados
A sessão "app X vs code" cobriu: comparação de ferramentas, migração de conteúdo, hooks, organização, boas práticas — temas completamente diferentes.
Resultado: contexto diluído, respostas piores no final.

**Como corrigir:** Uma sessão = um tema ou cliente. Use `/clear` quando trocar de assunto, ou abra nova sessão e renomeie na hora.

### 2. O app e o Code não se falam — e você não migra
Você produziu muito conteúdo bom no app (plano editorial Smartbase, carrosséis, guias) que ficou preso na pasta de sessões do app. Só recuperamos hoje porque você soube onde procurar.

Existem **168 sessões** de agentes locais no app. Provavelmente tem mais outputs não migrados.

**Como corrigir:** Ao fechar uma sessão boa no app, copiar o output importante pra pasta do cliente aqui. Ou abrir a sessão aqui e pedir `/syncar`.

### 3. Não usa `@` para referenciar arquivos
Em vez de "olha o status da Smartbase", digita `@conteudo/status.md o que falta produzir?` — Claude lê direto sem precisar adivinhar.

### 4. Não usa `/compact` nem `/clear`
Com 80+ mensagens, a janela de contexto fica cara e lenta. Antes de pedir algo complexo em sessão longa: `/compact`.

### 5. Contexto de estratégia desatualizado
`_contexto/estrategia.md` ainda diz "Smartbase site Shopify prioridade 1" — isso mudou. O foco agora é conteúdo orgânico + ads. O arquivo está mentindo pro Claude no início de cada sessão.

### 6. Duas ferramentas de ads sem decisão clara
`meta-ads-ratos` skill e `adspirer` fazem a mesma coisa. Você usa o adspirer mas a skill ainda está ativa, causando confusão.

### 7. Settings.json acumulando lixo
O arquivo tem dezenas de permissões pontuais específicas (caminhos completos de arquivos únicos) que nunca mais serão usados. Isso carrega na inicialização.

---

## Pendências — Por ordem de impacto

### IMEDIATO (esta semana)

- [ ] **Testar auto-rename hook** — abrir nova sessão e confirmar que renomeia automaticamente
- [ ] **Atualizar `_contexto/estrategia.md`** — remover "site Shopify prioridade 1", refletir foco real: conteúdo + ads Smartbase, crescimento Gene, comunidade Sodi
- [ ] **Verificar outras sessões do app** — checar se tem mais outputs não migrados em `~/Library/Application Support/Claude/local-agent-mode-sessions/`
- [ ] **Decidir: meta-ads-ratos ou adspirer?** — se adspirer é o que funciona, desativar a skill de ads ou marcá-la como depreciada

### SMARTBASE — Conteúdo Junho

Status do plano 01–09 jun:

| Post | Status | Bloqueio |
|---|---|---|
| Dia 1 — posicionamento | ✅ pronto | — |
| Dia 2 — Paraguai carrossel | ✅ pronto (3 versões) | — |
| Dia 3 — prova social | ❌ | aguarda depoimento do dono |
| Dia 4 — reel iPhone 17 Pro Max | ❌ | produção pendente |
| Dia 5 — processo 3 passos | ✅ pronto | — |
| Dia 6 — carrossel processo completo | ❌ | pode produzir agora |
| Dia 7 — take forte | ✅ pronto | — |
| Dia 8 — carrossel verificação IMEI | ❌ | pode produzir agora |
| Dia 9 — iPhone 17 Air | ❌ | pode produzir agora |
| Dia 10 — segunda prova social | ❌ | aguarda depoimento do dono |
| Dia 11 — reel dono na câmera | ❌ | aguarda confirmação do dono |
| Dia 12 — carrossel qual iPhone? | ✅ pronto | — |
| Dia 13 — AirPods/Watch | ❌ | pode produzir agora |
| Dia 14 — CTA fechamento | ✅ pronto | — |

**Semanas 3 e 4 do plano editorial (15–28 jun):** nenhum post produzido ainda.

**O que pedir ao dono (urgente — viagem 04/jun):**
- Melhor depoimento de cliente recebido (WhatsApp/DM/Google)
- Confirmar se grava reel de 30–45s
- Fotos/vídeos da viagem ao Paraguai para carrossel síntese (06/jun)
- Modelo da linha 17 com mais saída

### SMARTBASE — Ads

- [ ] Continuar usando adspirer para gestão de campanhas
- [ ] Revisar diagnóstico: R$721 investidos, 67 conversas, 0 conversões — o gap é confiança, não desejo. Ads devem ser retomados depois que o orgânico construir mais base
- [ ] Quando retomar ads: testar formatos de carrossel educativo (o Paraguai investment grade tem potencial)

### SMARTBASE — Site

- [ ] Verificar o que o app gerou de melhor para o site (mencionado que estava melhor)
- [ ] Auditar o site atual antes de qualquer alteração: `/auditoria-site`

### GENESNEAKERS

- [ ] Feed de junho: pauta não definida ainda
- [ ] Site/one-pager: pendente (sem prazo definido)
- [ ] Ads: aguarda validação orgânica

### FTEMPER

- [ ] 6 posts de junho: verificar se pauta está feita
- [ ] Banners site: sob demanda

### SODI

- [ ] Comunidade: verificar estágio atual
- [ ] S.O.S Atendi: conteúdo de antecipação do lançamento

### SISTEMA — Melhorias

- [ ] Limpar settings.json — remover permissões pontuais acumuladas
- [ ] Renomear sessões antigas no sidebar (ao menos as 10 mais recentes)
- [ ] Criar hábito: `/clear` ao trocar de cliente na mesma sessão

---

## Regras de uso que valem a pena repetir

1. **Uma sessão = um cliente ou tema**
2. **`@arquivo.md` em vez de descrever o arquivo**
3. **`/compact` antes de tarefas complexas em sessões longas**
4. **`/clear` ao trocar de assunto**
5. **Ao fechar sessão boa no app → migrar o output pro projeto**
6. **Nomear sessão na hora que abrir** (hook automático faz isso a partir de agora)
