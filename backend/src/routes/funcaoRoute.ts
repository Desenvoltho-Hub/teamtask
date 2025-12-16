import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth.js";

const router = express.Router()
router.post('/:id/:id', verifyAuth)
export default router;
