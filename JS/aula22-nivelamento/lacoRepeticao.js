// for
// while

let lista = ['a', 'b', 'c', 'd']
let tamanhoArray = lista.length //4
let primeiroIndice = 0 //o primeiro elemento do array tem indice 0


//laço for percorrer o array inteiro ( do inicio ao fim )
//declaração e atribuição de valor ao iterador/controlador
// condição de parada
// atualização do iterador/controlador (ingremento ou decremento)
for(let i = primeiroIndice; i<tamanhoArray; i++){
    console.log(`item de indice ${i}: ${lista[i]}`)
}

//percorrer o array do fim ao inicio
for(let i = tamanhoArray-1; i >= primeiroIndice; i--){
    console.log(`item de indice ${i}: ${lista[i]}`)
}

//adicionar muitos elementos a um array ( vazio ou com informacoes )
let minhaLista= []
//adicionar 5 atividas a lista de coisas
let qtdCoisas = 5
//método para adicionar elementos ao array
//array.push(elemento) -> adiciona o elemento ao final do array
//array.unshift(elemento) -> adiciona o elemento ao inicio do array
for(let i=1; i<=qtdCoisas; i++){
    minhaLista.push(`atividade ${i}`)
}

//você recebeu uma lista de números. Deseja-se saber qual é o menor numero e qual é o maior
let numeros = [15, 3, 27, 8, 42, 10, 5];
let maior = numeros[0]
let menor = numeros[0]

//laço de repetição para percorrer o array inteiro
//condicional para verificar se o elemento atual eh maior ou menor que o maior ou menor número armazenado na variável global

for(let i=1; i<numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
    if(numeros[i] < menor){
        menor = numeros[i]
    }

}
