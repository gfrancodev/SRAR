import { NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import { IMiddleware } from '../IMiddleware';

export class Middleware implements IMiddleware{

    public async local(error: any, request:Request, response:Response, next:NextFunction): Promise<Response | void> {
      response.set({'X-Powered-By': 'Gfrancodev' })

      if (error.statusCode === 400) {
        return response.status(422).json({ error: "Unprocessable syntax" })
      }

      return next()
    }

    public async bearer(request:Request, response:Response, next:NextFunction): Promise<any> {
        const authHeader = request.headers.authorization

        if (!authHeader)
            return response.status(401).json({
              statusCode: 401,
              message: 'No token provided'
            })

        const parts = authHeader.split(' ')

        if (parts.length != 2)
            return response.status(401).json({
              statusCode: 401,
              message: 'Token error'
            })

        const [ scheme, token ] = parts

        if (!/Bearer$/i.test(scheme))
            return response.status(401).json({
              statusCode: 401,
              message: 'Token badformated'
            })

        jwt.verify(token, process.env.SECRET, (err: any, decoded:any): void | Response => {
            if(err)
                return response.status(401).json({
                  statusCode: 401,
                  message: 'Token invalid'
                })

            request.params.userId = decoded._id

            return next()
        })
    }
}
