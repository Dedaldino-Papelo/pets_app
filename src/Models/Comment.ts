import { Schema, model, Types } from 'mongoose';

interface IComment {
    text: string;
    user: Types.ObjectId;
    post: Types.ObjectId;
  }

  const commentSchema = new Schema<IComment>({
    text: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
  });

  export const Comment = model<IComment>('Comment', commentSchema);