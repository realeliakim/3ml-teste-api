import Sequelize, { Model } from 'sequelize';

class Cargos extends Model {
  static init(sequelize){
    super.init(
      {
        cargo: Sequelize.STRING,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

 
}

export default Cargos;
/*
Cargo.init({
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING
  }
}, {
  sequelize, 
  modelName: 'cargos'
});

Cargo.associate = models => {
  Cargo.hasMany(models.Funcionarios);
};
*/


