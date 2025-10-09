import {styled} from 'styled-components'

export const Botao = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    :hover {
        background-color: #e2ed09;
        color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`

export default function BotaoStyled(){
    return(
        <div>
            h1
            <Botao>Enviar</Botao>
        </div>

    )
}
