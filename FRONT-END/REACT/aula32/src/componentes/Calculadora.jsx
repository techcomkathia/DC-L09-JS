/*1) Crie um componente chamado calculadora. Calculadora terá o retorno de 3 campos de input e um botão.
2 campos para os números e 1 campo para o operador ( +, -, / , *)
O botão irá executar a operação de acordo com os valores armazenados nas variáveis de estado controlado e irá exibir como um alerta o resulatdo.

eventos usados onChange e onClick, 3 variáveis de estado controlado. */

import { useState } from "react"

function Calculadora(){
    let [num1, setNum1]= useState(0)
    let [num2, setNum2]= useState(0)
    let [operador, setOperador] = useState('')

    function handleChange(evento, funcao){
        console.log(evento.target.value)
        funcao(evento.target.value)
    }

    function handleClick(){
        switch (operador) {
            case '+':
                alert(Number(num1)+ Number(num2))
                break;
            case '+':
                alert(num1 - num2)
                break;
            case '*':
                alert(num1 * num2)
                break;
            case '/':
                alert(num1 / num2)
                break;            
            default:
                alert('Operação não suportada')
                break;
        }
    }

    return(
        <>

        <input type="number" placeholder="Numero 1" id="num1" onChange={(e)=> handleChange(e, setNum1)}/>
        <input type="number" placeholder="Numero 2" id="num2" onChange={(e)=> handleChange(e, setNum2)}/>
        <input type="text" placeholder="Operador" id="operador" onChange={(e)=> handleChange(e, setOperador)}/>
        <button onClick={handleClick}>Click para calcular</button>
        
        </>
    )
}

export default Calculadora