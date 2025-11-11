let minhaLista =  [1,2,3,4,5]

console.log(minhaLista)
minhaLista[minhaLista.length] = 'novo item'
console.log(minhaLista)

//inserir um item no inicio do array
minhaLista.unshift('primeiro item')
console.log(minhaLista)

//insirir um item no final do array
minhaLista.push('ultimo item')
console.log(minhaLista)

//remover o ultimo item do array
let removido = minhaLista.pop()
console.log(minhaLista)

console.log(removido)

//remover o primeiro item do array
let removidoPrimeiro = minhaLista.shift()
console.log(minhaLista)
console.log(removidoPrimeiro)




// Crie uma lista (array) de atividades.
// Será pedido ao usuário quantas atividades serão colocadas na lista.
// A cada vez que o usuário digitar uma nova atividade para ser adiciona na lista, ela sempre será adicionada no começo da lista.

// dica 1: utilize o loop for
// dica 2: crie um array vazio para depois adicionar as atividade