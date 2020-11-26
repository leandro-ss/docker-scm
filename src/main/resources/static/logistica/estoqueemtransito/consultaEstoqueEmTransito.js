var ORDENACAO_LIST = '#ordenacao'
var DESCRICAO_PRODUTO = ORDENACAO_LIST + " option[value='DESCRICAO_PRODUTO']"
var dataBase = '#dataBase'
var btnSubmit = '#btnSubmit'
var btnExportar = '#btn-exportar'

$('#tipoVisualizacao').change(function () {
    if (this.value == 'SINTETICA') {
        $('#produtoNome').parent().parent('div[class]="form-group"').css("visibility", "hidden");
        $(DESCRICAO_PRODUTO).remove();
    } else {
        if ($(DESCRICAO_PRODUTO).length <= 0) {
            $(ORDENACAO_LIST).append('<option class value="DESCRICAO_PRODUTO">Descrição do produto</option>');
        }
        $('#produtoNome').parent().parent('div[class]="form-group"').css('visibility', 'visible');
    }
});

$(dataBase).change(function () {
    if (this.value.length > 0 && this.value.length < 10) {
        bloquearBotoesRelatorio(btnSubmit, btnExportar);
        alert('O campo Data Base não é uma data valida.');
    } else {
        desbloquearBotoesRelatorio(btnSubmit, btnExportar);
    }
});

function bloquearBotoesRelatorio(btnSubmit, btnExportar) {
    $(btnSubmit).attr("disabled", "true");
    $(btnExportar + ' > ul').css('visibility', 'hidden');
}

function desbloquearBotoesRelatorio(btnSubmit, btnExportar) {
    $(btnSubmit).removeAttr('disabled');
    $(btnExportar + ' > ul').css('visibility', 'visible');
}
