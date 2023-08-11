import { Schema, model, Types } from 'mongoose';

interface IPost {
    name: string,
    image: string,
    description?: string,
    user: Types.ObjectId
}

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