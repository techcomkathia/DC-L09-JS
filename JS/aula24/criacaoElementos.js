//primeiro passo: selecionar o elemento pai
const pai= document.querySelectorAll('div')[1]
//seleciona apenas a segunda div do nodeList 

//segundo passo: criando o elemento filho 
const filho= document.createElement('h1')
//terceiro passo: adicionar o conteúdo a tag criada
filho.innerHTML= 'Fui criado com JS e adicionado ao meu pai <3'

//quarto passo : atribuir ao pai o seu filho criado e com conteúdo
pai.appendChild(filho)

const body = document.querySelector('body')

//criar o filho
const titulo5 = document.createElement('h5')
titulo5.innerHTML = 'Texto do meu Título 5'

body.append(titulo5, filho)
//permite a adição de um ou mais elementos filhos
