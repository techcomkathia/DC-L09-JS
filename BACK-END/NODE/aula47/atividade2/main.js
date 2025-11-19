const sequelize = require('./sequelize')

//importação de todos os modelos que serão sincronizados
const PessoaJuridicaModel = require('./PessoaJuridicaModel')
const PessoaFisicaModel = require('./PessoaFisicaModel')
const ClienteModel = require('./clienteModel')


sequelize.authenticate()//se conecta ao banco de dados
.then(() => {
    console.log('Conexão estabelecida com sucesso')
    //sincronizar as tabelas
    sequelize.sync({alter: true}).then(() => {
        console.log('Tabelas criadas com sucesso')
    })
})
.catch(err => {
    console.log('Erro ao conectar ao banco de dados: ' + err)
})
