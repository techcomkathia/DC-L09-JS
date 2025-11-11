let aluno = {
    nome: 'João',
    idade: 20,
    curso: 'ADS',
    notas: [],
    media: undefined
}

//atribua as seguintes notas ao aluno 7,8,5 (adicione no array) --> método push, na propriedade notas
aluno.notas.push(7)
aluno.notas.push(8)
aluno.notas.push(5)
console.log(aluno)

//calcule a média (soma das notas / quantidade de notas) e atribua a propriedade media
let somaNotas = aluno.notas[0] + aluno.notas[1] + aluno.notas[2]
aluno.media = (somaNotas / aluno.notas.length).toFixed(2)

console.log(aluno)

// avalie se o valor da propriedade media é maior ou igual que 7 , caso seja, crie uma propriedade chamada situacao com o valor de aprovado, caso contrario, crie uma propriedade chamada situacao com o valor de reprovado ---> if/else

if (aluno.media >= 7) {
    //situacao com o valor de aprovado
    aluno.situacao = 'aprovado'
} else {
    // situacao com o valor de reprovado
    aluno.situacao = 'reprovado'
}

//imprima todas as informações do aluno no console de forma apresentável:
// propriedade : valor ---> for in  for( propriedade in aluno){}

for( x in aluno){
    //x vai assumir o valor de cada nome de propriedade
    console.log(`${x} : ${aluno[x]}`)
}