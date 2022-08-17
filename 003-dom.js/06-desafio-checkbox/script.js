const botaoenviar = document.getElementById("botao-enviar")
botaoenviar.disabled = true

function enableOrDisableButton(){
    const checkbox = document.querySelector("#contrato")
    
    if(checkbox.checked = true){
        botaoenviar.disabled = false
    }else{
        botaoenviar.disabled = true
    }
    
}