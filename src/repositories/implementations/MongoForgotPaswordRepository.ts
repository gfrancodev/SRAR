import User from '../../database/models/User'
import { IForgotPasswordRepositories } from '../IForgotPasswordRepositories'

export class MongoForgotPasswordRespository implements IForgotPasswordRepositories {
  public async findEmail (email: string): Promise<any> {
    return await User.findOne({ email })
  }

  public async findAndUpdatePassword (id: string, passwordResetToken: string, passwordResetExpires: Date): Promise<Object> {
    return await User.findByIdAndUpdate(id, { passwordResetToken, passwordResetExpires })
  }
}
