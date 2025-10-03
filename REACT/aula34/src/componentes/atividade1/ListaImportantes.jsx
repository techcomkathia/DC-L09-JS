import { useContext } from "react";
import { ContextoLista } from "./ContextoLista";
export default function ListaImportantes() {
    const { tarefas, setTarefas } = useContext(ContextoLista); //traz o contexto e desestrura o objeto em variaveis. Importante que tenha o mesmo nome da variavel criada no provider
    return (
        <div className="lista-importantes">
            <h2>Importantes</h2>

        
            <ul>
                {tarefas.importante.map((tarefa, index) => (
                    <li key={index}>{tarefa}
                    <button onClick={() => {
                            setTarefas(
                                {...tarefas, importante: tarefas.importante.slice(0, index), normal:  [...tarefas.normal]}
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

