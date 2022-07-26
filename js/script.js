// import {valorAutonomia} from './funcoes.js';

function calcular() {
    var vlPago = document.getElementById("vlPago").value; // valor que o cliente pagou.
    var distancia = document.getElementById("distancia").value; // Pega a distancia percorrida.
    var volta = document.getElementById("volta").checked; // atribue o valor true do checbox à variável volta, e já iniciar com o checbox marcado '.checked'.

    if (volta) {
        distancia *= 2
    }; //se a variável 'volta' for 'true' a variável distáncia será o dobro.

    var gastoRealGas = document.getElementById("gastoRealGas").value; //Pega o preço do combustível.
    var gastoRealAlc = document.getElementById("gastoRealAlc").value; //Pega o preço do combustível
    var gastoRealGnv = document.getElementById("gastoRealGnv").value; //Pega o preço do combustível

    var gasKm = document.getElementById("gasKm").value; //Pega o valor da autonomia
    var alcKm = document.getElementById("alcKm").value; //Pega o valor da autonomia
    var gnvKm = document.getElementById("gnvKm").value; //Pega o valor da autonomia

    var extras = document.getElementById("extras").value; // Valor opcional de despesas extras.
    var extras = Number(extras); // converte a variável extras de string para number, para poder fazer cálculos.


    const valorAutonomia = (combustivel, distancia) => {
        var consumo = (distancia / combustivel).toFixed(3); // Divide a distancia pecorrida pela autonomia, e fixa 3 casas decimais.
        return consumo;
    }

    //Gasolina
    var consumoGas = valorAutonomia(gasKm, distancia)
    document.getElementById("consumoGas").innerHTML = consumoGas; //Mostra na tabela a quantidade de combustível consumido.
    var RealGas = (gastoRealGas * consumoGas).toFixed(2); //Multiplicao preço pelo consumo e salva em Variável, e fixa em 2 casas decimais.
    document.getElementById("RealGas").innerHTML = RealGas; // Mostra quanto pagou em Real pelo combustível.
    var totalGas = (vlPago - RealGas - extras).toFixed(2); //Diminue quanto o cliente pagou em real do combustível e das despesas extras.
    document.getElementById("lucroGas").innerHTML = totalGas; // Mostra o lucro.
    
    
    //Alcool
    var consumoAlc = valorAutonomia(alcKm, distancia)
    document.getElementById("consumoAlc").innerHTML = consumoAlc; //Mostra na tabela a quantidade de combustível consumido.
    var RealAlc = (gastoRealAlc * consumoAlc).toFixed(2); //Multiplicao preço pelo consumo e salva em Variável, e fixa em 2 casas decimais.
    document.getElementById("RealAlc").innerHTML = RealAlc; // Mostra quanto pagou em Real pelo combustível.
    var totalAlc = (vlPago - RealAlc - extras).toFixed(2); //Diminue quanto o cliente pagou em real do combustível e das despesas extras.
    document.getElementById("lucroAlc").innerHTML = totalAlc; // Mostra o lucro.
    
    
    //GNV
    var consumoGnv = valorAutonomia(gnvKm, distancia)
    document.getElementById("consumoGnv").innerHTML = consumoGnv; //Mostra na tabela a quantidade de combustível consumido.
    var RealGnv = (gastoRealGnv * consumoGnv).toFixed(2); //Multiplicao preço pelo consumo e salva em Variável, e fixa em 2 casas decimais.
    document.getElementById("RealGnv").innerHTML = RealGnv; // Mostra quanto pagou em Real pelo combustível.
    var totalGnv = (vlPago - RealGnv - extras).toFixed(2); //Diminue quanto o cliente pagou em real do combustível e das despesas extras.
    document.getElementById("lucroGnv").innerHTML = totalGnv; // Mostra o lucro.
}