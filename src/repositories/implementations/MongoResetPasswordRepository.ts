import User from '../../database/models/User'
import { IResetPasswordRepositories } from '../IResetPassworRepositories'

export class MongoResetPasswordRepository implements IResetPasswordRepositories {
  public async findEmail (email: string): Promise<Object> {
    return await User.findOne({ email }).select('name +passwordResetToken passwordResetExpires')
  }

  public async findUpdatePassword (email: string, password: string): Promise<Object> {
    return await User.findOneAndUpdate({ email }, { password })
  }
}
