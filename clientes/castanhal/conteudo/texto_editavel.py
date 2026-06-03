#!/usr/bin/env python3
"""
Converte textos-em-curva das cintas para elementos <text> SVG editáveis no Figma.
Adiciona um rect branco sob cada texto para cobrir a versão em curva.
Os elementos de texto recebem id descritivo para fácil localização no Figma.

Após importar o SVG no Figma:
- As camadas com id 'edit-*' são os textos editáveis (Neue Haas Grotesk)
- As camadas com id 'bg-*' são os rects brancos de máscara
- Pode deletar os grupos de paths antigos que ficaram embaixo
"""

import os
from lxml import etree

BASE   = os.path.join(os.path.dirname(__file__), "cintas-ajustadas")
SVG_NS = "http://www.w3.org/2000/svg"


def add_text(root, x, y, text, font_size, color, weight="700",
             anchor="start", elem_id=None):
    ns = SVG_NS
    t = etree.SubElement(root, f"{{{ns}}}text")
    t.set("x", str(x))
    t.set("y", str(y))
    t.set("text-anchor", anchor)
    t.set("dominant-baseline", "alphabetic")
    if elem_id:
        t.set("id", elem_id)
    t.set("style",
          f"font-family:'Neue Haas Grotesk Display Pro','neue-haas-grotesk-display',"
          f"'HelveticaNeue',Helvetica,Arial,sans-serif;"
          f"font-weight:{weight};font-size:{font_size}px;"
          f"fill:{color};fill-opacity:1;stroke:none;")
    t.text = text
    return t


def add_bg(root, x, y_top, w, h, elem_id=None):
    ns = SVG_NS
    rect = etree.SubElement(root, f"{{{ns}}}rect")
    rect.set("x", str(x - 2))
    rect.set("y", str(y_top - 2))
    rect.set("width", str(w + 4))
    rect.set("height", str(h + 4))
    rect.set("fill", "white")
    rect.set("stroke", "none")
    if elem_id:
        rect.set("id", elem_id)
    return rect


def process(fname, elements):
    """
    elements: list of dicts with keys:
      text, x, y_top, y_baseline, font_size, weight, color, id
    """
    path = os.path.join(BASE, fname)
    if not os.path.exists(path):
        print(f"  SKIP: {fname}")
        return

    tree = etree.parse(path)
    root = tree.getroot()

    for el in elements:
        w = el.get("width", 80)
        h = el["y_baseline"] - el["y_top"]
        add_bg(root, el["x"], el["y_top"], w, h, elem_id=f"bg-{el['id']}")
        add_text(root, el["x"], el["y_baseline"], el["text"],
                 el["font_size"], el["color"], el.get("weight", "700"),
                 el.get("anchor", "start"), elem_id=f"edit-{el['id']}")

    tree.write(path, xml_declaration=True, encoding="UTF-8", pretty_print=False)
    labels = [el["id"] for el in elements]
    print(f"  {fname}: {len(elements)} elementos — {', '.join(labels)}")


# ─── Cumaru (cinta-03) ───────────────────────────────────────────────────────
# ViewBox 1663×321 | Specs text on wave pattern, x ≈ 1083–1197

cumaru_elements = [
    dict(id="variante",        text="OURO",
         x=1112, y_top=80,  y_baseline=98,  width=56,
         font_size=17, weight="700", color="#231f20"),
    dict(id="espessura-label", text="ESPESSURA DO FIO:",
         x=1083, y_top=130, y_baseline=145, width=114,
         font_size=11, weight="700", color="#231f20"),
    dict(id="espessura-valor", text="1,58mm",
         x=1118, y_top=150, y_baseline=165, width=44,
         font_size=11, weight="400", color="#231f20"),
    dict(id="tex",             text="760 TEX",
         x=1120, y_top=243, y_baseline=258, width=40,
         font_size=9,  weight="400", color="#231f20"),
]

# ─── Tapajós 5 (cinta-05) ───────────────────────────────────────────────────
# ViewBox 1663×321 | NATURAL é sobre o padrão de onda, espessura/tex no painel

tapajos5_elements = [
    dict(id="variante",        text="NATURAL",
         x=1063, y_top=68,  y_baseline=90,  width=126,
         font_size=17, weight="700", color="#231f20"),
    dict(id="espessura-label", text="ESPESSURA DO FIO:",
         x=1086, y_top=113, y_baseline=127, width=114,
         font_size=11, weight="700", color="#231f20"),
    dict(id="espessura-valor", text="1,69mm",
         x=1121, y_top=132, y_baseline=147, width=44,
         font_size=11, weight="400", color="#231f20"),
    dict(id="croche",          text="CROCHÊ: 4mm e 4,5mm",
         x=1075, y_top=159, y_baseline=175, width=110,
         font_size=9,  weight="700", color="#231f20"),
    dict(id="tex",             text="1400 TEX",
         x=1120, y_top=260, y_baseline=275, width=50,
         font_size=9,  weight="400", color="#231f20"),
]

# ─── Tapajós 8 (cinta-08) ───────────────────────────────────────────────────
# ViewBox 1663×321 | Mesmo layout do Cumaru

tapajos8_elements = [
    dict(id="variante",        text="OURO",
         x=1112, y_top=79,  y_baseline=99,  width=56,
         font_size=17, weight="700", color="#231f20"),
    dict(id="espessura-label", text="ESPESSURA DO FIO:",
         x=1083, y_top=133, y_baseline=146, width=114,
         font_size=11, weight="700", color="#231f20"),
    dict(id="espessura-valor", text="2,13mm",
         x=1117, y_top=152, y_baseline=166, width=45,
         font_size=11, weight="400", color="#231f20"),
    dict(id="tex",             text="1520 TEX",
         x=1120, y_top=260, y_baseline=275, width=50,
         font_size=9,  weight="400", color="#231f20"),
]

# ─── BOB (cinta-12-14, 15-16, 18) ───────────────────────────────────────────
# ViewBox 1843×658 | Specs no painel central
# Cores: verde escuro #2a7753 (espessura) / marrom #713620 (crochê/tex)

bob_elements = [
    dict(id="espessura-label", text="Espessura do fio:",
         x=1100, y_top=344, y_baseline=356, width=140,
         font_size=8,  weight="700", color="#2a7753"),
    dict(id="espessura-valor", text="0,7mm",
         x=1100, y_top=358, y_baseline=374, width=60,
         font_size=13, weight="700", color="#2a7753"),
    dict(id="croche",          text="Crochê: 3,0mm",
         x=1100, y_top=395, y_baseline=408, width=140,
         font_size=8,  weight="700", color="#713620"),
    dict(id="trico",           text="Tricô: 3,5mm",
         x=1100, y_top=410, y_baseline=423, width=130,
         font_size=8,  weight="700", color="#713620"),
    dict(id="tex",             text="350",
         x=1128, y_top=433, y_baseline=448, width=40,
         font_size=11, weight="700", color="#713620"),
    dict(id="metrage",         text="1.392 m",
         x=960, y_top=373, y_baseline=393, width=110,
         font_size=16, weight="700", color="#2a7753"),
]


if __name__ == "__main__":
    print(f"Output: {BASE}\n")

    process("cinta-03-cumaru.svg",  cumaru_elements)
    process("cinta-05-tapajos.svg", tapajos5_elements)
    process("cinta-08-tapajos.svg", tapajos8_elements)

    for bob_name in ["cinta-12-14-bob.svg", "cinta-15-16-bob.svg", "cinta-18-bob.svg"]:
        process(bob_name, bob_elements)

    print("\nPronto.")
