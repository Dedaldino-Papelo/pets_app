import { Schema, model, connect } from 'mongoose';

interface IUser {
    username: string,
    email: string,
    password: string
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = model<IUser>('User', userSchema)