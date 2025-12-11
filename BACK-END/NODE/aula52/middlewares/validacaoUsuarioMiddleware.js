function validacaoUsuarioMidleware(req, res, next) {
    //verifica se os campos obrigatórios foram informados
    if(!req.body.email || !req.body.senha || !req.body.confirmacaoSenha || !req.body.nome){ 
       
        res.status(400).json({
            statusCode: 400,
            erro: 'Email, a senha, confirmação de senha e nome são obrigatórios'
        })
        return
    }
    //verifica se a senha e a confirmação de senha são iguais
    if(req.body.senha !== req.body.confirmacaoSenha) {
        res.status(400).json({
            statusCode: 400,
            erro: 'A senha e a confirmação de senha devem ser iguais'
        })
        return
    }

    //caso todas as validações sejam ok, passe para a próxima função

    next()
}

module.exports = validacaoUsuarioMidleware