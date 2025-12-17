import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth.js";
import { criarFuncao } from "../controllers/funcaoControllers.js";

const router = express.Router()
router.post('/:task/:user', verifyAuth, criarFuncao)
export default router;
