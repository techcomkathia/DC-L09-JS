import { useEffect, useState } from "react";

//atividade 3 : crie um componente que mostre todos os feriados do ano de 2025 no sua montagem. Esse componente deverá utilizar a API do BrasilAPI para obter os feriados.
//Contará com um campo de input para permitir que o usuário digite um ano e um botão para buscar os feriados.

function ConsumoApi() {
    const [listaMunicipios, setListaMunicipios] = useState([])
    const[uf, setUf] = useState('CE')
    const [estado, setEstado] = useState('') //utilizada no input

    function buscarMunicipios() {
        fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}?providers=dados-abertos-br,gov,wikipedia`)
        .then((res) => res.json())
        .then((res) => {
            setListaMunicipios(res)
            console.log(res)
            console.log('Lista de municipios atualizada')
        }).catch((erro) => {console.log(erro) 
            setListaMunicipios([{nome: 'Uf inexistente'}])
        })     
    }

    //buscarMunicipios()
    useEffect(buscarMunicipios, [uf])

    return(
        <>
            <h1>Consumo API</h1>
            <p>Este componente utiliza informações da API do IBGE para montar a lista abaixo:</p>
   
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)}/>
                <button onClick={() => setUf(estado)}>Buscar</button>
            </form>

            
            <ol>
                {
                    listaMunicipios.map((item, index) => {
                        return(
                            <li key={index}>{item.nome}</li>
                        )
                    })
                }
            </ol>
        
        </>
    )
}

export default ConsumoApi