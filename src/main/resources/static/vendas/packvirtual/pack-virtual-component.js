function onPackSelected(packs) {
    var ids = (packs || []).map(function (pack) {
        return pack.packVirtualKey;
    }).join(', ');

    var nomes = (packs || []).map(function (pack) {
        return pack.descricao;
    }).join(', ');

    $('#packVirtualKey').val(ids);
    $('#packVirtualNome').val(nomes);
}

