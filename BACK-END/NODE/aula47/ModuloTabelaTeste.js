// essa tabela não existe originalmente no banco de dados, será criada pelo sequelize durante o processo de sincronização

const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize') //definir os tipos de dados das tabelas

const tabelaTeste = sequelize.define('tabelaTeste', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    corFavorita: {
        type: DataTypes.STRING,
    }
})

module.exports = tabelaTeste