#target illustrator
(function () {
    var doc = app.activeDocument;
    var newPath = doc.path.fsName + "/03_Castanhal_Calendário_Manacapuru_2026.ai";
    var opts = new IllustratorSaveOptions();
    opts.pdfCompatible = true;
    var nf = new File(newPath);
    doc.saveAs(nf, opts);
    alert("Salvo como:\n" + nf.fsName);
})();
