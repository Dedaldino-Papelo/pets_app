import express from 'express'
import router from './routes'
import * as dotenv from 'dotenv'
import { mongoDB } from './config'
dotenv.config()
const app = express()

const mongo = new mongoDB()
mongo.connect()

app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})