import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'
import { MongoCreateUserRepository } from '../../repositories/implementations/MongoCreateUserRepository'

const createUserRespository = new MongoCreateUserRepository()

const createUserUseCase = new CreateUserUseCase(
  createUserRespository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
