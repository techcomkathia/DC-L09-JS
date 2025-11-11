/* Ler o conteúdo de dois arquivos, `arquivo1.txt` e `arquivo2.txt`, e concatenar o conteúdo em um novo arquivo chamado `arquivoConcatenado.txt`.

-leitura arquivo1
-leitura arquivo2
-criação arquivoConcatenado*/
const fs = require('fs');

function concatenarArquivos(){

    const caminhoArquivo1 = './texto1.txt';
    const caminhoArquivo2 = './texto2.txt';
    const caminhoArquivoConcatenado = './arquivoConcatenado.txt';
    let textoArquivo1 = '';
    let textoArquivo2 = '';
    //ler o conteúdo dos 2 arquivos 
    //armazenar o conteúdo em uma variável global
    fs.readFile(caminhoArquivo1, 'utf8', (erro, conteudoArquivo1) => {
        fs.readFile(caminhoArquivo2, 'utf8', (erro, conteudoArquivo2) => {
            if(erro){
                console.log('Deu ruim')
                return
            }
            textoArquivo1 = conteudoArquivo1;
            textoArquivo2 = conteudoArquivo2;
                fs.writeFile(caminhoArquivoConcatenado, `${textoArquivo1} ${textoArquivo2}`, (erro) => {
                    if(erro){
                        console.log('Deu ruim')
                        return
                    }
                    console.log('Arquivo escrito com sucesso')
                })
        })
    })

}

exports.module = {concatenarArquivos}