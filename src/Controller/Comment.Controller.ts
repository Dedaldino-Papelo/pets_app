import { Request, Response } from "express";

export class CommentController{
    async create(req:Request, res:Response){
        const {text} = req.body
        const {id} = req.params
        console.log(text,id)

    }
}