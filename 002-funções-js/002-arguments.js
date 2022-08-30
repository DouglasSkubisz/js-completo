//somando todos os parametros através de um array

/*
function somar(arr){
    let total = 0
    for(let i = 0; i <arr.length ; i++){
        total += arr[i]
    }
    return total
}
console.log(somar([2,5,4,16]))
*/

//somando com arguments

function somar(){
    console.log(arguments)
    let total = 0
    for(let i = 0; i <arguments.length ; i++){
        total += arguments[i]
    }
    return total
}

console.log(somar(2,5,4,16,32,1,9,14))