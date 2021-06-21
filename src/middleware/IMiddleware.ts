import { NextFunction, Request, Response} from 'express';

export interface IMiddleware {
  local(error: ErrorEvent,request:Request, response:Response, next:NextFunction): Promise<Response | void>
  bearer(request:Request, response:Response, next:NextFunction): Promise<void>
}
