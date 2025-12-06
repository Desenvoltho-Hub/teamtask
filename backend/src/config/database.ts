import mongoose from "mongoose"
import { env } from "./env.js"

export const connectDB = () => {
    try {
        if(!env.MGDB) {
            return console.log('MGDB faltando!')

        }
        console.log('Conectado ao MONGODB ')
        mongoose.connect(env.MGDB)
    } catch(err) {
        console.log(err)
    }
}