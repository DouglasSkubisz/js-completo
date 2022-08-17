let age = 72
let documentOk = true

if(((age>=16 && age< 18) || age > 70) && documentOk == true){
    console.log('Voto Opcional')
}else if(((age>=16 && age< 18) || age > 70) && documentOk == false) {
    console.log('Não Vota!')
}else if(age > 18 && documentOk == true){
    console.log('Voto Obrigatório!')
}else if(age > 18 && documentOk == false){
    console.log('Tire seu titulo de eleitor, fique atento as datas para não ser multado. Voto Obrigatório')
}