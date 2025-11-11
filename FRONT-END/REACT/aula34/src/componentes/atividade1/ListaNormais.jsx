import { useContext } from "react";
import { ContextoLista } from "./ContextoLista";

function ListaNormais() {
    const { tarefas, setTarefas} = useContext(ContextoLista);
    return (
        <div className="lista-normais">
            <h2>Normais</h2>
            <ul>                
                {tarefas.normal.map((tarefa, index) => (
                    <li key={index}>
                       {tarefa}
                        <button onClick={() => {
                            setTarefas(
                                {...tarefas, normal: tarefas.normal.slice(0, index), importante: [...tarefas.importante]}
                            )
                            console.log(tarefas)
                        }
                        } >Concluir tarefa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaNormais