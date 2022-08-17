function mensagem1(){
    console.log("tudo numa boa")
}

//expressão de função

const mensagem2 = function(){
    console.log("pinguinzada loca")
}

//arrow function

const arrow = () =>{
    console.log('arrow function!')
}
arrow()

//funções que recebem parâmetros
function somar(n1,n2){
    return n1+n2
}
let soma = somar(3,5)
console.log(soma)
