#target illustrator
(function () {
    var doc = app.activeDocument;
    var lyr = doc.layers[0];
    var log = [];

    function cmyk(c, m, y, k) { var o = new CMYKColor(); o.cyan = c; o.magenta = m; o.yellow = y; o.black = k; return o; }
    var GREEN = cmyk(62, 0, 100, 0), DARK = cmyk(72, 66, 65, 75), BROWN = cmyk(44, 59, 72, 32),
        PAGEG = cmyk(77, 51, 73, 53), WHITE = cmyk(0, 0, 0, 0);

    var COLX = [42.8, 78.1, 113.4, 148.7, 184.0, 219.2, 254.5, 290.4];
    var ROWY = [-1521.95, -1545.35, -1568.75, -1592.05, -1615.45, -1638.85, -1661.6];
    var NC = 7, NR = 6, TAG = "G26_jan";

    // ---- 0. limpar saida anterior (re-rodavel) ----
    for (var i = doc.pageItems.length - 1; i >= 0; i--) {
        try { if (String(doc.pageItems[i].name).indexOf("G26_") === 0) doc.pageItems[i].remove(); } catch (e) {}
    }

    // ---- 2026 Janeiro ----
    var startCol = 4, ndays = 31;
    var holidays = { "1": 1 };
    var moons = { "3": "cheia", "10": "minguante", "18": "nova", "26": "crescente" };
    var dayCell = {}, cellDay = {};
    for (var d = 1; d <= ndays; d++) { var idx = d - 1 + startCol; dayCell[d] = [idx % 7, Math.floor(idx / 7)]; cellDay[(idx % 7) + "_" + Math.floor(idx / 7)] = d; }

    // ---- 1. duplicar luas (achar grupos antigos por centro 2025) ----
    var oldMoons = { crescente: [84.9, -1551.75], cheia: [84.9, -1575.05], minguante: [120.2, -1598.45], nova: [155.5, -1622.85] };
    function ctr(it) { var b = it.geometricBounds; return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]; }
    var glyph = {};
    for (var phase in oldMoons) {
        var tgt = oldMoons[phase], best = null, bd = 9999;
        for (var g = 0; g < doc.groupItems.length; g++) {
            var gi = doc.groupItems[g], cc;
            try { if (String(gi.name).indexOf("G26_") === 0) continue; cc = ctr(gi); } catch (e) { continue; }
            var dd = Math.abs(cc[0] - tgt[0]) + Math.abs(cc[1] - tgt[1]);
            if (dd < bd) { bd = dd; best = gi; }
        }
        if (best && bd < 4) {
            var dup = best.duplicate();
            dup.move(lyr, ElementPlacement.PLACEATBEGINNING);
            dup.name = TAG; glyph[phase] = dup;
            log.push("lua " + phase + " ok (d=" + bd.toFixed(2) + ")");
        }
        else log.push("lua " + phase + " FALHOU (d=" + bd.toFixed(2) + ")");
    }

    // ---- 2. celulas ----
    for (var r = 0; r < NR; r++) {
        for (var c = 0; c < NC; c++) {
            var day = cellDay[c + "_" + r];
            var fill = PAGEG;
            if (day) { fill = holidays[day] ? BROWN : (moons[day] ? DARK : GREEN); }
            var rect = lyr.pathItems.rectangle(ROWY[r], COLX[c], COLX[c + 1] - COLX[c], ROWY[r] - ROWY[r + 1]);
            rect.filled = true; rect.fillColor = fill;
            rect.stroked = true; rect.strokeColor = WHITE; rect.strokeWidth = 0.5;
            rect.name = TAG;
        }
    }

    // ---- 3. numeros ----
    var font = null;
    try { font = app.textFonts.getByName("NHaasGroteskDSPro-65Md"); } catch (e) { log.push("fonte 65Md nao achada"); }
    for (var d2 = 1; d2 <= ndays; d2++) {
        var cl = dayCell[d2], col = cl[0], row = cl[1];
        var cx = (COLX[col] + COLX[col + 1]) / 2, cy = (ROWY[row] + ROWY[row + 1]) / 2;
        var tf = lyr.textFrames.add();
        tf.contents = "" + d2;
        tf.textRange.characterAttributes.size = 13;
        tf.textRange.characterAttributes.fillColor = WHITE;
        if (font) { try { tf.textRange.characterAttributes.textFont = font; } catch (e) {} }
        tf.name = TAG;
        var b = tf.geometricBounds;
        tf.position = [cx - (b[2] - b[0]) / 2, cy + (b[1] - b[3]) / 2];
    }

    // ---- 4. posicionar luas ----
    var moonCell = { cheia: [6, 0], minguante: [6, 1], nova: [0, 3], crescente: [1, 4] };
    for (var ph in moonCell) {
        if (!glyph[ph]) continue;
        var mc = moonCell[ph];
        glyph[ph].position = [COLX[mc[0]] + 3.5, ROWY[mc[1]] - 3.05];
        glyph[ph].zOrder(ZOrderMethod.BRINGTOFRONT);
    }

    var fo = new File(doc.path.fsName + "/_jan_rebuild_out.txt");
    fo.encoding = "UTF-8"; fo.open("w"); fo.write(log.join("\n")); fo.close();
    app.redraw();
    // exportar artboard 2 (Janeiro) para conferencia
    doc.artboards.setActiveArtboardIndex(2);
    var eo = new ExportOptionsPNG24();
    eo.artBoardClipping = true; eo.horizontalScale = 230; eo.verticalScale = 230; eo.antiAliasing = true;
    doc.exportFile(new File(doc.path.fsName + "/_scratch/_export_ab.png"), ExportType.PNG24, eo);
    alert("Janeiro rebuild + export OK\n" + log.join("\n"));
})();
