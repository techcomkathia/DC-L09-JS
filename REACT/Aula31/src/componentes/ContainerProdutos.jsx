import CardProduto from "./CardProduto";

function ContainerProdutos({arrayProdutos}){
    return(
        <div className="d-flex flex-wrap justify-content-center border border-black p-2">
            
            {
                arrayProdutos.map((objProduto)=>{
                 return(
                    <CardProduto nomeProduto={objProduto.nome} imagemProduto={objProduto.imagem} descricaoProduto={objProduto.descricao} precoProduto={objProduto.preco}/>
                 )}
                )
            }
        </div>
    )
}

export default ContainerProdutos