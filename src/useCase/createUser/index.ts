import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UsersRepository } from '../../repositories/implementations/CreateUserRepository'

const usersRespository = new UsersRepository()

const createUserUseCase = new CreateUserUseCase(
    usersRespository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }
