# GENE · APPROVAL SEAL — Selo de Autenticidade

Um dos 8 selos canônicos do sistema de iconografia secundária. **Função:** curadoria autoral · assinatura de autenticidade · "Gene escolheu".

---

## 3 VERSÕES ENTREGUES

| Versão | Quando usar |
|---|---|
| **Carbon** (`gene-selo-approval-carbon.svg`) | Em fundos escuros · posts ORIGEM · ambientes Carbon |
| **Bone** (`gene-selo-approval-bone.svg`) | Em fundos claros · ambientes Daylight · PDF/embalagem clara |
| **Acid** (`gene-selo-approval-acid.svg`) | Statement · hero landing · packaging premium · selo-assinatura |

Todas 600×600, SVG escalável sem perda.

---

## ANATOMIA DO SELO

```
       ◆  (diamante Acid · ponto focal superior)
  ╭───────────╮
  │ ··curvo·· │   · anel externo com "GENE APPROVED · AUTÊNTICO ·
  │           │     CURADORIA AUTORAL · FIRST LINE · 2026 ·"
  │   GENE    │   · monograma central em Big Shoulders Black
  │  ────     │   · divisor fino
  │ APPROVED  │   · "APPROVED" em IBM Plex Mono
  │  · 0001 · │   · número de série + data
  ╰───────────╯
```

**Elementos:**
- Anel externo 2px + anel decorativo interno dashed (técnico)
- 4 tick marks cardinais (N/E/S/W) + 4 diagonais (feel relógio suíço)
- Texto curvo cobrindo 360° · Mono 18pt · letter-spacing 0.3em
- Diamante Acid no topo (ponto de referência visual)
- "GENE" em Big Shoulders Black 110pt (monograma)
- Linha divisora 140px
- "APPROVED" em Mono 18pt · letter-spacing 0.4em
- Footer "N° 0001 · 21.04.26" (serializa + data — vira rastreável)

---

## ONDE APLICAR

### Uso digital
- **Landing page hero** — canto superior direito, escala ~120×120px
- **Profile card / footer** — assinatura institucional
- **Post ORIGEM slide 3** — substitui o "Gene trouxe." em casos de peça institucional
- **Story carousel final** — frame de fechamento "selo"
- **Email signature** — versão bone, 80×80px

### Uso físico (packaging)
- **Caixa do produto** — versão Bone aplicada em UV spot ou hot stamping
- **Tag de autenticação** — versão Acid cortada em forma redonda
- **Sticker dentro da caixa** — versão Carbon, 60mm de diâmetro
- **Nota fiscal / certificado** — Bone em canto inferior direito

---

## REGRAS DE USO

1. **Tamanho mínimo:** 80px (digital) · 40mm (físico). Abaixo disso, o texto curvo fica ilegível — use uma marca simplificada.
2. **Clear space:** respeite margem = 10% do diâmetro em todos os lados. Nada pode invadir.
3. **Não distorcer:** nunca estique. Apenas escalar proporcionalmente.
4. **Não trocar cores:** o sistema tem 3 versões canônicas. Se a peça pede uma quarta cor, provavelmente o selo não é a peça certa pra ali.
5. **Número de série:** personalizar por drop (`N° 0001` é o primeiro). Próximo ORIGEM vira `N° 0002`, primeiro drop AF1 vira `DROP-26/AF1`, etc.
6. **Data:** usar data de emissão do selo (quando o produto foi curado, não quando foi vendido).

---

## VARIAÇÕES FUTURAS (quando precisar)

Mantendo a estrutura base, dá pra criar:
- **APPROVAL SEAL · ORIGEM** — com `CURADORIA · HISTÓRICO` em vez de `FIRST LINE`
- **APPROVAL SEAL · FIRST DROP** — com `FIRST DROP · ED. LIMITADA`
- **APPROVAL SEAL · NÚMERO ÚNICO** — cada par recebe serial próprio (premium)

Todas seguem o mesmo diâmetro, tipografia e hierarquia — só muda o texto da perimetral.

---

## COMO EDITAR

Abre o SVG em qualquer editor (Figma, Illustrator, VS Code).

**Pra trocar o número de série:**
Procure no código por `N° 0001` e troque pelo novo.

**Pra trocar a data:**
Procure por `21.04.26` e substitua (formato `DD.MM.AA`).

**Pra trocar o texto curvo:**
Procure pela linha que começa com `GENE APPROVED · AUTÊNTICO ·` — troque mantendo o total de caracteres ≈ 160 (senão desalinha).

---

## INTEGRAÇÃO COM O SISTEMA DE PEÇAS

Este selo faz parte do **sistema de 8 selos** (SKU TAG, DROP STAMP, ORIGIN TAG, PRICE FRAME, **APPROVAL SEAL**, HYPE METER, STATUS PIN, EDGE LABEL).

**Princípio geral:** todo selo Gene usa **IBM Plex Mono**, caps sempre, dot (`·`) como separador, Acid `#C4FF3C` / Bone `#F2EFE9` / Carbon `#0D0D0D` como paleta.

O APPROVAL SEAL é o mais "cerimonial" — aparece em menos peças, mas quando aparece, pesa. É o selo que transforma "produto" em "peça de curadoria".

---

## ARQUIVOS DESTA PASTA

- `gene-selo-approval-carbon.svg` — versão fundo escuro
- `gene-selo-approval-bone.svg` — versão fundo claro
- `gene-selo-approval-acid.svg` — versão statement Acid
- `gene-selo-approval.md` — este doc

---

*v1.0 · 21.04.2026 · Gene Sneakers*
