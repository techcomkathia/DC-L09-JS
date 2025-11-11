//
let pessoas = ['ana', 'joão', 'pedro', 'maria']
let atendidos = []
//a)adicione Claudio no início do array
// ['claudio', 'ana', 'joão', 'pedro', 'maria']
pessoas.unshift('claudio')

//b)Substitua pedro por Paulo
// ['claudio', 'ana', 'joão', 'Paulo', 'maria']
//saber i index do elemento
let i = pessoas.indexOf('pedro')
//substitua pedro por Paulo
pessoas[i] = 'Paulo'
// ['claudio', 'ana', 'joão', 'Paulo', 'maria']

//c)remova Maria e adicione na lista de  atendidos
//remoção
let removido = pessoas.pop()
//adicionar na lista de atendidos
atendidos.push(removido)
// ['claudio', 'ana', 'joão', 'Paulo']
// ['maria']


//d)remova a primeira pessoa do array e adicione no início do array atendidos
// ['ana', 'joão', 'Paulo']
removido = pessoas.shift() //claudio removido
atendidos.unshift(removido)
// ['claudio', 'maria']

//pop -> retorna o elemento removido
//push
//shift -> retorna o elemento removido
//unshift