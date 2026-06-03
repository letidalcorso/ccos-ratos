# Status — Site Smartbase
Última atualização: 2026-06-03

## Situação atual

Site pronto para publicação.
URL: smartbase-2903.myshopify.com

Pasta de trabalho ativa: `shopify-theme-final/`
Backup: `shopify-theme-BACKUP-25mai-pre-correcoes/`

## Estrutura do site (fluxo)

1. Hero: "sua apple store. particular."
2. Novos (sob encomenda): iPhone, Mac, iPad, Acessórios
3. Seminovos: avaliados, link /pages/seminovos
4. Troca: 3 etapas + CTA "avaliar meu aparelho" → /pages/troca
5. Diferenciais: 4 cards ("quando todo mundo vende apple...")
6. Sobre: texto consultivo
7. CTA Final: "qual é o seu caso? a gente resolve." → WhatsApp

## Arquivos principais

- `shopify-theme-final/templates/index.json` — conteúdo e ordem das sections (Shopify)
- `shopify-theme-final/sections/*.liquid` — markup de cada section
- `shopify-theme-final/assets/style.css` — CSS completo
- `shopify-theme-final/config/settings_data.json` — header, footer, WhatsApp
- `última versão/index.html` — HTML standalone de referência visual

## Temas no Shopify (smartbase-2903.myshopify.com)

- `smartbase-shopify-theme-copia` — [LIVE]
- `smartbase-tema-correcoes-25mai` — [unpublished] — última versão upada antes de jun/2026

## Próxima ação

Fazer push de `shopify-theme-final/` como tema unpublished, revisar no preview e publicar.
Comando: `shopify theme push --unpublished --store smartbase-2903.myshopify.com`

## Regras de trabalho

Antes de qualquer edição no site:
1. Sempre editar em `shopify-theme-final/` (não nas pastas v1/v2/antigas)
2. Ler o arquivo .liquid correspondente antes de editar
3. Confirmar com trecho antes/depois
