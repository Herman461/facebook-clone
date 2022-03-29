import express from 'express'
import bcrypt from 'bcrypt'
import authRouter from './routers/authRouter.js'

import mongoose from 'mongoose'

const MONGO_HOSTNAME = '127.0.0.1'
const MONGO_PORT = '27017'
const MONGO_DATABASE = 'facebook-clone'

const app = express()
const PORT = 8000


app.use(express.json())
app.use('/api', authRouter)

async function startApp() {
    try {
        await mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DATABASE}`)
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()

// app.post('/api/register', async (req, res) => {
//     try {
//         const {email, password} = req.body
//
//         const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(password, salt)
//
//         const user = await RegisteredUser.create({email, password: hashedPassword})
//
//         res.json(user)
//     } catch (e) {
//         res.status(500).json(e)
//     }
// })
