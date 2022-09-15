//Crie uma um programa de saúde, nesse programa desenvolva uma função que
//calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.

var peso = Number(prompt("Digite o seu peso"))
var altura = Number(prompt("Digite o sua altura"))
var imc

function calcImc(){ 
    imc = (peso/(altura**2)); //formula de imc

    if(imc<18.0){
        return alert(`Seu IMC è: ${imc.toFixed(2)}\nVocê está abaixo do peso ideal!`);
    }
    else if(imc>=18.0 && imc<=24.9){
        return alert(`Seu IMC è: ${imc.toFixed(2)}\nVocê está no peso ideal!`);
    }
    else{
        return alert(`Seu IMC è: ${imc.toFixed(2)}\nVocê está acima do peso ideal!`);
    }
}
calcImc()




