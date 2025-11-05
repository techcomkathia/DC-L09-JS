//crie um arquivo chamado operacoesBasicas que exporte as seguintes funcoes
//somar, subtrair, dividir, multiplicar
//faça a requisição do modulo operacoesBasicas no arquivo main.js (ou em seu arquivo principal)
//realize a chamada da função somar com os parâmetros 10 e 8 e utilize o resultado para calular média (10+8)/2. Mostre o resultado no console

//Atividade 2
/* Crie um arquivo chamado OqueEhNodejs.txt e adicione o seguinte texto:

Node.js é um ambiente de runtime de código aberto e multiplataforma que permite executar código JavaScript fora do navegador, no lado do servidor. Ele é construído sobre o motor V8 do Google Chrome, conhecido por sua alta performance. O Node.js é amplamente utilizado para construir aplicações web, APIs, microsserviços, ferramentas de linha de comando e muito mais. 

Utilize o módulo fs para ler o conteúdo do arquivo e se existir texto, informe quantos caracteres ele possui. Caso contrário, informe que o arquivo não possui texto, ou em caso de erro informe que não foi possivel ler o arquivo*/


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
