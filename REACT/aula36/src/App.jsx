import { Botao } from './componentes/BotaoStyled'
import BotaoStyled from './componentes/BotaoStyled'
import './App.css'
import { Titulo } from './componentes/TituloStyled'
import Pesquisar from './componentes/Pesquisar'
import Container from './componentes/Container'


import { ThemeProvider } from 'styled-components'
import { EstiloGlobal } from './estilos/EstiloGlobal'
import { temas } from './estilos/Temas'


// function App() {
 
//   return (
//     <>
//       <h1>Aula 36</h1>
//       <Botao>Clique aqui</Botao>
//       <BotaoStyled/>  
//       <Titulo primary='true' cor='black'>Principal</Titulo> 

//       <Pesquisar/>

//       <Container centro>
//         <h1>Conteudo 1</h1>
//         <h1>Conteudo 2</h1>
//         <h1>Conteudo 3</h1>
//       </Container>
//     </>
//   )
// }

function App() {
  return (
    <>
      <ThemeProvider theme={temas}>
        <EstiloGlobal/>
          
        
      </ThemeProvider>
    </>
  )
}

export default App
