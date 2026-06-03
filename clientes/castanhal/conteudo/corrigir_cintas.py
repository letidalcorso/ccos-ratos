#!/usr/bin/env python3
"""
Corrigir cintas-ajustadas:
1. Trocar @jutacastanhal → @somoscastanhal (Cumaru e Tapajós)
2. Substituir selo CERTIFIED FAIR TRADE pelo Fair Trade QIMA em todas as cintas
"""

import os
import re
import base64
from lxml import etree

BASE   = os.path.join(os.path.dirname(__file__), "cintas-ajustadas")
QIMA   = os.path.expanduser(
    "~/Downloads/Selos de certificações/fair_trade/standard/png/fair_trade@4x.png"
)
SVG_NS = "http://www.w3.org/2000/svg"
XLINK  = "http://www.w3.org/1999/xlink"

# ─── @ groups a remover ─────────────────────────────────────────────────────

AT_GROUPS = {
    "cinta-03-cumaru.svg": [
        "g3828","g3834","g3838","g3842","g3846",
        "g3850","g3854","g3858","g3862","g3866","g3870","g3874",
    ],
    "cinta-05-tapajos.svg": [
        "g3878","g3884","g3888","g3892","g3896",
        "g3900","g3904","g3908","g3912","g3916","g3920","g3924",
    ],
    "cinta-08-tapajos.svg": [
        "g3848","g3854","g3858","g3862","g3866",
        "g3870","g3874","g3878","g3882","g3886","g3890","g3894",
    ],
}

# posição do @ novo (SVG coords, baseline)
AT_X = 479.0
AT_Y = 90.0

# ─── posição do selo QIMA por cinta ─────────────────────────────────────────
# x, y, width, height  (SVG coordinates, sem flip)

SEAL_POS = {
    "cinta-03-cumaru.svg":    (499, 221, 32, 42),
    "cinta-05-tapajos.svg":   (499, 221, 32, 42),
    "cinta-08-tapajos.svg":   (499, 221, 32, 42),
    "cinta-12-14-bob.svg":    (461, 261, 40, 52),
    "cinta-15-16-bob.svg":    (461, 261, 40, 52),
    "cinta-18-bob.svg":       (461, 261, 40, 52),
}

# ─── helpers ─────────────────────────────────────────────────────────────────

def qima_b64():
    with open(QIMA, "rb") as f:
        return base64.b64encode(f.read()).decode()

def remove_groups(root, ids):
    removed = 0
    for gid in ids:
        elems = root.xpath(f'//*[@id="{gid}"]')
        for elem in elems:
            parent = elem.getparent()
            if parent is not None:
                parent.remove(elem)
                removed += 1
    return removed

def add_at_text(root, text="@somoscastanhal"):
    ns = SVG_NS
    t = etree.SubElement(root, f"{{{ns}}}text")
    t.set("x", str(AT_X))
    t.set("y", str(AT_Y))
    t.set("text-anchor", "start")
    t.set("dominant-baseline", "alphabetic")
    t.set("style",
        "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;"
        "font-weight:400;font-size:7.5px;fill:#231f20;"
        "fill-opacity:1;stroke:none;")
    t.text = text
    return t

def add_qima_seal(root, x, y, w, h, b64_data):
    ns = SVG_NS
    img = etree.SubElement(root, f"{{{ns}}}image")
    img.set("x", str(x))
    img.set("y", str(y))
    img.set("width", str(w))
    img.set("height", str(h))
    img.set("preserveAspectRatio", "xMidYMid meet")
    img.set(f"{{{XLINK}}}href", f"data:image/png;base64,{b64_data}")
    return img

# ─── main ────────────────────────────────────────────────────────────────────

def process():
    b64 = qima_b64()
    print(f"QIMA PNG carregado ({len(b64)//1024}KB base64)\n")

    for fname in sorted(SEAL_POS.keys()):
        path = os.path.join(BASE, fname)
        if not os.path.exists(path):
            print(f"  SKIP (não encontrado): {fname}")
            continue

        tree = etree.parse(path)
        root = tree.getroot()
        changes = []

        # 1. remover @ antigo e adicionar novo (só Cumaru e Tapajós)
        if fname in AT_GROUPS:
            n = remove_groups(root, AT_GROUPS[fname])
            add_at_text(root)
            changes.append(f"@ trocado ({n} grupos removidos)")

        # 2. adicionar selo QIMA sobre o antigo
        x, y, w, h = SEAL_POS[fname]
        add_qima_seal(root, x, y, w, h, b64)
        changes.append(f"selo QIMA adicionado em ({x},{y}) {w}x{h}")

        tree.write(path, xml_declaration=True, encoding="UTF-8", pretty_print=False)
        print(f"  {fname}: {' | '.join(changes)}")

if __name__ == "__main__":
    process()
    print("\nPronto.")
