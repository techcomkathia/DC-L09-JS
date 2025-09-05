//ao clicar no botão, deverão ser mostrados todos os feriados do ano relacionado ao botão, na div reservada para os feriados do ano

//use o end point:
// https://brasilapi.com.br/api/feriados/v1/2025

function buscarFeriados(ano){
    let url = `https://brasilapi.com.br/api/feriados/v1/${ano}`
    
    fetch(url)
    .then((resposta)=> resposta.json())
    .then((dados)=>{
        const divAno = document.querySelector(`#div${ano}`)
        divAno.innerHTML = `<h1> Feriados do ano de ${ano} </h1>`
        dados.forEach((itemFeriado)=>{
            //criar o h2 e o h3
            const tituloh2 = document.createElement('h2')
            const tituloh3 = document.createElement('h3')
            //adicionar conteúdo com as propriedades do objeto feriado
            tituloh2.innerHTML = itemFeriado.name
            tituloh3.innerHTML = itemFeriado.date
            //inserir como filhos da divAno
            divAno.appendChild(tituloh2)
            divAno.appendChild(tituloh3)
        })
    })
    .catch((erro)=>{
        console.log('Deu ruim')
    })
}

//representar os objetos botões

const listaBotoes = document.querySelectorAll('button') //[0,1,2]
listaBotoes[0].addEventListener('click', ()=> { buscarFeriados(2023)})

listaBotoes[1].addEventListener('click', ()=> { buscarFeriados(2024)})

listaBotoes[2].addEventListener('click', ()=> { buscarFeriados(2025)})

//correção de 21:38