import { useState, createContext } from "react";



//criar o contexto para ser providido
const MeuContexto = createContext()



function MeuContextoProvider({children}) {
    const [usuario, setUsuario] = useState({nome: 'João', email: 'j@j.com', descricao: 'Desenvolvedor'})

    //criar a estrutura do provider
    return (
        <MeuContexto.Provider value={{usuario, setUsuario}}>
            {children}
        </MeuContexto.Provider>
    )

}

export {MeuContexto, MeuContextoProvider}