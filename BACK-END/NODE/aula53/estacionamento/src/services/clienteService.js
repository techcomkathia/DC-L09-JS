const Cliente = require('../database/models/cliente');

async function criarCliente(dados) {
    return await Cliente.create(dados);
}

async function listarClientes() {
    return await Cliente.findAll();
}

async function buscarClientePorId(id) {
    return await Cliente.findByPk(id);
}

async function atualizarCliente(id, dados) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;

    await cliente.update(dados);
    return cliente;
}

async function deletarCliente(id) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;

    await cliente.destroy();
    return true;
}

module.exports = {
    criarCliente,
    listarClientes,
    buscarClientePorId,
    atualizarCliente,
    deletarCliente
};
