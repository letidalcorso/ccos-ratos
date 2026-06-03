#target illustrator
(function () {
    var doc = app.activeDocument;
    doc.artboards.setActiveArtboardIndex(0);
    var opts = new ExportOptionsPNG24();
    opts.artBoardClipping = true;
    opts.horizontalScale = 200;
    opts.verticalScale = 200;
    opts.antiAliasing = true;
    var f = new File(doc.path.fsName + "/_ai_export_test.png");
    doc.exportFile(f, ExportType.PNG24, opts);
    alert("Export teste OK: " + f.fsName);
})();
