const arr = [1, 5, 10, "oi", true]

// let soNumeros = arr.every(function (element){ //EVERY = verifica TODO element
//     return typeof element === "number"
// }) 
// console.log(soNumeros)

let algumNumero = arr.some(function (element){ //SOME = verifica algum element
    return typeof element === "number" && element > 7
}) 

const arrFilter = arr.filter(function (element, index, _arr){
    return typeof element === "number"
})

arr.forEach(function (element, index, _arr){
    console.log(`${index} : ${element}     <- .forEach`)
})

let arrTeste =[2,8,5]
arrTeste = arrTeste.map(function(element,index, _arr){
    return element * element
})

console.log(`${arrTeste}      <- .map`) //map vai transformar um array
console.log(`${algumNumero}         <- .some`) // some verifica ALGUMA coisa
console.log(`${arrFilter}           <- .filter`) // filter vai filtra o que for desejado