//crie uma página com um título  e através da execução de um script peça o nome do usuário e troque pelo conteúdo do titulo 1
//use o prompt para obter o nome do usuário
//document.getElementsByTagName -> retorna um htmlcollection com os elementos da pagina
//elemento.innerHTML - altera o conteudo do elemento
// let usuario = prompt('Qual seu nome?')
// let alteracao = document.getElementsByTagName('h1')[0]
// alteracao.innerHTML  = usuario

function atividade1(){
    let usuario = prompt('Qual seu nome?')
    let listaH1 = document.getElementsByTagName('h1') //htmlcollection -> array
    let primeiroH1 = listaH1[0]
    primeiroH1.innerHTML  = usuario
}

//para um documento html com elementos que possuem a mesma classe faça a seleção de todos os elementos com essa classe e aplique a cor vermelha para o style no atributo color dos elementos

//document.getElementsByClassName -> retorna um htmlcollection com os elementos da pagina

//crie uma função que percorre o htmlCollectiion e faz a manipulação da propriedade color dos elementos, usando um loop

//o array de elementos será um variavel global para que possa ser acessado dentro da funcao
let listaClasseAtividade = document.getElementsByClassName('atividade')

console.log(listaClasseAtividade.innerHTML)


function atividade2While(arrayElementosComClasse){
    let indice = 0

    // loop repetido até o final do array de elementos
    let tamanho = arrayElementosComClasse.length
    //acessar o elemento pelo indice e manipular a propriedade
    while (indice < tamanho) {
        arrayElementosComClasse[indice].style.color = 'red'
        //atualizar o indice
        indice++
    }
}
function atividade2For(arrayElementosComClasse){
    let tamanho = arrayElementosComClasse.length
    for (let index = 0; index < tamanho ; index++) {
        arrayElementosComClasse[index].style.color = 'red'
    }
}

function atividade2ForEach(arrayElementosComClasse){

    arrayElementosComClasse.forEach(element => {
        element.style.color = 'red'
    });
}

//usando o spred operator para passar os elementos do htmlcollection para construir um novo array
atividade2ForEach([...listaClasseAtividade])

//selecione o objeto com id 'importante' (getElementById) e altere o html interno a tag selecionada e aplique o conteúdo de texto passado pelo prompt dentro de uma tag strong
//peça ao usuario um texto
//seleciona o objeto com id 'importante'
//altera o html interno da tag selecionada usando innerHTML
// insira um strong e dentro dele insira o texto digitado pelo usuario



