const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

//importação dos modelos 
const ClienteModel = require('./clienteModel')

const PessoaJuridicaModel = sequelize.define('pessoaJuridica', {
    pjid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cnpj: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    razaoSocial: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    nomeFantasia: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    //chave estrangeira 
    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ClienteModel,
            key: 'id'
        }
    }
    
})

module.exports = PessoaJuridicaModel