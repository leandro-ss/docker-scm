var cofKeysEntrada = [1, 2, 3];
var cofKeysSaida = [5, 6, 7];

var $select = "select[name='cfopsKeys'] option";

function ehCfopEntrada(cfop) {
    return cofKeysEntrada.includes(parseInt(cfop.charAt(0)))
}

function ehCfopSaida(cfop) {
    return cofKeysSaida.includes(parseInt(cfop.charAt(0)));
}

function ehEntradas(tipoEscrituracao) {
    return tipoEscrituracao === 'ENTRADAS';
}

function ehSaidas(tipoEscrituracao) {
    return tipoEscrituracao === 'SAIDAS';
}

function desabilitaCfop(el) {
    $(el).attr('disabled', 'disabled');
}

function habilitaCfop(el) {
    $(el).removeAttr('disabled');
}

function esconderCfopPelaDescricao(cfop) {
    $("#s2id_cfops li div:contains(" + cfop + ")").parent('li').hide();
}

function desabilitarCfopsEntrada() {
    $($select).each(function () {
        var cfop = this.value;
        if (ehCfopEntrada(cfop)) {
            desabilitaCfop(this);
            esconderCfopPelaDescricao(this.text);
        } else {
            habilitaCfop(this);
        }
    });
}

function desabilitarCfopsSaida() {
    $($select).each(function () {
        var cfop = this.value;
        if (ehCfopSaida(cfop)) {
            desabilitaCfop(this);
            esconderCfopPelaDescricao(this.text);
        } else {
            habilitaCfop(this);
        }
    });
}

$('#tipoEscrituracao').change(function () {
    var TODOS = '0';

    $('#s2id_cfops').select2('val', '');

    if (ehEntradas(this.value)) {
        desabilitarCfopsSaida();
    } else if (ehSaidas(this.value)) {
        desabilitarCfopsEntrada();
    } else {
        $($select).each(function () {
            desabilitaCfop(this);
        });
    }

    $('#cfops').val(TODOS);
    $('#cfops').trigger('change');

});

$('#tipoEscrituracao').val('ENTRADAS');
$('#tipoEscrituracao').change();

$('#cfops').change(function (cfop) {

    var todos = '0';
    if (cfop.val && cfop.val.includes(todos)) {
        $('#s2id_cfops').select2('val', todos);
        $($select).each(function () {
            if (this.text !== 'Todos') {
                desabilitaCfop(this);
                esconderCfopPelaDescricao(this.text);
            }
        });
    } else {
        var tipoEscrituracao = $('#tipoEscrituracao').val();
        if (cfop.val && cfop.val.length === 0) {
            $($select).each(function () {
                if (ehEntradas(tipoEscrituracao) && ehCfopEntrada(this.value)) {
                    habilitaCfop(this);
                } else if (ehSaidas(tipoEscrituracao) && ehCfopSaida(this.value)) {
                    habilitaCfop(this);
                }
            });
            return;
        }
        $($select).each(function () {
            var cfop = this.value;
            if (ehEntradas(tipoEscrituracao) && ehCfopEntrada(cfop)) {
                habilitaCfop(this);
            } else if (ehSaidas(tipoEscrituracao) && ehCfopSaida(cfop)) {
                habilitaCfop(this);
            }
        });
    }
});

$('#cfops').change();