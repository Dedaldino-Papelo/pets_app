import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser{
    username: string,
    email: string,
    password: string
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export const User = model<IUser>('User', userSchema)