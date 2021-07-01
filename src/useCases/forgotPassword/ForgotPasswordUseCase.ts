import { IForgotPasswordRepositories } from '../../repositories/IForgotPasswordRepositories'
import { IMailProvider } from '../../providers/IMailProvider'
import { ForgotPassworRequestDTO } from './ForgotPasswordDTO'
import crypto from 'crypto'
import { ForbiddenError } from '../../errors'

export class ForgotPasswordUseCase {
  constructor (
        private readonly IForgotPasswordRepositories: IForgotPasswordRepositories,
        private readonly IMailProvider: IMailProvider
  ) {}

  public async execute (data: ForgotPassworRequestDTO): Promise<Object> {
    const user = await this.IForgotPasswordRepositories.findEmail(data.email)

    if (user === null) throw new ForbiddenError('Unregistered email.')

    const token: string = crypto.randomBytes(20).toString('hex')

    const now: Date = new Date()
    now.setHours(now.getHours() + 1)

    await this.IForgotPasswordRepositories.findAndUpdatePassword(user._id, token, now)

    await this.IMailProvider.sendMail({
      to: {
        name: 'Teste',
        address: 'teste@teste.com.br'
      },
      from: {
        name: data.email,
        address: data.email
      },
      subject: 'Esqueceu sua senha? 🔐',
      body: `Seu token de recueração é ${token}`
    })

    return { success: 'Send token in your e-mail' }
  }
}
