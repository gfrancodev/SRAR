import { ICreateUserRepostiores } from '../../repositories/ICreateUserRepostiores'
import { ForbiddenError } from '../../errors'
import { CreateUseRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor (
        private readonly CreateUserRepostiory: ICreateUserRepostiores
  ) {}

  public async execute (data: CreateUseRequestDTO) {

    if (await this.CreateUserRepostiory.findUsername(data.username)) throw new ForbiddenError('Username already registered')

    const user = await this.CreateUserRepostiory.findEmail(data.email)

    if (user) { throw new ForbiddenError('Email already registered') }

    await this.CreateUserRepostiory.save(data)

    return user
  }
}
