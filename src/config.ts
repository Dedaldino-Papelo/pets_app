import mongoose from 'mongoose'

export class mongoDB {
    connect() {
        mongoose.connect('mongodb://localhost:27017/pets_app').then(() => {
            console.log("Connected")
        }).catch((error) => {
            console.log(error)
        })
    }
}