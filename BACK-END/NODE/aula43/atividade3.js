const fs = require('fs')

//Atividade 3
/* Você recebeu um array de objetos com nome, setor e precisa criar os emails institucionais para todos esses funcionários. Depois criar os emails e adicionar como propriedade de cada objeto do array, salve essas informações em um arquivo JSON. o formato do email será o nome do funcionário . setor @ cletinhomagazine.com*/

//Dicas: USE JSON.stringify para converter o array de objetos em uma string JSON 
// use o método map para percorrer o array de objetos, produzindo um novo array de objetos com o atributo email

const funcionarios = [
    {
        nome: 'João',
        setor: 'TI'
    },
    {
        nome: 'Maria',
        setor: 'vendas'
    },
    {
        nome: 'Pedro',
        setor: 'logistica'
    }
]


//criar um novo array com o email em cada um dos funcionários

let funcionariosEmails = funcionarios.map((objFunc)=>{
    return(
        {
            nome:objFunc.nome,
            setor: objFunc.setor,
            email: (`${objFunc.nome}.${objFunc.setor} @cletinhomagazine.com`).toLowerCase()
        }
    )
    
})

//guardar as informações no formato de json
//converter para json
funcionariosEmails = JSON.stringify(funcionariosEmails) //uso a mesma variável e altero o tipo da infomação para json
//salvar no arquivo

fs.writeFile(`./funcionariosEmails.json`, funcionariosEmails,(erro)=>{
    if(erro){
        console.log('Erro ao criar e escrever os emails no arquivo')
        return
    }
    console.log('Sucesso, arquivo criado e conteúdo adicionado')
})
