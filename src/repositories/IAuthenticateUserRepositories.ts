import { ObjectId } from 'mongoose'

export interface IUserResponse {
  _id: ObjectId
  password: string
}

export interface IAuthenticateUserCaseRepository {
    findEmail: (email) => Promise<Object>
    comparePassword: (email) => Promise<IUserResponse>
}
