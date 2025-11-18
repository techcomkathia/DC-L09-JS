//3º passo: criar o modelo de tabela de ligação entre as tabelas usuarios e projetos
// contará com 2 chaves estrangeiras que serão as chaves primárias das tabelas usuarios e projetos
//a chave primária da tabela usuarios_projetos será a composta de ambas as chaves primarias das tabelas usuarios e projetos

const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

//importação dos modelos 
const UsuariosModel = require('./usuariosModel')
const ProjetosModel = require('./projetosModel')

const UsuariosProjetosModel = sequelize.define('usuarios_projetos', {
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: UsuariosModel,
            key: 'id'
        },
        primaryKey: true
        
    },
    projeto_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ProjetosModel,
            key: 'id'
        },
        primaryKey: true
    }
})

module.exports = UsuariosProjetosModel