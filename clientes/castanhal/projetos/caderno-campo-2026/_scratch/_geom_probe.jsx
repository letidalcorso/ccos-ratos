#target illustrator
(function () {
    var doc = app.activeDocument, out = [];
    var JCOLX = [42.8, 78.1, 113.4, 148.7, 184.0, 219.2, 254.5, 290.4];
    var JROWY = [-1521.95, -1545.35, -1568.75, -1592.05, -1615.45, -1638.85, -1661.6];
    var JDX = 57.9, JDY = -1504.8;
    var pref = ["JANEIRO", "FEVEREIRO", "MAR", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    var names = [];
    for (var i = 0; i < doc.textFrames.length; i++) {
        var tf = doc.textFrames[i], fn = "";
        try { fn = tf.textRange.characterAttributes.textFont.name; } catch (e) {}
        if (fn.indexOf("Horus") < 0) continue;
        var c = String(tf.contents).toUpperCase().replace(/[^A-Z]/g, "");
        for (var m = 0; m < 12; m++) {
            if (c.indexOf(pref[m]) === 0 && c.length < 11) { var p = tf.position; names.push({ m: m, x: p[0], y: p[1] }); break; }
        }
    }
    var dh = [];
    for (var j = 0; j < doc.textFrames.length; j++) {
        var t2 = doc.textFrames[j];
        if (String(t2.contents).replace(/\s/g, "") !== "D") continue;
        var sz = 0; try { sz = t2.textRange.characterAttributes.size; } catch (e) {}
        if (sz < 10 || sz > 12.5) continue;
        var p2 = t2.position; dh.push({ x: p2[0], y: p2[1] });
    }
    out.push("// nomes=" + names.length + " Dheaders=" + dh.length);
    for (var n = 0; n < names.length; n++) {
        var nm = names[n], best = null, bd = 99999;
        for (var k = 0; k < dh.length; k++) {
            var ddx = Math.abs(dh[k].x - nm.x), ddy = nm.y - dh[k].y;
            if (ddx < 260 && ddy > 300 && ddy < 680) {
                var score = ddx + Math.abs(ddy - 470);
                if (score < bd) { bd = score; best = dh[k]; }
            }
        }
        if (best) {
            var ox = best.x - JDX, oy = best.y - JDY, cx = [], ry = [];
            for (var a = 0; a < 8; a++) cx.push((JCOLX[a] + ox).toFixed(2));
            for (var b = 0; b < 7; b++) ry.push((JROWY[b] + oy).toFixed(2));
            out.push("M" + nm.m + ": COLX=[" + cx.join(",") + "] ROWY=[" + ry.join(",") + "]");
        } else {
            out.push("M" + nm.m + ": SEM PAR (nome " + nm.x.toFixed(1) + "," + nm.y.toFixed(1) + ")");
        }
    }
    var f = new File(doc.path.fsName + "/_scratch/_geom_out.txt");
    f.encoding = "UTF-8"; f.open("w"); f.write(out.join("\n")); f.close();
    alert("Geom probe: nomes=" + names.length + " Dheaders=" + dh.length);
})();
