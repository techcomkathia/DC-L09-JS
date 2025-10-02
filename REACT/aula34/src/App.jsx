import ComponenteA from './componentes/ComponenteA'
import './App.css'
import { MeuContextoProvider, MeuContexto} from './componentes/MeuContexto'
import CardUsuario from './componentes/CardUsuario'
import DetalheUsuario from './componentes/DetalheUsuario'

function App() {
 
  return (
    <>
      <h1>Aula 34</h1>

      <ComponenteA objeto={{nome: 'João', idade: 25}} />

      <MeuContextoProvider>

        <CardUsuario />
        <DetalheUsuario />
      
      </MeuContextoProvider>
    </>
  )
}

export default App
