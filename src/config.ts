import mongoose from 'mongoose'

export class mongoDB {
    connect() {
        mongoose.connect('mongodb://deda:mypwd@localhost:27017/pets').then(() => {
            console.log("Connected")
        }).catch((error) => {
            console.log(error)
        })
    }
}