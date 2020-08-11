'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      published_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('books')
  },
}
