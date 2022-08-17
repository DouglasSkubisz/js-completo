//  Construa uma função que calcule a média:
//  1 - pode receber um ou mais valores númericos
//  2 - retornar a média
//  3 - gerar erro se não receber um parâmetro que não seja número
//  4 - deve retornar zero caso não receba nenhum parâmetro

function calcularMedia(){       
    let total = 0
    for(i = 0 ; i < arguments.length; i++){        
        if (typeof arguments[i] !== 'number'){
                throw Error('São permitidos apenas números!')
        }else{
        total += arguments[i]
        }
    }    
    let media = total / arguments.length
    return media || 0 //curto circuito
}
console.log(calcularMedia())

/*
//resolução:
(function(){
    function calcularMedia(){
        let total = 0
        let qtd = arguments.length
        for(i=0; i < qtd; i++){
            if(typeof arguments[i] !== 'number'){
                throw Error('São permitidos apenas números!')
            }
            total += arguments[i]
        }
        return (total / qtd) || 0 // retorne a média ou se for false(NaN), retorne 0 - [curto circuito]
    }

    let media = calcularMedia()
    console.log(media)
})()
*/