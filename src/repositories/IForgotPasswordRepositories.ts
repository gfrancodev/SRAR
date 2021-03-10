export interface IForgotPasswordRepositories {
    findEmail(email): Promise<Object>
    findAndUpdate(id: string, passwordResetToken: string, passwordResetExpires: Date): Promise<Object>
}