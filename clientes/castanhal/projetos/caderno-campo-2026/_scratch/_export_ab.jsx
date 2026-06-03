#target illustrator
(function () {
    var doc = app.activeDocument;
    var idx = 2; // artboard index a exportar (Janeiro = 2)
    doc.artboards.setActiveArtboardIndex(idx);
    var opts = new ExportOptionsPNG24();
    opts.artBoardClipping = true;
    opts.horizontalScale = 230;
    opts.verticalScale = 230;
    opts.antiAliasing = true;
    var f = new File(doc.path.fsName + "/_scratch/_export_ab.png");
    doc.exportFile(f, ExportType.PNG24, opts);
    alert("Exportado artboard " + idx + " -> " + f.fsName);
})();
