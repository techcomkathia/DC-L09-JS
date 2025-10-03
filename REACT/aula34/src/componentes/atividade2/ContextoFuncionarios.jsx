import { createContext, useState } from "react";

const ContextoFuncionarios = createContext()

function ContextoFuncionariosProvider({children}) {
    const [funcionarios, setFuncionarios] = useState([
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
    ])

    return(
        <ContextoFuncionarios.Provider value={{funcionarios, setFuncionarios}}>
            {children}
        </ContextoFuncionarios.Provider>
    )
}

export {ContextoFuncionarios, ContextoFuncionariosProvider}