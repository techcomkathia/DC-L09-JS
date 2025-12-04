//importar o controlador
const loginController = require('../controladores/loginController')

//importar o express e criar uma instância do router
const express = require('express') 
const rotasLogin = express.Router()


//rotas para login
//rotas sem middleware
//(rota, controlador)
rotasLogin.post('/', loginController)


//exportar as rotas de login
module.exports = rotasLogin