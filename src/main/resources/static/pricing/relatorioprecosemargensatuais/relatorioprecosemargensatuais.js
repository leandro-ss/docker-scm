
$('#tipoVisualizacao').change(function () {
    var currentDate = new Date().toLocaleDateString();

    $('#dataInicial').val(currentDate);
    $('#dataFinal').val(currentDate);

    var dateEl = $('#dataInicial').parent().parent('div[class]="form-group"');
    var departamentoEl = $('#departamentoKey').parent().parent('div[class]="row"');

    if (this.value == 'ATUAL') {
        dateEl.css("visibility", "hidden");
        departamentoEl.removeClass("hide");
    } else {
        dateEl.css('visibility', 'visible');
        departamentoEl.addClass("hide");
    }
});