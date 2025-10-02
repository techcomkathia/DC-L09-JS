import { createContext, useState } from "react";

const ContextoLista = createContext()

function ContextoListaProvider({children}) {
    const [tarefas, setTarefas] = useState({
        normal: [],
        importante: ['coisa1']
    })

    return (
        <ContextoLista.Provider value={{tarefas, setTarefas}}>
            {children}
        </ContextoLista.Provider>
    )

}

export {ContextoLista, ContextoListaProvider}