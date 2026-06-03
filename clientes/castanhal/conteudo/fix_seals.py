#!/usr/bin/env python3
"""
Corrige o posicionamento do selo QIMA nas cintas-ajustadas.
- Remove imagens QIMA anteriores (tamanho errado)
- Adiciona rect branco para mascarar o selo antigo
- Reposiciona QIMA no tamanho correto que cobre o selo CERTIFIED FAIR TRADE
"""
import os
import base64
from lxml import etree

BASE  = os.path.join(os.path.dirname(__file__), "cintas-ajustadas")
QIMA  = os.path.expanduser(
    "~/Downloads/Selos de certificações/fair_trade/standard/png/fair_trade@4x.png"
)
SVG_NS = "http://www.w3.org/2000/svg"
XLINK  = "http://www.w3.org/1999/xlink"

# x, y, width, height  (SVG coordinates — cobrindo o selo antigo por completo)
SEAL_POS = {
    "cinta-03-cumaru.svg":  (480, 200, 70, 86),
    "cinta-05-tapajos.svg": (480, 200, 70, 86),
    "cinta-08-tapajos.svg": (480, 200, 70, 86),
    "cinta-12-14-bob.svg":  (440, 245, 100, 95),
    "cinta-15-16-bob.svg":  (440, 245, 100, 95),
    "cinta-18-bob.svg":     (440, 245, 100, 95),
}

def qima_b64():
    with open(QIMA, "rb") as f:
        return base64.b64encode(f.read()).decode()

def remove_existing_images(root):
    """Remove <image> elements added in previous run."""
    ns = SVG_NS
    removed = 0
    for img in root.findall(f".//{{{ns}}}image"):
        href = img.get(f"{{{XLINK}}}href", "")
        if href.startswith("data:image/png;base64,"):
            parent = img.getparent()
            if parent is not None:
                parent.remove(img)
                removed += 1
    return removed

def add_white_rect(root, x, y, w, h):
    ns = SVG_NS
    rect = etree.SubElement(root, f"{{{ns}}}rect")
    rect.set("x", str(x))
    rect.set("y", str(y))
    rect.set("width", str(w))
    rect.set("height", str(h))
    rect.set("fill", "white")
    rect.set("stroke", "none")
    return rect

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

def process():
    b64 = qima_b64()
    print(f"QIMA PNG carregado ({len(b64)//1024}KB base64)\n")

    for fname, (x, y, w, h) in SEAL_POS.items():
        path = os.path.join(BASE, fname)
        if not os.path.exists(path):
            print(f"  SKIP (não encontrado): {fname}")
            continue

        tree = etree.parse(path)
        root = tree.getroot()

        # 1. Remove seals from previous run
        n = remove_existing_images(root)

        # 2. White mask rect over old seal
        add_white_rect(root, x, y, w, h)

        # 3. QIMA seal image on top
        add_qima_seal(root, x, y, w, h, b64)

        tree.write(path, xml_declaration=True, encoding="UTF-8", pretty_print=False)
        print(f"  {fname}: {n} imagem(ns) antiga(s) removida(s), QIMA reposicionado em ({x},{y}) {w}×{h}")

if __name__ == "__main__":
    process()
    print("\nPronto.")
