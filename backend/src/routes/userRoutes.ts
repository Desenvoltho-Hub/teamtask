import express from 'express'


import { userGet, userLogin, userRegister } from '../controllers/userControllers.js'
import { verifyAuth } from '../middlewares/verifyAuth.js'

const router = express.Router()

router.post('/register', userRegister)
router.get('/me', verifyAuth, userGet)
router.post('/login', userLogin)
router.put('/task/:id/:task', verifyAuth)

export default router