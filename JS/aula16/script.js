/*let contador = 0 //acumulador

let soma = 0 //acumulador

for (let i = 1; i<=10 ; i++ ) {
    console.log(i) 
    console.log('repeti o loop mais uma vez') 
    contador+=1  
    soma+= i
}
console.log(`Saí do loop e ele foi executado ${contador} vezes e soma dos números é ${soma}`)

let x = 1
while(x>=10){
    console.log(x)
    console.log('repeti o loop mais uma vez')
    x++
}
console.log('saí do loop')*/

let quantidadeNumeros = 5 // condição de parada
let somaNumeros = 0 // acumulador

// um loop for que vai ler 5 números e somar o valor de todos eles
for(let num = 1; num <= quantidadeNumeros; num++ ){
    let numeroUser = Number(prompt('Digite um numero'))
    somaNumeros = somaNumeros + numeroUser //atualizando o valor do acumulador
    console.log(numeroUser)
}

console.log(`A soma de todos os números lidos é ${somaNumeros}`)