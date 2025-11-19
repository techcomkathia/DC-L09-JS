const Sequelize = require('sequelize')

const sequelize = new Sequelize('atividade02', 'root', 'km2015', {
    host: 'localhost', // o local onde o banco de dados se encontra
    dialect: 'mysql', // o sgb do banco de dados
    port: 3306 // a porta do banco de dados ( padrão do mysql )
})

module.exports = sequelize