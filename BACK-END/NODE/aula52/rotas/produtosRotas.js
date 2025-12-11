//importar o controlador
const ProdutosController = require('../controladores/ProdutosController')
//importar o middle de validação
const validacaoProdutoMiddleware = require('../middlewares/validacaoProdutoMiddleware')

//importar o express e criar uma instância do router
const express = require('express') 
const rotasProdutos = express.Router()


//rotas para produtos (todos os produtos e um produto especifico)
//rotas sem middleware
//(rota, controlador)
rotasProdutos.get('/', ProdutosController.getProdutos)
rotasProdutos.get('/:id', ProdutosController.getProduto)

//uma rota com middleware
//(rota, middleware, controlador)
//rota para criar um produto
rotasProdutos.post('/',validacaoProdutoMiddleware, ProdutosController.postProduto)


//exportar as rotas
module.exports = rotasProdutos

