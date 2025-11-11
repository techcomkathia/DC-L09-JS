import { useState } from "react";

function TextoUser() {
    const [texto, setTexto] = useState("")

    function handleChange(evento) {
        console.log(evento.target.value)
        setTexto(Number(evento.target.value))
    }

    //para um texto digitado em um campo de input mostrar na tela

    return (
    <>
     <input type="number" onChange={handleChange}/>
     <p>{texto}</p>
    
    </>)
}

export default TextoUser