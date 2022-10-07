import { Request, Response } from "express";
import bycrpt from 'bcryptjs'
import { User } from "../Models/User";

export class UserController{
    async register(req:Request, res:Response){
        const {username, email, password} = req.body

        if(!username || !email || !password){
            return res.send({message: 'All fields are required'})
        }

        //Hash the password bcrypt
        const hash = bycrpt.hashSync(password)
    
        try {
            const emailExists = await User.findOne({email})

            if(emailExists){
                return res.status(400).send({message: 'email already exists'})
            }

            const user = await User.create({
                username, 
                email, 
                password:hash
            })
            return res.send(user)

        } catch (error) {
            return res.send(error)
        }
    }

    async login(req:Request, res:Response){
        const {email, password} = req.body

        const user = await User.findOne({email})

            if(!user){
                return res.status(400).send({message: 'User not found'})
            }

            const checkPassword = await bycrpt.compareSync(password, user.password) // true

            if(checkPassword){
                return res.json({
                    _id: user.id,
                    username: user.username,
                    email: user.password
                })
            }
            return res.status(400).send({message: 'Inavlid Password'})
            
    }
}