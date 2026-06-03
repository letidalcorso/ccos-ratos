# Caneca Smartbase — Design Spec

> Caneca de café para a equipe interna da Smartbase.
> Peça de comunicação entre a Smartbase e a Apple — compartilhável nos stories, apreciada pelo público fã da marca.

---

## Conceito

**"A evolução das câmeras"** — vista traseira dos iPhones, de 2007 a 2025.

As câmeras são o elemento mais reconhecível de cada geração para quem é fã de Apple. Cada módulo conta uma parte da história. A Smartbase é quem passou por todas elas — daí o tagline: *"todos passaram por aqui."*

---

## Decisões de design

| Decisão | Escolha | Motivo |
|---------|---------|--------|
| Vista do aparelho | Traseira (câmeras) | Mais reconhecível por geração do que a frente |
| Estilo visual | Outline (traço fino) | Clean, editorial, escala bem para impressão |
| Fundo | Off-white `#F5F0E8` | Tom editorial; fica bem com luz natural nos stories |
| Traço | `#1A1A1A` | Contraste forte sobre off-white |

---

## Artwork

### Lineup de gerações

7 iPhones alinhados pela base, crescendo da esquerda para a direita:

| Ano | Modelo ref. | Detalhe visual distintivo |
|-----|------------|--------------------------|
| 2007 | iPhone original | Câmera flush única, top-center, sem flash |
| 2013 | iPhone 5s | Sapphire ring (3 anéis concêntricos), flash retangular, linhas de antena |
| 2014 | iPhone 6 | Primeiro bump — anel externo espesso, câmera top-left |
| 2016 | iPhone 7 Plus | Módulo dual horizontal (43% da largura), flash externo |
| 2019 | iPhone 11 Pro | Módulo quadrado (47%), triângulo de 3 câmeras + flash preenchido |
| 2023 | iPhone 15 Pro Max | Island grande (55%), 3 câmeras + LiDAR, flash **fora** da island |
| 2025 | iPhone 17 Pro Max | Plateau horizontal quase full-width, câmera esquerda grande + duas direitas |

Cada phone tem uma SVG inline com `currentColor`, permitindo adaptar para qualquer fundo.

### Proporções dos phones

- Aspect ratio: ~2:1 (altura:largura), próximo das dimensões reais
- Crescimento progressivo da esquerda para a direita
- Alinhamento pela base (baseline alignment)
- Gap entre phones: 12px

### Linha de timeline

Linha fina horizontal (`height: 1px`, `opacity: 0.12`) abaixo do baseline dos phones, conectando visualmente a progressão.

---

## Tipografia

**Tagline:** `todos passaram por aqui.`
- Fonte: `-apple-system, 'Helvetica Neue', sans-serif`
- Tamanho: 10.5px (escalar proporcionalmente para impressão)
- Letter-spacing: 3.2px
- Transform: lowercase
- Cor: `#111`
- Posição: centralizado, abaixo da timeline

**Wordmark:** `smart•base`
- Fonte: `-apple-system, 'Helvetica Neue', sans-serif`
- `smart` — weight 300, cor `#9E978A`
- `•` — cor `#3E82F7`
- `base` — weight 700, cor `#111`
- Tamanho: 12.5px (escalar proporcionalmente)
- Posição: centralizado, abaixo do tagline

---

## Paleta

| Token | Hex | Uso |
|-------|-----|-----|
| Fundo | `#F5F0E8` | Background da caneca |
| Traço principal | `#1A1A1A` | Outline dos iPhones |
| Smart (wordmark) | `#9E978A` | Parte "smart" do wordmark |
| Dot (wordmark) | `#3E82F7` | O "•" azul do wordmark |
| Base (wordmark) | `#111111` | Parte "base" do wordmark |

---

## Composição na caneca

```
┌─────────────────────────────────────────┐
│         [espaço de respiro topo]        │
│                                         │
│  📱 📱  📱  📱   📱    📱     📱       │
│  ─────────────────────────────────      │  ← timeline
│                                         │
│        todos passaram por aqui.         │
│               smart•base                │
│                                         │
│         [espaço de respiro base]        │
└─────────────────────────────────────────┘
```

A área de impressão padrão de canecas 11oz (wrap) é ~20cm × 9cm. O artwork deve ser vetorizado para impressão nessa área, centralizado verticalmente.

---

## Arquivos a produzir

1. **SVG final** — artwork vetorizado em escala real para impressão (20cm × 9cm, 300dpi equivalente)
2. **PNG preview** — para aprovação e compartilhar nos stories (fundo off-white)
3. **Arquivo de pedido** — pronto para gráfica (formato a definir conforme fornecedor)

---

## O que não fazer

- Não usar fundo preto nesta versão (reservado para futura edição premium)
- Não adicionar preço ou promoção — é peça de identidade, não de varejo
- Não usar fontes serifadas — foge da estética Apple/Smartbase
- Não reduzir o artwork abaixo de 50% — os detalhes das câmeras perdem leitura
