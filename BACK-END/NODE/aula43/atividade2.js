const fs = require('fs')

const arquivo = './1.txt'
const codificacao = 'utf8'
fs.readFile(arquivo, codificacao, (erro, conteudo) => {
    if(erro){
        console.log('Não foi possível ler o arquivo')
    }

    else if(conteudo.length = 0){
        console.log(`Sem conteúdo, o arquivo possui ${conteudo.length} caractéres`)
    }
        
    else if(conteudo.length > 0){
        console.log(`Esse arquivo possui ${conteudo.length} caractéres`)
    }
})