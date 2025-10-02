import ComponenteA from './componentes/ComponenteA'
import './App.css'
import { MeuContextoProvider, MeuContexto} from './componentes/MeuContexto'
import CardUsuario from './componentes/CardUsuario'
import DetalheUsuario from './componentes/DetalheUsuario'
import { ContextoLista, ContextoListaProvider } from './componentes/atividade1/ContextoLista'
import FormularioTarefas from './componentes/atividade1/FormularioTarefas'
import ListaImportantes from './componentes/atividade1/ListaImportantes'

function App() {
 
  return (
    <>
      <h1>Aula 34</h1>

      {/* <ComponenteA objeto={{nome: 'João', idade: 25}} /> */}

      {/* <MeuContextoProvider>

          <CardUsuario />
          <DetalheUsuario />
      
      </MeuContextoProvider> */}

      <ContextoListaProvider>
        <FormularioTarefas />
        <ListaImportantes />
      </ContextoListaProvider>
    </>
  )
}

export default App
