var produtoNome = '#produtoNome';
var filtroLojas = '#lojaKey';
var filtroData = '#dataInicial';
var btnSubmit = '#btnSubmit';

$(produtoNome).parent().find('#iconSearchprodutoNome').click(function () {
    modificarCampoData();
});


$(filtroData).change(function () {
    if (this.value.length === 0) {
        $(filtroData).css({'background-color' : '#FFC0CB'});
        bloquearComponenteTela(btnSubmit);

    } else {
        $(filtroData).css({'background-color' : ''});
        desbloquearComponenteTela(btnSubmit);
    }
});

function modificarCampoData() {
    $(filtroData).css({'background-color' : ''});
    desbloquearComponenteTela(btnSubmit);
    $(filtroData).val(new Date().toLocaleDateString())
}
