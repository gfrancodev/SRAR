import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IMiddleware } from '../IMiddleware'

export class Middleware implements IMiddleware {
  public notFound (_request:Request, response: Response, _next: NextFunction) {
    return response.status(404).json({ error: 'Not Found' })
  }

  public bearer (request:Request, response:Response, next:NextFunction): Response | void {
    const authHeader = request.headers.authorization

    if (!authHeader) return response.status(401).json({ message: 'No token provided' })

    const parts = authHeader.split(' ')

    if (parts.length !== 2) return response.status(401).json({ message: 'Token error' })

    const [scheme, token] = parts

    if (!/Bearer$/i.test(scheme)) return response.status(401).json({ message: 'Token badformated' })

    jwt.verify(token, process.env.SECRET, (err: any, decoded:any): void | Response => {
      if (err) return response.status(401).json({ statusCode: 401, message: 'Token invalid.' })

      request.params.userId = decoded._id

      return next()
    })
  }
}
