import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ObjetosContext } from "../contexto/ObjetosContext";

export default function SobreNos() {
    let {objetos} = useContext(ObjetosContext)
    
    //captar um parametro do path e exibir na tela
    const {id} = useParams()
    return (


        <>
            <h2>Sobre Nós</h2>
            <h2>{id}</h2>
            {/* exibição apenas do objeto com o id capturado */}
            {
                objetos.filter(objeto => objeto.id == id).map(objeto => <p>{objeto.titulo}</p>)
            }
        </>
    )
}