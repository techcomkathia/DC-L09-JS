const atividade1 = require('./atividade1')
const http = require('http')
const atividade2 = require('./atividade2')
//atividade1.concatenarArquivos()
//criar um servidor que retorna um texto no navegador

let listaCoisas = [
    {id: 1, nome: 'coisa1'},
    {id: 2, nome: 'coisa2'},
    {id: 3, nome: 'coisa3'}
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json, charset=utf-8')
    //para criar rotas podemos usar o parametro req com o atributo url para verificar qual rota foi acessada
    if(req.url === '/' && req.method === 'GET'){
        res.write(
            JSON.stringify({
            api: 'Aula 2 de Node.js com a apresentação do módulo fs e módulo http',
            nome: 'Káthia Rocha'
            })
        )
        res.end()
        return
    }
    else if(req.url === '/sobre' && req.method === 'GET'){
        res.write(
            JSON.stringify(listaCoisas) )
        res.end()
        return
    }
    else if(req.url === '/sobre' && req.method === 'POST'){ // adicionar a informação do corpo da requisição a lista de coisas
        let body = ''
        //pegar os dados enviados no corpo da requisição
        req.on('data', (dados)=>{
            body += dados
        })
        //quando o corpo da requisição acabar de ser lido executar essa funcao
        //finalizar a requisição e adicionar a informação ao array
        req.on('end', ()=>{
            let coisa = JSON.parse(body) //transformar o corpo da requisição em um objeto
            console.log(coisa) //imprimir o objeto
            listaCoisas.push(coisa) //adicionar o objeto ao array
            console.log('listaCoisas', listaCoisas) //imprimir o array
            res.end() //finalizar a requisição
        })
        return
    }
    res.end()
})
//metodo listen serve para escutar a porta e pode receber um funcao de callback para ser executada quando o servidor for iniciado
server.listen(5501, ()=>{
    console.log('Servidor iniciado na porta 3000. Acesse http://localhost:5501')
})

//executar o servidor da atividade 2
//atividade2.iniciarServidorProdutos()

