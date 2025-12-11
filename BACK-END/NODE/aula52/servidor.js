//encapsula a lógica do servidor e a sincronização com o banco de dados
//importar o sequelize
const sequelize = require('./modelo/ConfigBanco')


//importar todos os modelos que serão sincronizados
const UsuariosModel = require('./modelo/UsuariosModel')
const ProdutosModel = require('./modelo/ProdutosModel')

function iniciarServidor( aplicacao){
    aplicacao.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000. Acesse http://localhost:3000')
    //todas as vezes que o servidor for iniciado, ele vai sincronizar as tabelas e fazer a autenticação com o banco de dados
    //sincronizar as tabelas e fazer a autenticação com o banco
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

})
}

module.exports = iniciarServidor



