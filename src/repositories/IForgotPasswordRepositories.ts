export interface IForgotPasswordRepositories {
    findEmail: (email) => Promise<any>
    findAndUpdatePassword: (id: string, passwordResetToken: string, passwordResetExpires: Date) => Promise<Object>
}
