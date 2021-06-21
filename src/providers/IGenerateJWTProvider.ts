import { ObjectId } from "mongoose";

export interface IParams {
    _id: ObjectId
}

export interface IGenerateToken {
    generateToken(params: IParams): Promise<string>
}
