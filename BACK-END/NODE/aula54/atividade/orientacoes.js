//Instale e configure o jest 
// Crie um arquivo com o módulo chamado login.js
/*
 Uma função que verifica se o email e senha está incluido no banco de dados ( um array)
 E valida ser a senha é igual a passada como parâmetro
 //caso o email e a senha estaja corretos: retorne um objeto com o seguinte formato:
 {
     statusCode: 200,
     token: tokendeexemplo,
     prazo: 1h
 }

 caso contrário, retorne um objeto com o seguinte formato:
 {
     statusCode: 400,
     erro: 'email ou senha incorretos'
 }

*/
let bancoDados = [
    {
        email: 'cleitinho@email.com',
        senha: '123'
    },
    { 
        email: 'maria@email.com',
        senha: '456'
    }
]


//Configure um arquivo de teste com o nome login.spec.js
// Nesse arquivo, crie 2 testes agrupados para a função de login:
// 1) caso o email e a senha estejam corretos
// 2) caso o email ou a senha estejam incorretos