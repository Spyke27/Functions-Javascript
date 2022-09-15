//Crie uma um programa de saúde, nesse programa desenvolva uma função que
//calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.

var peso = Number(prompt("Digite o seu peso"))
var altura = Number(prompt("Digite o sua altura"))
var result

function calcImc(){
    var imc = peso/(altura**2);//formula de imc
    return imc
    
}

alert(`Seu IMC è: ${calcImc().toFixed(2)}`);



