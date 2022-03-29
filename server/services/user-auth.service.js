import bcrypt from "bcrypt";

import * as model from "../models/user-auth.model.js";

export async function signup(data) {
    const password = data.password

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    return await model.signup({...data, password: hashedPassword})
}

export async function login(email) {
    return await model.login(email)
}

export async function getAll() {
    return await model.getAll()
}
