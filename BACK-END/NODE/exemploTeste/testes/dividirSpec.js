//importar o modulo que vamos testar
const operacoesBasicas = require('../operacoesBasicas')
//exatamente para a funcao que vamos testar
const {dividir} = require('../operacoesBasicas')

//test -> cria um único de teste
//recebe como parâmetro o nome do bloco e uma funcao de callback
test('Testes para a funcao dividir', () => {
    //expect(dividir(10,2)).toBe(5) // dividindo 10 por 2 se espera obter 5
    //resultado não esperado para essa divisão
    expect(dividir(53,2)).not.toBe(5)
    //caso de uso, um login errado que NÃO retornará um token ou mensagem de sucesso
})

