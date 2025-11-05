// criar um recurso que será exportado para consumir em outro arquivo

//definindo uma funcao
function dizerOla(){
    return('Olá mundo!')
}

function funcao2(){
    return(2+2)
}

//exportando a funcao
module.exports = {
    dizerOla,
    funcao2
}