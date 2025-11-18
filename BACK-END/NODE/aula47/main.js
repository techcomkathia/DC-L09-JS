// fazer a conexão com o banco e a sincronização das tabelas

const sequelize = require('./sequelize')

//importação de todas as tabelas que precisam ser sincronizadas
require('./ModuloTabelaTeste')

//criar a autenticação com o banco, depois sincronizar as tabelas
sequelize.authenticate()
.then(() => {
    sequelize.sync({alter: true}).then(() => {
        console.log('Tabelas criadas com sucesso')
    })
})
.catch(err => {
    console.log('Erro ao conectar ao banco de dados: ' + err)
})