import { AuthenticateUserCaseRepository } from "@repositories/IAuthenticateUserRepositories";

import { AuthenticadeUserDTO } from '@usecase/authenticateUser/AuthenticateUserDTO';

import { IGenerateToken } from "../../providers/IGenerateJWTProvider";

import bcrypt from 'bcrypt';

export class AuthenticateUserUseCase {
    constructor(
        private AuthenticateUserRepository: AuthenticateUserCaseRepository,
        private IGenerateToken: IGenerateToken
    ){}

    public async execute(data: AuthenticadeUserDTO): Promise<any>{
        if (data.email) {
            const emailAlreadyExist = this.AuthenticateUserRepository.findEmail(data.email)

            if (!emailAlreadyExist)
                throw new Error('Unregistered email.')
        }

        if (data.username) {
            const usernameAlreadyExist = this.AuthenticateUserRepository.findUsername(data.username)

            if (!usernameAlreadyExist)
                throw new Error('Unregistered username.')
        }

        const user:any = await this.AuthenticateUserRepository.findUsername(data.username) || await this.AuthenticateUserRepository.findEmail(data.email)

       if (!await bcrypt.compare(data.password, await this.AuthenticateUserRepository.comparePassword(user.email)))
            throw new Error('Invalid password');

        const token = await this.IGenerateToken.generateToken({ _id: user._id })

        return { user, token }
    }
}
