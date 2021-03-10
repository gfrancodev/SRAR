import User from '../../entities/User';
import { IForgotPasswordRepositories } from '@repositories/IForgotPasswordRepositories'

export class MongooForgotPasswordRespository implements IForgotPasswordRepositories {
    public async findEmail(email: string): Promise<Object> {
        const user = await User.findOne({ email })

        return user
    }

    public async findAndUpdate(id: string, passwordResetToken: string, passwordResetExpires: Date): Promise<Object> {
        const user = await User.findByIdAndUpdate(id, { passwordResetToken, passwordResetExpires })

        return user
    }
}
