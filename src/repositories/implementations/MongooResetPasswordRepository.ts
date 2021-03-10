import User from '../../entities/User';

import { IResetPasswordRepositories } from "@repositories/IResetPassworRepositories";

export class MongooResetPasswordRepository implements IResetPasswordRepositories {
    public async findResetData(email: string): Promise<Object> {
        const user: any = await User.findOne({ email }).select('+passwordResetToken passwordResetExpires');

        return user
    }

    public async findEmail(email: string): Promise<Object> {
        const user: any = await User.findOne({ email });

        return user
    }


    public async findUpdatePassword(email: string, password: string): Promise<Object> {
        const user: any = await User.findOneAndUpdate({ email },{$set:{password}}, {new: true}, (err, doc) => {
            if (err)
                throw new Error(err)
        })

        return user
    }
}
