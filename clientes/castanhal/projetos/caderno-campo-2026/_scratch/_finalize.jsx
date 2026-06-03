#target illustrator
(function () {
    var doc = app.activeDocument, log = [];
    // ---- legendas Fev/Marco ----
    var marco = null;
    for (var i = 0; i < doc.textFrames.length; i++) {
        var t = doc.textFrames[i], c = String(t.contents), ct = c.replace(/^\s+|\s+$/g, "");
        if (c.indexOf("Carnaval") >= 0 && c.indexOf("3 de") >= 0 && ct.length < 28) marco = t;
    }
    if (marco) {
        var dup = marco.duplicate();
        dup.contents = "17 de fevereiro | Carnaval";
        dup.position = [52.8, -2648.3];
        marco.remove();
        log.push("Fev caption criada + Marco removida");
    } else {
        log.push("Marco caption NAO encontrada");
    }
    // ---- salvar ----
    doc.save();
    log.push("documento salvo");
    // ---- exportar 17 artboards ----
    var eo = new ExportOptionsPNG24();
    eo.artBoardClipping = true; eo.horizontalScale = 130; eo.verticalScale = 130; eo.antiAliasing = true;
    for (var a = 0; a < doc.artboards.length; a++) {
        doc.artboards.setActiveArtboardIndex(a);
        var nn = "_full_" + (a < 10 ? "0" : "") + a + ".png";
        doc.exportFile(new File(doc.path.fsName + "/_scratch/" + nn), ExportType.PNG24, eo);
    }
    log.push("exportado " + doc.artboards.length + " artboards");
    alert("FINALIZE OK\n" + log.join("\n"));
})();
