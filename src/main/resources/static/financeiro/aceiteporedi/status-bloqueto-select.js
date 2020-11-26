var $select = "select[name='tipoStatusBloquetoKey'] option";

function desabilitaOpcao(el) {
    $(el).attr('disabled', 'disabled');
}

function habilitaOpcao(el) {
    $(el).removeAttr('disabled');
}

$('#tipoStatusBloquetoKey').change(function (status) {
    var todos = '0';
    if (status.val && status.val.includes(todos)) {
        $('#s2id_tipoStatusBloquetoKey').select2('val', todos);
        $($select).each(function () {
            if (this.text !== 'Todos') {
                desabilitaOpcao(this);
            }
        });
    } else if (status.val && status.val.length === 0) {
        $($select).each(function () {
            habilitaOpcao(this);
        });
    }
});
