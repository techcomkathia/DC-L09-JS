import { use, useState } from "react"

function Condicional (){

    const [escolha, setEscolha] = useState()


    let retorno
    return(
        <>
            <h1>Meu título</h1>
            
            { escolha && (<h2> Parte do conteúdo renderizado condicionalmente</h2>)}

            <button onClick={()=> setEscolha(true)}>Click aqui para mostrar o texto</button> 

            <button onClick={()=> setEscolha(false)}>Click aqui para esconder o texto</button>      
        </>
    )
}

export default Condicional