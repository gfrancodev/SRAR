import User from '../../entities/Implementations/User';

import { IResetPasswordRepositories } from "@repositories/IResetPassworRepositories";

export class ResetPasswordRepository implements IResetPasswordRepositories {

    public async findEmail(email: string): Promise<Object> {
        return await User.findOne({ email }).select('name +passwordResetToken passwordResetExpires');
    }

    public async findUpdatePassword(email: string, password: string): Promise<Object> {
      return await User.findOneAndUpdate({ email },{ password })
    }
}
