import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './componentes/Titulo.jsx'
import ImagemDetalhe from './componentes/ImagemDetalhe.jsx'
import BoxTexto from './componentes/BoxTexto.jsx'

function App() {
  const [count, setCount] = useState(0)
  let x = 5
  function adicionarMaisUm(){
    x++
    console.log(x)
  }

  return (
    <>
      <Titulo />
      <Titulo />
      <BoxTexto/>
      <ImagemDetalhe/>
    </>
  )
}

export default App
