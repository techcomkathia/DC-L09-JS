//requerindo um módulo externo 
const funcaoExterna= require('./modulo1.js')

//faça a requisição do modulo operacoesBasicas no arquivo main.js (ou em seu arquivo principal)
//realize a chamada da função somar com os parâmetros 10 e 8 e utilize o resultado para calular média (10+8)/2. Mostre o resultado no console
const operacoesBasicas = require('./operacoesBasicas.js')
let resultadoSoma = operacoesBasicas.somar(10,8)
//calcular a média
let media = operacoesBasicas.dividir(resultadoSoma,2)
//console.log(media)

//console.log(funcaoExterna.dizerOla()) 
//mostra o retorno da função externa no console