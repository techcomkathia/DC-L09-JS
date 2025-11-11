import { useState } from 'react'
/* 2) Crie um componente que trabalhe com 2 botões.
//cada botão terá oi comportamento de alterar a imagem da lampada que será renderizada
// crie um botãio de ligar e outro de desligar
// e abaixo a imagem da lampada, que inicialmente será a da lampada acesa. 
acesa : https://i.sstatic.net/ybxlO.jpg
apagada: https://i.sstatic.net/b983w.jpg
quebrada: https://i.sstatic.net/MRjsF.jpg*/ 
import acesa from '../assets/ybxlO.jpg'
import apagada from '../assets/b983w.jpg'
function Atividade2() {
    //const acesa = 'https://i.sstatic.net/ybxlO.jpg'
    //const apagada = 'https://i.sstatic.net/b983w.jpg'

    const [url, setUrl] = useState(acesa)

    return(
        <div>
            <img src={url} alt="atividade 2" />
            <div>
                <button onClick={()=> setUrl(acesa)}>Ligar</button>
                <button onClick={()=> setUrl(apagada)}>Desligar</button>
            </div>
        </div>
    )    
}

export default Atividade2