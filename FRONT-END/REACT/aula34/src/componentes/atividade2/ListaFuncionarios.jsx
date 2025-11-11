import { useContext } from "react";
import { ContextoFuncionarios } from "./ContextoFuncionarios";

export default function ListaFuncionarios() {
    const {funcionarios} = useContext(ContextoFuncionarios) // desestruturando o objeto do contexto para uma variavel

    return(
    <ul>
        {funcionarios.map((funcionario, index)=>{
            return(
            <li key={index}>{funcionario.nome} - {funcionario.cargo}</li>
            )
        })}
    </ul>
    )
}