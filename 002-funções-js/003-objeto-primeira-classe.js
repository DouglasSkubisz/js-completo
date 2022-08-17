//Função também é um objeto e pode chamar a propriedade deum objeto
function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    cb()
}
fn(function(){
    console.log("funcção passada por parâmetro")
})