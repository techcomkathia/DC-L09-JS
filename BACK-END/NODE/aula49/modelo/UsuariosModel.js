const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')

const UsuariosModel = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(50),
    }
})

module.exports = UsuariosModel