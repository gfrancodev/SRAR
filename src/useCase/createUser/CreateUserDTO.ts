import { Document } from 'mongoose'

export interface CreateUseRequestDTO extends Document {
    name: string,
    lastname: string,
    username: string,
    email: string,
    password: string
}