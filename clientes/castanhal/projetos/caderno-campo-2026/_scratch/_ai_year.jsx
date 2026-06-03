#target illustrator
(function () {
    var doc = app.activeDocument;
    var n = 0, hits = [];
    for (var t = 0; t < doc.textFrames.length; t++) {
        var tf = doc.textFrames[t];
        var c = String(tf.contents).replace(/^\s+|\s+$/g, "");
        if (c === "2025") {
            tf.contents = "2026";
            n++; hits.push(t);
        }
    }
    var f = new File(doc.path.fsName + "/_ai_year_out.txt");
    f.encoding = "UTF-8";
    f.open("w");
    f.write("Frames 2025 -> 2026: " + n + "\nIndices: " + hits.join(","));
    f.close();
    app.redraw();
    alert("Ano atualizado: " + n + " textos viraram 2026.");
})();
