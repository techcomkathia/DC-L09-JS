//importar o serviço
const UsuariosServices = require('../servicos/UsuariosServices')

//importar o bcrypt
const bcrypt = require('bcrypt')


//getUsuarios
async function getUsuarios(req, res) {
    //tratamento dos dados
    const dadosUsuarios = await UsuariosServices.buscarTodosUsuarios()
    const usuarios = dadosUsuarios.map(dados => dados.dataValues)
    res.json({
        statusCode: 200,
        dados: usuarios
    })
}

//getUsuario(id)
async function getUsuario(req, res) {

    const id = req.params.id
    const dadosUsuario = await UsuariosServices.buscarUmUsuario(id)
    res.json({
        statusCode: 200,
        dados: dadosUsuario
    })
    
}

//postUsuario(objetoUsuario)
//para criar um usuário deverá ser executada a validação antes (middleware para verificar se os campos obrigatórios foram informados)
//no controlador irá ser executado o serviço para verificar se o email ja existe no banco de dados ( caso exista, retornar um erro)
// caso contrário, irá ser executado o serviço para criar o usuário

async function postUsuario( req, res){
    //verificar se o email já foi cadastrado
    const objetoUsuario = req.body
    //buscar por email
    const usuarioEncontrado = await UsuariosServices.buscarPorEmail(objetoUsuario.email)

    //se exitir um retorno do método, significa que o email ja foi cadastrado
    if(usuarioEncontrado) {
        res.status(400).json({
            statusCode: 400,
            erro: 'Email ja cadastrado'
        })
        return
    }

    // criar o hash de senha 
    const salt = bcrypt.genSaltSync(12) //quantidade de saltos
    const senhaCriptografada = await bcrypt.hash(objetoUsuario.senha, salt)

    //caso contrário será criado o usuario
    const usuarioCriado = await UsuariosServices.criarUsuario({
        email: objetoUsuario.email,
        senha: senhaCriptografada,
        nome: objetoUsuario.nome
    })
    res.status(201).json({
        statusCode: 201,
        dados: usuarioCriado
    })

}


module.exports = {getUsuarios, getUsuario, postUsuario}
