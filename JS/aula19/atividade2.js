// crie uma função que recebe uma palavra como parâmetro e informa quantas letras essa string possui

function contarLetrasPalavra(palavra){
  let qtdLetras = palavra.length
  console.log(`A palavra ${palavra} possui ${qtdLetras} letras`)
}

contarLetrasPalavra('Cleitinho')

let palavraUser = prompt('Digite uma palavra')
contarLetrasPalavra(palavraUser)

contarLetrasPalavra(prompt('Digite uma palavra para passar diretamente para a funcao'))