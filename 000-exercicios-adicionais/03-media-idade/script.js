function enviar(){
    let age1 = document.getElementById('numA')
    let age2 = document.getElementById('numB')
    let res = document.getElementById('res')

    let soma = Number(age1.value) + Number(age2.value)
    let media = soma / 2

    res.innerHTML = `A Soma das idades é igual a ${soma}.
    A média das idades é de ${media}`
}