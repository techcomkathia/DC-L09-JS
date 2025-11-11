let conta = {
  titular: "Maria Silva",
  numero: "12345-6",
  agencia: "001",
  saldo: 1000,
  limiteEmprestimo: 5000,
  divida: 0
};

let conta2= {
  titular: "Cleitinho Lima",
  numero: "12345-6",
  agencia: "001",
  saldo: 1000,
  limiteEmprestimo: 5000,
  divida: 0
}
//1) Crie as 4 funções, uma para cada operação, que recebam os parâmetros e retornem o objeto com as informações atualizadas
// as operações possíveis serão funções com parâmetros e com retornos
// depositar(objConta, valor), retorno objConta (com as informações atualizadas)
// sacar(objConta, valor)  retorno objConta (com as informações atualizadas)
// emprestar(objConta, valor)  retorno objConta (com as informações atualizadas)
// pagarDivida(objConta, valor)  retorno objConta (com as informações atualizadas)


function depositar(qualConta, valor){
    qualConta.saldo = qualConta.saldo + valor
    return qualConta
}
function sacar(qualConta, valor) {
    qualConta.saldo = qualConta.saldo - valor
    return qualConta
}
function emprestar(qualConta, valor) {
    //TODO (implementar): validação se o valor passado como parametro nao ultrapassa o limite de crédito
    //caso seja o valor do emprestimo ultrapassar o limite de crédito, nao deve ser possivel realizar o emprestimo e um alerta deve ser exibido para o usuário
    qualConta.limiteEmprestimo = qualConta.limiteEmprestimo - valor
    qualConta.saldo += valor
    qualConta.divida += valor
    return qualConta
}
function pagarDivida(qualConta, valor) {
    //TODO (implementar): validação se o valor passado como parametro ULTRAPASSA O valor da divida.:
    //se o valor passado dor maior que a dívida: adionar o excedente ao saldo e mostrar um alerta para o usuário
    //se for menor ou igual ao valor da divida: fazer o processo normal
    //adicionar o dinheiro na conta
    depositar(qualConta, valor)
    //retirar o dinheiro da divida do saldo
    sacar(qualConta, valor)
    //voltar o limite de crédito
    qualConta.limiteEmprestimo = qualConta.limiteEmprestimo + valor
    //subtrair o dinheiro da divida
    qualConta.divida = qualConta.divida - valor
    return qualConta
}

//crie uma função que espera receber 3 parâmetros:
//objConta, operação(função de callback), valor

//caixaEletronico(conta2, depositar, 100)
 function caixaEletronico(objConta, escolhaOpcao, valor){
    escolhaOpcao(objConta, valor)
    console.log(`A função recebeu os parâmetros: a conta do titular ${objConta.titular}, ${escolhaOpcao}, ${valor}`)
 }


//  caixaEletronico(conta2, sacar, 200)

//  caixaEletronico(conta2, emprestar, 400   
//  )

//  caixaEletronico(conta2, sacar, 10000 )



//arrow function de uma única linha

let unicaLinha = (a, b) => a + b
//retorna sempre o valor proprio da arrow function

let resultado = unicaLinha(10, 20)
//console.log(resultado)

//arrow function com mais de uma linha
// retorno não explicito ( precisa ser colocado o return no final caso queira retornar algo)
//precisa usar as chaves

let maisDeUmaLinha = (a, b) => {
    console.log(a)
    console.log(b)
    let resultado = a + b
    return resultado
}
//console.log(maisDeUmaLinha(10, 20))


function calculadora(b, a, funcao){
    return funcao(a, b)
}


let potencia = calculadora(2,3, 
    (num1, num2)=>  num1**num2
)
console.log(potencia)

let porcentagem = calculadora(100, 10, (x, y)=>{
    console.log(`A porcentagem de ${y}% de ${x} é ${x * (y/100)}}`) 
    return x * (y/100)
})
console.log(porcentagem)