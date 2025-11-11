//A cada mudança de valor dos campos de input ( use o evento change ), atualize o valor do parágrafo com o somatorio dos valores dos inputs
//representar todos os objetos dos inputs
const entrada = document.querySelector('#entrada')
const pratoPrincipal = document.querySelector('#pratoPrincipal')
const sobremesa = document.querySelector('#sobremesa')
const bebida = document.querySelector('#bebida')
//representar o parágrafo
const totalConta = document.querySelector('#totalConta')

const inputTotal = document.querySelector('#totalContaInput')

//criar uma variável para armazenar o somatorio
let valorConta = 0
let valorBebida = 0
let valorSobremesa = 0
let valorPratoPrincipal = 0
let valorEntrada = 0
//criar uma função para atualizar o valor do somatório

function atualizarTotal( ){
    valorConta = valorBebida + valorSobremesa + valorPratoPrincipal + valorEntrada 
}
//atualizar o parágrafo a cada mudança dos campos de inputs

entrada.addEventListener('change', ()=>{
    valorEntrada = Number(entrada.value)
    atualizarTotal() //atualiza o valor do somatorio a cada mudança no campo de entrada
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
    inputTotal.value = `R$ ${valorConta}`
})



pratoPrincipal.addEventListener('change', ()=>{
    valorPratoPrincipal = Number(pratoPrincipal.value)
    atualizarTotal()
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
    inputTotal.value = `R$ ${valorConta}`
})

sobremesa.addEventListener('change', ()=>{
    valorSobremesa = Number(sobremesa.value)
    atualizarTotal()
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
    inputTotal.value = `R$ ${valorConta}`
})

bebida.addEventListener('change', ()=>{
    valorBebida = Number(bebida.value)
    atualizarTotal()
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
    inputTotal.value = `R$ ${valorConta}`
})