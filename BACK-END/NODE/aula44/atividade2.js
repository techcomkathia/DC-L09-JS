// crie um servidor que tenha 2 rotas
const http = require('http')
//primeira rota deve apresentar a api (/)
//segunda rota deve apresentar o array de produtos (/produtos)
//as respostas devem ser no formato json com charset=utf-8
let produtos = [
    {id: 1, nome: 'teclado', preco: 100},
    {id: 2, nome: 'mouse', preco: 50},
    {id: 3, nome: 'monitor', preco: 500},
    {id: 4, nome: 'cadeira', preco: 300},
    {id: 5, nome: 'fone de ouvido', preco: 150}
]

 const servidorProutos = http.createServer((requisicao, resposta)=>{
        //configuração do tipo informações da resposta 
        resposta.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})

        //configuração para as respostas das rotas pedidas
        if(requisicao.url === '/'){
            resposta.write(
                JSON.stringify(
                    {
                        api: 'Atividade 2',
                        questao:'Crie um servidor que tenha 2 rotas. Primeira rota deve apresentar a api (/). Segunda rota deve apresentar o array de produtos (/produtos). As respostas devem ser no formato json com charset=utf-8'
                    }
                )
            )
            resposta.end() //finaliza a resposta
        }
        else if( requisicao.url === '/produtos'){
            resposta.write(
                JSON.stringify([
                    {id: 1, nome: 'teclado', preco: 100},
                    {id: 2, nome: 'mouse', preco: 50},
                    {id: 3, nome: 'monitor', preco: 500},
                    {id: 4, nome: 'cadeira', preco: 300},
                    {id: 5, nome: 'fone de ouvido', preco: 150}
                ]) //conversão para json do array de produtos
            )
            resposta.end()
        }
        else if (requisicao.url!=='/' && requisicao.url!=='/produtos'){
                resposta.write(
                JSON.stringify(
                    {
                        erro: 'Rota nao encontrada'
                    }
                )
            )
        }
        resposta.end()
    })

function iniciarServidorProdutos(){
   
servidorProutos.listen(5501, ()=>{
    console.log('Servidor rodando na porta 5501')
})

}


module.exports = {iniciarServidorProdutos}