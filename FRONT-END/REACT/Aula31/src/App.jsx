
import './App.css' //importação do css prórpio da app
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import CardProduto from './componentes/CardProduto'
import ListaBotoes from './componentes/ListaBotoes'
import listaDeProdutos from './componentes/listaProdutos'
import ContainerProdutos from './componentes/ContainerProdutos'
import Titulo from './componentes/Titulo'

function App() {

  let textos = ['casa', 'abacaxi', 'maçã', 'caderno', 'teclado']
 
  return (
    <>

      <Titulo>Aula 31</Titulo>
      
      <h1 className='text-primary text-center '>Aula 31</h1>

      <ContainerProdutos arrayProdutos={listaDeProdutos}/>

      <CardProduto  nomeProduto={'Exemplo 1'} descricaoProduto={'Texto descritivo'} precoProduto={'100,00'} imagemProduto={'https://placehold.co/600x400'}/>

      {/* MANEIRA NÃO INDICADA */}

      <div id='listaManual' className='border border-danger d-flex '>
        <CardProduto  nomeProduto={listaDeProdutos[0].nome} descricaoProduto={listaDeProdutos[0].descricao} precoProduto={listaDeProdutos[0].preco} imagemProduto={listaDeProdutos[0].imagem}/>
        <CardProduto  nomeProduto={listaDeProdutos[1].nome} descricaoProduto={listaDeProdutos[1].descricao} precoProduto={listaDeProdutos[1].preco} imagemProduto={listaDeProdutos[1].imagem}/>
        <CardProduto  nomeProduto={listaDeProdutos[2].nome} descricaoProduto={listaDeProdutos[2].descricao} precoProduto={listaDeProdutos[2].preco} imagemProduto={listaDeProdutos[2].imagem}/>

        <CardProduto  nomeProduto={listaDeProdutos[3].nome} descricaoProduto={listaDeProdutos[3].descricao} precoProduto={listaDeProdutos[3].preco} imagemProduto={listaDeProdutos[3].imagem}/>
      </div>















      <Button variant='outline-primary'> Texto do componente </Button>


     

      <ListaBotoes array={textos}/>
    </>
  )
}

export default App
