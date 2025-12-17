'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movimentacoes', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      unidade_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'unidades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      cliente_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      entrada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      saida: {
        type: Sequelize.DATE,
        allowNull: true
      },
      total_horas: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      valor_total: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('aberta', 'finalizada', 'cancelada'),
        allowNull: false,
        defaultValue: 'aberta'
      },
      observacoes: {
        type: Sequelize.TEXT,
        allowNull: true
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
    await queryInterface.dropTable('movimentacoes');
  }
};
