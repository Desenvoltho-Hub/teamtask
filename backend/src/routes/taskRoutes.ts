import express from 'express'
import { verifyAuth } from '../middlewares/verifyAuth.js'
import { criarTask, getTask, nomeDaEquipe, prazoInteligente, taskUser } from '../controllers/taskControllers.js'
//! Criar task

const router = express.Router()
router.post('/addtask', verifyAuth, criarTask)
router.get('/task', verifyAuth, getTask)
router.patch('/:id/:id', verifyAuth, taskUser)
router.get('/prazo/:data', verifyAuth, prazoInteligente)
router.get('/equipe/:equipe', verifyAuth, nomeDaEquipe)
router.put('/designar/:id', verifyAuth)
export default router