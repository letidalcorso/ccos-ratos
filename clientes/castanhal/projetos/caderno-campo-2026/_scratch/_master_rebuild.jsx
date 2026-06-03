#target illustrator
(function () {
    var doc = app.activeDocument, lyr = doc.layers[0], log = [];
    function cmyk(c, m, y, k) { var o = new CMYKColor(); o.cyan = c; o.magenta = m; o.yellow = y; o.black = k; return o; }
    var GREEN = cmyk(62, 0, 100, 0), DARK = cmyk(72, 66, 65, 75), BROWN = cmyk(44, 59, 72, 32),
        PAGEG = cmyk(77, 51, 73, 53), WHITE = cmyk(0, 0, 0, 0);
    var TAG = "G26_";

    // limpar saida anterior
    for (var i = doc.pageItems.length - 1; i >= 0; i--) {
        try { if (String(doc.pageItems[i].name).indexOf(TAG) === 0) doc.pageItems[i].remove(); } catch (e) {}
    }

    // masters de lua (centros Janeiro 2025)
    function ctr(it) { var b = it.geometricBounds; return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]; }
    var mc = { crescente: [84.9, -1551.75], cheia: [84.9, -1575.05], minguante: [120.2, -1598.45], nova: [155.5, -1622.85] };
    var master = {};
    for (var ph in mc) {
        var tgt = mc[ph], best = null, bd = 9999;
        for (var g = 0; g < doc.groupItems.length; g++) {
            var gi = doc.groupItems[g], cc;
            try { cc = ctr(gi); } catch (e) { continue; }
            var dd = Math.abs(cc[0] - tgt[0]) + Math.abs(cc[1] - tgt[1]);
            if (dd < bd) { bd = dd; best = gi; }
        }
        if (best && bd < 4) { master[ph] = best; log.push("master " + ph + " ok"); }
        else log.push("master " + ph + " FALHOU d=" + bd.toFixed(2));
    }

    var font = null;
    try { font = app.textFonts.getByName("NHaasGroteskDSPro-65Md"); } catch (e) { log.push("fonte FALHOU"); }

    var GEO = [
        { cx: [42.85, 78.15, 113.45, 148.75, 184.05, 219.25, 254.55, 290.45], ry: [-1521.96, -1545.36, -1568.76, -1592.06, -1615.46, -1638.86, -1661.61] },
        { cx: [42.85, 78.15, 113.45, 148.75, 184.05, 219.25, 254.55, 290.45], ry: [-2480.05, -2503.45, -2526.85, -2550.15, -2573.55, -2596.95, -2619.70] },
        { cx: [42.85, 78.15, 113.45, 148.75, 184.05, 219.25, 254.55, 290.45], ry: [-3446.45, -3469.85, -3493.25, -3516.55, -3539.95, -3563.35, -3586.10] },
        { cx: [42.85, 78.15, 113.45, 148.75, 184.05, 219.25, 254.55, 290.45], ry: [-4398.89, -4422.29, -4445.69, -4468.99, -4492.39, -4515.79, -4538.54] },
        { cx: [42.85, 78.15, 113.45, 148.75, 184.05, 219.25, 254.55, 290.45], ry: [-5429.83, -5453.23, -5476.63, -5499.93, -5523.33, -5546.73, -5569.48] },
        { cx: [42.85, 78.15, 113.45, 148.75, 184.05, 219.25, 254.55, 290.45], ry: [-6415.39, -6438.79, -6462.19, -6485.49, -6508.89, -6532.29, -6555.04] },
        { cx: [749.77, 785.08, 820.38, 855.67, 890.98, 926.17, 961.48, 997.38], ry: [-1521.96, -1545.36, -1568.76, -1592.06, -1615.46, -1638.86, -1661.61] },
        { cx: [749.77, 785.08, 820.38, 855.67, 890.98, 926.17, 961.48, 997.38], ry: [-2480.05, -2503.45, -2526.85, -2550.15, -2573.55, -2596.95, -2619.70] },
        { cx: [749.77, 785.08, 820.38, 855.67, 890.98, 926.17, 961.48, 997.38], ry: [-3446.46, -3469.86, -3493.26, -3516.56, -3539.96, -3563.36, -3586.11] },
        { cx: [740.68, 775.98, 811.28, 846.58, 881.88, 917.08, 952.38, 988.28], ry: [-4425.89, -4449.29, -4472.69, -4495.99, -4519.39, -4542.79, -4565.54] },
        { cx: [740.68, 775.98, 811.28, 846.58, 881.88, 917.08, 952.38, 988.28], ry: [-5389.83, -5413.23, -5436.63, -5459.93, -5483.33, -5506.73, -5529.48] },
        { cx: [740.68, 775.98, 811.28, 846.58, 881.88, 917.08, 952.38, 988.28], ry: [-6415.39, -6438.79, -6462.19, -6485.49, -6508.89, -6532.29, -6555.04] }
    ];
    var DATA = [
        { start: 4, nd: 31, hol: [1], moons: { 3: "cheia", 10: "minguante", 18: "nova", 26: "crescente" } },
        { start: 0, nd: 28, hol: [17], moons: { 1: "cheia", 9: "minguante", 17: "nova", 24: "crescente" } },
        { start: 0, nd: 31, hol: [], moons: { 3: "cheia", 11: "minguante", 18: "nova", 25: "crescente" } },
        { start: 3, nd: 30, hol: [3, 21], moons: { 1: "cheia", 10: "minguante", 17: "nova", 23: "crescente" } },
        { start: 5, nd: 31, hol: [1], moons: { 1: "cheia", 9: "minguante", 16: "nova", 23: "crescente", 31: "cheia" } },
        { start: 1, nd: 30, hol: [4], moons: { 8: "minguante", 14: "nova", 21: "crescente", 29: "cheia" } },
        { start: 3, nd: 31, hol: [], moons: { 7: "minguante", 14: "nova", 21: "crescente", 29: "cheia" } },
        { start: 6, nd: 31, hol: [], moons: { 5: "minguante", 12: "nova", 19: "crescente", 28: "cheia" } },
        { start: 2, nd: 30, hol: [7], moons: { 4: "minguante", 11: "nova", 18: "crescente", 26: "cheia" } },
        { start: 4, nd: 31, hol: [12], moons: { 3: "minguante", 10: "nova", 18: "crescente", 26: "cheia" } },
        { start: 0, nd: 30, hol: [2, 15, 20], moons: { 1: "minguante", 9: "nova", 17: "crescente", 24: "cheia" } },
        { start: 2, nd: 31, hol: [25], moons: { 1: "minguante", 8: "nova", 17: "crescente", 23: "cheia", 30: "minguante" } }
    ];
    function inArr(a, v) { for (var i = 0; i < a.length; i++) if (a[i] === v) return true; return false; }

    for (var M = 0; M < 12; M++) {
        var G = GEO[M], D = DATA[M], COLX = G.cx, ROWY = G.ry;
        var dayCell = {}, cellDay = {};
        for (var d = 1; d <= D.nd; d++) {
            var idx = d - 1 + D.start;
            dayCell[d] = [idx % 7, Math.floor(idx / 7)];
            cellDay[(idx % 7) + "_" + Math.floor(idx / 7)] = d;
        }
        for (var r = 0; r < 6; r++) {
            for (var c = 0; c < 7; c++) {
                var day = cellDay[c + "_" + r], fill = PAGEG;
                if (day) { fill = inArr(D.hol, day) ? BROWN : (D.moons[day] ? DARK : GREEN); }
                var rect = lyr.pathItems.rectangle(ROWY[r], COLX[c], COLX[c + 1] - COLX[c], ROWY[r] - ROWY[r + 1]);
                rect.filled = true; rect.fillColor = fill;
                rect.stroked = true; rect.strokeColor = WHITE; rect.strokeWidth = 0.5;
                rect.name = TAG;
            }
        }
        for (var d2 = 1; d2 <= D.nd; d2++) {
            var cl = dayCell[d2], col = cl[0], row = cl[1];
            var cxx = (COLX[col] + COLX[col + 1]) / 2, cyy = (ROWY[row] + ROWY[row + 1]) / 2;
            var tf = lyr.textFrames.add(); tf.contents = "" + d2;
            tf.textRange.characterAttributes.size = 13;
            tf.textRange.characterAttributes.fillColor = WHITE;
            if (font) { try { tf.textRange.characterAttributes.textFont = font; } catch (e) {} }
            tf.name = TAG;
            var b = tf.geometricBounds;
            tf.position = [cxx - (b[2] - b[0]) / 2, cyy + (b[1] - b[3]) / 2];
        }
        for (var dm in D.moons) {
            var ph2 = D.moons[dm];
            if (!master[ph2]) continue;
            var cl2 = dayCell[parseInt(dm, 10)];
            if (!cl2) continue;
            var dup = master[ph2].duplicate();
            dup.move(lyr, ElementPlacement.PLACEATBEGINNING);
            dup.name = TAG;
            dup.position = [COLX[cl2[0]] + 3.5, ROWY[cl2[1]] - 3.05];
        }
        log.push("M" + M + " ok (" + D.nd + " dias)");
    }
    app.redraw();

    var eo = new ExportOptionsPNG24();
    eo.artBoardClipping = true; eo.horizontalScale = 150; eo.verticalScale = 150; eo.antiAliasing = true;
    for (var M2 = 0; M2 < 12; M2++) {
        doc.artboards.setActiveArtboardIndex(M2 + 2);
        var nn = "_m" + (M2 < 10 ? "0" : "") + M2 + ".png";
        doc.exportFile(new File(doc.path.fsName + "/_scratch/" + nn), ExportType.PNG24, eo);
    }
    var fo = new File(doc.path.fsName + "/_master_out.txt");
    fo.encoding = "UTF-8"; fo.open("w"); fo.write(log.join("\n")); fo.close();
    alert("MASTER OK\n" + log.join("\n"));
})();
