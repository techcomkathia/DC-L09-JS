/* Crie um formulário que permita o usuário adicionar uma tarefa a uma lista. Essa tarefa pode ser normal ou importante

cada tipo de tarefa tem sua lista (componente) específico. 
Nesta atividade você deverá criar 3 componentes que usam o mesmo contexto (estão dentro de um provider).

além dos componentes você deverá criar um contexto para armazenar as tarefas e um provider para o mesmo.
*/

const [tarefas, setTarefas] = useState({
    normal: [],
    importante: []})