const txtEmail = document.getElementById("txtEmail")

function editarEmail(){
    txtEmail.disabled = false // desabilitar input = false [habilitar]
    txtEmail.focus()  // focar na variavel selecionada

}

function disableEmail(){
    txtEmail.disabled = true // desabilitar input = true [desabilitar]
}
