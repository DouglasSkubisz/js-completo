
(function (){
    const nomeUsuario= 'Douglinhas'

    if(nomeUsuario){
        //                      MÉTODO CRIAR ELEMENTO
        const topBarElement = document.createElement("div") //criei uma div na const topBarElement
        topBarElement.className = "top-bar" //criei uma classe para topBarElement
        topBarElement.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b> </p>`

        //  POSICIONAR ELEMENTO:
        //elementoPai.insertBefore(top-bar, elementoReferencia)
        const elementoPai = document.querySelector('.hero')
        elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild)
        //método para [.inserirAntes] ("elementoCRIADO", elemento Referencia) 
    }
    
})()