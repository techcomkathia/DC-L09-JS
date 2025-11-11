import './ContainerProdutos.css'

// //3) Crie um componente chamado ContainerProduto que possa receber como filhos elementos através do props.childrens, faça a estilização aplicando classes e inporte no app. Utilize esse componente para agrupar os cardProdutos 

function ContainerProdutos(props){
    return(
        <div className="boxProdutos">
            {props.children}
        </div>
    )
}

export default ContainerProdutos