export interface ICreateUserRepostiores {
    findUsername: (email: string) => Promise<Object>
    findEmail: (email: string) => Promise<Object>
    save: (user: Object) => Promise<any>
}
