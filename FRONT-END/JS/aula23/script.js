let titulos= document.getElementsByTagName('h1') 

console.log(titulos) 

titulos[0].style.color = 'red'
titulos[0].innerHTML = 'Mudei com JS'

console.log(document.getElementsByTagName('div')[0].innerText)