import express from 'express'
import dotenv from 'dotenv'
import router from './routes'
import { mongoDB } from './config'
import cors from 'cors'

dotenv.config()

const app = express()

const mongo = new mongoDB()
mongo.connect()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})