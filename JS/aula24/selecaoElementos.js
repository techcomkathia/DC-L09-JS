const titulo = document.querySelector('h1')
//seletor por tag
console.log(titulo.innerHTML)

const divisoes = document.querySelectorAll('div')
//seletor por classe
console.log(divisoes[0].innerHTML)

const primeiroParagrafo = document.querySelector('p')
console.log(primeiroParagrafo.innerHTML)

const primeiraDiv = document.querySelector('.divisao')
console.log(primeiraDiv.innerHTML)
//seletor de classe
const paragrafo = document.querySelector('#paragrafo')
console.log(paragrafo.innerHTML)
//seletor de id

//adicionando mais um elemento a div divisão 
primeiraDiv.innerHTML+= '<img src= "images.jpg" >'

primeiraDiv.innerHTML += '<ol> <li> item adicionado </li> <li> texto fora do li </li> <ol>'

//selecionar a ol e modificar a propriedade style
const ol = document.querySelector('ol')
ol.style.color= 'red'


titulo.innerHTML = 'Novo texto de Título'

primeiraDiv.style.display= 'block'