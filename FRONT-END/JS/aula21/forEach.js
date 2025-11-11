let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//imprima todos os itens de um array usando o forEach
let novoArray = numeros.forEach((num) => console.log(num))

console.log(novoArray)
//percorre todos os elementos do array e executa a funcao callback sem criar um novo array. Util quando não precisa de um novo array mas é necessário executar uma funcao em todos os elementos.