    const txtEmail = document.getElementById('txtEmail')
    const msg = document.getElementById('newsletterFeedback')
    
    
    function enviar(){
        let email = txtEmail.value
        msg.innerHTML = `O email ${email} foi cadastrado com sucesso`
    }

