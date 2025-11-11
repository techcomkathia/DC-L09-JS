import { useContext } from "react"
import {MeuContexto} from "./MeuContexto"

function DetalheUsuario(){
    const {usuario, setUsuario} = useContext(MeuContexto)
    return(<p>{usuario.descricao}</p>)
}

export default DetalheUsuario