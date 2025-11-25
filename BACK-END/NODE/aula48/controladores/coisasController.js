const coisasServices = require('../servicos/coisasServices')


function exibirInfoPrincipal(req, res) {
    res.json({
        api: 'Aula 48 de Node.js com a apresentação das camadas da aplicação no modelo MVC',
        nome: 'Káthia Rocha'
    })
    //não se faz acesso a camada de dados do modelo
    //por isso não é executado nenhum servico
}

function exibirTodasCoisas(req, res) {
    //executar serviço para verificar se existe informação no array de coisas
    const coisas = coisasServices.retornarTodasCoisas()
    //se existir retornar as coisas
    if(coisas) {
        res.status(200)
        res.json(coisas)
        console.log(coisas)
        console.log('Sucesso ao exibir coisas')
        return
    }

    //se nao existir retornar erro
    res.status(404)
    res.json({
        erro: 'Nenhuma coisa encontrada'
    })
    console.log('Nenhuma coisa encontrada')
    return

}


module.exports = {
    exibirInfoPrincipal,
    exibirTodasCoisas
}