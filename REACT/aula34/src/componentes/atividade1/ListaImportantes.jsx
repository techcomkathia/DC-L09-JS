import { useContext } from "react";
import { ContextoLista } from "./ContextoLista";
export default function ListaImportantes() {
    const { tarefas } = useContext(ContextoLista);
    return (
        <div className="lista-importantes">
            <h2>Importantes</h2>

        
            <ul>
                {tarefas.importante.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

