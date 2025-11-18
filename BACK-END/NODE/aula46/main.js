const sequelize = require('./model/sequelize')
const CategoriaModel = require('./model/categoriasModel')
const AutorModel = require('./model/autoresModel')
const LivroModel = require('./model/LivrosModel')

//conectar ao banco de dados
sequelize.authenticate()
 //metodo assíncrono que se conecta ao banco de dados na tabela passada na configuração
.then(() => {
    //sequelize.sync({force: true})
    sequelize.sync().then(() => {
        console.log('Tabelas criadas com sucesso')
    })
})
.then(() => {
    //criar um registro na tabela
    CategoriaModel.create({nome: 'TESTE'})
    AutorModel.create({nome: 'TESTE', nacionalidade: 'TESTE', data_nascimento: '2000-01-01'})
    LivroModel.create({titulo: 'TESTE', ano_publicacao: 2000, preco: 20.00, autor_id: 1, categoria_id: 1})
})
.catch(err => {
    console.log('Erro ao conectar ao banco de dados: ' + err)
})

