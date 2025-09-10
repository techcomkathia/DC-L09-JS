
let lousa = document.querySelector('.divLousa')
let btnVermelho = document.querySelector('#vermelho')
let btnAzul = document.querySelector('#azul')
let btnVerde = document.querySelector('#verde')


function aplicarCor(cor){
    lousa.style.background = cor
}

function red (){
    lousa.style.background = 'red'
    console.log('vermelho')
}

function blue (){
    lousa.style.background= 'blue'
  console.log('azul')
}

function green (){
    lousa.style.background= 'green'
    console.log('verde')
    lousa.innerHTML = '<h1>Voltaremos de 20:20</h1>'

}

function resetar(){
    lousa.style.background = 'rgb(233, 227, 227)'
    
}

//objetoDOM.addEventListener('evento', funcaoCallback)

//funcao de callback sem parâmetros
// objeto.addEventListener('click', nomeFuncao)

//funcao de callback com parâmetros
// objeto.addEventListener('click', () => { nomeFuncao(parametros) })

//adicionando o evento aos botoes
btnVermelho.addEventListener('click',red)
btnAzul.addEventListener('click',()=>{
    aplicarCor('blue')
    console.log('executei dentro de uma funcao de callback do tipo arrow function')
})
btnVerde.addEventListener('click',()=>aplicarCor('green'))
