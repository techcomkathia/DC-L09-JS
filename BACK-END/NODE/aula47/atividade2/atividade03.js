// crie 3 funções que recebam um objeto como parâmetro e façam o seguinte:
// criarContrato (create) -> valida se o objeto recebido tem as propriedades necessárias ao modelo de contrato e faz uma inserção no banco de dados

const { where } = require('sequelize')
const ClienteModel = require('./clienteModel')
const PessoaFisicaModel = require('./pessoaFisicaModel')
const PessoaJuridicaModel = require('./pessoaJuridicaModel')

function criarContrato(novoContrato){
    if(!novoContrato.contrato || !novoContrato.dataContrato){
        console.log('O contrato precisa de um numero de contrato e uma data')
    }

    ClienteModel.create(novoContrato)
    .then(() => {
        console.log('Contrato criado com sucesso')
    })
    .catch(err => {
        console.log('Erro ao criar o contrato: ' + err)
    })
}
// alterarContrato  (update) -> altera um contrato existente no banco de dados
function alterarContrato(id, contratoAlterado){
    //verificar se o id existe no banco de dados
    let clienteBancoDados = ClienteModel.findByPk(id)
    if(!clienteBancoDados){
        console.log('Contrato nao encontrado')
        return false
    }

    //caso o cliente exista será realizada a atualização
    ClienteModel.update(contratoAlterado, {where: {id: id}})
    .then(() => {
        console.log('Contrato alterado com sucesso')
    })
    .catch(err => {
        console.log('Erro ao alterar o contrato: ' + err)
    })
}


// excluirContrato (destroy) -> exclui um contrato existente no banco de dados

function excluirContrato(idCliente){
    //verificar se o id existe no banco de dados
    let clienteBancoDados = ClienteModel.findByPk(idCliente)
    if(!clienteBancoDados){
        console.log('Contrato nao encontrado')
        return false
    }



    //caso o cliente exista será realizada a exclusão

    //excluir as infomações nas tablas onde o cliente foi referenciado, onde o id informado é chave estrangeira
    PessoaFisicaModel.destroy({where: {cliente_id: idCliente}})
    PessoaJuridicaModel.destroy({where: {cliente_id: idCliente}})

    //excluido na tabela principal onde o id informado é chave primária
    ClienteModel.destroy({where: {id: idCliente}})
    .then(() => {
        console.log('Contrato excluido com sucesso')
    })
    .catch(err => {
        console.log('Erro ao excluir o contrato: ' + err)
    })
}

/*criarContrato({contrato: 'TESTE001', dataContrato: '2022-11-17'})
criarContrato({contrato: 'TESTE002', dataContrato: '2022-11-18'})*/


//atualizar cliente 
//alterarContrato(1, {contrato: 'TESTE003', dataContrato: '2022-11-18'})

//excluir cliente
//excluirContrato(1)


//criar pessoaFisica
function criarPessoaFisica(pessoaFisica){
    if(!pessoaFisica.nome || !pessoaFisica.sobreNome || !pessoaFisica.cpf || !pessoaFisica.rg || !pessoaFisica.dataNascimento){
        console.log('A pessoa fisica precisa de um nome, sobrenome, cpf, rg e data de nascimento')
        return false
    }

    //verificar se o id do contrato existe no banco de dados
    let contratoBancoDados = ClienteModel.findByPk(pessoaFisica.cliente_id)
    if(!contratoBancoDados){
        console.log('Contrato nao encontrado, informe um id de cliente valido')
        return false
    }
    PessoaFisicaModel.create(pessoaFisica)
    .then(() => {
        console.log('Pessoa fisica criada com sucesso')
    })
    .catch(err => {
        console.log('Erro ao criar a pessoa fisica: ' + err)
    })
}

/*criarPessoaFisica({
    nome: 'Cleitinho',
    sobreNome: 'Lima',
    cpf: 12345,
    rg: 5,
    dataNascimento: '2000-01-01',
    cliente_id: 5

})*/


// fazer um select com join
ClienteModel.findAll({
    where: {id: 5},
    include: {
        model: PessoaFisicaModel,
        atributes: ['nome']
    }
})
.then(clientes => {
    clientes.forEach(cliente => {
        console.log(cliente.dataValues)
    })
})
.catch(err => {
    console.log('Erro ao selecionar os registros: ' + err)
})





