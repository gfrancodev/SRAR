import { Request, Response } from 'express';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';

export class CreateUserController {
    constructor(
        private CreateUserCase: CreateUserUseCase
    ) {}

    public async handle(request: Request, response: Response): Promise<Response> {
       try {
           const user = await this.CreateUserCase.execute(request.body)

           return response.status(201).json({ success: 'new registered user.' })
       } catch (err) {
           return response.status(400).json({
               statsCode: 400,
               message: err.message || 'Unexpected error.'
           })
       }
    }
}
