import { NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import { IUser } from '../IUser';

const userSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false }
}, {
    timestamps: true
})

userSchema.pre<IUser>('save', async function(next: NextFunction): Promise<void> {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

export default model<IUser>('users', userSchema)


