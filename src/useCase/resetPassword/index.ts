import { ResetPasswordRepository } from "../../repositories/implementations/ResetPasswordRepository";
import { ResetPasswordController } from "./ResetPasswordController";
import { ResetPassworUseCase } from "./ResetPasswordUseCase";

const mongooResetPasswordRepository = new ResetPasswordRepository();

const resetPasswordUseCase = new ResetPassworUseCase(
    mongooResetPasswordRepository
);

const resetPasswordController = new ResetPasswordController(
    resetPasswordUseCase
);

export { resetPasswordUseCase, resetPasswordController }
