function enviar(){
    let temp = Number(document.getElementById('temperatura').value)
    let res = document.getElementById('res')
    let result = (temp * 1.8) + 32

    res.innerHTML = `${temp} graus Celsius equivale a ${result} Fahrenheit.`
}