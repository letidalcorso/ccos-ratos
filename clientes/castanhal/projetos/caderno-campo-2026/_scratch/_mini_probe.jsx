#target illustrator
(function () {
    var doc = app.activeDocument, out = [];
    var dh = [];
    for (var i = 0; i < doc.textFrames.length; i++) {
        var t = doc.textFrames[i];
        if (String(t.contents).replace(/\s/g, "") !== "D") continue;
        var sz = 0; try { sz = t.textRange.characterAttributes.size; } catch (e) {}
        if (sz < 5 || sz > 9) continue;
        var p = t.position; dh.push([p[0], p[1]]);
    }
    out.push("mini D-headers: " + dh.length);
    var jan = dh.length ? dh[0] : [0, 0];
    for (var k = 1; k < dh.length; k++) {
        if (dh[k][1] > jan[1] + 5 || (Math.abs(dh[k][1] - jan[1]) < 5 && dh[k][0] < jan[0])) jan = dh[k];
    }
    out.push("JAN-MINI-D: " + jan[0].toFixed(2) + "," + jan[1].toFixed(2));
    for (var d = 0; d < dh.length; d++) out.push("D[" + d + "] " + dh[d][0].toFixed(2) + "," + dh[d][1].toFixed(2));
    var BX1 = jan[0] - 20, BX2 = jan[0] + 160, BY1 = jan[1] + 8, BY2 = jan[1] - 170;
    var vl = [], hl = [];
    for (var p2 = 0; p2 < doc.pathItems.length; p2++) {
        var pi = doc.pathItems[p2], b;
        try { b = pi.geometricBounds; } catch (e) { continue; }
        if (b[0] < BX1 || b[2] > BX2 || b[3] < BY2 || b[1] > BY1) continue;
        var w = b[2] - b[0], h = b[1] - b[3];
        if (w < 3 && h > 35) vl.push(((b[0] + b[2]) / 2).toFixed(2));
        if (h < 3 && w > 70) hl.push(((b[1] + b[3]) / 2).toFixed(2));
    }
    vl.sort(function (a, b) { return a - b; });
    hl.sort(function (a, b) { return b - a; });
    out.push("VLINES(" + vl.length + "): " + vl.join(","));
    out.push("HLINES(" + hl.length + "): " + hl.join(","));
    var f = new File(doc.path.fsName + "/_scratch/_mini_geom.txt");
    f.encoding = "UTF-8"; f.open("w"); f.write(out.join("\n")); f.close();
    alert("Mini probe: D=" + dh.length + " v=" + vl.length + " h=" + hl.length);
})();
