import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth.js";
import { criarFuncao, getFuncao, removerFuncao } from "../controllers/funcaoControllers.js";

const router = express.Router()
router.post('/:task/:user', verifyAuth, criarFuncao)
router.get('/funcao/:id', verifyAuth, getFuncao)
router.delete('/deletar/:id', verifyAuth, removerFuncao)
export default router;
