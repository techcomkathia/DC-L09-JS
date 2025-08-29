//peça ao usuário a quantidade de tarefas que ele vai fazer no dia.
//execute um script que crie uma lista e dentro da lista as atividades ( de acordo com o número passado pelo usuário) com o texto de cada uma delas

/*
nº atividades 3

<ul>
    <li> texto atividade 1 </li>
    <li> texto atividade 3 </li>
    <li> texto atividade 4 </li>
</ul>
*/


const h = document.querySelectorAll('div')[1]
const tarefas = prompt('Quantas tarefas você vai fazer hoje?')
const lista = document.createElement('ul')
lista.innerHTML= 'Atividades digitadas pelo usuário'
h.appendChild(lista)
for (let index = 0; index < tarefas; index++) {
    let a = prompt('Quais atividades são essas?')
    let item = document.createElement('li')
    item.innerHTML = a
    lista.appendChild(item)
}