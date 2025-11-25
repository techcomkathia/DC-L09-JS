// camada responsavel por fazer as validações das regras de negócio e manipular os dados da camada de dados (modelo)

//acesso a camada de dados
const coisas = require('../modelo/bancoFake')


const retornarTodasCoisas = () => coisas

const verificarExistencia = (id) => coisas.find(coisa => coisa.id === id)

const adicionarCoisa = (coisa) => coisas.push({
    id: coisas.length + 1,
    ...coisa
})

const removerCoisa = (id) => coisas.filter(coisa => coisa.id !== id)

const atualizarCoisa = (id, coisa) => coisas.map(coisa => coisa.id === id ? {...coisa, ...coisa} : coisa)

const quantidadeCoisas = () => coisas.length

module.exports = {
    retornarTodasCoisas,
    verificarExistencia,
    adicionarCoisa,
    removerCoisa,
    atualizarCoisa,
    quantidadeCoisas
}