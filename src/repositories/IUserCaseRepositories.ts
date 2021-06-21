export interface ICreateUserRepostiores{
    findEmail(email: string): Promise<Object>
    save(user: Object): Promise<Object>
}
