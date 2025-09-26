import { useState } from "react";

function Formulario(){

    const [nome, setNome]= useState('')
    const [email, setEmail]= useState('')

    function handleChange(e){
        setNome(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        //remoção do evento padrão ( envio do formulário e limpeza dos campos de input)
        alert(`O formulário foi enviado com as informações de ${nome}`)
        setNome('')
        setEmail('')
    }


    return (

        <form action="#" onSubmit={handleSubmit}>

            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" onChange={handleChange} value={nome}/>

            <label htmlFor="Email">email</label>
            <input type="email" name="" id="email" onChange={(e)=> setEmail(e.target.value)} value={email} />

            <input type='submit' value={'enviar'} />

        </form>
    )
}

export default Formulario