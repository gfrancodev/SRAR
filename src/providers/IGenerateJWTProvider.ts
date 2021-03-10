export interface IParams {
    _id: IParams
}

export interface IGenerateJWTProviders {
    params: IParams 
}

export interface IGenerateToken {
    generateToken(params: IParams): Promise<string>
}