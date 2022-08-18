function processar(texto){
    let teste = texto
    let resultado = document.getElementById('resultado')
    for (let i = teste.length; i >= 0 ; i--) {
        resultado.innerHTML += teste[i]
        console.log(teste[i])
        
    }

}
function transformar(){
    let textArea = document.getElementById('textArea').value
    processar(textArea)

}

