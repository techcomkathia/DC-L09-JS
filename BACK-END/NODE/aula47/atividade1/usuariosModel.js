//2º passo: criar o modelo
const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')


const UsuariosModel = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
})

module.exports = UsuariosModel