import { GenerateJWT } from "./../../providers/implementations/GerenerateJWT";
import { MongooAuthenticateRepository } from "../../repositories/implementations/MongooAuthenticateRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserController } from './AuthenticateUserController'

const generateJWT = new GenerateJWT();
const mongooAuthenticateRepository = new MongooAuthenticateRepository();

const  authenticateUserUseCase = new AuthenticateUserUseCase(
    mongooAuthenticateRepository,
    generateJWT,
)

const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
)

export { authenticateUserUseCase , authenticateUserController }
