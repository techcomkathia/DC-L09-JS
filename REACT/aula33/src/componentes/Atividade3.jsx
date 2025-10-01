// /atividade 3 : crie um componente que mostre todos os feriados do ano de 2025 no sua montagem. Esse componente deverá utilizar a API do BrasilAPI para obter os feriados.
//Contará com um campo de input para permitir que o usuário digite um ano e um botão para buscar os feriados.

import { use, useEffect, useState } from "react";

function Atividade3() {

    const [ano, setAno] = useState(0);
    const [buscaAno, setBuscaAno] = useState(2025);
    const [feriados, setFeriados] = useState([]);
   
    function handleSubmit(e){
        e.preventDefault()
        setBuscaAno(ano)
        console.log('A busca foi feita e a página foi atualizada com as informações de '+buscaAno)        
    }

    useEffect(()=>{
        fetch('https://brasilapi.com.br/api/feriados/v1/'+buscaAno)
        .then((resposta)=> resposta.json())
        .then((resposta)=>{setFeriados(resposta)})
        .catch((erro)=>{console.log(erro)})
    },[buscaAno])

    return(
        <>

            <h1>Atividade 3</h1>
            <h2>{buscaAno}</h2>

            <form action="#" onSubmit={handleSubmit}>
                <input type="number" name="ano" id="ano" placeholder="digite o ano para buscar os feriados" onChange={(e)=> setAno(e.target.value)}/><input type="submit" value="Buscar" />
            </form>

            <ol>
                {
                    feriados.map((objetoFeriado)=><li>{objetoFeriado.name} - {objetoFeriado.date}</li>)
                }
            </ol>
        </>
    )


}

export default Atividade3