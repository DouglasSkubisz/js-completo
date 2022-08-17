//faça o array retornar apenas os mesmos valores sem repetição usando metodo reduce

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]

let numerosUnicos = numeros.reduce(function (numerosUnicos, numeroAtual) {
    if(numerosUnicos.indexOf(numeroAtual) < 0){ // se não existir o elemento desse indice no array:
        numerosUnicos.push(numeroAtual) // acrescente o numero no final
    }
    return numerosUnicos
},[])
console.log(numerosUnicos)