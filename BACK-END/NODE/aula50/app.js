// importar o sequelize com as configurações do banco
const sequelize = require('./modelo/ConfigBanco')

//importar todos os modelos que serão sincronizados
const UsuariosModel = require('./modelo/UsuariosModel')
const ProdutosModel = require('./modelo/ProdutosModel')

//importar os controladores
const ProdutosController = require('./controladores/ProdutosController')
const UsuariosController = require('./controladores/UsuariosController')
const loginController = require('./controladores/loginController')

//importação do middle de validação
const validacaoProdutoMiddleware = require('./middlewares/validacaoProdutoMiddleware')
const validacaoUsuarioMiddleware = require('./middlewares/validacaoUsuarioMiddleware')
//importar o express e criar uma instância
const express = require('express')
const app = express()

//Permite que o Express leia JSON no corpo das requisições
app.use(express.json())//middleware de body parser ( converte o corpo da requisição para json)

//ATIVIDADE 04 (CRIAR AS ROTAS)

app.get('/', (req, res) => {
    res.json({
        api: 'API do Magazine Cleitinho v1.0.0',
        autor: 'Káthia Rocha',
        versao: '1.0.0'
    })
})

//rotas para produtos (todos os produtos e um produto especifico)
//rotas sem middleware
//(rota, controlador)
app.get('/produtos', ProdutosController.getProdutos)
app.get('/produtos/:id', ProdutosController.getProduto)

//uma rota com middleware
//(rota, middleware, controlador)
//rota para criar um produto
app.post('/produtos',validacaoProdutoMiddleware, ProdutosController.postProduto)



//rotas para usuarios (todos os usuarios e um usuario especifico)
//rotas sem middleware
//(rota, controlador)
app.get('/usuarios', UsuariosController.getUsuarios)
app.get('/usuarios/:id', UsuariosController.getUsuario)


//uma rota com middleware
//(rota, middleware, controlador)
//rota para criar um usuario
app.post('/usuarios',validacaoUsuarioMiddleware, UsuariosController.postUsuario)


app.post('/login', loginController)

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


