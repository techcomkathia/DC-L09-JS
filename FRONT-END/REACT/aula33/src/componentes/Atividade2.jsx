import { useState, useEffect } from "react";

function Atividade2() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [objeto, setObjeto] = useState(null)

    useEffect(()=>{

        // valida se existe o objeto, não executando a primeira renderaização da página(montagem do componente) apenas quando o objeto mudar
        if(objeto !== null){
            alert(`O formulário foi enviado com as informações de ${objeto.nome}`)
        }
         
    }, [objeto])


    function handleSubmit(e) {
        e.preventDefault()// Remove o comportamento padrão do formulário

        if(nome!== '' && email !== '' && senha !== '') {
            setObjeto({...objeto, nome, email, senha})
            console.log(objeto)
        }
        
       
        //limpeza dos campos
        setNome('')
        setEmail('')
        setSenha('')
    }


    return(
        <>
        
            <h1>Atividade 2</h1>

            <form action="#" onSubmit={handleSubmit}>

                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" onChange={(e)=> setNome(e.target.value)} value={nome}/>
                <br />

                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <br />

                <label htmlFor="senha">Senha</label>
                <input type="password" name="" id="senha" onChange={(e)=> setSenha(e.target.value)} value={senha}/>
                <br />

                <input type="submit" value={'Enviar'} />

            </form>
        
        </>
    )

}

export default Atividade2