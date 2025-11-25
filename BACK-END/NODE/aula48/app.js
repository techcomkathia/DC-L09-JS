// arquivo app será responsável por definir as rotas e inicializar o servidor
const express = require('express')
const coisasController = require('./controladores/coisasController')
//criar uma instância do express
const app = express()
app.use(express.json()) //middleware de body parser que permite converter o corpo da requisição para json

//rota raiz
// rota que executa um controlador (controller)
app.get('/', coisasController.exibirInfoPrincipal)

app.get('/coisas', coisasController.exibirTodasCoisas)

//iniciar o servidor
app.listen(3000, ()=>{
    console.log('Servidor iniciado na porta 3000. Acesse http://localhost:3000')
})

