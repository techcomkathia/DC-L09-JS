import { Button } from "react-bootstrap";

//CRIAR UM COMPONENTE QUE RENDERIZE UMA LISTA DE BOTÕES, A PARTIR DE UM ARRAY DE PALAVRAS

function ListaBotoes({array}){
 return(
    <div>
        {array.map((palavra)=>{
            console.log(palavra)

            return (<Button className="mx-3">{palavra}</Button>)            
            })
        }
    </div>
 )
}

export default ListaBotoes;