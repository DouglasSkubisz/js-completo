let arr = [4, 5 , 10 , 20, 35, 4, 5]
console.log(arr.indexOf(5)) // retornar o indice do primeiro valor encontrado no array
console.log(arr.lastIndexOf(5)) // retornar o indice do ULTIMO valor encontrado no array
console.log(arr.includes(35)) // retorna um valor booleano
console.log(arr.find(function(el){ //encontra o primeiro elemento solicitado
    return el > 10
}))
console.log(arr.findIndex(function(el){ //encontra o primeiro indice mais que o número passado
    return el > 20
}))