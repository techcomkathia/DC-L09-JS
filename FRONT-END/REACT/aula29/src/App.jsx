import Logo from './assets/react.svg'
import './App.css'
import MeuComponente from './componentes/MeuComponente'
import TituloComProps from './componentes/TituloComProps'
import CardProduto from './componentes/CardProduto'
import Container from './componentes/Container'
import ContainerProdutos from './componentes/ContainerProdutos'
import Pai from './componentes/Pai'
import Js from '../src/assets/js.png'

function App() {
  return (
    // <>  
    //   <img src={Logo} alt="logo react" />
    //   <MeuComponente/>
    //   <MeuComponente/>

    //   <TituloComProps titulo="Titulo com props" texto="Parágrafo com props"/>
    //   <TituloComProps titulo="Titulo com props 2" texto="Parágrafo com props 2" cor="blue"/>

    //   <h1>Atividade 1</h1>
    //   <p>Crie um componente chamado cardProduto.Esse compente deverá ter propriedades. Elas serão:img - link de uma imagem ou um import de imagem interno, nome- nome do produto que será utilizado em um h2,preço- preço que será utiulizado em um h3, descricao - texto do produto</p>

    //   <ContainerProdutos>
    //     <CardProduto img={Logo} nome ='Produto1' preco='R$ 100,00' descricao= 'Exemplo de produto para a atividade'/>
    //     <CardProduto img={Logo} nome ='Produto2' preco='R$ 500,00' descricao= 'Exemplo de produto 2 para a atividade 1 com mais texto'/>
    //     <CardProduto img={Logo} nome ='Produto3' preco='R$ 5600,00' descricao= 'Exemplo de produto para a atividade'/>
    //   </ContainerProdutos>
             
    

  
    //   <Container>
    //     <img src={Logo} alt="" />
    //     <img src={Logo} alt="" />
    //     <img src={Logo} alt="" />
    //   </Container>



      
    // </>

    <>

    <Pai conteudo = 'exemplo props'>
      <img src={Logo} alt="" />
      <img src={Js} alt="" />
    </Pai>
    
    </>
  )
}

export default App
