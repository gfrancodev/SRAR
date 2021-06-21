import { ICreateUserRepostiores } from '../IUserCaseRepositories'

import User from '../../entities/Implementations/User';

export class UsersRepository implements ICreateUserRepostiores {

    public async findEmail(email: string): Promise<Object> {
        return await User.findOne({ email });
    }

    public async save(data: Object): Promise<Object> {
        return await User.create(data);
    }
}
