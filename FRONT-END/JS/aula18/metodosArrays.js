let frutas= ['banana', 'maca', 'laranja', 'abacaxi', 'banana', 'banana']
// verificar se um elemento existe no array
//método includes
console.log(frutas.includes('banana'))
console.log(frutas.includes('jabuticaba'))
console.log(frutas.includes('maca'))

//método para retornar o index do elemento procurado
console.log(frutas.indexOf('banana'))
//procurar o index de um elemento que nao existe no array
console.log(frutas.indexOf('cleitinho')) // retorna -1

//método para retorar o index do ultimo elemento procurado
console.log(frutas.lastIndexOf('banana'))

// contagem de quantas vezes o elemento aparece no array
let quantidade = 0
for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    if(element == 'banana'){
        quantidade++
    }
}

//exclusão de um elemento que não está nem no inicio nem no fim do array
let numeros =  [0,1,2,3,4,5,6,7,8,9]
let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(letras)
let removido = letras.splice(5,2)
//array.splice(indice de inicio da remoção, quantidade de elementos a serem removidos)
console.log(letras)
console.log(removido)

