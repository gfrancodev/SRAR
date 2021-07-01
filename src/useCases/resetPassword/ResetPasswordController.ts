import { Request, Response } from 'express'
import { ForbiddenError, UnauthorizedError } from '../../errors'
import { ResetPassworUseCase } from './ResetPasswordUseCase'
import { IsEmailValid, IsMinLengthAttributeValid, IsPasswordValid, IsRequestArgumentsValid } from '../../validations'

export class ResetPasswordController {
  constructor (
        private readonly ResetPasswordUseCase: ResetPassworUseCase
  ) {}

    @IsMinLengthAttributeValid(3)
    @IsRequestArgumentsValid(['email', 'token', 'password'])
    @IsEmailValid()
    @IsPasswordValid()

  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const user: any = await this.ResetPasswordUseCase.execute(request.body)

      response.status(200).json({ success: user.success })
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        return response.status(401).json({ error: error.message })
      }

      if (error instanceof ForbiddenError) {
        return response.status(403).json({ error: error.message })
      }

      return response.status(500).json({ error: 'Unexpected error.' })
    }
  }
}
