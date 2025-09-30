import { useEffect, useState } from "react";


function EfeitoColateral() {

    const [contagem, setContagem] = useState(0)
    const [x, setX] = useState(0)
    
    useEffect(()=>{
        alert('Efeito colateral executado')
    },[x])
    //useEffect(callback, []) -> executa apenas na  primeira renderizacao
    //useEffect(callback) -> executa sempre que a página for renderizada
    //useEffect(callback, [variavel]) -> executa sempre que a variavel tiver seu estado alterado

    function handleClick() {
        setContagem(contagem + 1)
        console.log(contagem)
    }
 return(
    <>
        <h1>Efeito Colateral</h1>
        <h3>{contagem}</h3>
        <button onClick={handleClick}>Clique para adicionar mais um</button>
        <button onClick={() =>{ setX(x + 1)
            console.log('valor de x', x)}}>Atualizar variavel x</button>
    </>
 )

}

export default EfeitoColateral