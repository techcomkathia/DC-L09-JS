import { createContext, useState } from "react";

export const ObjetosContext = createContext()

export const ObjetosProvider = ({children}) =>{

    let objetos = [{id: 123, titulo: "Objeto 1"}, {id: 456, titulo: "Objeto 2"}, {id: 789, titulo: "Objeto 3"}]
    return(
        <ObjetosContext.Provider value={{objetos}}>
            <p>Objetos</p>
            {children}
        </ObjetosContext.Provider>
    )
}