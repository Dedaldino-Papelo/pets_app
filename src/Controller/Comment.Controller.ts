import { Request, Response } from "express";
import { Post } from "../Models/Post";
import { Comment } from '../Models/Comment';

export class CommentController{
    async create(req:Request, res:Response){
        const {text} = req.body
        const {id} = req.params
        const user = req.user._id

        try {
            const post = await Post.findById(id)

            if(!post){
                return res.status(400).json({message: "post not found"})
            }

            const comment = await Comment.create({
                text,
                user,
                post
            })

            return res.status(200).json(comment)

        } catch (error) {

            return res.status(500).json({message: 'internal server error'})

        }
    }

    async Show(req:Request, res:Response){

        const showComments = await Comment.find({}).populate('user').exec()

        return res.status(200).json(showComments)
    }
}

