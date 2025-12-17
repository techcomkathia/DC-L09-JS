const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'clientes'
});

module.exports = Cliente;
