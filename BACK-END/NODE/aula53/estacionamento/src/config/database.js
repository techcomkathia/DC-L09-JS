const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('estacionamentoFinal', 'root', 'km2015', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // desativa logs de SQL no console (opcional)
    define: {
        timestamps: true,   // adiciona createdAt e updatedAt automaticamente
        underscored: true,  // usa snake_case no banco
    }
});

module.exports = sequelize;