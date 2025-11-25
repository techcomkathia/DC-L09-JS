/* Crie uma estrutura para a api do petshop do cleitinho
    -- crie as 3 pastas: modelo, controladores e servicos
    -- crie o arquivo bancoDeDados.js na pasta de modelo. Com as informacoes abaixo:

*/

let bancoDeDados = {
    clientes:[
        {
            id: 1,
            nome: 'Cleitinho',
            idade: 13,
            raca: 'Persa',
            cor: 'Laranja'
        },
        { 
            id:2,
            nome: 'Mini',
            idade: 3,
            raca: 'Pincher',
            cor: 'Preto'
        }
    ],
    funcionarios: [
        {
            id: 1,
            nome: 'Cleiton',
            cargo: 'Veterinario'
        }
    ]
}

/*
 -- na pasta controladores, crie o arquivo clientesControlador.js e o arquivo funcionariosControlador.js
 -- na pasta servicos, crie o arquivo clientesServicos.js e o arquivo funcionariosServicos.js
*/

// Exercicio 2:
/* Crie o serviço para obter todos os clientes e cadastrar um novo cliente (o id deve ser gerado automaticamente)

Crie um controlador para retornar todos os clientes e o status code 200 e um controlador para cadastrar um novo cliente. Caso as informacoes sejam invalidas, retorne o status code 400 caso contrario, com todas as informacoes corretas retorne o status code 200 com uma mensagem de sucesso e mostre a lista atualizada de clientes no 

*/

