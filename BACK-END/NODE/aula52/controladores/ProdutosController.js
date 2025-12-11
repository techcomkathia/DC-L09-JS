//importar o serviço
const ProdutosServices = require('../servicos/ProdutosServices')

/*Crie os controladores para Produtos:
- getProdutos -> retorna uma resposta com status:200 e o objeto no seguinte formato:
{
  statusCode:200,
  dados:{
    //array de objetos retornados pelo serviço
  }
}
em caso de erro (quando o array de objetos estiver vazio) retorne a resposta com o status:400 o seguinte formato
{
  statusCode:400,
  erro: nenhuma informação disponível na tabela
}*/

async function getProdutos(req, res){
// poderá usar uma async function ou os métodos then e catch. Usando a async function poderá ser utilizado o await, para atribuir o retorno do serviço a uma variável
    const produtos = await ProdutosServices.buscarTodosProdutos() // todos os produtos

    let arrayProdutos =  await produtos.map(produto => {
        return produto.dataValues
    }) //produz um array com base em todos os produtos, apenas com o atributo dataValues

    if(arrayProdutos.length > 0){
        res.status(200).json({
            statusCode:200,
            dados: arrayProdutos
        })
    }else{
        res.status(400).json({
            statusCode:400,
            erro: "Nenhuma informação disponível na tabela"
        })
    }
}


async function getProduto(req, res){
    const id = req.params.id
    //usar o parametro de rota para captar o id
    const produto = await ProdutosServices.buscarUmProduto(id)
    if(produto){
        //retorno caso sucesso
        res.status(200).json({
            statusCode:200,
            produto: produto
        })
    }else{
        //retorno caso erro
        res.status(400).json({
            statusCode:400,
            erro: "Nenhuma informação disponível na tabela"
        })
    }
}

async function postProduto(req, res){
  //verificar se existe um produto com o mesmo nome
  const nomeProduto = req.body.nome 
  const produtoEncontrado = await ProdutosServices.buscarProdutoPorNome(nomeProduto)
  if(produtoEncontrado){
    res.status(400).json({
      statusCode: 400,
      erro: 'Produto com o mesmo nome ja cadastrado'
    })
    return
  }

  /*validação dos campos necessários -> será desacoplada e será criado um middleware de validação
  //nome, preco, quantidade
  if(!req.body.nome || !req.body.preco || !req.body.quantidade){
    res.status(400).json({
      statusCode: 400,
      erro: 'Nome, preço e quantidade obrigatórios'
    })
    return
  }*/
  
   //executar o serviço de criar um produto
  const produto = await ProdutosServices.criarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    quantidade: req.body.quantidade
  })
  res.status(201).json({
    statusCode: 201,
    produto: produto
  })
}


module.exports = {
    getProdutos,
    getProduto,
    postProduto
}