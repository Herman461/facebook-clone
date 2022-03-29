import * as service from '../services/user-auth.service.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const accessTokenSecret = 'superSecretToken'
const refreshedToken = 'refreshedToken'

export async function signup(req, res) {
    try {
        const result = await service.signup(req.body)
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
}

export async function login(req, res) {
    const { password, email } = req.body

    if (!password) {
        res.sendStatus(400)
    }

    const user = await service.login(email)
    console.log(user)
    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if (isCorrectPassword) {
        const accessToken = await jwt.sign({
            id: user._id,
            iat: Math.floor(Date.now() / 1000) },
            accessTokenSecret, { expiresIn: '1h' })

        res.json({
            accessToken
        })
    } else {
        res.send('Email or password is incorrect')
    }
}
export async function getAll(req, res) {
    const result = await service.getAll()
    res.json(result)
}

export async function getOne(req, res) {
    const authHeader = req.headers.authorization

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        const isCorrectToken = await jwt.verify(token, accessTokenSecret)

        req.user = user
        res.json(user)
    }
}

