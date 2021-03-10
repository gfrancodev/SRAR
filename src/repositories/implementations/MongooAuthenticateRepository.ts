import { AuthenticateUserCaseRepository } from '@repositories/IAuthenticateUserRepositories';

import User from '../../entities/User';

export class MongooAuthenticateRepository implements AuthenticateUserCaseRepository {

    public async findEmail(email: string): Promise<Object> {
        const emailAlreadyExist = await User.findOne({ email });

        return emailAlreadyExist
    }

    public async findUsername(username: string): Promise<Object> {
        const usernameAlreadyExist = await User.findOne({ username });

        return usernameAlreadyExist
    }

    public async comparePassword(email: string): Promise<string> {
        const user = await User.findOne({ email }).select('+password')

        return user.password
    }

    public async findUser(login: string): Promise<Object> {
        const user = await User.findOne({ username: login })

        return user
    }
}
