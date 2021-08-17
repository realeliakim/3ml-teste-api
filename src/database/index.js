import Sequelize from 'sequelize';
import Cargo from '../app/models/Cargos';
import Funcionario from '../app/models/Funcionarios';
import databaseConfig from '../config/database';

const models = [Cargo, Funcionario];

class Database {
  constructor() {
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();