import CardProduto from "./CardProduto";

const produtos = [
  {
    id: 1,
    img: "https://placehold.co/200x150",
    nome: "Camiseta Básica",
    preco: "R$ 49,90",
    descricao: "Camiseta 100% algodão, confortável e ideal para o dia a dia."
  },
  {
    id: 2,
    img: "https://placehold.co/200x150",
    nome: "Tênis Casual",
    preco: "R$ 199,90",
    descricao: "Tênis versátil e leve, ótimo para passeios e uso diário."
  },
  {
    id: 3,
    img: "https://placehold.co/200x150",
    nome: "Mochila Escolar",
    preco: "R$ 129,90",
    descricao: "Mochila resistente com vários compartimentos e alças ajustáveis."
  },
  {
    id: 4,
    img: "https://placehold.co/200x150",
    nome: "Relógio Digital",
    preco: "R$ 89,90",
    descricao: "Relógio moderno com cronômetro, alarme e iluminação noturna."
  },
  {
    id: 5,
    img: "https://placehold.co/200x150",
    nome: "Fone de Ouvido Bluetooth",
    preco: "R$ 149,90",
    descricao: "Fones sem fio com ótima qualidade de som e bateria duradoura."
  }
];

function Atividade3 (){
    return(
        <div>
            {
                produtos.map((itemArray)=>
                    <CardProduto 
                        img={itemArray.img}
                        preco ={itemArray.preco}
                        descricao = {itemArray.descricao}
                        nome = {itemArray.nome}
                    />
                )
            }
        </div>

    )
}

export default Atividade3