
import './App.css'
// no arquivo principal do projeto importar as rotas para que a navegação funcione
import Rotas from './rotas/Rotas'
//importar a função do react router dom para que as rotas funcionem
import { BrowserRouter } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'
import { ObjetosContext, ObjetosProvider } from './contexto/ObjetosContext'

function App() {
 

  return (
    <>
      <h1>Aula 35</h1>
      <ObjetosProvider>
        <BrowserRouter>
          
            <Cabecalho/>
            <Rotas/>
          
        </BrowserRouter>
      </ObjetosProvider>
    </>
  )
}

export default App
