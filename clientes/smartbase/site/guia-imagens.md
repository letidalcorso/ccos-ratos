# Guia de imagens — site Smartbase

> Pra você criar/subir imagens no padrão certo sem retrabalho. Tudo no tema é servido como está (não há conversão automática), então **exporte já no tamanho e formato daqui**.

## Regras gerais
- **Formato: WebP** sempre (ou PNG quando precisar de fundo transparente). Evite JPG.
- **Peso:** produto ≤ 150KB · hero ≤ 200KB. (referência: o site inteiro hoje pesa ~1,8MB de imagem)
- **Cor:** sRGB.
- Onde tem campo "imagem" no painel (Personalizar), é só subir — o tema encaixa.

## Por tipo de imagem

| Onde | Dimensão recomendada | Proporção | Fundo | Filtro |
|---|---|---|---|---|
| **Produto** (cards da vitrine + azulejos de categoria) | **1200 × 1200** | 1:1 (quadrado) | **TRANSPARENTE** (PNG/WebP com alfa) — o produto flutua no palco escuro | nenhum (cor real) |
| **Destaque da vitrine** (highlight) | 1200 × 1200 | 1:1 | transparente | nenhum |
| **Hero de fundo — home** | **2000 × 1300** | paisagem ~3:2 | foto normal (sem transparência) | **automático** (escurece/esfria — não pré-aplique) |
| **Hero de fundo — blog / faq** | 2000 × 1300 | paisagem ~3:2 | foto | automático (mais escuro) |
| **Hero de fundo — contato** | 1080 × 1920 | retrato 9:16 | foto | automático |
| **Card do hero da home** (iPhones na loja) | 1600 × 1200 | 4:3 | foto | leve escurecimento |
| **Capa do artigo (blog)** = imagem destacada do post | **1600 × 900** | 16:9 | foto | nenhum (vira capa + preview de link/OG) |
| **Mapa (contato)** | 1300 × 600 | paisagem | print do Google Maps | escurecido por CSS |

## O "filtro" (importante)
O tema aplica **sozinho** um tratamento escuro/frio nas imagens de **fundo/ambiente** (heros) — você **não precisa** editar a foto antes; sobe a foto normal e o site escurece. 

Se quiser ver como vai ficar (replicar no Canva/Photoshop), os valores são:
- Heros em geral: **saturação 50% · brilho 70% · matiz −22° · contraste 106%**
- Hero da home (mais suave): saturação 62% · brilho 92% · matiz −16° · contraste 103%

**Produtos NÃO levam filtro** — vão com a cor real, recortados (fundo transparente), sobre um palco escuro com um brilho suave no topo. Por isso produto preto (ex: iPhone meia-noite) precisa de luz nas bordas pra não sumir.

## Como preparar foto de produto
1. Foto do aparelho em fundo liso (de preferência claro e uniforme).
2. Remover o fundo (deixar transparente).
3. Centralizar num quadrado com folga (~8% de margem).
4. Exportar WebP/PNG 1200×1200.
> Se quiser, me manda a foto crua que eu faço esse tratamento (recorte + enquadre + WebP) — é o pipeline que já uso.

---
*Atualizado em 2026-06-15. Dimensões atuais dos arquivos em `site/tema-shopify/assets/` (referência técnica) listadas na conversa.*
