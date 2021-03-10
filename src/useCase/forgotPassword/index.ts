import { MongooForgotPasswordRespository } from "../../repositories/implementations/MongooForgotPaswordRepository";
import { MailProvider } from "../../providers/implementations/MailProvider";
import { ForgotPassworController } from "./ForgotPasswordController";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

const mongooForgotPasswordRespository = new MongooForgotPasswordRespository();
const mailProvider = new MailProvider();

const forgotPasswordUseCase = new ForgotPasswordUseCase(
    mongooForgotPasswordRespository,
    mailProvider
);

const forgotPasswordController = new ForgotPassworController(
    forgotPasswordUseCase
);

export { forgotPasswordUseCase, forgotPasswordController }
