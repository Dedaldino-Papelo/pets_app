import { Request, Response } from "express";
import { Post } from "../Models/Post";
import { Comment } from '../Models/Comment';

export class CommentController{
    async create(req:Request, res:Response){
        const {text} = req.body
        const {id} = req.params

        try {
            const post = await Post.findById(id)

            if(!post){
                return res.status(400).json({message: "post not found"})
            }

            const comment = await Comment.create({
                text,
                user: req.user._id,
                post
            })

            return res.status(200).json(comment)

        } catch (error) {

            return res.status(500).json({message: 'internal server error'})

        }
    }

    async Show(req:Request, res:Response){

        const showComments = await Comment.find({}).populate('user').exec()

        if(!showComments){

            return res.status(400).json({message: 'no comments'})
        }

        return res.status(200).json(showComments)
    }
}

