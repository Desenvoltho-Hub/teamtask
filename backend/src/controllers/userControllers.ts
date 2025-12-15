import { type Request, type Response } from "express";
import { createUser, login, userGetMe } from "../services/userServices.js";
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
//! User Get
export const userGet = async (req:Request, res: Response) => {
  try {
    const usuario = req.user
    const response = await userGetMe(usuario)
    
    res.status(200).json({response})
  } catch(err){
    res.status(400).json({message: "Usuário não encontrado"})
  }
}
//! userLogin

export const userLogin = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const response = await login(user)
    if(!env.JWT_SECRET) {
      return console.log('JWT não encontrado')
    }
    const token = jwt.sign({id: response?.id}, env.JWT_SECRET, {expiresIn: "1d"})
    res.status(200).cookie('authCookie', token, {maxAge: 20 * 60 * 60 * 1000, httpOnly: true, secure: false, sameSite: 'lax'}).json({message: "Login efetuado com sucesso!"})
  } catch(err) {
    res.status(400).json({message: 'Login não autorizado', err})
  }
}
