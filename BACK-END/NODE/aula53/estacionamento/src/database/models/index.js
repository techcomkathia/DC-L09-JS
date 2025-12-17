const Usuario = require('./usuario');
const Unidade = require('./unidade');
const Cliente = require('./cliente');
const Movimentacao = require('./movimentacao');
const Pagamento = require('./pagamento');

// Relacionamentos

// Unidade -> Movimentações
Unidade.hasMany(Movimentacao, { foreignKey: 'unidade_id' });
Movimentacao.belongsTo(Unidade, { foreignKey: 'unidade_id' });

// Cliente -> Movimentações
Cliente.hasMany(Movimentacao, { foreignKey: 'cliente_id' });
Movimentacao.belongsTo(Cliente, { foreignKey: 'cliente_id' });

// Movimentação -> Pagamento
Movimentacao.hasOne(Pagamento, { foreignKey: 'movimentacao_id' });
Pagamento.belongsTo(Movimentacao, { foreignKey: 'movimentacao_id' });

module.exports = {
    Usuario,
    Unidade,
    Cliente,
    Movimentacao,
    Pagamento
};
