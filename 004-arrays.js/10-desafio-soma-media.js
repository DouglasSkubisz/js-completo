//crie duas funções: sum() e average() // soma e média
//utilize os métodos para exercitar


function sum(){    
    const numbers = [...arguments] // -> criei variável para selecionar todos argumentos de forma quebrada
    return numbers.reduce(function(sum, atual){ // --> parametros : (todos os elementos, elemento individual)
        return sum + atual
    }, 0) // <-- resultado inicia com zero
}
function average(){
    return sum(...arguments) / arguments.length
}
let soma = sum(2,8,19,26,44,12,37)
let media = average(2,8,19,26,44,12,37)
console.log(soma)
console.log(media)