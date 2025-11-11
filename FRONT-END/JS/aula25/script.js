let titulo = document.querySelector('#titulo')
let botao = document.querySelector('button')
let inputCoisa = document.querySelector('#coisa')

console.log(inputCoisa.value)

function mostrarNoConsole(){
    console.log(inputCoisa.value)
}

function trocarCor(){
    titulo.style.color = 'red'
}

function trocarTexto(){
    titulo.innerHTML = 'Novo Título'
}

function resetar(){
    titulo.innerHTML = 'Meu Título'
}

//objetoDOM.addEventListener('evento', nomefuncaoCallback)
botao.addEventListener('click',trocarCor)
