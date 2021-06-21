import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { MongooConnect } from '../src/database/MongooConnect';
import routes from './routes';
import { Middleware } from './middleware/implementations/Middleware';
import { IMiddleware } from './middleware/IMiddleware';

config();

class App {
    public express: express.Application;

    constructor (
      private Database: MongooConnect,
      private Midddleare: IMiddleware
      ){
      this.express = express();

      this.middleware();
      this.database();
      this.routes();
    }

    private middleware (): void {
      this.express.use(cors());
      this.express.use(express.json());
      this.express.use(this.Midddleare.local)
    }

    private database (): void {
        this.Database.connect();
    }

    private routes (): void {
        this.express.use(routes);
    }
}

const mongooConnect = new MongooConnect();
const middlewarelocal = new Middleware()

export default new App(mongooConnect, middlewarelocal).express
