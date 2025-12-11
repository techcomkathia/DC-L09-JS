// importar o sequelize com as configurações do banco
const sequelize = require('./modelo/ConfigBanco')
require('dotenv').config({ path: "/.env" });

//importar as rotas de produtos e usuarios
const rotasProdutos = require('./rotas/produtosRotas')
const rotasUsuarios = require('./rotas/usuariosRotas')
const rotasLogin = require('./rotas/loginRota')

//importar o servidor
const iniciarServidor = require('./servidor')

//importar o middleware de autenticação
const autenticacaoMiddleware = require('./middlewares/autenticacao')

//-------------------------------------------------------------------

//importar o express e criar uma instância
const express = require('express')
const cors = require('cors')
const app = express()

//Permite que o Express leia JSON no corpo das requisições
app.use(express.json())//middleware de body parser ( converte o corpo da requisição para json)
//aplicar o middleware de cors
app.use(cors())


app.get('/', (req, res) => {
    res.json({
        api: 'API do Magazine Cleitinho v1.0.0',
        autor: 'Káthia Rocha',
        versao: '1.0.0'
    })
})

app.get('/teste-rota-protegida', autenticacaoMiddleware,  (req, res) => {
    res.json({
       status:200,
       mensagem:'Teste realizado com sucesso em uma rota protegida'
    })
})

//dar acesso as rotas de produtos
app.use('/produtos', rotasProdutos)
//dar acesso as rotas de usuarios
app.use('/usuarios', rotasUsuarios)
//dar acesso as rotas de login
app.use('/login', rotasLogin)



//iniciar o servidor
iniciarServidor(app)




