import { MongoForgotPasswordRespository } from '../../repositories/implementations/MongoForgotPaswordRepository'
import { MailProvider } from '../../providers/implementations/MailProvider'
import { ForgotPassworController } from './ForgotPasswordController'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'

const forgotPasswordRespository = new MongoForgotPasswordRespository()
const mailProvider = new MailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  forgotPasswordRespository,
  mailProvider
)

const forgotPasswordController = new ForgotPassworController(
  forgotPasswordUseCase
)

export { forgotPasswordUseCase, forgotPasswordController }
