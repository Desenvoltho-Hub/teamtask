import type { UserType } from "../utils/type.js";
import bcrypt, { genSalt } from 'bcrypt'
export const hashPass = async (password: string) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password, salt)
        return hashPass
    } catch(err) {
        throw err
    }
}