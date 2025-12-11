//será utilizado nas rotas privadas para verificar se o usuário está autenticado com um token válido

//importando o modulo jsonwebtoken
const JWT = require('jsonwebtoken')

function autenticacao(req, res, next) {

    //receber a informação do token que é informado no campo autorization da requisição
    const token = req.headers.authorization.split(' ')[1] //'baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjbGVpdGluaG8uZ2F0b0BlbWFpbC5jb20iLCJub21lIjoiY2xlaXRpbmhvIiwiaWF0IjoxNzY0ODkxNTIxLCJleHAiOjE3NjQ4OTUxMjF9.1jcRZd4g0F_Uoi5Taf7m-rybW98ikedVv0OIvurdbKA'

    //a partir do texto do token, vamos fazer a decoficação do token com a palavra secreta
    const tokenDecodificado = JWT.verify(token, 'minha-chave-secreta') //retorna true ou false
    //ou com o método decode que recebe o token e a palavra secreta e decodifica o token para um objeto, com o seu payload
    const conteudoToken = JWT.decode(token, 'minha-chave-secreta')

   try{
     if(tokenDecodificado) { //caso o token seja valido
        //adiciona 2 propriedades ao objeto da requisição
        req.token = tokenDecodificado
        req.conteudoToken = conteudoToken
        console.log(conteudoToken)
        console.log('deu certo')
        next()
    } else {
        res.status(401).json({erro: 'Token inválido'})}
   }
   catch(e){
       res.status(401).json({erro: 'acesso negado. Verifique o token'})
   }

}

module.exports = autenticacao