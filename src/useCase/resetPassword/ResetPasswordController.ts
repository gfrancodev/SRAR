import { Request, Response } from 'express';

import { ResetPassworUseCase } from "./ResetPasswordUseCase";

export class ResetPasswordController {
    constructor(
        private ResetPasswordUseCase: ResetPassworUseCase
    ){}

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.ResetPasswordUseCase.execute(request.body)

            response.status(200).json(user)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Cannot reset password, try agai'
            })  
        }
    }
}