const bcrypt = require('bcrypt')
const UsuariosServices = require('../servicos/UsuariosServices')

const JWT = require('jsonwebtoken')

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

        //gerar um token com o método sign
        // recebe como parâmetro o objeto com os dados que serão usados no payload ,a palavra secreta e a quantidade de tempo de expiração do token
        const token = JWT.sign(
            //objeto que irá ser usado no payload
            {
                id: usuarioEncontrado.id,
                email: usuarioEncontrado.email,
                nome: usuarioEncontrado.nome,
            }
            //palavra secreta para gerar o token e decodificar na validação
            ,
            'minha-chave-secreta',
            //prazo de validade do token
            {expiresIn: '1h'}//esse prazo pode ser expresso em dias, horas, minutos ou segundos (1d, 1h, 1m, 1s)
        ) 


        res.status(200).json({
            statusCode: 200,
            dados: 'sucesso na autenticação',
            token: token
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