const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')

const ProdutosModel = sequelize.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    preco: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = ProdutosModel