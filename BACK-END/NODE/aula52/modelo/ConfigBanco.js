const Sequelize = require('sequelize')
require('dotenv').config();
console.log(process.env.BANCO)
const sequelize = new Sequelize(process.env.BANCO, process.env.USUARIO, process.env.SENHA,{
    host: process.env.HOST, // o local onde o banco de dados se encontra
    dialect: process.env.DIALETO, // o sgb do banco de dados
    port: process.env.PORTA // a porta do banco de dados ( padrão do mysql )
})


// const sequelize = new Sequelize('LOJA_API', 'root', 'km2015', {
//     host: 'localhost', // o local onde o banco de dados se encontra
//     dialect: 'mysql', // o sgb do banco de dados
//     port: 3306 // a porta do banco de dados ( padrão do mysql )
// })





// exportar o sequelize
module.exports = sequelize