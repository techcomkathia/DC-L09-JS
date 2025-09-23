import { useState } from 'react'

//1) Para exercitar o conceito de atualização de estado e renderização de uma nova versão do componente, 
//crie um componente que tenha um título e 3 botões.
// cada botão terá o nome de uma cor, ao clicar no botão com o nome da cor o texto escrito dentro da tag do título deve mudar.
// você deverá usar a ideia de variável com estado contralado para responder essa questão. 

function Atividade1(){
    const [cor, setCor] = useState('click nos botões para alterar a cor')
    return(
        <div>
            <h1>{cor}</h1>
            <div>
                <button onClick={()=> setCor('vermelho')}>vermelho</button>
                <button onClick={()=> setCor('verde')}>verde</button>
                <button onClick={()=> setCor('amarelo')}>amarelo</button>
            </div>
        </div>
    )
}

export default Atividade1