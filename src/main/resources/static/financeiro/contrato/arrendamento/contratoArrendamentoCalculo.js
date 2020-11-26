var bluesoft = bluesoft ? bluesoft : {};

bluesoft.contratoArrendamentoCalculo = {
    aprovar: function (contratoArrendamentoKey) {
        showConfirmModal("Deseja realmente aprovar este contrato?", function () {
            getAguardeTag().show();

            $.ajax({
                url: bluesoft.raiz + '/erp-app/areas/financeiro/contrato/arrendamento/' + contratoArrendamentoKey + '/status.action',
                type: 'POST',
                contentType: "application/json",
                data: JSON.stringify({
                    "status": "APROVADO"
                }),
                success: function (res) {
                    setSuccess("Contrato aprovado com sucesso");
                    window.location = bluesoft.raiz + "/erp-app/areas/financeiro/contrato/arrendamento/arrendamento.index.jsp#/financeiro/contrato/arrendamento/consulta?contratoArrendamentoKey=" + contratoArrendamentoKey;
                },
                error: function (error) {
                    getAguardeTag().hide();
                    addError(error.responseText, 12);
                }
            }).done(
                getAguardeTag().hide
            );
        });
    },
    voltar: function (contratoArrendamentoKey) {
        window.location = bluesoft.raiz + "/erp-app/areas/financeiro/contrato/arrendamento/arrendamento.index.jsp#/financeiro/contrato/arrendamento/consulta?contratoArrendamentoKey=" + contratoArrendamentoKey;
    }
};
