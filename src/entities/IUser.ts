import { Document, ObjectId } from "mongoose";

export interface IUser extends Document {
  _id: ObjectId
  name: string
  lastname: string
  username: string
  email: string
  password: string
}
