import mongoose from 'mongoose'

export class mongoDB {
    connect() {
        //mongodb://localhost:27017/pets_app
        mongoose.connect('mongodb://admin:dev@mobile.com@mongodb:27017/petsApp').then(() => {
            console.log("Connected")
        }).catch((error) => {
            console.log(error)
        })
    }
}