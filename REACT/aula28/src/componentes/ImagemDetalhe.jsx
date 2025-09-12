//componente ImagemDetalhe: terá uma imagem e um parágrafo de descrição da imagem. Essa imagem usará um link de uma imagem da web (endereço original da imagem)
import NomeImagem from '../assets/imagemProjeto.jpg'

function ImagemDetalhe(){

    function dizerOi(){
        return('Olá Cleitinho!')
    }
    return(
        <>
            <img src="https://i.pinimg.com/736x/f3/f9/d9/f3f9d9501ae3b221764346be36517e78.jpg" alt=" logo react" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, quasi?</p>
            <p>A imagem abaixo é um arquivo interno ao projeto {dizerOi()}</p>
            <img src={NomeImagem} alt="descrição imagem" />
        </>
    )
}

export default ImagemDetalhe