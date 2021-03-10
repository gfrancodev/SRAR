export interface AuthenticateUserCaseRepository {
    findEmail(email): Promise<Object>
    findUsername(username): Promise<Object>
    comparePassword(email): Promise<string>
    findUser(data): Promise<Object>
}