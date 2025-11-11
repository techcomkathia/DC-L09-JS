// controle de estado e eventos

import { useState } from 'react'


function Botao() {
    const [contagem, setContagem] = useState(0)

    function handleClick() {
        setContagem(contagem + 1)
        console.log(contagem)
    }

    return (
        <>
            <h1>{contagem}</h1>
            <button onClick={handleClick}>Clique para adicionar mais um</button> 

            <button onClick={() => setContagem(contagem + 100)}>Clique para adicionar mais 100</button>        
        </>
    )

}

export default Botao