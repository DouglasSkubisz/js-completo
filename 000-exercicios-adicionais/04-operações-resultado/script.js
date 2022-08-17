function enviar(){
    let n1 = Number(document.getElementById('numA').value)
    let n2 = Number(document.getElementById('numB').value)
    let res = document.getElementById('res')
    let selectOperation = document.querySelector('input[name="operation"]:checked').value
    let nameOperation = ''
    let calculo = ''
    let operador = ''

    if(selectOperation == 'adicao'){
        nameOperation = 'adição'
        calculo = n1 + n2
        operador = '+'
    }
    else if(selectOperation == 'subtracao'){
        nameOperation = 'subtração'
        calculo = n1 - n2
        operador = '-'
    }
    else if (selectOperation == 'multiplicacao'){
        nameOperation = 'multiplicação'
        calculo = n1 * n2
        operador = '*'
    }
    else{
        nameOperation = 'divisão'
        calculo = n1 / n2
        operador = '/'
    }

    res.innerHTML = `Resultado da ${nameOperation}: ${n1} ${operador} ${n2} = ${calculo}`

}