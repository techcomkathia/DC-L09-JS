const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Movimentacao = sequelize.define('Movimentacao', {
    placa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entrada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    saida: {
        type: DataTypes.DATE,
        allowNull: true
    },
    total_horas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    valor_total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    }
}, {
    tableName: 'movimentacoes'
});

module.exports = Movimentacao;
