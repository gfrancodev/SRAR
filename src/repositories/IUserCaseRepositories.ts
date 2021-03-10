export interface IUserCaseRepostiores{
    findEmail(email: string): Promise<Object>
    findUsername(username: string): Promise<Object>
    save(user: Object): Promise<Object>
}