import Sequelize, { Model } from 'sequelize';

class Funcionarios extends Model{
  static init(sequelize){
    super.init(
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        nascimento: Sequelize.DATE,
        salario: Sequelize.STRING,
        cargo_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models){
    this.belongsTo(models.Cargos, { foreignKey: 'cargo_id', as: 'cargo' })
  }

}

export default Funcionarios;