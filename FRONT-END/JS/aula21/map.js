// pop, push, shift, unshift - adição e remoção de elementos no array
// includes - verifica se um elemento existe no array
// indexOf - retorna o index do elemento procurado
// lastIndexOf - retorna o index do ultimo elemento procurado
// splice - remove e insere elementos no array

// métodos map, filter, reduce e ForEach
// iteram sobre os elementos de um array aplicando uma funcao a eles
// map - cria um novo array com os elementos modificados pela função aplicada
// filter - cria um novo array com os elementos filtrados pela função aplicada
// reduce - cria um elemento com o resultado da funcao aplicada aos elementos do array
// forEach - executa uma funcao para cada elemento do array mas nao cria um novo array

let listaFrutas = ['banana', 'maca', 'laranja', 'abacaxi', 'banana', 'banana']


//função para strings que coloca todas as letras em maiusculas, método para strings -> toUpperCase

function transformarEmMaiusculas(palavra){
    return palavra.toUpperCase()
}
//criar um novo array com os nomes de frutas em maiusculas
let frutasMaiusculas = listaFrutas.map((fruta) => fruta.toUpperCase()) //callback de arrow function
let frutasMaiusculas2 = listaFrutas.map(transformarEmMaiusculas) //callback de funcao nomeada




console.log(listaFrutas)
console.log(frutasMaiusculas)


let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//criar um novo array com os numeros dobrados
let numerosDobrados = listaNumeros.map((num) =>{
    console.log(num)
    return num * 2   
} )

console.log(listaNumeros)
console.log(numerosDobrados)


//crie um array com as palavras par ou impar, de acordo com o array original listaNumeros
//se o numero for par, coloque par, se for impar, coloque impar
//ex: array original [1,2,3,4,5] 
// novoArray = ['impar', 'par', 'impar', 'par', 'impar']

function verificarImparOUpar(num){
    if(num%2 == 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}

function dobra(num){
    return num * 2
}

//aplicando uma função definida como callback para o método map
let listaImparPar = listaNumeros.map(verificarImparOUpar)
let listaDobro = listaNumeros.map(dobra)
console.log(listaNumeros)
console.log(listaImparPar)  
console.log(listaDobro)


// atividade 1 
//crie um array com descontos de 15% para cada valor no array listaPrecos. Chame esse novo array de precosDescontados
//utilize uma função de callback do tipo arrow function
let listaPrecos = [100, 200, 300, 400, 500]
//correção por Késia Fontenelle :)
let precosDescontados = listaPrecos.map((n) => n= n - n * 0.15)
console.log(precosDescontados)

let listaObjetos = [
    {nome: 'João', idade: 20},
    {nome: 'Maria', idade: 25},
    {nome: 'Pedro', idade: 30}
]
//percorrer todo o array de listaObjeto para produzir um novo array com os objetos e uma nova propriedade chamada senhaPadrao
// senha:1234

//criar um array novo com todos os objetos e uma nova propriedade
let novaListaObjetos = listaObjetos.map((elemento)=>{
    let novoElemento = {...elemento} //clonar o elemento
    novoElemento.senhaPadrao = '1234'
    return novoElemento
})

console.log(novaListaObjetos)
console.log(listaObjetos)

console.log(listaNumeros)
console.log(...listaNumeros)


// para um array de alunos, criar um novo array apenas com os nomes dos alunos

let listaAlunos = [
    {nome: 'João', idade: 20},
    {nome: 'Maria', idade: 25},
    {nome: 'Pedro', idade: 30}
]

let listaNomes = listaAlunos.map((aluno)=> [aluno.nome,aluno.idade])
console.log(listaNomes)