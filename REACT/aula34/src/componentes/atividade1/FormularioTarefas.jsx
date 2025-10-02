import { useContext } from "react"; // permite usar o contexto em um componente
import { ContextoLista } from "./ContextoLista";
import { useState } from "react";

function FormularioTarefas() {
    const {tarefas, setTarefas} = useContext(ContextoLista) //traz o contexto e desestrura o objeto em variaveis. Importante que tenha o mesmo nome da variavel criada no provider

    const [novaTarefa, setNovaTarefa] = useState('')

    function criarTarefaNormal(){
        setTarefas({...tarefas, normal: [...tarefas.normal, novaTarefa], importante: tarefas.importante})
    }

    function criarTarefaImportante(){
        setTarefas({...tarefas, normal: tarefas.normal, importante: [...tarefas.importante, novaTarefa]})
    }

    return (
        <div className="formulario-tarefas">
            <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
            <button onClick={criarTarefaNormal}>Normal</button>
            <button onClick={criarTarefaImportante}>Importante</button>
        </div>
    );

}

export default FormularioTarefas