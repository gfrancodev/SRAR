import { Request, Response, NextFunction } from 'express';

export interface IRedirectSwagger {
  documentation(request: Request, response: Response, next: NextFunction):Promise<void>
}
