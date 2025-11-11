//crie uma lista com 5 produtos
// cada produto será um objeto com as seguintes propriedades
//nome
//preco
//quantidade
//desconto
//definição feita pelo desenvolvedor
let produtos = [
    {
        nome: 'cadeira gamer',
        preco: 1000,
        quantidade: 5,
        desconto: 10
    },
    {nome: 'monitor gamer', preco: 1200, quantidade: 10, desconto: 8},
    {nome: 'teclado gamer', preco: 500, quantidade: 15, desconto: 5},
    {nome: 'mouse gamer', preco: 300, quantidade: 20, desconto: 3},
    {nome: 'fone gamer', preco: 300, quantidade: 20, desconto: 3}
]

//ou definição feita pelo usuário ( que vai passar todas as informacoes pelo prompt )
// laço for para criação do array de produtos
let listaProdutos = []
for(let i = 0; i < 5; i++){
    let produto = {
        nome: prompt(`Digite o nome do produto ${i+1}`),
        preco: Number(prompt(`Digite o preco do produto ${i+1}`)),
        quantidade: Number(prompt(`Digite a quantidade do produto ${i+1}`)),
        desconto: Number(prompt(`Digite o desconto do produto ${i+1}`))
    }
    listaProdutos.push(produto) // adicionar o produto na lista
}

//para os 5 produtos faça um laço for, itear sob a lista de produtos para atribuir os valores a cada produto:
//crie uma propriedade chamada valorComDesconto que recebe o valor do produto menos o desconto
//crie uma propriedade chamada valorTotal que recebe o valor do produto sem o desconto multiplicado pela quantidade
console.log(produtos)
for(let i=0; i<produtos.length; i++){
    //criar o valor com o desconto do produto
    produtos[i].valorComDesconto = produtos[i].preco * (1-produtos[i].desconto/100)

    //criar o valor total do produto
    produtos[i].valorTotal = produtos[i].preco * produtos[i].quantidade
}
console.log(produtos)   

//mostre todas as propriedades do primeiro produto da lista usando o lop for in. 

for( let x in produtos[0]){
    console.log(`${x}: ${produtos[0][x]}`)
}


