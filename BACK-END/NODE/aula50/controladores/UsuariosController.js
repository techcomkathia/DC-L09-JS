//importar o serviço
const UsuariosServices = require('../servicos/UsuariosServices')


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


module.exports = {getUsuarios, getUsuario}
