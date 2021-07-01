import { GenerateJWT } from '../../providers/implementations/GerenerateJWT'
import { MongoAuthenticateRepository } from '../../repositories/implementations/MongoAuthenticateRepository'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'
import { AuthenticateUserController } from './AuthenticateUserController'

const generateJWT = new GenerateJWT()
const authenticateRepository = new MongoAuthenticateRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(
  authenticateRepository,
  generateJWT
)

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

export { authenticateUserUseCase, authenticateUserController }
