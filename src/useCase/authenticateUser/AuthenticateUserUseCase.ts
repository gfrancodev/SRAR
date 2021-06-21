import { IAuthenticateUserCaseRepository } from "@repositories/IAuthenticateUserRepositories";

import { AuthenticadeUserDTO } from '@usecase/authenticateUser/AuthenticateUserDTO';

import { IGenerateToken } from "../../providers/IGenerateJWTProvider";

import bcrypt from 'bcrypt';
import { ForbiddenError } from "src/errors";

export class AuthenticateUserUseCase {
    constructor(
        private AuthenticateUserRepository: IAuthenticateUserCaseRepository,
        private IGenerateToken: IGenerateToken
    ){}

    public async execute(data: AuthenticadeUserDTO): Promise<Object | Error>{
      
        await this.AuthenticateUserRepository.findEmail(data.email)

        const { _id, password } = await this.AuthenticateUserRepository.comparePassword(data.email)

       if (!await bcrypt.compare(data.password, password))
            throw new ForbiddenError('Invalid password');

        const token = await this.IGenerateToken.generateToken({ _id })

        return { token }
    }
}
