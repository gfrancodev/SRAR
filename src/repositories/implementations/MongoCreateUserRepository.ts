import { ICreateUserRepostiores } from '../ICreateUserRepostiores'

import User from '../../database/models/User'

export class MongoCreateUserRepository implements ICreateUserRepostiores {
  public async findUsername (username: string): Promise<Object> {
    return await User.findOne({ username })
  }

  public async findEmail (email: string): Promise<Object> {
    return await User.findOne({ email })
  }

  public async save (data: Object): Promise<Object> {
    return await User.create(data)
  }
}
