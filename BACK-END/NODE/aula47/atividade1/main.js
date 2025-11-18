//5º passo : configuração do arquivo que fará a autenticação no banco e sincroniza as tabelas

const sequelize = require('./sequelize')

//importar todos os modelos a serem sincronizados
const UsuariosModel = require('./usuariosModel')
const ProjetosModel = require('./projetosModel')
const UsuariosProjetosModel = require('./usuarios_projetosModel')


sequelize.authenticate()//se conecta ao banco de dados
.then(() => {
    console.log('Conexão estabelecida com sucesso')
    //sincronizar as tabelas
    sequelize.sync({alter: true}).then(() => {
        console.log('Tabelas criadas com sucesso')
    })
})
.catch(err => {
    console.log('Erro ao conectar ao banco de dados: ' + err)
})