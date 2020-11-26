function removerProdutosKeys() {
    $("input[name='produtosKeys']").remove();
};

function definirLista(produtos) {
    $('#produto').parent().find('.icon-clear-search').click(removerProdutosKeys);

    removerProdutosKeys();

    for (var i = 0; i < produtos.length; i++) {
        var str = '<input type="hidden" name="produtosKeys" value="' + produtos[i].produtoKey + '">';
        $("#produto").after(str);
    }

    var listaProdutos = produtos.map(function (produto) {
        return produto.descricao;
    }).join(',');

    $("#produto").val(listaProdutos);

};

function setReturnValueListaProduto(produtos) {
    if (produtos != null && produtos.length > 0) {
        definirLista(produtos);
    }
}