let teste1 = "minha string" // string entre aspas
teste1 = 10 // posso alterar valor, porém não posso redeclarar

let teste2 = 70

const media = 60 // CONST É IMUTAVEL
const soma = teste1 + teste2

if(Number(teste2) + Number(teste1) >= media){
    console.log(`A media ${media} foi alcançada. Aprovado!`)
}else{
    console.log(`A media ${media} não foi alcançada. Reprovado!`)
}

console.log(soma)