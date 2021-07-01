import { IAuthenticateUserCaseRepository } from '../../repositories/IAuthenticateUserRepositories'
import { AuthenticadeUserDTO } from './AuthenticateUserDTO'
import { IGenerateToken } from '../../providers/IGenerateJWTProvider'
import { ForbiddenError } from '../../errors'
import bcrypt from 'bcrypt'

export class AuthenticateUserUseCase {
  constructor (
        private readonly AuthenticateUserRepository: IAuthenticateUserCaseRepository,
        private readonly IGenerateToken: IGenerateToken
  ) {}

  public async execute (data: AuthenticadeUserDTO): Promise<Object | Error> {
    if (!await this.AuthenticateUserRepository.findEmail(data.email)) {
      throw new ForbiddenError('Unregistered e-mail')
    }

    const { _id, password } = await this.AuthenticateUserRepository.comparePassword(data.email)

    if (!await bcrypt.compare(data.password, password)) { throw new ForbiddenError('Incorrect password') }

    return this.IGenerateToken.generateToken({ _id })
  }
}
