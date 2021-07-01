import { Request, Response } from 'express'
import { IsPasswordValid, IsRequestArgumentsValid } from 'src/validations'
import { IsEmailValid } from '../../validations/IsEmailValid'
import { IsMinLengthAttributeValid } from '../../validations/IsMinLengthAttributeValid'

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  constructor (
        private readonly AuthenticateUserUseCase: AuthenticateUserUseCase
  ) {}

    @IsMinLengthAttributeValid(3)
    @IsRequestArgumentsValid(['email', 'password'])
    @IsEmailValid()
    @IsPasswordValid()

  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const token = await this.AuthenticateUserUseCase.execute(request.body)

      return response.status(200).json({ token })
    } catch (error) {
      if (error.name === 'ForbiddenError') {
        return response.status(403).json({ error: error.message })
      }

      return response.status(500).json({ error: 'Unexpected error' })
    }
  }
}
