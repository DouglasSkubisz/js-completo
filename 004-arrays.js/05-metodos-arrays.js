let arr = [1, 2, 3]
console.log(arr.reverse()) //=> inverte a ordem do array

let soma = arr.reduce(function(acumulador, atual ){
    return acumulador + atual //=> soma elemento + elemento até acabar o array
})
console.log(soma)

const nomes = ["Douglas", "Taiane", "Diogo", "Junin", "Stefanie"]
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0] //=> seleciona o index dentro do elemento
    if (nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra]=1
    }
    return nomes
}, {}) //precisa colocar {} no final para retornar o valor num objeto!
console.log(nomesPorOrdem)
