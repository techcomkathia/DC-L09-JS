const Sequelize = require('sequelize')

//as configurações do banco de dados serão solidadas pelas variáveis de ambiente do arquivo .env



const sequelize = new Sequelize('LOJA_API', 'root', 'km2015', {
    host: 'localhost', // o local onde o banco de dados se encontra
    dialect: 'mysql', // o sgb do banco de dados
    port: 3306 // a porta do banco de dados ( padrão do mysql )
})


// exportar o sequelize
module.exports = sequelize