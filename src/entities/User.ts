import { NextFunction } from 'express';

import bcrypt from 'bcrypt';

import { model, Schema } from 'mongoose';

import { CreateUseRequestDTO } from '../useCase/createUser/CreateUserDTO';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        select: false
    }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.pre<CreateUseRequestDTO>('save', async function(next: NextFunction): Promise<void> {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
  
    next()
})

export default model<CreateUseRequestDTO>('users', userSchema)


