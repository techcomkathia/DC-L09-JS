import ComponenteA from './componentes/ComponenteA'
import './App.css'
import { MeuContextoProvider, MeuContexto} from './componentes/MeuContexto'
import CardUsuario from './componentes/CardUsuario'
import DetalheUsuario from './componentes/DetalheUsuario'
import { ContextoLista, ContextoListaProvider } from './componentes/atividade1/ContextoLista'
import FormularioTarefas from './componentes/atividade1/FormularioTarefas'
import ListaImportantes from './componentes/atividade1/ListaImportantes'
import ListaNormais from './componentes/atividade1/ListaNormais'
import ContagemFuncionarios from './componentes/atividade2/ContagemFuncionarios'
import { ContextoFuncionarios, ContextoFuncionariosProvider } from './componentes/atividade2/ContextoFuncionarios'
import ListaFuncionarios from './componentes/atividade2/ListaFuncionarios'
function App() {
 
  return (
    <>
      <h1>Aula 34</h1>

      {/* Atividade 2 */}
      <ContextoFuncionariosProvider>
        <ContagemFuncionarios />
        <ListaFuncionarios />
        {/* formularioCadastroFuncionario */}
      </ContextoFuncionariosProvider>


      {/* <ComponenteA objeto={{nome: 'João', idade: 25}} /> */}

      {/* <MeuContextoProvider>

          <CardUsuario />
          <DetalheUsuario />
      
      </MeuContextoProvider> */}

      {/* Atividade 1 */}
      <ContextoListaProvider>
        <FormularioTarefas />
        <ListaImportantes />
        <ListaNormais />        
      </ContextoListaProvider>
      
    </>
  )
}

export default App
