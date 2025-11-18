//2º passo : definição dos modelos

const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

const ProjetosModel = sequelize.define('projetos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

module.exports = ProjetosModel