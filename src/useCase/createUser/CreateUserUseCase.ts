import { ICreateUserRepostiores } from "@repositories/IUserCaseRepositories";
import { ForbiddenError } from "src/errors";
import { CreateUseRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private CreateUserRepostiory: ICreateUserRepostiores
    ){}

    public async execute(data: CreateUseRequestDTO) {

        if (await this.CreateUserRepostiory.findEmail(data.email))
            throw new ForbiddenError('email is incorrect')

        return await this.CreateUserRepostiory.save(data)
    }
}
