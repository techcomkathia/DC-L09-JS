// copias de tipos primitivos são feitas por valor
// copias de tipos objetos e funções são feitas por referência são feitas por referência

//tipos primitivos: number, string, boolean, undefined, null, NaN

let x = 10
let y = x
console.log(`valor de x: ${x}, valor de y: ${y}`) // 10, 10 (ambos apontam para o mesmo endereço de memória de x)
x = 'k'
console.log(`valor de x: ${x}, valor de y: ${y}`) 


//tipos de objetos: object, array, function
let lista1 = [1,2]
let lista2 = lista1
console.log(lista1, lista2) // [1,2], [1,2] (ambos apontam para o mesmo endereço de memória de lista1)
lista1.push(3)
console.log(lista1, lista2)

let lista3 =  [...lista1]
console.log(lista3)

//atualização da lista 1
lista1.push(4)
console.log(lista1, lista2, lista3)