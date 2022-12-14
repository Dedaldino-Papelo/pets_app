import { Request, Response } from "express";
import { Post } from "../Models/Post";
import { User } from "../Models/User";

export class PostController{
    async Create(req:Request, res: Response){
        const {name, image, description} = req.body
        const {userId} = req.params

        if(!(name || image)){
            return res.send({message: 'All fields are required'})
        }

        try {
            const user = await User.findById(userId)
            if(!user){
                return res.send({message:"User does not exists"})
            }

            const post = await Post.create({
                name,
                image,
                description,
                user
            })

            return res.status(200).json(post)

        } catch (error) {
            return res.status(500).json({message: 'internal server error'})
        }
    }

    async Show(req:Request, res: Response){

        const showPost = await Post.find({}).populate('user').exec()

        if(!showPost){
            return res.json({message: "There is no posts"})
        }

        return res.json(showPost)
    }

    async getPostById(req:Request, res: Response){
        const {id} = req.params

        const post = await Post.findById(id).populate('user').exec()
        
        if(!post){
            return res.status(400).json({message: "post does not exists"})
        }

        return res.status(200).json(post)
    }

    //Delete Post
    async delete(req:Request, res:Response){
        const {id} = req.params

        const findPost = await Post.findById(id)

        if(!findPost){
            return res.status(400).json({message: 'Post does not exists'})
        }
        await Post.deleteOne(findPost as any)
        return res.status(200).send({message: 'Post deleted'})
    }
}