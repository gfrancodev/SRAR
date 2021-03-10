import { NextFunction, Request, Response} from 'express';

export interface IMiddleware {
  private(request:Request, response:Response, next:NextFunction): Promise<any>
}
