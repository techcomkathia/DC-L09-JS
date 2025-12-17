const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Bem-vindo ao Estacionamento',
        version: '1.0.0',
        author: 'Káthia Rocha'
    });
});

const clienteRoutes = require('./routes/clienteRoutes');

app.use('/clientes', clienteRoutes);

module.exports = app;
