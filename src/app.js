import express from 'express';
import routes from './routes';
import cors from 'cors';
import './database';

class App{

  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
    
  }
  
  middlewares(){
    this.server.use(express.json());
    this.server.use(cors());
  }
  
  routes(){
    this.server.use(routes);
  }

  cors(){
    //const app = express();
    this.server.use(cors());
  }

}

export default new App().server;