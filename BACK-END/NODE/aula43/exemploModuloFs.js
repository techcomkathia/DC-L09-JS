const fs = require('fs') // não é necessário instalar o pacote fs, ele vem junto com o node

//função de leitura dos dados de um arquivo de texto
/*fs.readFile(
caminho do arquivo,
encoding,
função de callback
)*/

const arquivo = './arquivoDeTexto.txt'
const codificacao = 'utf8'
fs.readFile(arquivo, codificacao, (erro, conteudo) => {
    if(erro){
        console.log('Deu ruim')
        return
    }

    console.log(`O conteúdo do arquivo lido é: ${conteudo.toUpperCase()}`)
})

//escrever em um arquivo que já existe
const caminhoArquivo = './texto.txt'
fs.writeFile(caminhoArquivo, 'outro texto', (erro) => {
    if(erro){
        console.log('Deu ruim')
        return
    }
    console.log('Arquivo escrito com sucesso')
})

//escrever em um arquivo que ainda não existe
const caminhoArquivoNaoExiste = './aindaNaoExiste.txt'
fs.writeFile(caminhoArquivoNaoExiste, 'outro texto', (erro) => {
    if(erro){
        console.log('Deu ruim')
        return
    }
    console.log('Arquivo escrito com sucesso')
})





const arrayObj = [{id:1, nome: 'João', idade: 30}]
const jsonObjetos = JSON.stringify(arrayObj)


//escrever em um arquivo que ainda não existe
const novoAquivoJson = './aindaNaoExiste.json'
fs.writeFile(novoAquivoJson, jsonObjetos, (erro) => {
    if(erro){
        console.log('Deu ruim')
        return
    }
    console.log('Arquivo escrito com sucesso')
})


//escrever em um arquivo que ainda não existe-> com essa função não é possível escrever em pastas que ainda não existem
const caminhoArquivoNaoExisteEmPastaNaoExiste = './pastaNaoExiste/aindaNaoExiste.txt'
fs.writeFile(caminhoArquivoNaoExisteEmPastaNaoExiste, 'texto que era para um novop arquivo em uma pasta que nao existia', (erro) => {
    if(erro){
        console.log('Deu ruim')
        return
    }
    console.log('Arquivo escrito com sucesso')
})