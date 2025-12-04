const sequelize = require('./ConfigBanco')
const { DataTypes } = require('sequelize')

const UsuariosModel = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(200),
        allowNull: false,
        //valor padrão do hash 123Mudar
        defaultValue: '$2a$12$i85tZYzljbZY02ec4GzIZOJW4dc8S/tQXM6TeusTX2AEgy8wPTGRe' //123mudar

    }
})

module.exports = UsuariosModel