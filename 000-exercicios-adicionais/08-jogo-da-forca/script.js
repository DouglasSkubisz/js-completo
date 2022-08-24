let facil = document.getElementById("facil")
let medio = document.getElementById("medio")
let dificil = document.getElementById("dificil")
let displayTentativa = document.getElementById("tentativas")
let displayTexto = document.getElementById("textoFinal")
let numeroTentativas = 0
let flag = false

const setNivel = () => {
    if(numeroTentativas == 0){
        flag = true
        if(facil.checked){
            numeroTentativas = 7
            displayTentativa.innerHTML = numeroTentativas
        }else if(medio.checked){
            numeroTentativas = 5
            displayTentativa.innerHTML = numeroTentativas
        }else{
            numeroTentativas = 3
            displayTentativa.innerHTML = numeroTentativas
        }
    }else{
        displayTentativa.innerHTML = "Você não pode mudar o nivel enquanto não terminar o jogo"
    }
}

let palavra = "morango"
let categoria = "fruta"
const palpitesAcumulados = []
const letrasIndividuais = []

for(let i=0; i < palavra.length ; i++){
    letrasIndividuais.push(palavra[i])
}

let cont = 0
const dicas = () => {
    alert(cont== 0 ? `Número de letras: ${palavra.length}\n Tipo: ${categoria}` : "Chega de dicas!")
    cont++
}

const palpitar = () => {
    displayTentativa.innerHTML = numeroTentativas
    if (flag) {        
    
        let palavraChave = palavra
        displayPChave = document.getElementById("palavraChave")//aqui vai mostra palavra-asterisco
        displayPChave.innerHTML = " "
        let palpite = document.getElementById("entraLetra").value
        if (palpitesAcumulados.indexOf(palpite) == -1 ){
            palpitesAcumulados.push(palpite)
        }
        if (letrasIndividuais.indexOf(palpite) == -1) {
            numeroTentativas--
            displayTentativa.innerHTML = numeroTentativas
            displayTexto.innerHTML = "Parabéns, você errou!"
        }
        else{
            displayTexto.innerHTML = "Você acertou, não fez mais que sua obrigação!"
        }
        for(let i = 0; i < palavraChave.length; i++){
            if(palpitesAcumulados.indexOf(palavraChave[i]) > -1){
                displayPChave.innerHTML += palavraChave[i]
            }
            else{
                displayPChave.innerHTML += "☺"
            }
        }
    }else{
        window.alert("Selecione o nivel e clique em 'set' para iniciar o jogo")
    }
}
    //displayPChave.innerHTML = palpite

