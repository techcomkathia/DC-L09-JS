//importação
const express = require('express')

const app = express()

//dar acesso ao app para que possa usar e enviar dados no formato json
app.use(express.json()) //middleware de body parser ( converte o corpo da requisição para json)

let soma = 0

//configuração de resposta para o método get na raiz
app.get('/', (req, res)=>{
    //res.send('olá mundo! Nova atualização')
    res.json({
        api: 'Aula 3 de Node.js com a apresentação do express com requisição json',
        nome: 'Káthia Rocha'
    })
    res.end()
})

//cria um endpoint para a rota /soma
app.get('/soma', 
    //controller 
    (req, res)=>{
    if(!soma){
        res.json({
            erro: 'Nenhuma soma realizada'
        })
        res.end()
        return
    }
    res.json({
        //serviço (acesso a camada de dados)
        totalSoma: soma
    })
    res.end() //finalizar a requisição
})

//cria uma rota que recebe um número via body para adicionar ao total
app.post('/soma', (req, res)=>{
    let somaAnterior = soma //antes de atualizar o valor, armazena o valor anterior
    let numero = req.body.numero //armazena o numero do body
    soma = somaAnterior + numero
    res.json({
        totalAtualSoma: soma,
        totalAnteriorSoma: somaAnterior,
        numeroEnviado: numero
    })
    console.log('O processo de soma foi executado')
    res.end()
})

app.listen(3000, ()=>{
    console.log('servidor  de exemplos da aula 3  está rodando na porta 3000. Acesse http://localhost:3000')
})