import { Request, Response } from 'express'
import {
  IsEmailValid,
  IsRequestArgumentsValid,
  IsMinLengthAttributeValid,
  IsPasswordValid
} from '../../validations'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor (
        private readonly CreateUserCase: CreateUserUseCase
  ) {}

    @IsMinLengthAttributeValid(3)
    @IsRequestArgumentsValid(['name', 'lastname', 'username', 'email', 'password'])
    @IsEmailValid()
    @IsPasswordValid()

  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.CreateUserCase.execute(request.body)

      return response.status(201).json(user)
    } catch (error) {
      if (error.name === 'ForbiddenError') {
        return response.status(403).json({ error: error.message })
      }

      return response.status(500).json({ error: 'Unexpected error' })
    }
  }
}
