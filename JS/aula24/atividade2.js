//crie um novo documento html com um style interno (head) contendo as classes: 
//urgente : bg vermelho, fonte branca e negrito
//naoUrgente: fonte preta e bg verde claro

//no arquivo de script crie um programa que execute a seguinte tarefa:
//peça ao usuário a quantidade de atividades para o dia
let qtdAtividades = prompt('Digite quantas atividades teremos para o dia de hoje')
//selecionando a tag que receberá a lista
let main = document.querySelector('main')
//criando a lista e adicionando na tag pai
let ul = document.createElement('ul')
main.appendChild(ul)

//a cada atividade faça 2 perguntas:
for(let i=1; i<= qtdAtividades; i++){
    //o texto da atividade
    let textoAtividade = prompt(`Digite a atividade ${i} de ${qtdAtividades}`)
    //se a atividade é urgente ou não.
    let ehUrgente= confirm(`A atividade ${i} é urgente? Se sim, pressione ok, se não cancelar.`)
    //se atividade for urgente, crie o elemento, adicione o texto, insira na lista de classes a classe urgente
    // se a atividade não for urgente faça o mesmo processo mas adicione a classe naoUrgente.
    //condicional para criar a atividade de acordo com a necessidade
    let item = document.createElement('li')
    item.innerHTML = textoAtividade
    //identicar a urgência para adicionar a classe correta
    if (ehUrgente) {
        item.classList.add('urgente')
    } else {
        item.classList.add('naoUrgente')
    }
    ul.appendChild(item)
    // * dica: utilize os métodos createElement, appendChild, classList.add()  
}
