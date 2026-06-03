# Guia — Offline Conversions Smartbase
**Dataset ID:** 2054869865373051
**Conta:** act_1232088548824256

Usado para informar ao Meta quais leads do WhatsApp vieram dos anúncios.
Fazer 1x por semana, toda segunda-feira.

---

## O que você vai precisar

- Acesso ao WhatsApp do dono da Smartbase (número 55 54 99662-4494)
- Planilha (Google Sheets ou Excel)
- Acesso ao Gerenciador de Eventos: business.facebook.com → Gerenciador de Eventos → Smartbase — Leads WhatsApp

---

## Passo 1 — Coletar os números

No WhatsApp da Smartbase, pegar todos os contatos que mandaram mensagem na última semana.

Para cada contato anotar:
- Número completo com DDI (ex: `5554999991234`)
- Data e hora da primeira mensagem (ex: `2026-05-26 14:32:00`)
- Status: `lead` (apenas mandou mensagem) ou `purchase` (comprou)

---

## Passo 2 — Montar o CSV

Criar um arquivo `.csv` com este formato exato:

```
event_name,event_time,ph
Lead,2026-05-26 14:32:00,5554999991234
Lead,2026-05-27 09:15:00,5511988887777
Purchase,2026-05-28 17:00:00,5551977776666
```

**Regras:**
- `event_name`: usar `Lead` pra quem só mandou mensagem, `Purchase` pra quem comprou
- `event_time`: formato `YYYY-MM-DD HH:MM:SS` (horário de Brasília)
- `ph`: número com DDI 55, sem espaços, sem traços, sem parênteses

O Meta aceita o número sem hash — ele hasheia automaticamente no upload.

---

## Passo 3 — Fazer o upload

1. Acessar business.facebook.com
2. Menu → Gerenciador de Eventos
3. Selecionar **Smartbase — Leads WhatsApp** (ID: 2054869865373051)
4. Clicar em **Fazer upload de eventos**
5. Selecionar o arquivo `.csv`
6. Meta vai mostrar uma prévia — confirmar que os campos estão mapeados certo
7. Confirmar upload

---

## Passo 4 — Aguardar o processamento

Meta leva entre 1h e 24h para processar e atribuir as conversões às campanhas.
Depois disso, as conversões aparecem no Gerenciador de Anúncios com a tag "offline".

---

## O que esperar

- Match rate esperado: 50-70% dos números (Meta consegue cruzar com usuários cadastrados)
- Os leads atribuídos vão aparecer separados dos que o Meta já rastreou automaticamente
- Isso também alimenta o aprendizado do algoritmo para otimizar melhor as próximas exibições

---

## Frequência recomendada

| Quando | O que fazer |
|---|---|
| Toda segunda-feira | Upload da semana anterior |
| Após uma venda | Subir evento `Purchase` no mesmo dia |

Upload mais frequente = aprendizado mais rápido para o Meta.
