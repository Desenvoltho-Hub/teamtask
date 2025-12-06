import { type Request, type Response } from "express";
import { createUser } from "../services/userServices.js";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import type { UserType } from "../utils/type.js";

//!<userRegister>
export const userRegister = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = await createUser(data);
    const payload = env.JWT_SECRET;
    if (!payload) throw new Error("Jwt não definido");
    const token = jwt.sign({ id: user.id }, payload, { expiresIn: "1d" });
    return res
      .status(201)
      .cookie("authCookie", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .json({ message: "Usuário criado com sucesso!" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
