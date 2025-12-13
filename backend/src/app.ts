import { connectDB } from './config/database.js'
import { env } from './config/env.js'
import {createServer} from './config/server.js'
import equipe from './routes/equipeRoutes.js'
import userRoute from './routes/userRoutes.js'
const app = createServer()
connectDB()
app.listen(env.PORT, () => {
    console.log(`Servidor rodando na porta ${env.PORT}`)
})
app.use('/user', userRoute)
app.use('/equipe', equipe)