function enviar(){
    var a = document.getElementById('txta')
    var b = document.getElementById('txtb')
    var res = document.getElementById('res')
    var c = a
    var a = b
    var b = c
    res.innerHTML =`<b>Os valores invertidos de váriavel A e B são respectivamente: ${a.value} e ${b.value}</b>`
}