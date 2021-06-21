import { Request, Response } from 'express';
import { ForbiddenError, UnauthorizedError, RequestTimeoutError } from 'src/errors';

import { ResetPassworUseCase } from "./ResetPasswordUseCase";

export class ResetPasswordController {
    constructor(
        private ResetPasswordUseCase: ResetPassworUseCase
    ){}

    public async handle(request: Request, response: Response): Promise<Response> {
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

            if (error instanceof RequestTimeoutError) {
              return response.status(408).json({ error: error.message })
            }

            return response.status(400).json({})
        }
    }
}
