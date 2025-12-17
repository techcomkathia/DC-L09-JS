//somar, subtrair, dividir, multiplicar

function somar(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function dividir(num1, num2){
    if(num2 == 0){
        return('Impossível dividir por 0')
        
    }
    return num1 / num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}