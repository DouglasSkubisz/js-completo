
//  1 - ADICIONAR
/*
(function (){
    const nomeUsuario= 'Douglas'
    //document.querySelector('.top-bar p').textContent = "Bem Vindo(a), " + nomeUsuario //ou duas linhas de baixo
    const elemento = document.querySelector('.top-bar p')
    //elemento.textContent = "Bem vindo(a), " + nomeUsuario //  (text.content) redefinir um valor
    //elemento.textContent = elemento.textContent + nomeUsuario //  (text.content) recupera um valor
    elemento.innerHTML += `<b> ${nomeUsuario} </b>` // com HTML


})()*/


//  2 - ESCONDER / REMOVER
(function (){
    const nomeUsuario= ''
    const elemento = document.querySelector('.top-bar p') //acessar o elemento que quero manipular
    if(nomeUsuario){ //se existir nomeUsuario...
    elemento.innerHTML += `<b> ${nomeUsuario} </b>`
    }else{
        //elemento.style.display = "none" //adicionei style display none!
        //  OU:
        //elemento.parentElement.style.display = "none" //para acesssar elemento pai
        //elemento.remove() //PARA REMOVER
    }
})()