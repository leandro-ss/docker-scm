function alternarEntreOsTiposDeConsulta(tipoConsultaDRE){

    if(tipoConsultaDRE == 'LOJA' || tipoConsultaDRE == ''){
        $('#tipoConsultaDRE').val(tipoConsultaDRE).select2();
        $('#lojaKey').show().select2('container').show();
        $('#lojaKey').parent().show();
        $('#matrizKey').hide().select2('container').hide();
        $('#matrizKey').parent().hide();
    }

    if(tipoConsultaDRE == 'MATRIZ_FILIAL'){
        $('#tipoConsultaDRE').val(tipoConsultaDRE).select2();
        $('#lojaKey').hide().select2('container').hide();
        $('#lojaKey').parent().hide();
        $('#matrizKey').show().select2('container').show();
        $('#matrizKey').parent().show();
    }
}

$(function() {
    alternarEntreOsTiposDeConsulta($('#tipoConsultaDRE').val());
    $('#tipoConsultaDRE').change(function() {
        alternarEntreOsTiposDeConsulta(this.value)
    });
});


function getValorDoTipoDaConsulta(){
    var tipoConsulta = $('#tipoConsultaDRE').val();

    if(tipoConsulta == 'LOJA'){
        return $('#lojaKey').val();
    }

    if(tipoConsulta == 'MATRIZ_FILIAL'){
        return $('#matrizKey').val();
    }
}
