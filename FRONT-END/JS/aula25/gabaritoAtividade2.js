//A cada mudança de valor dos campos de input ( use o evento change ), atualize o valor do parágrafo com o somatorio dos valores dos inputs
//representar todos os objetos dos inputs
const entrada = document.querySelector('#entrada')
const pratoPrincipal = document.querySelector('#pratoPrincipal')
const sobremesa = document.querySelector('#sobremesa')
const bebida = document.querySelector('#bebida')
//representar o parágrafo
const totalConta = document.querySelector('#totalConta')

//criar uma variável para armazenar o somatorio
let valorConta = 0
//criar uma função para atualizar o valor do somatório

function atualizarTotal( valor){
    valorConta +=Number(valor) //convertendo o valor para number
    //a propriedade value dos inputs são strings, entao precisamos converter o valor para number para poder somar
}
//atualizar o parágrafo a cada mudança dos campos de inputs

entrada.addEventListener('change', ()=>{
    atualizarTotal(entrada.value) //atualiza o valor do somatorio a cada mudança no campo de entrada
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
})



pratoPrincipal.addEventListener('change', ()=>{
    atualizarTotal(pratoPrincipal.value)
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
})

sobremesa.addEventListener('change', ()=>{
    atualizarTotal(sobremesa.value)
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
})

bebida.addEventListener('change', ()=>{
    atualizarTotal(bebida.value)
    totalConta.innerHTML = `R$ ${valorConta}`
    console.log('executei')
})