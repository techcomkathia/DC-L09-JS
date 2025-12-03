// recebe o objeto da requisição com o seguinte formato :
/* 
{
    email: 'email',
    senha: 'senha'
}*/

//executa o serviço de buscarUsuarioPorEmail e com o bcrypt compare faz a comparação da senha armazenada no banco com a senha informada pelo usuário na requisição

//caso sejam iguais retorna 200 e uma mensagem de sucesso
//caso contrario retorna 400 e uma mensagem de erro

//DICAS: importante instalar a dependência (npm install bcrypt)
// modificar o modelo para que o campo de senha tenha até 200 caracteres
//poderá ser definido um valor padrão para o campo de senha
//importar os serviços de usuários e o bcrypt