export interface IResetPasswordRepositories {
    findEmail(email: string): Promise<Object>
    findUpdatePassword(email: string, password: string): Promise<Object>
}
