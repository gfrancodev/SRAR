import { IAuthenticateUserCaseRepository, IUserResponse } from '../IAuthenticateUserRepositories'

import User from '../../database/models/User'

export class MongoAuthenticateRepository implements IAuthenticateUserCaseRepository {
  public async findEmail (email: string): Promise<Object> {
    return await User.findOne({ email }).select('email')
  }

  public async comparePassword (email: string): Promise<IUserResponse> {
    return await User.findOne({ email }).select('_id password')
  }
}
