import { NextFunction, Request, Response } from 'express'

export interface IMiddleware {
  notFound: (request:Request, response: Response, next: NextFunction) => Response | void
  bearer: (request:Request, response:Response, next:NextFunction) => void
}
