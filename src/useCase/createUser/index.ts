import { CreateUserController } from "./CreateUserController";

import { CreateUserUseCase } from "./CreateUserUseCase";

import { MongooUsersRepository } from '../../repositories/implementations/MongooUsersRepository'

const mongooUsersRespository = new MongooUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    mongooUsersRespository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }
