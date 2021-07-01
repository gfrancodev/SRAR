import { MongoResetPasswordRepository } from '../../repositories/implementations/MongoResetPasswordRepository'
import { ResetPasswordController } from './ResetPasswordController'
import { ResetPassworUseCase } from './ResetPasswordUseCase'

const resetPasswordRepository = new MongoResetPasswordRepository()

const resetPasswordUseCase = new ResetPassworUseCase(
  resetPasswordRepository
)

const resetPasswordController = new ResetPasswordController(
  resetPasswordUseCase
)

export { resetPasswordUseCase, resetPasswordController }
