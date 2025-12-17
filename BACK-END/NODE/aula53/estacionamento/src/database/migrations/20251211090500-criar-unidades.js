'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('unidades', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      nome_unidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      horario_abertura: {
        type: Sequelize.TIME,
        allowNull: false
      },
      horario_fechamento: {
        type: Sequelize.TIME,
        allowNull: false
      },
      valor_hora: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      valor_diaria: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  down: async (queryInterface /* , Sequelize */) => {
    await queryInterface.dropTable('unidades');
  }
};
