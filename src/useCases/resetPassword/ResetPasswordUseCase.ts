import { ResetPassworRequestDTO } from './ResetPasswordDTO'
import { IResetPasswordRepositories } from '../../repositories/IResetPassworRepositories'
import { ForbiddenError, UnauthorizedError } from '../../errors'
import bcrypt from 'bcrypt'

export class ResetPassworUseCase {
  constructor (
        private readonly IResetPasswordRepositories: IResetPasswordRepositories
  ) {}

  public async execute (data: ResetPassworRequestDTO): Promise<Object> {
    const userResetPassword: any = await this.IResetPasswordRepositories.findEmail(data.email)

    if (!userResetPassword) throw new ForbiddenError('email is incorrect')

    if (data.token !== userResetPassword.passwordResetToken) throw new UnauthorizedError('Token invalid.')

    if (new Date() > new Date(userResetPassword.passwordResetExpires)) { throw new UnauthorizedError('Token is expired.') }

    await this.IResetPasswordRepositories.findUpdatePassword(data.email, await bcrypt.hash(data.password, 10))

    return { success: 'reset password with success' }
  }
}
