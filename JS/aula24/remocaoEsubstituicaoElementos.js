//para remover alguma elemento primeiro precisamos trazer a representação do elemento do html para o js
const h1 = document.querySelector('h1')
h1.remove()

//para o método removeChild, precisamos do elemento pai e do filho que será excluido
const pai = document.querySelector('#div2')
pai.style.backgroundColor = 'red'

const filho = document.querySelector('.texto')
pai.removeChild(filho)

//remover o 2 filho da ul

const ul = document.querySelector('ul')
const listaItens = document.querySelectorAll('li')
//ul.removeChild(listaItens[1])

listaItens[1].remove()


//substituir um elemento
//primeiro passo: representar o elemento que vai ser substituido
const titulo2 = document.querySelector('#titulo2')
//segundo passo: representar o elemento que vai substituir
//criação de um novo elemento
const paragrafo = document.createElement('p')
paragrafo.innerHTML = 'sou um parágrafo que substitui o h2'
titulo2.replaceWith(paragrafo)