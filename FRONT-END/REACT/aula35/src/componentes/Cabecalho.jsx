import { Link } from "react-router-dom"; // permite navegar entre as rotas (navegação internamente)
import Home from "../paginas/Home";
import SobreNos from "../paginas/SobreNos";
import Logo from "../assets/react.svg";

export default function Cabecalho(){
    return(
        <ul>
            <li>
                <Link to="/">
                     <img src={Logo} alt="" />
                </Link>
            </li>
            <li>
                <Link to="/sobrenos">Sobre Nós</Link>
            </li>
        </ul>
    )
}