export interface IResetPasswordRepositories {
    findResetData(email: string): Promise<Object>
    findEmail(email: string): Promise<Object>
    findUpdatePassword(email: string, password: string): Promise<Object>
}