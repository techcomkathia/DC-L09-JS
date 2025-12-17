const banco = require('./bancoDados.js')

function login(email, senha) {
    //fazer a busca do objeto no banco com o email informado
    const usuario = banco.find(user => user.email === email)
    if(!usuario) {
        return {
            statusCode: 400,
            erro: 'email ou senha incorretos'
        }
    }

    if(usuario.senha !== senha) {
        return {
            statusCode: 400,
            erro: 'email ou senha incorretos'
        }
    }

    //caso de sucesso
    return {
        statusCode: 200,
        token: 'tokendeexemplo',
        prazo: 1
    }
}

module.exports = login