module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cargos',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
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
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('cargos');
  }
};