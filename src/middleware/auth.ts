import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../Models/User'

type JwtPayload = {
	id: number
}

const protect = async(req: Request,res: Response,next: NextFunction) => {
    const {authorization} = req.headers
    let token

    if(!authorization){
        return res.status(400).send({message: 'Not Authorized'})
    }

    try {
        token = authorization.split(" ")[1]
    
        const { id } = jwt.verify(token, process.env.JWT_TOKEN as string) as JwtPayload
    
        const user = await User.findOne({id})
    
        if(!user){
            return res.status(400).send({message: 'Not Authorized'})
        }
            req.user = user
            next()
        
    } catch (error) {
        return res.status(400).send({message: 'token failed'})
    }

    !token ? res.status(401).send("No token"): ''
}

export default protect