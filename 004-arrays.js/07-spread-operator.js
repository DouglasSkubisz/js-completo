// metodo from serve para transformar algum elemento em array ou objeto

const arr = [ 2, 4, 6]

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}

sum(1,2,3)
sum(arr)

//com spread " ... " é destruido o array
sum(...arr)