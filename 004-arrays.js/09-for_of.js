
const arr = [10, 20, 30]
const obj = {
    nome: "ana",
    idade: "28",
    peso: "50kg"
}
for(let prop in obj){ //FOR IN -> serve para interação de objeto
    console.log(prop)
    console.log(`${obj[prop]}       <-- valor da propriedade`) //valor da propriedade
}
for(n of arr){ // FOR OF -> serve para interação de array
    console.log(n)
}