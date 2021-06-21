import { ResetPassworRequestDTO } from "./ResetPasswordDTO";
import { IResetPasswordRepositories } from '../../repositories/IResetPassworRepositories';
import bcrypt from 'bcrypt';
import { UnauthorizedError } from "src/errors/UnauthorizedError";
import { RequestTimeoutError } from "src/errors/RequestTimeoutError";
import { ForbiddenError } from "src/errors";

export class ResetPassworUseCase {
    constructor(
        private IResetPasswordRepositories: IResetPasswordRepositories
    ){}

    public async execute(data: ResetPassworRequestDTO): Promise<Object>{
        const userResetPassword: any = await this.IResetPasswordRepositories.findEmail(data.email)

        if (!userResetPassword)
            throw new ForbiddenError('email is incorrect')

        if (data.token != userResetPassword.passwordResetToken)
            throw new UnauthorizedError('Token invalid.')

        if (new Date().toISOString() > userResetPassword.passwordResetExpires)
            throw new RequestTimeoutError('Token is expired.')

        await this.IResetPasswordRepositories.findUpdatePassword(data.email, await bcrypt.hash(data.password, 10))

        return { success: 'reset password with success' }
    }
}
