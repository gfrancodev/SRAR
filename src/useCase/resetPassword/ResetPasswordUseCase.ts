import { ResetPassworRequestDTO } from "./ResetPasswordDTO";
import { IResetPasswordRepositories } from '../../repositories/IResetPassworRepositories';
import bcrypt from 'bcrypt';

export class ResetPassworUseCase {
    constructor(
        private IResetPasswordRepositories: IResetPasswordRepositories
    ){}

    public async execute(data: ResetPassworRequestDTO): Promise<Object>{
        const userResetPassword: any = await this.IResetPasswordRepositories.findResetData(data.email)

        if (!userResetPassword)
            throw new Error('Unregistered email.')

        if (data.token != userResetPassword.passwordResetToken)
            throw new Error('Token invalid.')

        const now: Date = new Date;

        if (now > userResetPassword.passwordResetExpires)
            throw new Error('Token invalid.')

        const user: any = await this.IResetPasswordRepositories.findEmail(data.email)

        await this.IResetPasswordRepositories.findUpdatePassword(data.email, await bcrypt.hash(data.password, 10))

        return { success: 'reset password with success' }
    }
}
