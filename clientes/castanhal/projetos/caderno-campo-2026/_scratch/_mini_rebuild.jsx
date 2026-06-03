#target illustrator
(function () {
    var doc = app.activeDocument, lyr = doc.layers[0], log = [];
    function cmyk(c, m, y, k) { var o = new CMYKColor(); o.cyan = c; o.magenta = m; o.yellow = y; o.black = k; return o; }
    var GREEN = cmyk(62, 0, 100, 0), DARK = cmyk(72, 66, 65, 75), BROWN = cmyk(44, 59, 72, 32),
        PAGEG = cmyk(77, 51, 73, 53), WHITE = cmyk(0, 0, 0, 0);
    var TAG = "MINI26_";

    for (var i = doc.pageItems.length - 1; i >= 0; i--) {
        try { if (String(doc.pageItems[i].name).indexOf(TAG) === 0) doc.pageItems[i].remove(); } catch (e) {}
    }

    function ctr(it) { var b = it.geometricBounds; return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]; }
    var mc = { crescente: [84.9, -1551.75], cheia: [84.9, -1575.05], minguante: [120.2, -1598.45], nova: [155.5, -1622.85] };
    var master = {};
    for (var ph in mc) {
        var tgt = mc[ph], best = null, bd = 9999;
        for (var g = 0; g < doc.groupItems.length; g++) {
            var gi = doc.groupItems[g], cc;
            try { if (String(gi.name).indexOf(TAG) === 0) continue; cc = ctr(gi); } catch (e) { continue; }
            var dd = Math.abs(cc[0] - tgt[0]) + Math.abs(cc[1] - tgt[1]);
            if (dd < bd) { bd = dd; best = gi; }
        }
        if (best && bd < 4) { master[ph] = best; log.push("master " + ph + " ok"); }
        else log.push("master " + ph + " FALHOU");
    }

    var font = null;
    try { font = app.textFonts.getByName("NHaasGroteskDSPro-65Md"); } catch (e) {}

    var JCX = [765.61, 787.56, 809.51, 831.46, 853.41, 875.36, 897.31, 919.26];
    var JRY = [-216.87, -231.40, -245.94, -260.48, -275.01, -289.55, -304.08];
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
        var dx = (M % 3) * 164.54, dy = Math.floor(M / 3) * (-142.335);
        var COLX = [], ROWY = [];
        for (var a = 0; a < 8; a++) COLX.push(JCX[a] + dx);
        for (var b = 0; b < 7; b++) ROWY.push(JRY[b] + dy);
        var D = DATA[M], dayCell = {}, cellDay = {};
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
                rect.stroked = true; rect.strokeColor = WHITE; rect.strokeWidth = 0.3;
                rect.name = TAG;
            }
        }
        for (var d2 = 1; d2 <= D.nd; d2++) {
            var cl = dayCell[d2], col = cl[0], row = cl[1];
            var cxx = (COLX[col] + COLX[col + 1]) / 2, cyy = (ROWY[row] + ROWY[row + 1]) / 2;
            var tf = lyr.textFrames.add(); tf.contents = "" + d2;
            tf.textRange.characterAttributes.size = 8;
            tf.textRange.characterAttributes.fillColor = WHITE;
            if (font) { try { tf.textRange.characterAttributes.textFont = font; } catch (e) {} }
            tf.name = TAG;
            var bb = tf.geometricBounds;
            tf.position = [cxx - (bb[2] - bb[0]) / 2, cyy + (bb[1] - bb[3]) / 2];
        }
        for (var dm in D.moons) {
            var ph2 = D.moons[dm];
            if (!master[ph2]) continue;
            var cl2 = dayCell[parseInt(dm, 10)];
            if (!cl2) continue;
            var dup = master[ph2].duplicate();
            dup.move(lyr, ElementPlacement.PLACEATBEGINNING);
            dup.name = TAG;
            dup.resize(62, 62);
            dup.position = [COLX[cl2[0]] + 2.0, ROWY[cl2[1]] - 1.6];
        }
        log.push("mini M" + M + " ok");
    }
    app.redraw();

    var eo = new ExportOptionsPNG24();
    eo.artBoardClipping = true; eo.horizontalScale = 240; eo.verticalScale = 240; eo.antiAliasing = true;
    doc.artboards.setActiveArtboardIndex(1);
    doc.exportFile(new File(doc.path.fsName + "/_scratch/_anual.png"), ExportType.PNG24, eo);
    var fo = new File(doc.path.fsName + "/_mini_out.txt");
    fo.encoding = "UTF-8"; fo.open("w"); fo.write(log.join("\n")); fo.close();
    alert("MINI OK\n" + log.join("\n"));
})();
