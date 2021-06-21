import User from '../../entities/Implementations/User';
import { IForgotPasswordRepositories } from '@repositories/IForgotPasswordRepositories'

export class ForgotPasswordRespository implements IForgotPasswordRepositories {
    public async findEmail(email: string): Promise<Object> {
        return await User.findOne({ email })
    }

    public async findAndUpdate(id: string, passwordResetToken: string, passwordResetExpires: Date): Promise<Object> {
        return await User.findByIdAndUpdate(id, { passwordResetToken, passwordResetExpires })
    }
}
