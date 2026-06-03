#target illustrator
(function () {
    var doc = app.activeDocument;
    // Caixa da grade de Janeiro (coords do artboard)
    var BX1 = 35, BY1 = -1495, BX2 = 300, BY2 = -1705;
    function inBox(b) {
        var l = b[0], t = b[1], r = b[2], btm = b[3];
        return !(r < BX1 || l > BX2 || btm > BY1 || t < BY2);
    }
    function colStr(c) {
        try {
            if (c.typename == "CMYKColor") return "CMYK(" + c.cyan.toFixed(0) + "," + c.magenta.toFixed(0) + "," + c.yellow.toFixed(0) + "," + c.black.toFixed(0) + ")";
            if (c.typename == "RGBColor") return "RGB(" + c.red.toFixed(0) + "," + c.green.toFixed(0) + "," + c.blue.toFixed(0) + ")";
            if (c.typename == "GrayColor") return "Gray(" + c.gray.toFixed(0) + ")";
            if (c.typename == "SpotColor") return "Spot:" + c.spot.name;
            if (c.typename == "NoColor") return "none";
        } catch (e) {}
        return c.typename;
    }
    var out = [];
    out.push("JANEIRO GRID PROBE box=[" + BX1 + "," + BY1 + "," + BX2 + "," + BY2 + "]");

    out.push("-- TEXTFRAMES --");
    for (var i = 0; i < doc.textFrames.length; i++) {
        var tf = doc.textFrames[i];
        var b; try { b = tf.geometricBounds; } catch (e) { continue; }
        if (inBox(b)) out.push("TF[" + i + "] b=[" + b[0].toFixed(1) + "," + b[1].toFixed(1) + "," + b[2].toFixed(1) + "," + b[3].toFixed(1) + "] :: " + String(tf.contents).replace(/\s+/g, " "));
    }

    out.push("-- PATHITEMS --");
    var pc = 0;
    for (var p = 0; p < doc.pathItems.length; p++) {
        var pi = doc.pathItems[p];
        var b; try { b = pi.geometricBounds; } catch (e) { continue; }
        if (inBox(b)) {
            pc++;
            var fill = "?";
            try { fill = pi.filled ? colStr(pi.fillColor) : "nofill"; } catch (e) {}
            out.push("P[" + p + "] b=[" + b[0].toFixed(1) + "," + b[1].toFixed(1) + "," + b[2].toFixed(1) + "," + b[3].toFixed(1) + "] pts=" + pi.pathPoints.length + " fill=" + fill);
        }
    }
    out.push("pathItems_in_box=" + pc);

    out.push("-- COMPOUNDPATHS --");
    var cc = 0;
    for (var c2 = 0; c2 < doc.compoundPathItems.length; c2++) {
        var cp = doc.compoundPathItems[c2];
        var b; try { b = cp.geometricBounds; } catch (e) { continue; }
        if (inBox(b)) {
            cc++;
            var fl = "?";
            try { fl = cp.pathItems[0].filled ? colStr(cp.pathItems[0].fillColor) : "nofill"; } catch (e) {}
            out.push("CP[" + c2 + "] b=[" + b[0].toFixed(1) + "," + b[1].toFixed(1) + "," + b[2].toFixed(1) + "," + b[3].toFixed(1) + "] subpaths=" + cp.pathItems.length + " fill=" + fl);
        }
    }
    out.push("compoundPaths_in_box=" + cc);

    out.push("-- GROUPS --");
    var gc = 0;
    for (var g = 0; g < doc.groupItems.length; g++) {
        var gi = doc.groupItems[g];
        var b; try { b = gi.geometricBounds; } catch (e) { continue; }
        if (inBox(b)) {
            gc++;
            out.push("G[" + g + "] b=[" + b[0].toFixed(1) + "," + b[1].toFixed(1) + "," + b[2].toFixed(1) + "," + b[3].toFixed(1) + "] items=" + gi.pageItems.length);
        }
    }
    out.push("groups_in_box=" + gc);

    var f = new File(doc.path.fsName + "/_ai_probe_jan_out.txt");
    f.encoding = "UTF-8";
    f.open("w");
    f.write(out.join("\n"));
    f.close();
    alert("Probe Janeiro OK\npaths=" + pc + " compound=" + cc + " groups=" + gc);
})();
