const nomes = ["Douglas", "diogo", ""]
const pessoa = { nome: "douglas", idade: 27, email: "douglasskubisz@hotmail.com"}
const pessoa1 = {}

const pessoas = [{ //ARRAY DE OBJETO
    nome: "Douglas",
    idade: 27
}, {
    nome: "Diogo",
    idade: 20
}, {
    nome: "Junin",
    idade: 29
}, {
    nome: "Taiane",
    idade: 26
}]

console.log(pessoas[0])


//LOOP:

for(let index = 0; index < pessoas.length; index++){
    console.log(`${pessoas[index].nome} possui ${pessoas[index].idade} anos`)
}