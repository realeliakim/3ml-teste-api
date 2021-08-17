import { Router } from 'express';
import FuncionarioController from './app/controllers/FuncionarioController';
import CargoController from './app/controllers/CargoController';

const routes = new Router();

routes.get('/cargos', CargoController.index);
routes.post('/cargos', CargoController.store);
routes.put('/cargos/:id', CargoController.update);
routes.delete('/cargos/:id', CargoController.delete);

routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.store);
routes.put('/funcionarios/:id', FuncionarioController.update);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

export default routes;