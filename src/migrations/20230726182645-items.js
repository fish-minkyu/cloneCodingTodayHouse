'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Items', 'content', {
      allowNull: false,
      type: Sequelize.STRING(3000),
    });
    await queryInterface.changeColumn('Items', 'coverImage', {
      allowNull: false,
      type: Sequelize.STRING(3000),
    });
    await queryInterface.changeColumn('Items', 'price', {
      allowNull: false,
      type: Sequelize.STRING,
    });

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
