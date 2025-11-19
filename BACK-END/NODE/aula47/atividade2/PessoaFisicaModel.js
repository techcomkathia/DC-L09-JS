const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const ClienteModel = require('./clienteModel')

const PessoaFisicaModel = sequelize.define('pessoaFisica', {
    pfid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    sobreNome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    cpf:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rg:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
    },
    cliente_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        reference:{
            model: ClienteModel,
            key: 'id'
        }
    }
})

module.exports = PessoaFisicaModel