function Pai(props){
    //agrupa todos os componnetes ou tags que forem posicionados dentro das tags de abertura e fechamento deste componente

    return(
        <div>
            <h1>Todos os elementos abaixo foram passados para o componente Pai como filhos, através do props.children</h1>

            <h2>{props.conteudo}</h2>

            <div id="elementosFilhos">
               {props.children} 
            </div>            
        </div>
    )
}

export default Pai