const produto = {
    nome: "caneta",
    qtd: 10,
    comprar(n){
        console.log(this)
        if(n > this.qtd){
            return "quantidade não disponivel"
        }
        this.qtd -= n
    }
}
produto.comprar(6)
console.log(produto)