// importar o sequelize com as configurações do banco
const sequelize = require('./modelo/ConfigBanco')

//importar as rotas de produtos e usuarios
const rotasProdutos = require('./rotas/produtosRotas')
const rotasUsuarios = require('./rotas/usuariosRotas')
const rotasLogin = require('./rotas/loginRota')


//importar todos os modelos que serão sincronizados
const UsuariosModel = require('./modelo/UsuariosModel')
const ProdutosModel = require('./modelo/ProdutosModel')

//importar o express e criar uma instância
const express = require('express')
const cors = require('cors')
const app = express()

//Permite que o Express leia JSON no corpo das requisições
app.use(express.json())//middleware de body parser ( converte o corpo da requisição para json)
//aplicar o middleware de cors
app.use(cors())



//ATIVIDADE 04 (CRIAR AS ROTAS)

app.get('/', (req, res) => {
    res.json({
        api: 'API do Magazine Cleitinho v1.0.0',
        autor: 'Káthia Rocha',
        versao: '1.0.0'
    })
})

//dar acesso as rotas de produtos
app.use('/produtos', rotasProdutos)
//dar acesso as rotas de usuarios
app.use('/usuarios', rotasUsuarios)
//dar acesso as rotas de login
app.use('/login', rotasLogin)



// Criação do servidor
app.listen(3000, () => {
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


