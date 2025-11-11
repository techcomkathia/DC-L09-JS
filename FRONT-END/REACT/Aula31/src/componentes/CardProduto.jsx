import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
// 1) Use o componente Card e o Button do react-bootstrap para criar um CardProduto. 
// Esse componente terá as seguintes props : nomeProduto, descricaoProduto, precoProduto, imagemProduto
// Após criar o componente CardProduto importe no app e crie 2 exemplos de uso. 
function CardProduto({nomeProduto, descricaoProduto, precoProduto, imagemProduto}){

    return(
        <Card style={{ width: '18rem' }} className='my-5'>
        <Card.Img variant="top" src={imagemProduto}  alt="imagem produto"/>
        <Card.Body>
            <Card.Title>{nomeProduto}</Card.Title>
            <Card.Text>{descricaoProduto}</Card.Text>
            <Card.Text> R$ {precoProduto}</Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
        </Card>
  );
}

export default CardProduto;