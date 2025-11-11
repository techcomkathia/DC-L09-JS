const express = require('express')

//criar uma instancia do express
const app = express()

//configurar a rota principal
app.get('/', (req, res)=>{
    res.send('API DA BIBLIOTECA DO CLEITINHO V.1.0.0')
    res.end()
})

//configurar e iniciar o servidor
app.listen(5000, ()=>{
    console.log('servidor rodando na porta 3000. Acesse http://localhost:5000')
})