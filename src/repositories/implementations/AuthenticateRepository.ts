import { IAuthenticateUserCaseRepository, IUserResponse } from '@repositories/IAuthenticateUserRepositories';

import User from '../../entities/Implementations/User';

export class AuthenticateRepository implements IAuthenticateUserCaseRepository {
    public async findEmail(email: string): Promise<Object> {
        return await User.findOne({ email })
    }

    public async comparePassword(email: string): Promise<IUserResponse> {
        return await User.findOne({ email }).select('_id password')
    }
}
