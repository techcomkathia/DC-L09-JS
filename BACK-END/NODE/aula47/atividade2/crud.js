const clienteModel = require('./clienteModel')


//criar um registro na tabela
clienteModel.create({
    contrato: 'TESTE3',
    dataContrato: '2022-01-01'
}).then(() => {
    console.log('Registro criado com sucesso')
}).catch(err => {
    console.log('Erro ao criar o registro: ' + err)
})

//selecionar todos os registros e mostrar no console

clienteModel.findAll()
    .then((clientes) => {
        clientes.forEach(cliente => {
            console.log(cliente.dataValues)
        })
    })
    .catch(err => {
        console.log('Erro ao selecionar os registros: ' + err)
    })