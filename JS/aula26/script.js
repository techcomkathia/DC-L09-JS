fetch('https://viacep.com.br/ws/01001000/json')//promisse
.then((response)=> response.json()) //convertemos o corpo da resposta para objeto
.then(objetoResposta => console.log(objetoResposta))
.catch((erro)=>{
    console.log('Deu ruim')
    console.log(erro.message)
})

console.log(2+2) //sincrona

//utilize o cep da sua residência e mostre o nome da rua no console

//fecth é o método para consumo de API ( ele recebe como parâmetro uma url -> observar a documentação da api para usar corretamente)
//then é um método para promisses (que são sempre retornadas pelo fecth)
// cada then capta o retorno do método anterior, e executa uma função de callback para a promisse quando ela for cumprida.
//catch que é o método que capta erros em qualquer etapa ou método anterior. Impede que o programa/ aplicação quebre com um erro de sistema

