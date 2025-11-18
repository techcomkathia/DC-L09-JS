//Atividade 1 
//Crie um arquivo que se chama livraria.js
//Esse arquivo será a api da biblioteca do cleitinho

// use express para criar um servidor
// configure a rota principal da api para exibir uma mensagem de boas vindas retornando um texto 'API DA BIBLIOTECA DO CLEITINHO V.1.0.0

/* Criar uma pasta, iniciar o node e instalar o express
npm init -y
npm install express
*/

//Atividade 2
//Crie 2 rotas :
// get - /livros que retorna todos os livros cadastrados no formato:
{
    qtdLivros :  2
    livros : [
        {id: 1, titulo: 'O Senhor dos Aneis', autor: 'J.R.R. Tolkien', preco: 49.90},
        {id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', preco: 39.90},
    ]
}

//post - /livro que recebe um livro via body e adiciona ao array de livros
{
    "titulo": "O Hobbit",
    "autor": "J.R.R. Tolkien",
    "preco": 49.90
}
// e retorna o livro adicionado no formato:
{
    status : 'Livro adicionado com sucesso',
    livro : {
        id: 3,
        titulo: 'O Hobbit',
        autor: 'J.R.R. Tolkien',
        preco: 49.90
    }
}
//teste para verificar se o livro foi adicionado ao array de livros
//get - /livros


//crie um endpoint para atualizar um livro  use o método put para isso
//Dicas: use req.params para pegar o id do livro
//Dicas: use req.body para pegar o livro atualizado

