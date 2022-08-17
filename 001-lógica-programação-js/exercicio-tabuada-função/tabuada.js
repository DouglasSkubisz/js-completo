function tabuada(){
    let num = document.getElementById('number')
    let res = document.getElementById('select')

    if(number.value.length == 0){
        window.alert('Digite um número')
    }else{
        let n = Number(num.value)
        res.innerHTML = ""
        for(index = 1; index <= 10; index++){
            let linha = document.createElement('option')
            linha.text = `${n} x ${index} = ${n * index}`
            res.appendChild(linha)
        }
    }
}