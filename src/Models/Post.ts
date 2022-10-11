import { Schema, model, connect, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IPost{
    name: string,
    image: string,
    description?: string,
    user: Types.ObjectId
}

// 2. Create a Schema corresponding to the document interface.
const postSchema = new Schema<IPost>({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  
})

export const Post = model<IPost>('Post', postSchema)