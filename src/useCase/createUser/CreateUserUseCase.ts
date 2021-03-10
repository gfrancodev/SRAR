import { IUserCaseRepostiores } from "@repositories/IUserCaseRepositories";
import { CreateUseRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private IUserCaseRepostiories: IUserCaseRepostiores
    ){}

    public async execute(data: CreateUseRequestDTO) {
        const emailAlreadyExist = await this.IUserCaseRepostiories.findEmail(data.email);

        if (emailAlreadyExist)
            throw new Error('Email already exists.');


        const usernameAlreadyExist = await this.IUserCaseRepostiories.findUsername(data.username);

        if (usernameAlreadyExist)
            throw new Error('Username already exists.');

        await this.IUserCaseRepostiories.save(data);
    }
}
