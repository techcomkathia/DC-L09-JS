const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')


const ClienteModel = sequelize.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contrato:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    dataContrato: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

module.exports = ClienteModel