import { IUserCaseRepostiores } from '../IUserCaseRepositories'

import User from '../../entities/User';

export class MongooUsersRepository implements IUserCaseRepostiores {

    public async findEmail(email: string): Promise<Object> {
        const user: any = await User.findOne({ email });

        return user;
    }

    public async findUsername(username: string): Promise<Object> {
        const user: any = await User.findOne({ username });

        return user;
    }

    public async save(data: Object): Promise<Object> {
       const user = await User.create(data);
        return user;
    }
}
