//crie uma função que consome a api the cat api e gere uma imagem aleatória dentro da div divGatinho. Essa função será executada quando o botão for clicado.

//utilize o método document.createElement e o método apendChild para adicionar a imagem a div
//utilize a propriedade url do objeto resposta da api, para o src da imagem 
//utilize um envento para o objeto botão com o método addEventListener

const btn = document.querySelector('#btnGatinho')
const div = document.querySelector('#divImagem')

function buscarImagem(){
    let url = 'https://api.thecatapi.com/v1/images/search'

    fetch(url)
    .then((resposta)=> resposta.json())
    .then((objetoResposta) => {
        
        //criar a imagem 
        let img = document.createElement('img')
        img.src = objetoResposta[0].url
        img.style.width= '400px'
        img.alt= 'Imagem gatinho alaetório'
        //div.innerHTML=''
        //atribuir imagem a div
        div.appendChild(img)
    })
    .catch((erro)=>{
        console.log(erro.message)
    })
}

//atribuir a função ao evento de click no elemento btn
//objetoQuevaiReceberOevento.addEventListener('nomeEvento', função)
//btn.addEventListener('click', buscarImagem)

btn.addEventListener('click', ()=>{
    let url = 'https://api.thecatapi.com/v1/images/search'

    fetch(url)
    .then((resposta)=> resposta.json())
    .then((objetoResposta) => {
        
        //criar a imagem 
        let img = document.createElement('img')
        img.src = objetoResposta[0].url
        img.style.width= '400px'
        img.alt= 'Imagem gatinho alaetório'
        //div.innerHTML=''
        //atribuir imagem a div
        div.appendChild(img)
    })
    .catch((erro)=>{
        console.log(erro.message)
    })
})

