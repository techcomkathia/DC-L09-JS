//importar o modelo usuário
const UsuariosModel = require('../modelo/UsuariosModel')


//criar um serviço para buscar todos os usuários
const buscarTodos = () => {
    return UsuariosModel.findAll()
    // Todos os retornos serão objetos em um array. Serão utilizados pelo controller
}

//criar um serviço para buscar um usuário por id
const buscarPorId = (id) => {
    return UsuariosModel.findByPk(id)
}

module.exports = {
    buscarTodos,
    buscarPorId
}