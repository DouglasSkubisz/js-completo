//Construa uma função para calcular o IMC(INDICE DE MASSA CORPORAL) com CALLBACK
// 1 - IMC = PESO / ALTURA²
// 2 - Deve retornar uma string
// 3 - Deve gerar um erro se receber um parâmetro não número
// 4 - Deve retornar erro caso não receba nenhum parâmetro

function calcularImc(peso, altura, callback){ //aqui
    if(peso === undefined || altura === undefined){
        throw Error("Digite peso e altura. Ex: 70.6 , 1.92")
    }
    let imc = peso / (altura**2)
    if(typeof callback === "function"){
        return callback(imc)
    }
    return imc
}
function classificaImc(imc){
    if(imc < 16.9){
        console.log('Você está muito abaixo do peso')
    }else if(imc > 17 && imc < 18.4){
        console.log('Você está abaixo do peso')
    }else if(imc > 18.5 && imc < 24.9){
        console.log('Você está dentro do peso ideal')
    }else if(imc > 25 && imc < 29.9){
        console.log('Você está acima do peso')
    }else if(imc > 30 && imc < 34.9){
        console.log('Você está com obesidade Grau I')
    }else if(imc > 35 && imc < 40){
        console.log('Você está com obesidade Grau II')
    }else{
        console.log('Você está com obesidade Grau III')
    }
}
let imc = calcularImc(60, 1.65)
console.log(imc)
calcularImc(60, 1.65, classificaImc(imc)) 
