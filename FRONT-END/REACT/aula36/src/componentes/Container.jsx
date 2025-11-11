
import styled from 'styled-components'

export const DivStyled = styled.div`
//caso receba centro todo o conteúdo da div será centralizado
/* text-align: ${props => props.centro ? 'center' : 'left'}; */
display: flex;
flex-direction: column;
align-items: ${({centro}) => {
    if(centro == 1){
        return 'center'
    }
    else if(centro == 0){
        return 'left'
    }
}};
`

export default function Container({centro, children}){
    return(
        <DivStyled centro={centro}>
            <h1>Container exemplo props para estilização</h1>
            {children}

            
        </DivStyled>
    )
}