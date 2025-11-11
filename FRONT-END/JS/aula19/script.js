let x= 5
let numero = 10

function nomeDaFuncao(){
    let nome = 'Cleitinho'
    alert(nome)
}

function dobrarValor(){
    let numero2 =  10
    numero2 *= 2
    console.log(numero2)

}

let a = 10
let y = 20

function somar(num1, num2){
    let soma2 = num1 + num2
    console.log(soma2)
    return(soma2)
}
// let j = Number(prompt('Digite um número'))
// let y = Number(prompt('Digite outro número'))
// somar(100,100)
// somar(j,y)

function subtrair(num1, num2){
    let subtracao = num1 - num2
    console.log(subtracao)
    return(subtracao)
}

function multiplicar(num1, num2){
    let multiplicacao = num1 * num2
    console.log(multiplicacao)
    return(multiplicacao)
}

function dividir(num1, num2){

    if(num2 == 0){
        console.log('Impossível dividir por 0')
        return
    }
    let divisao = num1 / num2
    console.log(divisao)
    return(divisao)
}

function criarObjetoUsuario(nome,email){
    let usuario={
        nome: nome,
        email: email,
        senha: 'mudarSenha'
    }
    
    return (usuario)
    console.log(usuario)

}

// let usuarioFormatado = criarObjetoUsuario('Cleitinho Lima', 'cleitinho@gato.com')


//função que executa outras funções
function calculadora(num1, num2, simbolo){
    switch(simbolo){
        case '+':
            return(somar(num1, num2))
            break
        case '-':
            return(subtrair(num1, num2))
            break
        case '*':
            return(multiplicar(num1, num2))
            break
        case '/':
            return(dividir(num1, num2))
            break
    }
}

//funções de callback
function executarOperacao(num1, num2, funcao){
    funcao(num1, num2)
}

executarOperacao(10, 10, 'k')
executarOperacao(10, 10, somar)
executarOperacao(10, 10, somar)
executarOperacao(10, 10, subtrair)
executarOperacao(10, 10, multiplicar)
executarOperacao(10, 10, dividir)

somar(10,20)






