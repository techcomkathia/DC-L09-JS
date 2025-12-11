//importação do express
const express = require('express')

//importação do controlador
const UsuariosController = require('../controladores/UsuariosController')
//importar o middle de validação
const validacaoUsuarioMiddleware = require('../middlewares/validacaoUsuarioMiddleware')


//criar uma instância do express para rotas
const rotaUsuarios = express.Router()


//rotas para usuarios (todos os usuarios e um usuario especifico)
//rotas sem middleware
//(rota, controlador)

//http://localhost:3000/usuarios/
rotaUsuarios.get('/', UsuariosController.getUsuarios)

//http://localhost:3000/usuarios/1
rotaUsuarios.get('/:id', UsuariosController.getUsuario)


//uma rota com middleware
//(rota, middleware, controlador)
//rota para criar um usuario
rotaUsuarios.post('/',validacaoUsuarioMiddleware, UsuariosController.postUsuario)


//exportar as rotas
module.exports = rotaUsuarios