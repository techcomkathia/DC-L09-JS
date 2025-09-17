import './CardProduto.css'


/* 1) Crie um componente chamado cardProduto. 
Esse compente deverá ter propriedades. Elas serão:
img -> link de uma imagem ou um import de imagem interno
nome-> nome do produto que será utilizado em um h2
preço-> preço que será utiulizado em um h3
descricao -> texto do produto 
use o componente 3x com conteúdos diferentes no app
*/


// 2) Crie um acrquivo para estilizar o cardProduto aplique as classes aos elementos do cardProduto

function CardProduto(props){
    return(
        < div className='boxCard' >
            <img className='imgCard' src={props.img} alt={props.nome} />
            <h2 className='tituloProduto'>{props.nome}</h2>
            <h3 className='precoProduto'>{props.preco}</h3>
            <p className='descricaoProduto'>{props.descricao}</p>
        </div>
    )
}

export default CardProduto
