const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Pagamento = sequelize.define('Pagamento', {
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    metodo: {
        type: DataTypes.ENUM('dinheiro', 'pix', 'cartão'),
        allowNull: false
    },
    data_pagamento: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'pagamentos'
});

module.exports = Pagamento;
