const pessoa = {
    nome: "Davi",
    idade: 7,
    email: "davi@seila.com"
}
console.log(pessoa)

for(let prop in pessoa){ // for in
    console.log(prop)
    console.log(pessoa[prop])
}