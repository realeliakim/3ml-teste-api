module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarios',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      salario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cargo_id: {
        type: Sequelize.INTEGER,
        references:{ model: 'cargos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('funcionarios');
  }
};
