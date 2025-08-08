// O Banco do Cleitinho distribuiu 8 senhas . Existe uma fila de atendimento.
//Depois de adicionar a cliente especial, qual seria a ordem de pessoas atendidas? Considerando as 8 senhas na fila.
//Imprima no console todos os nomes dos 8 atendidos. Use o loop for para isso.
// Dica: os métodos de retirada sempre retornam o elemento retirado da lista
//Chegando uma prioridade ( Cliente Personalitê  passará na frente de todos os demais na ordem de chegada)
let atendimento =  ['Maria', 'João', 'Paula', 'Joana', 'Ana', 'Joaquim', 'Pedro', 'Igor', 'Helena', 'Karen']

let clienteEspecial = 'Helena de Manuel Carlos'
let jaAtendidos = []

// agora o Cleitinho precisa armazenar em um array os clientes na ordem que eles foram atendidos. Faça uma adaptação no código acima, para que assim que o usuário for retirado do ínicio da fila de atendimento, seja adicionado ao final da lista de jaAtendidos

atendimento.unshift(clienteEspecial) //adiciona no inicio da fila
console.log(atendimento)
let qtdSenhas = 8
for(let senha = 1; senha<= qtdSenhas; senha++ ){
    let pessoaAtendida = atendimento.shift()
    jaAtendidos.push(pessoaAtendida)
    console.log(pessoaAtendida)
}

console.log(jaAtendidos)
console.log(atendimento)

