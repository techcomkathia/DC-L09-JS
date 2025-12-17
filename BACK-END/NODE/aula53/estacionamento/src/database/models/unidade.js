const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Unidade = sequelize.define('Unidade', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horario_abertura: {
        type: DataTypes.TIME,
        allowNull: false
    },
    horario_fechamento: {
        type: DataTypes.TIME,
        allowNull: false
    },
    valor_hora: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    valor_diaria: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
}, {
    tableName: 'unidades'
});

module.exports = Unidade;
