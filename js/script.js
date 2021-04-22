const dolar = 5.71;
const dolarCanadense = 4.54;
const euro = 6.71;
const libra = 7.89;
const pesoArgentino = 0.062;

function createInput() {
    const html = `
    
    <h1 class="page-title">Conversor de moedas</h1>

    <select name="Moeda" id="moeda" onClick="moeda">
                <option value="0">Selecione uma Moeda</option>
                <option value="1">Dólar</option>
                <option value="2">Dólar Canadense</option>
                <option value="3">Euro</option>
                <option value="4">Libra</option>
                <option value="5">Peso Argentino</option>
    </select>

    <input type="text" id="conversao" placeholder="Digite um valor" oncick="converter()">
    <input type="text" id="convertido"></input>

    <div class="buttonConvert">
    <button onclick="convert()">Converter</button>`


    const conversor = document.getElementById('conversor')
    conversor.innerHTML = html;

}

createInput()

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