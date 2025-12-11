/*  2) caso não tenha o controlador de login: para compreender a aplicação do JWT faça uma função simples que receba um objeto como parâmetro e compare com o objeto {nome: exemplo, senha: 123}. Caso o nome e a senha sejam iguais ao fornecido para a função, gere um token e monstre no console, no seguinte formato: {
    status:200, token: o token jwt, prazo: 1h}
  caso contrário mostre a palavra erro*/

const jwt = require('jsonwebtoken')

function gerarToken(objeto){

    const {nome, senha} = objeto
    const nomeCerto = 'Exemplo'
    const senhaCerta = '123'

    //verificar se as credenciais estão corretas
    if(nome != nomeCerto || senha != senhaCerta) {
        //caso seja diferente, retornar erro
        return {
            status: 400,
            erro: 'erro'
        }
    }

    //a validação das credenciais passou, agora iremos gerar o token
    //método sign(objeto, palavraSecreta, prazo)
    const token = jwt.sign(
        //informação que irá ser usada no payload
        {
            nome: nome,
            sucesso: 'sucesso',
            data: new Date()
        },
        //palavra secreta
        'minha-chave-secreta',
        //tempo de expiração do token
        {expiresIn: '1h'}
    )

    //retorno da função
    return {
        status: 200,
        token: token,
        prazo: '1h'
    }


}


console.log(gerarToken({nome: 'Exemplo', senha: '123'}))