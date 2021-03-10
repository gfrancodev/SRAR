import { IForgotPasswordRepositories } from "../../repositories/IForgotPasswordRepositories";
import { IMailProvider } from "../../providers/IMailProvider";
import { ForgotPassworRequestDTO } from "./ForgotPasswordDTO";
import crypto from 'crypto';

export class ForgotPasswordUseCase {
    constructor(
        private IForgotPasswordRepositories: IForgotPasswordRepositories,
        private IMailProvider: IMailProvider
    ){}

    public async execute(data: ForgotPassworRequestDTO): Promise<Object>{
        const emailAlreadyExist: any = await this.IForgotPasswordRepositories.findEmail(data.email)

        if (!emailAlreadyExist)
            throw new Error('Unregistered email.');

        const token: string = crypto.randomBytes(20).toString('hex');

        const now: Date = new Date();
        now.setHours(now.getHours() + 1);

        await this.IForgotPasswordRepositories.findAndUpdate(emailAlreadyExist._id, token, now)

        await this.IMailProvider.sendMail({
        to: {
                name: "Teste",
                address: "teste@teste.com.br"
            },
            from: {
                name: emailAlreadyExist.name,
                address: data.email
            },
            subject: `Esqueceu sua senha?`,
            body: `Seu token de recueração é ${token}`
        })


        return { success: 'Send token in your e-mail' }
    }
}
