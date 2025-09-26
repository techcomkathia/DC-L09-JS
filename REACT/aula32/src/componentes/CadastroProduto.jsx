/* 2) Crie um formulário para cadastrar um produto. Esse formulário deverá ter os seguintes campos:
nome
imagem
preço 
descrição
Ao clicar no botão cadastrar as informações serão mostradas na tela */

import { useState } from "react"
const meuCss = {

    formulario: {border:'1px solid black',
                display: 'flex',
                flexDirection: 'column'},
    fontes: {
        color:'red'
    }
    
}

function CadastroProduto() {
    
    const[imagem, setImagem] = useState('')
    const[nome, setNome]= useState('')
    const[preco,setPreco]= useState(0)
    const[descricao, setDescricao]= useState('')

    const[produto, setProduto]= useState()

    function handleSubmit(e){
        e.preventDefault()
   
        setProduto({...produto, 'nome':nome, 'preco':preco})

        alert(`O produto foi criado com sucesso! Nome: ${nome}`)
        setNome('')
        setImagem('')
        setDescricao('')
        setPreco(0)
  
        console.log('todas as variáveis limpas para o próximo cadastro')

    }

    return(

        <>
            <form action="#" onSubmit={handleSubmit} style={meuCss.formulario}>
                <input type="text" placeholder="Nome do produto" id="nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                <input type="text" placeholder="Descrição do produto" id="descricao" value={descricao} onChange={(e)=> setDescricao(e.target.value)}/>
                <input type="number" placeholder="Preço do produto" id="preco" value={preco}
                onChange={(e)=> setPreco(e.target.value)}/>
                <input type="text" placeholder="Imagem do produto" id="imagem" value={imagem}
                onChange={(e)=> setImagem(e.target.value)}/>

                <input type="submit" value={'Enviar'}/>
            </form> 

            { produto && (
                <div style={meuCss.fontes}>
                    <h5>Nome Produto: {produto.nome}</h5>
                    <h5>Preço Produto{produto.preco}</h5>
                </div>
            )

            }    
        </>

    )

}

export default CadastroProduto