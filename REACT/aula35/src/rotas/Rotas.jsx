import Home from "../paginas/Home";
import SobreNos from "../paginas/SobreNos";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";

// import do Roteador, um recurso do react-router-dom
import { Routes, Route } from "react-router-dom";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobrenos/:id" element={<SobreNos />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}