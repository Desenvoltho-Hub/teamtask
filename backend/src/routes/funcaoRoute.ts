import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth.js";
import { criarFuncao, getFuncao } from "../controllers/funcaoControllers.js";

const router = express.Router()
router.post('/:task/:user', verifyAuth, criarFuncao)
router.get('/funcao/:id', verifyAuth, getFuncao)
export default router;
