import dotenv from 'dotenv'
dotenv.config()
export const env = {

    ORIGIN: process.env.ORIGIN,
    PORT: process.env.PORT,
    MGDB: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET

}