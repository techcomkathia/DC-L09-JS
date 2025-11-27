const clientesServicos = require('../servicos/clientesServicos')


/* Exercício 3: Crie um controlador para retornar todos os clientes e o status code 200 e um controlador para cadastrar um novo cliente. Verificar as infomações:
nome, idade, raca, cor. Caso a idade seja maior que 20, retorne o status code 400 e uma mensagem de erro


Caso as informacoes de nome e raça sejam vazias retorne o status code 400 com uma mensagem de erro

Caso contrario, todas as validacoes sejam ok, com todas as informacoes corretas retorne o status code 200 com uma mensagem de sucesso e mostre a lista atualizada de clientes no console */ 

const exibirClientes = (req, res) =>{
    const todosOsClientes = clientesServicos.obterTodosOsClientes()
    res.status(200)
    res.json({
        status: 200,
        clientes: todosOsClientes,
        quantidade: todosOsClientes.length
    })
    console.log(todosOsClientes)
    console.log('Sucesso ao exibir clientes')
    return
}

const cadastrarCliente = (req, res) =>{ 
    const cliente = req.body
    
    //Caso as informacoes de nome e raça sejam vazios retorne erro
    if(!cliente.nome || !cliente.raca){
        res.status(400)
        res.json({
            status: 400,
            erro: 'Nome e raca nao podem ser vazios'
        })
        return
    }

    // caso a idade seja maior que 20
    if (cliente.idade > 20){
        res.status(400)
        res.json({
            status: 400,
            erro: 'Idade nao pode ser maior que 20'
        })
        return
    }
    
    //Caso contrario, todas as validacoes sejam ok, com todas as informacoes corretas retorne o status code 200 com uma mensagem de sucesso e mostre a lista atualizada de clientes no console
   
    clientesServicos.cadastrarCliente(cliente)
    res.status(200)
    res.json({
        status: 200,
        clientes: cliente,
        quantidade: cliente.length
    })
    console.log(cliente)
    console.log('Sucesso ao cadastrar cliente')
    return
}

module.exports = {
    exibirClientes,
    cadastrarCliente
}