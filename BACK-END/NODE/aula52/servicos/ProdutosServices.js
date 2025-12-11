const ProdutosModel = require('../modelo/ProdutosModel')

function buscarTodosProdutos() {
    return ProdutosModel.findAll()
}

function buscarUmProduto(id) {
    return ProdutosModel.findByPk(id)
}

function buscarProdutoPorNome(nome) {
    return ProdutosModel.findOne({
        where: {
            nome: nome
        }
    })
    //retornar um objeto ou retornar undefined
}

//faz a criação de um produto na tabela de produtos
// com nome, preco, quantidade 
function criarProduto(produto) {
    return ProdutosModel.create(produto)
}



module.exports = {
    buscarTodosProdutos,
    buscarUmProduto,
    buscarProdutoPorNome,
    criarProduto
}