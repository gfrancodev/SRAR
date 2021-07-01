import jwt from 'jsonwebtoken'
import { IGenerateToken } from '../IGenerateJWTProvider'

export class GenerateJWT implements IGenerateToken {
  public generateToken (params: Object): string {
    return jwt.sign(params, process.env.SECRET, {
      expiresIn: 86400
    })
  }
}
