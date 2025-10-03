import { useContext } from "react";
import { ContextoFuncionarios } from "./ContextoFuncionarios";

export default function ContagemFuncionarios() {
    const {funcionarios} = useContext(ContextoFuncionarios) // desestruturando o objetop do contexto para uma variavel

    return(<h2>A empresa conta com {funcionarios.length} funcionários</h2>)
}

