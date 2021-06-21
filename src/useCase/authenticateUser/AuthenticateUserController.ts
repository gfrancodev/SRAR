import { Request, Response } from 'express';
import { EmailValidator } from 'src/validations/EmailValidator';
import { MinLengthAttributeValidator } from 'src/validations/MinLengthAttributeValidator';

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    constructor(
        private AuthenticateUserUseCase: AuthenticateUserUseCase
    ){}

    @EmailValidator()
    @MinLengthAttributeValidator(3)
    
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user: Object = await this.AuthenticateUserUseCase.execute(request.body)

            return response.status(200).json(user)
        } catch (err) {
            return response.status(400).json({
                statusCode: 400,
                message: err.message || 'Unexpected error.'
            })
        }
     }
}
