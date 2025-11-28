const ProdutosModel = require('../modelo/ProdutosModel')

function buscarTodosProdutos() {
    return ProdutosModel.findAll()
}

function buscarUmProduto(id) {
    return ProdutosModel.findByPk(id)
}

//testando o retorno dos serviços para produtos
//toda operação executada diretamente no model retorna uma promise pois é assíncrona

/*buscarTodosProdutos()
.then(produtos => {
    //console.log(produtos) exibe todo o retorno do banco
    //percorrer o array captando os objetos e selecionando a propriedade de interesse
    produtos.forEach(item => {
        console.log(item.dataValues)// o objeto com as informações do produto
    });
})
.catch(err => {
    console.log(err)
})

module.exports = {
    buscarTodosProdutos,
    buscarUmProduto
}*/

//buscar um produto
/*buscarUmProduto(1)
.then(produto => {
    console.log(produto.dataValues)
})
.catch(err => {
    console.log(err)
})*/