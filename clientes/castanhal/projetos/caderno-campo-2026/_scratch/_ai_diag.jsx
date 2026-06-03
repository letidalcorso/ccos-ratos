#target illustrator
(function () {
    var doc = app.activeDocument;
    var out = [];
    function esc(s){ return String(s).replace(/[\r\n\t]+/g, " / "); }

    out.push("DOC: " + doc.name);
    out.push("ARTBOARDS: " + doc.artboards.length);
    for (var a = 0; a < doc.artboards.length; a++) {
        var ab = doc.artboards[a];
        var r = ab.artboardRect; // [left, top, right, bottom]
        out.push("AB[" + a + "] name='" + ab.name + "' rect=[" +
            r[0].toFixed(1) + "," + r[1].toFixed(1) + "," + r[2].toFixed(1) + "," + r[3].toFixed(1) + "]");
    }

    out.push("==== TEXTFRAMES: " + doc.textFrames.length + " ====");
    for (var t = 0; t < doc.textFrames.length; t++) {
        var tf = doc.textFrames[t];
        var c = esc(tf.contents);
        if (c.length > 60) c = c.substring(0, 60) + "~";
        var p = tf.position;
        var fnt = "?", sz = "?", lyr = "?";
        try { fnt = tf.textRange.characterAttributes.textFont.name; } catch (e) {}
        try { sz = tf.textRange.characterAttributes.size.toFixed(1); } catch (e) {}
        try { lyr = tf.layer.name; } catch (e) {}
        out.push("TF[" + t + "] L='" + lyr + "' pos=[" +
            p[0].toFixed(1) + "," + p[1].toFixed(1) + "] f='" + fnt + "' sz=" + sz + " :: " + c);
    }

    out.push("==== PATHITEMS: " + doc.pathItems.length +
             " | GROUPS: " + doc.groupItems.length +
             " | COMPOUND: " + doc.compoundPathItems.length +
             " | PLACED: " + doc.placedItems.length +
             " | RASTER: " + doc.rasterItems.length + " ====");

    var f = new File(doc.path.fsName + "/_ai_diag_out.txt");
    f.encoding = "UTF-8";
    f.open("w");
    f.write(out.join("\n"));
    f.close();
    alert("DIAG OK\nArtboards: " + doc.artboards.length +
          "\nTextFrames: " + doc.textFrames.length +
          "\nSalvo em: " + f.fsName);
})();
