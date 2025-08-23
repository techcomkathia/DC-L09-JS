//condição de paridade. Ou é par ou é impar (apenas duas possibilidades)
let x = 2

if (x%2 == 0) {
    console.log('par')
} else {
    console.log('impar')
}


// manhã, tarde ou noite
// if else if e else para testar mais de duas condições
let turno = 'tarde'

if (turno == 'manha') {
    console.log('bom dia')
} else if (turno == 'tarde') {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}

// uso do e(and/ &&) e ou(or/ ||) logico
//tabela verdade do && lógico
// true && true = true
// true && false = false
// false && true = false
// false && false = false

//tabela verdade do || lógico
// true || true = true
// true || false = true
// false || true = true
// false || false = false

//atividade 1 - verificar se um numero é divisivel por 2 e 5 ao mesmo tempo
let numero = 15
if (numero%2 == 0 && numero%5 == 0) {
    console.log(`${numero} é divisível por 2 e 5`)
} else {
    console.log(`${numero} não é divisível por 2 e 5`)
}

//Exemplo de uso do && e ou lógico na mesma condição
// imprina no console o valor da variável se o valor for divisível por 2 e 5 ao mesmo tempo OU seja a string 'k'

let valor = 50
//1ª condição (2 e 5 ao mesmo tempo) - false
//2ª condição (string 'k') - false
//true ou false = true
if ((valor%2 ==0 && valor%5 == 0) || valor == 'k') {
    console.log('Divisível por 2 e 5 ou é igual a k')
} else {
    console.log(`${valor} não é divisível por 2 e 5 ou é igual a 'k'`)
}

//atividade2 
// Uma empresa de tecnologia está oferecendo uma promoção em seus cursos online.
// As regras para que o aluno tenha direito ao desconto são as seguintes:
// O aluno deve ser maior de 18 anos E estar matriculado em pelo menos 2 cursos.
// OU, independentemente da quantidade de cursos, se o aluno for funcionário da empresa, ele também recebe o desconto.

let idade = 20 //true
let cursos = 1 //false
let funcionario = true

//1ª condição é idade>18 e cursos>1 --> false

//2ª ou funcionário = true --> true

//false || true = true

if ((idade>18 && cursos>1)|| funcionario == true) {
    console.log('Aluno recebe desconto')
} else {
    console.log('Aluno nao recebe desconto')
}
