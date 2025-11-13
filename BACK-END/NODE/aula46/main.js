const sequelize = require('./model/sequelize')

//conectar ao banco de dados
sequelize.authenticate() //metodo assíncrono que se conecta ao banco de dados na tabela passada na configuração
.then(() => {
    console.log('Conectado ao banco de dados com sucesso!')
})
.catch(err => {
    console.log('Erro ao conectar ao banco de dados: ' + err)
})