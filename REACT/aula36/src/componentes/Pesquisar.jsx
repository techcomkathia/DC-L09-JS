import { Botao } from "./BotaoStyled";
import styled from "styled-components";

export const InputPesquisar = styled.input`
    border:'1px solid blue';
    background-color: #87c8c8;

    &::placeholder{
        color:'red';
    }
`

export default function Pesquisar(){
    return(
        <>
         <h2>Atividade 1</h2>
         <form action="#">
            <InputPesquisar placeholder='digite aqui' value= 'valor inicial'></InputPesquisar>
            
            <Botao>Pesquisar</Botao>

         </form>
        
        </>
    )
}