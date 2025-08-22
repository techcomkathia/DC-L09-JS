//crie uma função auxiliar que recebe um objeto como parâmetro e  executa uma função de callback.
let funcionario={
    nome: 'Cleitinho',
    idade: 52,
    salario: 5000,
    cargo: 'Programador'
}


function auxiliar (objeto, funcao){
    funcao(objeto)
}

//execute a função para testar criando uma arrow function que exiba as informações do objeto no console
// for in ( lopp para percorrer o objeto)
auxiliar(funcionario, (objeto)=>{
    for(let propriedade in objeto){
        console.log(`${propriedade}: ${objeto[propriedade]}`)
    }
})

console.log('outra possibilidade')

let funcionario2 ={
    nome: 'Sebastião',
    anos:30,
    salario: 10000,
    cargo: 'Gerente de projetos',
    qtdProjetos: 5,
    adicional:1500
}


auxiliar(funcionario2, (objeto)=>{
    console.log(`Nome: ${objeto.nome}`)
    console.log(`Idade: ${objeto.idade}`)
    console.log(`Salario: ${objeto.salario}`)
    console.log(`Cargo: ${objeto.cargo}`)
})

console.log('-------------------')
auxiliar(funcionario2, (objeto)=>{
    for(let propriedade in objeto){
        console.log(`${propriedade}: ${objeto[propriedade]}`)
    }
})