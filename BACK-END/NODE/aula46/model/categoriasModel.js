const sequelize = require('../model/sequelize')
const { DataTypes } = require('sequelize')

// idCategoria
// nome 

const CategoriaModel = sequelize.define(
    'categorias',
    {
      idCategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      } ,
      nome:{
        type: DataTypes.STRING(50),
        allowNull: false
      }
    },
    {
        tableName: 'categorias',
        timestamps: false
    }
)

module.exports = CategoriaModel