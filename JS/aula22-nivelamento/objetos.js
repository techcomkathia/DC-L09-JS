let objeto={
    chave: 'valor',
    nome: 'Cleitinho',
    idade: 13,
    notas: [7,8,9],
    endereco: {
        rua: 'Rua 1',
        cidade: 'Cidade 1'
    }
}

// deletar uma propriedade
delete objeto.chave
console.log(objeto)

//adicionar novas propriedades
objeto.cor = 'Laranja'
console.log(objeto)

//adicionando número ao endereço que também é um objeto
objeto.endereco.numero = 123
console.log(objeto)

//método para retornar todas as propriedades de um objeto
console.log(Object.keys(objeto))
let chaves = Object.keys(objeto)
//verificar se uma propriedade existe em um objeto
console.log(chaves.includes('nome')) // retorna true ou false

//atividade
//para o objeto abaixo, verifique se existe a propriedade media, caso ela exista exiba a média
//caso não exista calcule a média, adicione como propriedade e exiba a média

let aluno ={
    nome: 'João',
    idade: 20,
    curso: 'ADS',
    notas: [7,10,2,5]
}

let aluno2 = {
    nome: 'Maria',
    idade: 20,
    curso: 'ADS',
    notas: [10,0,2,5]
}

// método para retornar todas as chaves de um objeto (Object.keys())
// verificar se no array de chaves do objeto existe a propriedade media
//estrutura condicional
// caso exista exiba a média
// caso nao exista calcule a média, adicione como propriedade e exiba a média
console.log(aluno.media)
function verificarMedia(objeto){
    //trazer todas as chaves/ propriedades
    let propriedades = Object.keys(objeto)
    
    if(propriedades.includes('media')){
        console.log(objeto.media)
    }
    else{
        
        //laço de repetição para calcular a soma das notas
        let somaNotas = 0
        for(let i =0; i<objeto.notas.length; i++){
            somaNotas += objeto.notas[i]
        }
        let media = somaNotas/objeto.notas.length
        objeto.media = media
        console.log(media)
    }
}

verificarMedia(aluno)
verificarMedia(aluno2)