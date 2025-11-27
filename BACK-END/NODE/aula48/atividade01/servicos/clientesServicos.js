// Exercicio 2:
/* Crie o serviço para obter todos os clientes e cadastrar um novo cliente (o id deve ser gerado automaticamente)

*/

//importar o banco de dados
const bancoDeDados = require('../modelo/bancoDeDados')

function obterTodosOsClientes() {
    let clientes = bancoDeDados.clientes
    return clientes
}


function cadastrarCliente(cliente) {
    //criar um id ( esse processo é feito pelo SGBD, mas aqui vamos fazer manualmente)
    let id = bancoDeDados.clientes.length + 1
    let novoCliente = {
        id,
        ...cliente
    }

    bancoDeDados.clientes.push(novoCliente)
    console.log(bancoDeDados.clientes)
    return novoCliente
    
}


module.exports = {
    obterTodosOsClientes,
    cadastrarCliente
}