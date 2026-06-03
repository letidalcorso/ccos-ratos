#!/usr/bin/env python3
"""
Ajustar cintas de novelo - Castanhal
- Troca texto de composição (paths → texto SVG)
- Remove faixas rosas (BOB)

Cintas cobertas:
  BOB  → 12/14 (60% JUTA / 40% MALVA)
       → 15/16 (41% JUTA / 31% ALGODÃO / 28% MALVA)
       → 18    (55% JUTA / 37% MALVA / 8% POLIÉSTER)
  03 Cumaru    → 55% JUTA / 37% MALVA / 8% POLIÉSTER
  05 Tapajós 5 → 60% JUTA / 40% MALVA
  08 Tapajós 8 → 55% JUTA / 37% MALVA / 8% POLIÉSTER
"""

import os
import re
from copy import deepcopy
from lxml import etree

DOWNLOADS = os.path.expanduser("~/Downloads")
OUTPUT = os.path.join(
    os.path.dirname(__file__), "cintas-ajustadas"
)
os.makedirs(OUTPUT, exist_ok=True)

SVG_BOB = f"{DOWNLOADS}/FIO-DE-JUTA-10_4-LB-BOB-0_5-KG-1400-TEX-Cinta-12-14-15-16-18_.svg"
SVG_CUM = f"{DOWNLOADS}/FIO-DE-JUTA-CUMARU-FASHION-10_2-LB-OURO-0_2-KG-760-TEX-Cinta-03_.svg"
SVG_T5  = f"{DOWNLOADS}/FIO-DE-JUTA-TAPAJOS-COLOR-10_4-LB-0_2-KG-NATURAL-1400-TEX-Cinta-5_.svg"
SVG_T8  = f"{DOWNLOADS}/FIO-DE-JUTA-TAPAJOS-FASHION-10_4-LB-PRATA-0_2-KG-1520-TEX-Cinta-8..svg"

SVG_NS = "http://www.w3.org/2000/svg"


# ─── helpers ────────────────────────────────────────────────────────────────

def parse(path):
    return etree.parse(path)

def save(tree, path):
    tree.write(path, xml_declaration=True, encoding="UTF-8",
               pretty_print=False)
    print(f"  saved → {os.path.basename(path)}")

def find_id(root, gid):
    results = root.xpath(f'//*[@id="{gid}"]')
    return results[0] if results else None

def remove_elem(elem):
    """Remove elem from its parent."""
    parent = elem.getparent()
    if parent is not None:
        parent.remove(elem)

def get_translate(elem):
    """Return (x, y) from translate(...) transform, or None."""
    tr = elem.get("transform", "")
    m = re.search(r"translate\(([-\d.]+)[,\s]+([-\d.]+)\)", tr)
    if m:
        return float(m.group(1)), float(m.group(2))
    return None

def hide_comp_groups(container, x_min, y_min, y_max):
    """Delete path groups in container matching the coordinate range."""
    to_remove = []
    for child in list(container):
        t = get_translate(child)
        if t:
            lx, ly = t
            if lx > x_min and y_min <= ly <= y_max:
                to_remove.append(child)
    for c in to_remove:
        container.remove(c)
    return len(to_remove)

def add_text(root, x, y, text, font_size, color, anchor="start",
             font_weight="700"):
    """Append a <text> element at SVG root level (no g10 Y-flip applies)."""
    ns = SVG_NS
    t = etree.SubElement(root, f"{{{ns}}}text")
    t.set("x", str(x))
    t.set("y", str(y))
    t.set("text-anchor", anchor)
    t.set("dominant-baseline", "alphabetic")
    t.set(
        "style",
        f"font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;"
        f"font-weight:{font_weight};"
        f"font-size:{font_size}px;"
        f"fill:{color};"
        f"fill-opacity:1;"
        f"stroke:none;",
    )
    t.text = text
    return t

def add_multiline_text(root, x, lines_with_y, font_size, color,
                       anchor="start", font_weight="700"):
    """Insert multiple <text> elements for multi-line composition."""
    for text, y in lines_with_y:
        add_text(root, x, y, text, font_size, color, anchor, font_weight)


# ─── BOB (cintas 12/14, 15/16, 18) ─────────────────────────────────────────
# Composition text: groups in g298 with local y=245-252
# Pink faixas: g2454, g2458, g2462, g2466, g2470, g2474, g2478
# g10 transform: matrix(1.3333333,0,0,-1.3333333,0,657.748)
# Text color: #2a7753  Text center: SVG (896, 324)  height ≈ 5 SVG units
# Baseline y ≈ 328

BOB_PINK_IDS = ["g2454", "g2458", "g2462", "g2466", "g2470", "g2474", "g2478"]
BOB_COMP_CONTAINER = "g298"
BOB_COMP_X_MIN     = 640   # local x
BOB_COMP_Y_RANGE   = (244, 253)  # local y
BOB_TEXT_X         = 896.0  # SVG coord, centered
BOB_TEXT_Y         = 328.0  # SVG baseline
BOB_FONT_SIZE      = 7      # SVG units
BOB_FONT_WEIGHT    = "400"
BOB_COLOR          = "#2a7753"

BOB_VARIANTS = [
    ("cinta-12-14-bob", "60% JUTA / 40% MALVA"),
    ("cinta-15-16-bob", "41% JUTA / 31% ALGODÃO / 28% MALVA"),
    ("cinta-18-bob",    "55% JUTA / 37% MALVA / 8% POLIÉSTER"),
]

def process_bob():
    print("\n── BOB ──")
    for name, comp_text in BOB_VARIANTS:
        tree = parse(SVG_BOB)
        root = tree.getroot()

        # 1. Remove pink faixas
        for gid in BOB_PINK_IDS:
            elem = find_id(root, gid)
            if elem is not None:
                remove_elem(elem)

        # 2. Remove old composition paths
        container = find_id(root, BOB_COMP_CONTAINER)
        if container is not None:
            n = hide_comp_groups(container, BOB_COMP_X_MIN, *BOB_COMP_Y_RANGE)
            print(f"  {name}: removed {n} composition path groups")

        # 3. Add new composition text
        add_text(root, BOB_TEXT_X, BOB_TEXT_Y, comp_text,
                 BOB_FONT_SIZE, BOB_COLOR, anchor="middle",
                 font_weight=BOB_FONT_WEIGHT)

        out = os.path.join(OUTPUT, f"{name}.svg")
        save(tree, out)


# ─── CUMARU (cinta 03) ──────────────────────────────────────────────────────
# Composition text: groups in g834, local x>820, local y=67-98
# g10 transform: matrix(1.3333333,0,0,-1.3333333,0,321.44933)
# Text color: #231f20  Font bold  font-size ≈ 14
# Line baselines: SVG y ≈ 204, 217, 231
# Left edge x: SVG ≈ 1107

CUM_COMP_CONTAINER = "g834"
CUM_COMP_X_MIN     = 820
CUM_COMP_Y_RANGE   = (67, 98)
CUM_TEXT_X         = 1107.0
CUM_FONT_SIZE      = 14
CUM_COLOR          = "#231f20"
CUM_LINES_Y        = [204.0, 217.5, 231.0]  # baselines of 3 lines

def process_cumaru():
    print("\n── CUMARU (cinta 03) ──")
    tree = parse(SVG_CUM)
    root = tree.getroot()

    container = find_id(root, CUM_COMP_CONTAINER)
    if container is not None:
        n = hide_comp_groups(container, CUM_COMP_X_MIN, *CUM_COMP_Y_RANGE)
        print(f"  removed {n} composition path groups")

    new_lines = ["55% JUTA", "37% MALVA", "8% POLIÉSTER"]
    add_multiline_text(
        root, CUM_TEXT_X,
        list(zip(new_lines, CUM_LINES_Y)),
        CUM_FONT_SIZE, CUM_COLOR
    )

    out = os.path.join(OUTPUT, "cinta-03-cumaru.svg")
    save(tree, out)


# ─── TAPAJÓS 5 (cinta 05) ───────────────────────────────────────────────────
# Composition text: groups in g894, local x>818, local y=57-73
# 1 line: "75% JUTA / 25% MALVA"
# Text color: #231f20  font-size ≈ 14  bold
# SVG bbox y: 229.9–239.5 → baseline ≈ 239.5
# Left edge x: SVG ≈ 1103

T5_COMP_CONTAINER = "g894"
T5_COMP_X_MIN     = 800
T5_COMP_Y_RANGE   = (57, 74)
T5_TEXT_X         = 1103.0
T5_TEXT_Y         = 239.5
T5_FONT_SIZE      = 14
T5_COLOR          = "#231f20"

def process_tapajos5():
    print("\n── TAPAJÓS 5 (cinta 05) ──")
    tree = parse(SVG_T5)
    root = tree.getroot()

    container = find_id(root, T5_COMP_CONTAINER)
    if container is not None:
        n = hide_comp_groups(container, T5_COMP_X_MIN, *T5_COMP_Y_RANGE)
        print(f"  removed {n} composition path groups")

    add_text(root, T5_TEXT_X, T5_TEXT_Y,
             "60% JUTA / 40% MALVA",
             T5_FONT_SIZE, T5_COLOR)

    out = os.path.join(OUTPUT, "cinta-05-tapajos.svg")
    save(tree, out)


# ─── TAPAJÓS 8 (cinta 08) ───────────────────────────────────────────────────
# Composition text: groups in g894, local x>818, local y=68-98
# 3 lines same structure as Cumaru
# SVG bbox y: 195.9–229.7  Left x: SVG ≈ 1107

T8_COMP_CONTAINER = "g894"
T8_COMP_X_MIN     = 818
T8_COMP_Y_RANGE   = (68, 99)
T8_TEXT_X         = 1107.0
T8_FONT_SIZE      = 14
T8_COLOR          = "#231f20"
T8_LINES_Y        = [205.0, 218.5, 231.0]

def process_tapajos8():
    print("\n── TAPAJÓS 8 (cinta 08) ──")
    tree = parse(SVG_T8)
    root = tree.getroot()

    container = find_id(root, T8_COMP_CONTAINER)
    if container is not None:
        n = hide_comp_groups(container, T8_COMP_X_MIN, *T8_COMP_Y_RANGE)
        print(f"  removed {n} composition path groups")

    new_lines = ["55% JUTA", "37% MALVA", "8% POLIÉSTER"]
    add_multiline_text(
        root, T8_TEXT_X,
        list(zip(new_lines, T8_LINES_Y)),
        T8_FONT_SIZE, T8_COLOR
    )

    out = os.path.join(OUTPUT, "cinta-08-tapajos.svg")
    save(tree, out)


# ─── main ───────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print(f"Output: {OUTPUT}")
    process_bob()
    process_cumaru()
    process_tapajos5()
    process_tapajos8()
    print("\nPronto.")
