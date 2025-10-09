import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({tema}) => tema.cores.p};
        color: ${({tema}) => tema.cores.b};
        font-family: ${({tema}) => tema.fontes.secundaria};
    }
`

