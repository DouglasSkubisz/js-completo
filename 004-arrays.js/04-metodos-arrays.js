let arr = [1,3,5,7,9]

let teste = arr.push(11,13,15,true) //=> add no final do array
console.log(teste) // => mostra o length(comprimento) do array
console.log(arr) //=> mostra o array com novos elementos adicionados

let ultimoitem = arr.pop() //=> seleciona e remove ultimo elemento do array
console.log(ultimoitem) // => mostra o ultimo elemento
console.log(arr) //=> mostra o array sem o ultimo elemento

let primeiroitem = arr.shift() //=> seleciona e remove primeiro elemento do array
console.log(primeiroitem) // => mostra o primeiro elemento
console.log(arr) //=> mostra o array sem o primeiro elemento

teste = arr.unshift(4,5,6) //=> acrescenta elementos no inicio do array
console.log(teste) //=> armazenou o tamanho do array na variavel
console.log(arr) //=> mostra o array com elementos acrescentados

let teste2 = arr.slice(2,5) // => pega o elemento através do indice feito no parametro
console.log(teste2) //=> mostra nova variavel com elemento selecionado
console.log(arr) // => mostra o array (sem alteração)

let teste3 = arr.splice(2,4,) //=> a partir do index "2" / pegar "4" proximos index e remove do arrayOriginal
                              //=> a partir do terceiro parametro: adiciona novos elementos!!
console.log(teste3) //=> mostra variavel com novo array armazenado 
console.log(arr) //=> vai mostrar o array com os elementos removidos(roubados)