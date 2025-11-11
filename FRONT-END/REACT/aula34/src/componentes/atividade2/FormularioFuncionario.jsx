import { useContext, useState } from "react";
import { ContextoFuncionarios } from "./ContextoFuncionarios";

function FormularioFuncionario() {
    const {funcionarios, setFuncionarios} = useContext(ContextoFuncionarios) // desestruturando o objeto do contexto para uma variavel

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');

    function cadastrarFuncionario(){
        const novoFuncionario ={nome:nome, cargo:cargo} //construção do novo funcionario no modelo para o array de funcionarios

        //atualizar a variável compartilhada no contexto
        setFuncionarios([...funcionarios, novoFuncionario])

    }


    return(
        <form action="#" onSub mit={(e) => e.preventDefault()}>
            <input type="text" name="nome" id="nome" placeholder="Digite o nome" onChange={(e)=>{ setNome(e.target.value)}}/>
            <input type="text" name="cargo" id="cargo" placeholder="Digite o cargo" onChange={(e)=>{ setCargo(e.target.value)}} />
            <button onClick={cadastrarFuncionario}>Cadastrar</button>
        </form>
    )
}

export default FormularioFuncionario