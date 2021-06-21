import { Request, Response } from 'express';
import { ForbiddenError } from 'src/errors';
import { EmailValidator } from 'src/validations/EmailValidator';
import { IsCreatingUserValid }  from 'src/validations/IsCreateingUserValid';
import { MinLengthAttributeValidator } from 'src/validations/MinLengthAttributeValidator';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';

export class CreateUserController {
    constructor(
        private CreateUserCase: CreateUserUseCase
    ) {}

    @IsCreatingUserValid()
    @MinLengthAttributeValidator(3)
    @EmailValidator()

    public async handle(request: Request, response: Response): Promise<Response> {
       try {
           await this.CreateUserCase.execute(request.body)

           return response.status(201).json()
       } catch (error) {
         if (error instanceof ForbiddenError) {
            return response.status(403).json({ error: error.message })
         }

         return response.status(500).json({ error: error.message })
       }
    }
}
