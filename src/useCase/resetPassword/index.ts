import { MongooResetPasswordRepository } from "../../repositories/implementations/MongooResetPasswordRepository";
import { ResetPasswordController } from "./ResetPasswordController";
import { ResetPassworUseCase } from "./ResetPasswordUseCase";

const mongooResetPasswordRepository = new MongooResetPasswordRepository();

const resetPasswordUseCase = new ResetPassworUseCase(
    mongooResetPasswordRepository
);

const resetPasswordController = new ResetPasswordController(
    resetPasswordUseCase
);

export { resetPasswordUseCase, resetPasswordController }
