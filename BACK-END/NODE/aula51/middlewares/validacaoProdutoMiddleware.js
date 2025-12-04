function validacaoProdutoMiddleware(req, res, next) {
    console.log('Middleware de validação de produto executado')
    if(!req.body.nome || !req.body.preco || !req.body.quantidade) {
        //caso algum dos campos obrigatórios nao tenha sido informado será retornado um erro
        res.status(400).json({
            statusCode: 400,
            erro: 'Nome, preço e quantidade obrigatórios'
        })
        return
    }
    //caso contrário, o middleware passa para o próximo middleware ou para o controlador
    next()
}

module.exports = validacaoProdutoMiddleware