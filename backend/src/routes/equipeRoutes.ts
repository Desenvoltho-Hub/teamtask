import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth.js";
import { adicionarMembro, deletarEquipe, equipeCreate, getEquipesUsuario } from "../controllers/equipeControllers.js";
import { verifyCreator } from "../middlewares/verifyCreator.js";

const router = express.Router();
router.post("/criar", verifyAuth, equipeCreate);
router.get('/equipes', verifyAuth, getEquipesUsuario)
router.delete('/delete/:id', verifyAuth, verifyCreator, deletarEquipe)
router.put('/addmembro/:id', verifyAuth, verifyCreator, adicionarMembro)
export default router;
