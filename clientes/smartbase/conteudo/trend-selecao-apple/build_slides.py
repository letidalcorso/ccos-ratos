#!/usr/bin/env python3
import base64, os, html

BASE = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(BASE, "slides", "img")
OUT = os.path.join(BASE, "slides")
os.makedirs(OUT, exist_ok=True)

BLUE = "#3E82F7"
HEAD = "#F2F2F6"
BODY = "#C7C7D6"
MUTED = "#7A7A96"
FOOT = "#9A9AB2"

def b64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode()

def esc(s):
    return html.escape(s, quote=True)

def footer(y=1276):
    return f'''
  <line x1="80" y1="{y-18}" x2="1000" y2="{y-18}" stroke="#2A2A40" stroke-width="1" opacity="0.6"/>
  <g transform="translate(80,{y})">
    <rect x="0" y="-22" width="46" height="32" rx="15" fill="#0F0F1C"/>
    <text x="23" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="{BLUE}" text-anchor="middle">sb</text>
    <text x="60" y="0" font-family="Inter, sans-serif" font-size="22" font-weight="300" fill="#C0C0D0">smart</text>
    <circle cx="121" cy="-6" r="4" fill="{BLUE}"/>
    <text x="130" y="0" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="{HEAD}">base</text>
  </g>
  <text x="1000" y="{y}" font-family="Inter, sans-serif" font-size="22" font-weight="500" fill="{FOOT}" text-anchor="end">@smartbase.br</text>
'''

def badge(text="DECIFRA APPLE", x=80, y=98):
    w = 30 + len(text)*10.5
    return f'''
  <rect x="{x}" y="{y}" width="{w:.0f}" height="40" rx="14" fill="#0E1E3A"/>
  <text x="{x+18}" y="{y+27}" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="{BLUE}" letter-spacing="2">{text}</text>
'''

def img_layer(name):
    data = b64(os.path.join(IMG, f"{name}.jpg"))
    return f'<image href="data:image/jpeg;base64,{data}" x="0" y="0" width="1080" height="1350" preserveAspectRatio="xUlfMidYMid slice"/>'.replace("xUlfMidYMid","xMidYMid")

def player_slide(name, title_lines, accent_word, body_lines):
    """title em cima, copy embaixo sobre gradiente."""
    img = img_layer(name)
    # bloco de texto inferior
    # headline
    ty = 980
    head_svg = ""
    fs = 78
    lh = 88
    for i, ln in enumerate(title_lines):
        # destacar accent_word se presente na linha
        y = ty + i*lh
        if accent_word and accent_word in ln:
            before, after = ln.split(accent_word, 1)
            head_svg += f'<text x="80" y="{y}" font-family="Bricolage Grotesque, sans-serif" font-size="{fs}" font-weight="800" fill="{HEAD}">{esc(before)}<tspan fill="{BLUE}">{esc(accent_word)}</tspan>{esc(after)}</text>'
        else:
            head_svg += f'<text x="80" y="{y}" font-family="Bricolage Grotesque, sans-serif" font-size="{fs}" font-weight="800" fill="{HEAD}">{esc(ln)}</text>'
    body_start = ty + len(title_lines)*lh + 28
    body_svg = ""
    for i, ln in enumerate(body_lines):
        body_svg += f'<text x="80" y="{body_start + i*40}" font-family="Inter, sans-serif" font-size="27" font-weight="400" fill="{BODY}">{esc(ln)}</text>'

    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.42" stop-color="#07070E" stop-opacity="0"/>
      <stop offset="0.66" stop-color="#07070E" stop-opacity="0.72"/>
      <stop offset="0.82" stop-color="#07070E" stop-opacity="0.96"/>
      <stop offset="1" stop-color="#07070E" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1350" fill="#07070E"/>
  {img}
  <rect width="1080" height="1350" fill="url(#shade)"/>
  <rect x="0" y="0" width="4" height="1350" fill="{BLUE}"/>
  {badge()}
  {head_svg}
  {body_svg}
  {footer()}
</svg>'''

def cover_slide():
    img = img_layer("capa")
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs>
    <linearGradient id="shadeC" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#07070E" stop-opacity="0.78"/>
      <stop offset="0.2" stop-color="#07070E" stop-opacity="0.30"/>
      <stop offset="0.62" stop-color="#07070E" stop-opacity="0"/>
      <stop offset="0.82" stop-color="#07070E" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#07070E" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1350" fill="#07070E"/>
  {img}
  <rect width="1080" height="1350" fill="url(#shadeC)"/>
  <rect x="0" y="0" width="4" height="1350" fill="{BLUE}"/>
  {badge("DECIFRA APPLE", 80, 92)}
  <text x="80" y="300" font-family="Bricolage Grotesque, sans-serif" font-size="92" font-weight="800" fill="{HEAD}">e se a seleção</text>
  <text x="80" y="394" font-family="Bricolage Grotesque, sans-serif" font-size="92" font-weight="800" fill="{HEAD}">fosse da <tspan fill="{BLUE}">apple</tspan>?</text>
  <text x="80" y="1180" font-family="Inter, sans-serif" font-size="28" font-weight="400" fill="{BODY}">a gente escalou a seleção com a linha apple.</text>
  <text x="80" y="1218" font-family="Inter, sans-serif" font-size="28" font-weight="600" fill="{BLUE}">arrasta pra ver quem é quem  →</text>
  {footer(1300)}
</svg>'''

slides = {
  "01_capa": cover_slide(),
  "02_neymar": player_slide("neymar",
        ["neymar =", "iphone pro max"], "iphone pro max",
        ["o mais comentado de todos. às vezes nem é o que",
         "mais joga, mas tem gente que quer só ele.",
         "topo de linha, e ele sabe."]),
  "03_alisson": player_slide("alisson",
        ["alisson =", "seminovo garantido"], "seminovo garantido",
        ["o goleiro evita o gol antes dele acontecer. o seminovo",
         "testado da smartbase faz igual: bateria, originalidade",
         "e garantia conferidas antes de chegar em você."]),
  "04_marquinhos": player_slide("marquinhos",
        ["marquinhos =", "macbook"], "macbook",
        ["não aparece tanto quanto os atacantes, mas é ele",
         "que dá sustentação pra estrutura inteira.",
         "o trabalho pesado roda nele, sem alarde."]),
  "05_casemiro": player_slide("casemiro",
        ["casemiro =", "apple watch"], "apple watch",
        ["conecta o time todo e não busca holofote.",
         "faz o trabalho que sustenta todo mundo,",
         "ali no pulso, discreto e essencial."]),
}

for fn, svg in slides.items():
    with open(os.path.join(OUT, f"{fn}.svg"), "w") as f:
        f.write(svg)
    print("wrote", fn)
print("done")
