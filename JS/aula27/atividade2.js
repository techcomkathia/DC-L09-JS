// representar os objetos que serão manipulados
let divProdoutos = document.querySelector('#produtos')


// buscar as informações a serem representadas
fetch('https://fakestoreapi.com/products') // retorna uma promisse
  .then(respostaApi => respostaApi.json()) //converte para objeto 
  .then(arrayProdutos =>{
    //utilizar um loop para montar um card para cada produto dentro da div, utilizando a construção de string com o conteudo com html
    for(let index =0; index< arrayProdutos.length; index++){
        divProdoutos.innerHTML = divProdoutos.innerHTML + ` 
        <div class="card m-5" style="width: 18rem;">
            <img src="${arrayProdutos[index].image}" class="card-img-top" alt="${arrayProdutos[index].title}" width="200">
            <div class="card-body">
                <h5 class="card-title">${arrayProdutos[index].title}</h5>
                <p class="card-text">${arrayProdutos[index].description}</p>
                <a href="#" class="btn btn-primary">R$ ${arrayProdutos[index].price}</a>
            </div>
        </div>`
    }

  });


console.log('sou executado antes da promisse ser cumprida')
//use a api para cadastrar um novo usuário com o método post
//exiba um alerta com a resposta da api
function cadastrarUsuario(){
   const username = document.querySelector('#username').value

   const password = document.querySelector('#password').value
   
   const email = document.querySelector('#email').value

   const objetoUsuario = {
    username: username,
    password: password,
    email: email
   }


    fetch('https://fakestoreapi.com/users',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(objetoUsuario)
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuário cadastrado com sucesso!')
        console.log(data)})
}