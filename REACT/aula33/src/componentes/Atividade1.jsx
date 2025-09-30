import { useState, useEffect } from "react";

function Atividade1() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function mostrarNoConsole(){
        console.log(`O valor da variavel num1 : ${num1**2} e o valor da variavel num2 : ${num2**2}`)
    }

    useEffect(mostrarNoConsole,[num1, num2])

    return(
        <>
            <h1>Atividade 1</h1>
            <p>Para usar o conceito do useEffect na atividade 1 utilize um componente criado com 2 botões. Ao clicar no botão 1 o usuário deverá passar 1 número para uma variável e ao clicar no botão 2 deverá passar o valor para outra variável.Uma função de callback deverá ser criada para mostrar os valores armazenados nas variáveis de estado controlado ao quadrado no console, sempre que elas forem atualizadas.</p>

            <div>
                <button onClick={() => setNum1( prompt('Digite um número'))}>Numero 1</button>
                <button onClick={() => setNum2( prompt('Digite um número'))}>Numero 2</button>
            </div>
        
        </>
    )

}

export default Atividade1