#target illustrator
(function () {
    var doc = app.activeDocument;
    var out = [];
    out.push("DOC: " + doc.name);
    out.push("placedItems=" + doc.placedItems.length + " rasterItems=" + doc.rasterItems.length);
    var okC = 0, missC = 0, embC = 0;
    for (var i = 0; i < doc.placedItems.length; i++) {
        var pi = doc.placedItems[i];
        var line = "PL[" + i + "] ";
        try {
            var f = pi.file;
            if (f.exists) { line += "LINK-OK :: " + f.fsName; okC++; }
            else { line += "LINK-FALTANDO :: " + f.fsName; missC++; }
        } catch (e) { line += "embedded/sem-file"; embC++; }
        out.push(line);
    }
    for (var r = 0; r < doc.rasterItems.length; r++) {
        var ri = doc.rasterItems[r];
        var em = "?"; try { em = ri.embedded; } catch (e) {}
        out.push("RA[" + r + "] embedded=" + em);
    }
    out.push("RESUMO: link-ok=" + okC + " link-faltando=" + missC + " sem-file=" + embC);
    var fo = new File(doc.path.fsName + "/_ai_links_out.txt");
    fo.encoding = "UTF-8";
    fo.open("w");
    fo.write(out.join("\n"));
    fo.close();
    alert("Imagens:\nplaced=" + doc.placedItems.length + " raster=" + doc.rasterItems.length +
          "\nlink-ok=" + okC + " | link-faltando=" + missC + " | sem-file=" + embC);
})();
