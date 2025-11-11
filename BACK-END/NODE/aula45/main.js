//importação
const express = require('express')

const app = express()


//configuração de resposta para o método get na raiz
app.get('/', (req, res)=>{
    res.send('olá mundo! Nova atualização')
    res.end()
})

app.listen(3000, ()=>{
    console.log('servidor rodando na porta 3000. Acesse http://localhost:3000')
})