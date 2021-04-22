var dolar = 5.71;
var dolarCanadense = 4.54;
var euro = 6.71;
var libra = 7.89;
var pesoArgentino = 0.062;

function convert() {
    var moeda = $("#moeda").val();
    var conversao = document.getElementById("conversao").value
    var valorReal = parseFloat(conversao)
    
    if (moeda == 0) {
        convertido.value = "Selecione a moeda de cambio!";

    } else if (moeda == 1) {
        var valorEmReal = valorReal * dolar;
        convertido.value = (valorEmReal).toFixed(2);

    } else if (moeda == 2) {
        var valorEmReal = valorReal * dolarCanadense;
        convertido.value = (valorEmReal).toFixed(2);

    } else if (moeda == 3) {
        var valorEmReal = valorReal * euro;
        convertido.value = (valorEmReal).toFixed(2);

    } else if (moeda == 4) {
        var valorEmReal = valorReal * libra;
        convertido.value = (valorEmReal).toFixed(2);

    } else if (moeda == 5) {
        var valorEmReal = valorReal * pesoArgentino;
        convertido.value = (valorEmReal).toFixed(2);
    }
}