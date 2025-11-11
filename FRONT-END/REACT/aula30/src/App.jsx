import { useState } from 'react'
import './App.css'
import Atividade1 from './componentes/Atividade1'
import Atividade2 from './componentes/Atividade2'
import Titulo from './componentes/Titulo'
import Atividade3 from './componentes/Atividade3'

function App() {
  let x = 5
  function adicionarMaisUm(){
    x++
    console.log(x)
  }
  const [coisa, setCoisa]= useState(100)

  let listaTitulos = ['Título 1', 'Título 2', 'Título 3', 'Título 4', 'Título 5', 'Título 6' ]

  return (

    <div>
         <div id='exemploListaComMap' style={{backgroundColor:'green'}}>
        {
          listaTitulos.map((item)=><Titulo texto={item}/>
          )
        }
    </div>

    <Atividade3/>
    </div>

 
    /*<>
      <h1>Aula 30</h1>
      <h2>{x}</h2>
      <button onClick={adicionarMaisUm}>Adicionar mais um ao x</button>

      <h2>{coisa}</h2>
      <button onClick={()=>setCoisa(coisa + 1)}>Adicionar mais um ao coisa</button>

      <Atividade1 />

      <Atividade2/>
    </>*/
    // <>
    //   <div id='exemploListaManual' style={{backgroundColor:'red'}}>
    //     <Titulo texto= {listaTitulos[0]}/> 
    //     <Titulo texto= {listaTitulos[1]}/> 
    //     <Titulo texto= {listaTitulos[2]}/> 
    //   </div>

      
      
   
    // </>




  )
}

export default App
