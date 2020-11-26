function getContainerComponentPeriodo() {
    return $("#competencia").parent().next('.col-sm-4');
}

function getContainerComponentCompetencia() {
    return $("#competencia").parent();
}

function getContainerComponentTipoDeRuptura() {
    return $("#tipoRuptura").parent().parent().parent();
}

function getContainerComponentQuantidadeDeDias() {
    return $("#quantidadeDias").parent();
}

function ocultarCompetencia() {
    getContainerComponentCompetencia().hide();
}

function ocultarPeriodo() {
    getContainerComponentPeriodo().hide();
}

function ocultarTipoDeRuptura() {
    getContainerComponentTipoDeRuptura().hide();
    ocultarQuantidadeDeDias();
}

function ocultarQuantidadeDeDias() {
    getContainerComponentQuantidadeDeDias().hide();
}

function mostrarCompetencia() {
    ocultarPeriodo();
    getContainerComponentCompetencia().show();
}

function mostrarPeriodo() {
    ocultarCompetencia();
    getContainerComponentPeriodo().show();
}

function mostrarTipoDeRuptura() {
    getContainerComponentTipoDeRuptura().show();
}

function mostrarQuantidadeDeDias() {
    getContainerComponentQuantidadeDeDias().show();
}

ocultarPeriodo();
ocultarTipoDeRuptura();
ocultarQuantidadeDeDias();

$("#buscarPor").change(function () {
    var POR_PERIODO = 1;
    ($(this).val() == POR_PERIODO) ? mostrarPeriodo() : mostrarCompetencia();
});

$("#setorCompraKey").change(function () {
    var TODOS = -1;
    ($(this).val() != TODOS) ? mostrarTipoDeRuptura() : ocultarTipoDeRuptura();
});

$("#tipoRuptura").change(function () {
    var TODOS = 0;
    ($(this).val() != TODOS) ? mostrarQuantidadeDeDias() : ocultarQuantidadeDeDias();
});

$('#buscarPor').trigger('change');
$("#setorCompraKey").trigger('change');