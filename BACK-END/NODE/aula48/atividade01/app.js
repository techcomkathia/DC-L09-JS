const express = require('express')
const clientesController = require('./controladores/clientesControlador')


const app = express()
app.use(express.json())


//criação das rotas

app.get('/', (req, res)=>{
    res.send('API do Petshop do Cleitinho v1.0.0')
})

//rotas para clientes
app.get('/clientes', clientesController.exibirClientes)

app.post('/clientes', clientesController.cadastrarCliente)

//rotas para funcionários


app.listen(5000, ()=>{
    console.log('Servidor iniciado na porta 5000. Acesse http://localhost:5000')
})
