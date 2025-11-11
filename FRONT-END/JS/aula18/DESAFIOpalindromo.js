//hannah
//arara
//radar
//oso


//crie um programa que receba uma palavra do usuário e verifique se ela é um palíndromo
//palíndromo - palavra que se leia da mesma forma da esquerda para a direita e vice-versa

//crie 2 variáveis uma para armazenar a palavra e outra para armazenar a palavra invertida
let palavraUser = prompt('Digite uma palavra') //casa
let palavraInvertida = ''
//você pode usar um laço for ou um laço for ou um laço while para percorrer a palavra recebeida e criar a palavra invertida na outra variável
let utimoIndice = palavraUser.length- 1 //(4)-1
for(let i = utimoIndice ; i >= 0; i--){
    palavraInvertida+= palavraUser[i]
}

if(palavraInvertida== palavraUser){
    console.log('E um palindromo')
}else{
    console.log('Nao e um palindromo')
}
// utilize uma estrutura condicional para verificar se a palavra recebida e igual a palavra invertida

//correção de 19:43