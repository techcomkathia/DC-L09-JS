/* Crie um formulário que permita o usuário adicionar uma tarefa a uma lista. Essa tarefa pode ser normal ou importante

cada tipo de tarefa tem sua lista (componente) específico. 
Nesta atividade você deverá criar 3 componentes que usam o mesmo contexto (estão dentro de um provider).

além dos componentes você deverá criar um contexto para armazenar as tarefas e um provider para o mesmo.
*/

const [tarefas, setTarefas] = useState({
    normal: [],
    importante: []})

/* Crie um contexto para um array de objetos (funcionarios). Esse contexto será usado por 2 componentes. Um que mostra o total de funcionários e outro que mostra as informações de cada um dos funcionários.  */

const [funcionarios, setFuncionarios]= [
    {
        nome:'João',
        cargo: 'dev'
    },
    {
        nome:'Paulo',
        cargo: 'QA'
    },
    {
        nome:'Maria',
        cargo: 'RH'
    },
    {
        nome:'Ana',
        cargo: 'dev'
    },
    {
        nome:'Érica',
        cargo: 'gerente'
    }
]

// Crie um componente formularioCadastroFuncionpario, que adicione um novo funcionario ao array de funcionarios, utilizando o contexto criado.