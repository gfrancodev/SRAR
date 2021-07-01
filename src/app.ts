import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { MongooHelper } from './database/helpers/MongooHelper'
import routes from './routes'
import { Middleware } from './middleware/implementations/Middleware'
import { IMiddleware } from './middleware/IMiddleware'

config()

class App {
    public express: express.Application

    constructor (
      private readonly Database: MongooHelper,
      private readonly Middleware: IMiddleware
    ) {
      this.express = express()

      this.middleware()
      this.database()
      this.routes()
    }

    private middleware (): void {
      this.express.use(cors())
      this.express.use(express.json())
      this.express.disable('x-powered-by')
      this.express.use(compression())
    }

    private database (): void {
      this.Database.connect()
    }

    private routes (): void {
      this.express.use(routes)
      this.express.use(this.Middleware.notFound)
    }
}

const mongooConnect = new MongooHelper()
const middleware = new Middleware()

export default new App(mongooConnect, middleware).express
