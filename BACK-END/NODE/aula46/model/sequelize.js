//importação do sequelize
const Sequelize = require('sequelize')

// instancia do sequelize
const sequelize = new Sequelize('livraria', 'root', 'km2015', {
    host: 'localhost', // o local onde o banco de dados se encontra
    dialect: 'mysql', // o sgb do banco de dados
    port: 3306 // a porta do banco de dados ( padrão do mysql )
}) 
// o método construtor recebe 4 parâmetros: 
// o nome do banco de dados,
// o nome do usuário e a senha do banco de dados
// a configuração de conexão com o banco de dados

module.exports = sequelize

// a variável sequelize será utilizada em outros arquivos por exemplo:
// definição dos modelos ( arquivos que representam as tabelas do banco de dados )
// conexão com o banco de dados no arquivo main.js ( com o método sequelize.sync() e o sequelize.authenticate() )