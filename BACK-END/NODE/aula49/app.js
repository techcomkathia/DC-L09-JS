// importar o sequelize com as configurações do banco
const sequelize = require('./modelo/ConfigBanco')

//importar todos os modelos que serão sincronizados
const UsuariosModel = require('./modelo/UsuariosModel')
const ProdutosModel = require('./modelo/ProdutosModel')


//fazer a autenticação do banco e a sincronização das tabelas
sequelize.authenticate()
.then(() => {
    console.log('Conexão estabelecida com sucesso')
    //sincronizar as tabelas
    sequelize.sync({alter: true}).then(() => {
        console.log('Tabelas criadas/alteradas com sucesso')
        //{alter: true} -> alterar as tabelas se necessário modificando as colunas, mas não exclui a estrutura da tabela ( conservando os dados existentes )
    })
})
.catch(err => {
    console.log('Erro ao conectar ao banco de dados: ' + err)
})