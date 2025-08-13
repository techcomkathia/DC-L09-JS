let pet = { 
        nome: 'Cleitinho',
        idade: 13,
        raca: 'Persa',
        cor: 'Laranja'
    }

// exibir todas as informacoes do pet
console.log(pet)

//exibir um valor de uma propriedade
console.log(pet.nome)

//atualizar um valor de uma propriedade
pet.nome = 'Cleitinho Lima'
console.log(pet.nome)

//criar uma nova informacao
pet.tamanho = 'Grande'
console.log(pet.tamanho)

//crie um objeto chamado usuario com as seguintes informacoes
//nome
//email
//senha
//dataDeNascimento
//cpf
//cargo

//depois de criado o objeto peça ao usuário para inserir uma nova senha e atualize a senha armazenada no objeto


//método para exclusão de uma propriedade
console.log(pet)
delete pet.tamanho
console.log(pet)
pet.idade = undefined
console.log(pet)

// trazer o nome de todas as propriedades do objeto
console.log(Object.keys(pet))
// retorna um array apenas com os nomes de todas as propriedades do objeto

// trazer o valor de todas as propriedades do objeto
console.log(Object.values(pet))
// retorna um array apenas com os valores de todas as propriedades do objeto


for(x in pet) {
    console.log(x)
    console.log(pet[x])
}