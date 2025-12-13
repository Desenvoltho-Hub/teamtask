import express from 'express'


import { userGet, userRegister } from '../controllers/userControllers.js'
import { verifyAuth } from '../middlewares/verifyAuth.js'

const router = express.Router()

router.post('/register', userRegister)
router.get('/me', verifyAuth, userGet)


export default router