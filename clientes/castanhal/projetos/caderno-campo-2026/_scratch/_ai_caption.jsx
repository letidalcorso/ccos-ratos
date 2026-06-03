#target illustrator
(function () {
    var doc = app.activeDocument;
    // Correcoes de legenda de feriado (texto vivo). Acentos em \u para nao depender de encoding.
    var jobs = [
        { idx: 2, rep: [
            ["3 de março | Carnaval", "17 de fevereiro | Carnaval"],
            ["18 de abril | Paixão de Cristo", "3 de abril | Paixão de Cristo"],
            ["24 de abril | Tiradentes", "21 de abril | Tiradentes"]
        ] },
        { idx: 1, rep: [
            ["19 de junho | Corpus Christi", "4 de junho | Corpus Christi"]
        ] },
        { idx: 33, rep: [
            ["18 de abril", "3 de abril"],
            ["24 de abril", "21 de abril"]
        ] },
        { idx: 31, rep: [
            ["19 de junho", "4 de junho"]
        ] }
    ];
    function repAll(s, a, b) { return s.split(a).join(b); }
    var log = [];
    for (var j = 0; j < jobs.length; j++) {
        var job = jobs[j];
        var tf = doc.textFrames[job.idx];
        var c = String(tf.contents), before = c;
        for (var r = 0; r < job.rep.length; r++) {
            var f = job.rep[r][0], t = job.rep[r][1];
            if (c.indexOf(f) >= 0) { c = repAll(c, f, t); log.push("TF[" + job.idx + "] OK: " + f + " -> " + t); }
            else { log.push("TF[" + job.idx + "] FALHOU (nao encontrado): " + f); }
        }
        if (c !== before) tf.contents = c;
    }
    var fOut = new File(doc.path.fsName + "/_ai_caption_out.txt");
    fOut.encoding = "UTF-8";
    fOut.open("w");
    fOut.write(log.join("\n"));
    fOut.close();
    app.redraw();
    alert("Legendas de feriado:\n" + log.join("\n"));
})();
