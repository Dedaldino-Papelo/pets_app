import { Schema, model } from 'mongoose';

interface IComment {
    text: string;
    user: Schema.Types.ObjectId;
    post: Schema.Types.ObjectId;
  }

  const commentSchema = new Schema<IComment>({
    text: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
  });

  export const Comment = model<IComment>('Comment', commentSchema);