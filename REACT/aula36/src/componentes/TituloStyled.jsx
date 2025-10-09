import {styled} from 'styled-components'

//caso o titulo receba a props importante com o valor de true, será renderizado com o background vermelho
// export const  Titulo = styled.h1`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => props.primary ? "#BF4F74" : "white"};
//   color: ${(props => props.primary ? "white" : "#BF4F74")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #BF4F74;
//   border-radius: 3px;
// `;


export const  Titulo = styled.h1`
  /* Adapt the colors based on primary prop */
  background: ${({primary}) => primary ? "red" : "blue"};
  color: ${({cor}) => cor};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;
