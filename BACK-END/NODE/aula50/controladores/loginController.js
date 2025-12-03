const bcrypt = require('bcrypt')
const UsuariosServices = require('../servicos/UsuariosServices')

async function login(req, res) {
    const objetoUsuario = req.body
    
    const usuarioEncontrado = await UsuariosServices.buscarPorEmail(objetoUsuario.email)
    
    //caso o usuário não seja encontrado, retorna 400 e uma mensagem de erro
    if(!usuarioEncontrado) {
        res.status(400).json({
            statusCode: 400,
            erro: 'Email nao cadastrado'
        })
        return
    }
    //compare(textoUsuario, valorArmazenadoBanco com hash)
    const senhaCorreta = await bcrypt.compare(objetoUsuario.senha, usuarioEncontrado.senha)

    if(senhaCorreta) {
        res.status(200).json({
            statusCode: 200,
            dados: 'sucesso na autenticação'
        })
    } else {
        res.status(400).json({
            statusCode: 400,
            erro: 'Email ou senha incorretos'
        })
    }

}

module.exports = login

// recebe o objeto da requisição com o seguinte formato :
/* 
{
    email: 'email',
    senha: 'senha'
}*/

//executa o serviço de buscarUsuarioPorEmail e com o bcrypt compare faz a comparação da senha armazenada no banco com a senha informada pelo usuário na requisição

//caso sejam iguais retorna 200 e uma mensagem de sucesso
//caso contrario retorna 400 e uma mensagem de erro

//DICAS: importante instalar a dependência (npm install bcrypt)
// modificar o modelo para que o campo de senha tenha até 200 caracteres
//poderá ser definido um valor padrão para o campo de senha
//importar os serviços de usuários e o bcrypt