import { Request, Response } from 'express'
import { IsEmailValid, IsMinLengthAttributeValid, IsRequestArgumentsValid } from '../../validations'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'

export class ForgotPassworController {
  constructor (
        private readonly ForgotPasswordUseCase: ForgotPasswordUseCase
  ) {}

    @IsMinLengthAttributeValid(3)
    @IsRequestArgumentsValid(['email'])
    @IsEmailValid()

  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const requestToken: Object = await this.ForgotPasswordUseCase.execute(request.body)

      return response.status(200).json(requestToken)
    } catch (error) {
      if (error.name === 'UnauthorizedError') {
        return response.status(401).json({ error: error.message })
      }

      if (error.name === 'ForbiddenError') {
        return response.status(403).json({ error: error.message })
      }

      return response.status(500).json({ error: 'Unexpected error.' + error.message })
    }
  }
}
