import { GenerateJWT } from "./../../providers/implementations/GerenerateJWT";
import { AuthenticateRepository } from "../../repositories/implementations/AuthenticateRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserController } from './AuthenticateUserController'

const generateJWT = new GenerateJWT();
const mongooAuthenticateRepository = new AuthenticateRepository();

const  authenticateUserUseCase = new AuthenticateUserUseCase(
    mongooAuthenticateRepository,
    generateJWT,
)

const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
)

export { authenticateUserUseCase , authenticateUserController }
