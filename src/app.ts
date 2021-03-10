import { config } from 'dotenv';
import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import routes from './routes';
import { MongooConnect } from '../src/database/MongooConnect';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './documentation/config.json';
import { Failed } from '../src/entities/Failed';
const mongooConnect = new MongooConnect();

config();

class App {
    public express: express.Application;

    constructor (private MongooConnect: MongooConnect) {
      this.express = express();

      this.middleware();
      this.database();
      this.routes();
    }

    private middleware (): void {
      this.express.use(cors());
      this.express.use(express.json());
      this.express.use((error:Error, request:Request, response: Response, _next: NextFunction) => {
        if (error instanceof Failed) {
          return response.status(error.statusCode).json({
            message: error.message,
          });
        }

        return response.status(500).json({
          statusCode: "Error",
          message: `Internal server error ${error.message}`,
        });
      })
    }

    private database (): void {
        this.MongooConnect.connect();
    }

    private routes (): void {
        this.express.use(routes);
        this.express.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.express.use((request: Request, response: Response, next: NextFunction) => {
          return response.redirect('/documentation');
      })
    }
}

export default new App(mongooConnect).express
