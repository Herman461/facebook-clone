import UserAuthSchema from "../schema/user-auth.schema.js";

export async function signup(data) {
    return await UserAuthSchema.create(data)
}

export async function getAll() {
    return await UserAuthSchema.find({})
}

export async function login(email) {
    return await UserAuthSchema.findOne({email})
}
