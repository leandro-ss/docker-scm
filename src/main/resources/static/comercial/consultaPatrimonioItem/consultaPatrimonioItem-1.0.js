var bluesoft = bluesoft ? bluesoft : {};

bluesoft.consultaPatrimonioItem = {
    urlRaiz: null,

    buscar: function (formato) {
        this._validarBusca(formato);
    },

    trocaTipoBusca: function (input) {
        var name = $(input).val();
        var lastInput = $(input).parent().parent().find('input:last');
        lastInput.attr('name', name);
        lastInput.val(null);
    },

    startup: function () {
        $('#buscarPor').on('change', function () {
            bluesoft.consultaPatrimonioItem.trocaTipoBusca($('#buscarPor'));
        });
    }
};
