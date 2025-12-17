const clienteService = require('../services/clienteService');

async function criar(req, res) {
    try {
        const novoCliente = await clienteService.criarCliente(req.body);
        return res.status(201).json(novoCliente);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao criar cliente', detalhe: error.message });
    }
}

async function listar(req, res) {
    try {
        const clientes = await clienteService.listarClientes();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar clientes', detalhe: error.message });
    }
}

async function buscarPorId(req, res) {
    try {
        const cliente = await clienteService.buscarClientePorId(req.params.id);
        if (!cliente) {
            return res.status(404).json({ erro: 'Cliente não encontrado' });
        }
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar cliente', detalhe: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const clienteAtualizado = await clienteService.atualizarCliente(req.params.id, req.body);

        if (!clienteAtualizado) {
            return res.status(404).json({ erro: 'Cliente não encontrado' });
        }

        return res.status(200).json(clienteAtualizado);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar cliente', detalhe: error.message });
    }
}

async function deletar(req, res) {
    try {
        const resultado = await clienteService.deletarCliente(req.params.id);

        if (!resultado) {
            return res.status(404).json({ erro: 'Cliente não encontrado' });
        }

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao deletar cliente', detalhe: error.message });
    }
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    atualizar,
    deletar
};
