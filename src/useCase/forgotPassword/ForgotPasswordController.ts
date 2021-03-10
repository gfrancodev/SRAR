import { Request, Response} from 'express';
import { ForgotPasswordUseCase } from '../forgotPassword/ForgotPasswordUseCase';

export class ForgotPassworController {
    constructor (
        private ForgotPasswordUseCase: ForgotPasswordUseCase
    ){}

    public async handle(request: Request, response: Response): Promise<Response>{
        try {
           const requestToken: Object = await this.ForgotPasswordUseCase.execute(request.body)

           return response.status(200).json(requestToken)
        } catch (err) {
            return response.status(400).json({
                statusCode: 400,
                message: err.message || 'Error on forgot password, try again'
            })
        }
    }
}
