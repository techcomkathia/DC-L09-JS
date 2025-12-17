const { describe } = require('node:test')
const login = require('./login.js')


//Configure um arquivo de teste com o nome login.spec.js
// Nesse arquivo, crie 2 testes agrupados para a função de login:
// 1) caso o email e a senha estejam corretos
// 2) caso o email ou a senha estejam incorretos

describe('testes para o login', ()=>{
    test('caso o email e a senha estejam corretos', () => {
        expect(login('cleitinho@email.com', '123')).toEqual({
            statusCode: 200,
            token: 'tokendeexemplo',
            prazo: 1
        })
    })

    test('caso o email esteja incorreto', () => {
        expect(login('cleitinhoErrado@email.com', '456')).toEqual({
            statusCode: 400,
            erro: 'email ou senha incorretos'
        })
    })

    test('caso a senha esteja incorreta', () => {
        expect(login('cleitinho@email.com', '456')).toEqual({
            statusCode: 400,
            erro: 'email ou senha incorretos'
        })
    })
})

