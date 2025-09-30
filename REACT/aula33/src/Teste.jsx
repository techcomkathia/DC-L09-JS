import { useEffect, useState } from "react";

function Teste() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    useEffect(() => {
        console.log('num1 atualizado', num1**2)
        console.log('num2 atualizado', num2**2)
    }, [num1, num2])

    return (
        <div>
            <button onClick={() => setNum1( prompt('Digite um número'))}>Numero 1</button>
            <button onClick={() => setNum2( prompt('Digite um número'))}>Numero 2</button>            
        </div>
    )
}

export default Teste