import { useContext } from "react";
import { MeuContexto } from "./MeuContexto";

function CardUsuario() {
    const {usuario, setUsuario} = useContext(MeuContexto)
    return (
        <div className="card">
            <h2>{usuario.nome}</h2>
            <p>{usuario.email}</p>

           <button onClick={()=> setUsuario({nome:prompt('Digite o nome'), email:prompt('Digite o email'), descricao:prompt('Digite a descricao')})}>Editar</button>
        </div>
    );
}

export default CardUsuario