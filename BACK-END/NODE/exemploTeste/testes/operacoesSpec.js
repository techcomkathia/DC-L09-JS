// criar um teste que agrupe vários casos de teste com describe


//importar o modulo
const operacoesBasicas = require('../operacoesBasicas')

describe('teste das operacoes básicas de soma,multiplicação,subtração e divisão', () => {
    test('Testes para a funcao somar', () => {
        expect(operacoesBasicas.somar(10,2)).toBe(12)
    })

    test('Testes para a funcao subtrair', () => {
        expect(operacoesBasicas.subtrair(10,2)).toBe(8)
    })


    test('Testes para a funcao dividir com sucesso', () => {
        expect(operacoesBasicas.dividir(10,2)).toBe(5)
    })

   
    test('Teste para função dividir com falha', () => {
        expect(operacoesBasicas.dividir(10,0)).toBe('Impossível dividir por 0')
    })

    test('Testes para a funcao multiplicar', () => {
        
    })
})