var label = $("label[for='tipoDeVisualizacao']")[0], $img = $("<img></img>");
$img.attr('src', 'https://cdn.bluesoft.com.br/commons/icons/informacao.png');
$img.attr('title', label.title);
$($img).tooltip();
label.after(" ");
label.after($img[0]);