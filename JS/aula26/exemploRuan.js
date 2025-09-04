function buscarCep() {
    let cep = prompt("Qual cep deseja buscar? ")
    let url = "https://brasilapi.com.br/api/cep/v2/" + cep
    console.log(url)

    fetch(url)
        .then((resposta)=>{
            resposta.json() //converter o corpo da resposta(promisse)
            //retornar no formato de objeto
        })
        .then((dados)=>{
                console.log(dados)
                alert("Sua cidade é " + dados.city + ", no estado do " + dados.state)
                return dados
        })
        .then((retorno)=>{
            alert(retorno.rua)
        })
        .catch((erro)=>{
            console.log("ocorreu um erro ao buscar os dados!", erro)
        })

}

buscarCep()