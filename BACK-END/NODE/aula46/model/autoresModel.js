const sequelize = require('../model/sequelize')
const { DataTypes } = require('sequelize')

// idAutor
// nome
//nacionalidade
//data_nascimento

const AutorModel = sequelize.define(
    'autores',
    {
      idAutor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      } ,
      nome:{
        type: DataTypes.STRING(100),
        allowNull: false
      },
      nacionalidade: {
        type: DataTypes.STRING(50),
      },
      data_nascimento: {
        type: DataTypes.DATE,
      }
      /*
      corFavorita: {
        type: DataTypes.STRING(50),
      }*/
    }, {
        tableName: 'autores',
        timestamps: false
    }
)

module.exports = AutorModel