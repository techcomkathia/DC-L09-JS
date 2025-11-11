import { createGlobalStyle } from "styled-components";



export const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({temas}) => temas.cores.p};
        color: ${({temas}) => temas.cores.b};
        font-family: ${({temas}) => temas.fontes.secundaria};
    }
`

