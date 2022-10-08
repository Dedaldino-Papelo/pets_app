/* import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IPost{
    image: string,
    pet: string
    description: string,
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IPost>({
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

export const User = model<IUser>('User', userSchema) */