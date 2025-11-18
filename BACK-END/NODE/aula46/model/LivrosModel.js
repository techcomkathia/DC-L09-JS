const sequelize = require('../model/sequelize')
const { DataTypes } = require('sequelize')

//modelos que serão chaves estrangeiras
const CategoriaModel = require('./categoriasModel')
const AutorModel = require('./autoresModel')

//id 
// titulo
// ano_publicacao
// preco 
// autor_id
// categoria_id

const LivroModel = sequelize.define(
    'livros',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      } ,
      titulo:{
        type: DataTypes.STRING(150),
        allowNull: false
      },
      ano_publicacao: {
        type: DataTypes.INTEGER,
      },
      preco: {
        type: DataTypes.DECIMAL(6,2),
      },
      //chaves estrangeiras
      autor_id: {
        type: DataTypes.INTEGER, //definição do tipo
        allowNull: false, //não pode ser nulo
        references: {
          model: AutorModel,
          key: 'idAutor'
        }
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: CategoriaModel,
          key: 'idCategoria'
        }
      }
    },
    {
      tableName: 'livros',
      timestamps: false
    }
)


//estabelecer a cardinalidade dos relacionamentos
LivroModel.belongsTo(AutorModel) // livro pertence a um autor
LivroModel.belongsTo(CategoriaModel) // livro pertence a uma categoria
AutorModel.hasMany(LivroModel) // autor tem muitos livros
CategoriaModel.hasMany(LivroModel) // categoria tem muitos livros

module.exports = LivroModel
