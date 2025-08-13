let lista = [1, 2, 3, 4, 5]
console.log(lista)
// atualização
lista[0]= 'primeiro item'
console.log(lista)
// inserção
lista[5]= 'ultimo item'
console.log(lista)
lista[6]= 'novo item'
console.log(lista)

// inserção
//no final do array
lista.push('Cleitinho')
console.log(lista)
//iniciando o array
lista.unshift('Cleitinho Lima')
console.log(lista)


//remoção
//inicio
let removidoInicio = lista.shift()
console.log(removidoInicio)
console.log(lista)
//fim
let removidoFinal = lista.pop()
console.log(removidoFinal)
console.log(lista)
//fim

//laço de repetição para iterar sob o array

for(let i = 0; i < lista.length; i++) {
    const element = lista[i];
    console.log(element)
}