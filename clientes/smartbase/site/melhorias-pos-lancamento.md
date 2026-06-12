# Site Smartbase — backlog pós-lançamento (CRO · UX · SEO)

> Criado em 2026-06-09. Auditoria pré-lançamento das 4 lentes (voz + conversão + UX + SEO).
> A copy/voz já foi corrigida e está no ar (ver changelog em `status.md`). Este doc é o "depois vamos ajustando" — construções, não correções. Priorizado por impacto.
> Fontes de boas práticas no rodapé.

## P1 — maior impacto no objetivo da marca (confiança → venda)

1. **Prova social no site (a maior lacuna).** O gap declarado da marca é confiança (mai/26: 67 conversas, 0 conversões). O site não tem nenhum depoimento, print de entrega real, contador de "X aparelhos entregues" nem o momento do IMEI conferido. Pesquisa: prova social rende +19–34% de conversão e deve ficar perto do CTA.
   - Depende de você: 3–5 depoimentos reais (print de WhatsApp tarjado), foto de entrega, número de clientes atendidos.
   - Eu faço: seção "prova social" no tema (carrossel de depoimentos + selo de garantia/IMEI).

2. **Botão de WhatsApp flutuante (sticky).** Hoje o WhatsApp só aparece no hero e na faixa do fim; quem rola perde o CTA. Pesquisa: CTA primário fixo na zona do polegar no mobile.
   - Eu faço: botão flutuante fixo (canto inferior), pré-preenchendo a mensagem.

3. **Mensagem pré-pronta nos CTAs gerais.** O link com produto já manda "oi! tenho interesse no [produto]. ainda tem?". Os botões gerais (hero, faixa, footer) abrem o WhatsApp em branco. Reduzir fricção = mais conversa iniciada.
   - Eu faço: mensagem padrão no `wa-link` ("oi! vim pelo site, quero saber dos aparelhos").

4. **Trunfo "paga só quando recebe na mão" acima da dobra.** É o ativo nº1 e só aparece lá embaixo. Pesquisa: trust signal perto do CTA / acima da dobra.
   - Eu faço: faixa de 3 selos sob o hero (paga quando recebe · garantia Apple por IMEI · loja em caxias).

## P2 — SEO e performance

5. **Nenhuma página tem `<h1>`.** Todas usam só h2/h3. Cada página precisa de 1 H1 com a palavra-chave (ex.: home "iPhone novo e seminovo em caxias do sul"). Eu faço.
6. **Imagens pesadíssimas** (hero 5,7MB; vários PNG de 3–5MB). Mata Core Web Vitals (ranqueamento) e conversão (53% abandonam acima de 3s). Comprimir + JPG/WebP. Quando você subir as fotos reais pelo painel, o Shopify já otimiza; os placeholders pesados é que precisam encolher. Eu faço a compressão dos placeholders.
7. **Sem meta description única por página.** Só renderiza se preenchida; a maioria está sem. Eu faço uma por página (≤160 caracteres, com palavra-chave).
8. **Sem Open Graph (og:image / og:title).** O site vai ser colado no Insta/WhatsApp; sem isso o preview do link fica feio. Eu faço (precisa de 1 imagem de capa — pode ser o hero).
9. **Trade-off estrutural (decisão consciente):** produtos e posts são "blocos", não itens nativos do Shopify. Consequência: sem rich snippet de produto no Google, sem URL própria por produto, blog não indexável como artigo. Ok pro modelo só-WhatsApp; só registrar que limita SEO de cauda longa. Reavaliar se um dia quiser ranquear produto no Google.

## P3 — UX e refinamento

10. **Headline do hero diz "o que eu ganho"?** "sua Apple store. particular." é marca pura; não comunica oferta em 5s (regra WIIFM). Testar uma variação que mantenha o take e adicione valor (ex.: lead mais forte logo abaixo). A/B quando houver tráfego.
11. **Navegação só de ícones** — sem texto, custo de descoberta. Avaliar microlabels no mobile.
12. **Endereço real do contato** ainda é placeholder ("endereço completo no WhatsApp"). Trocar pelo endereço real quando a loja estiver pronta (em reforma).
13. **Caixa das marcas — varredura final.** Padronizamos Apple/iPhone/WhatsApp nas peças principais. Faltam ocorrências de baixa visibilidade (algumas respostas do FAQ ainda têm "whatsapp" minúsculo). Limpeza rápida numa próxima passada.

---

## Fontes (boas práticas)
- Shopify — Landing Page Conversion Rate (2025): benchmarks, above-the-fold, CTA.
- Shopify — Ecommerce SEO Best Practices (2025): títulos, meta, structured data.
- Pesquisa CRO (Fermat, Unbounce, ConvertCart): prova social +19–34%, redução de fricção, velocidade.
- Click-to-WhatsApp / CTA mobile (Interakt, Clickatell, DesignStudio): botão sticky na zona do polegar, mensagem de boas-vindas pré-pronta, alvo ≥44px.
