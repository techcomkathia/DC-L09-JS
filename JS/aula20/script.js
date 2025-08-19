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

//correção de 20:16
